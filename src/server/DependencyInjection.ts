import {createContainer, InjectionTokens} from "@evyweb/ioctopus";
import {InMemorySkillRepository} from "@/src/server/infrastructure/InMemorySkillRepository";
import {SkillRepositoryPort} from "@/src/server/application/ports/SkillRepositoryPort";
import {IdentityProviderPort} from "@/src/server/application/ports/IdentityProviderPort";
import {UuidIdentityProvider} from "@/src/server/infrastructure/UuidIdentityProvider";
import {Bus, Command, CommandHandler, EventBus, EventBusPort, IEventHandler} from "@evyweb/simple-ddd-toolkit";
import {CreateSkillCommand} from "@/src/server/application/commands/CreateSkill/CreateSkillCommand";
import {
    CreateSkillCommandHandler
} from "@/src/server/application/commands/CreateSkill/CreateSkillCommandHandler";
import {SkillCreatedDomainEvent} from "@/src/server/domain/events/SkillCreatedDomainEvent";
import {
    OnCreateSkillSuccessEventHandler
} from "@/src/server/application/eventHandlers/OnCreateSkillSuccessEventHandler";

export const DI_SYMBOLS: InjectionTokens = {
    SKILL_REPOSITORY: 'SKILL_REPOSITORY',
    IDENTITY_PROVIDER: 'IDENTITY_PROVIDER',
    COMMAND_BUS: 'COMMAND_BUS',
    EVENT_BUS: 'EVENT_BUS',
    CREATE_SKILL_COMMAND_HANDLER: 'CREATE_SKILL_COMMAND_HANDLER',
    ON_CREATE_SKILL_SUCCESS_EVENT_HANDLER: 'ON_CREATE_SKILL_SUCCESS_EVENT_HANDLER',
    EVENT_LOGGER: 'EVENT_LOGGER',
}

type DI_RETURN_TYPES = {
    SKILL_REPOSITORY: SkillRepositoryPort,
    IDENTITY_PROVIDER: IdentityProviderPort,
    COMMAND_BUS: Bus<Command>,
    EVENT_BUS: EventBusPort,
    CREATE_SKILL_COMMAND_HANDLER: CommandHandler<CreateSkillCommand>,
    ON_CREATE_SKILL_SUCCESS_EVENT_HANDLER: IEventHandler<SkillCreatedDomainEvent>,
    EVENT_LOGGER: Console
}

const container = createContainer();
// We should use the postgres one, but didn't have the time to implement it
// container.bind('SkillRepository').toClass(PostgresSkillRepository);
container.bind(DI_SYMBOLS.SKILL_REPOSITORY).toClass(InMemorySkillRepository);
container.bind(DI_SYMBOLS.IDENTITY_PROVIDER).toClass(UuidIdentityProvider);
container.bind(DI_SYMBOLS.COMMAND_BUS).toFactory(() => new Bus<Command>());
container.bind(DI_SYMBOLS.EVENT_LOGGER).toValue(console);
container.bind(DI_SYMBOLS.EVENT_BUS).toClass(EventBus, [DI_SYMBOLS.EVENT_LOGGER]);

// Command Handlers
container.bind(DI_SYMBOLS.CREATE_SKILL_COMMAND_HANDLER).toClass(CreateSkillCommandHandler, [
    DI_SYMBOLS.SKILL_REPOSITORY,
    DI_SYMBOLS.IDENTITY_PROVIDER,
    DI_SYMBOLS.EVENT_BUS
]);

// Event Handlers
container.bind(DI_SYMBOLS.ON_CREATE_SKILL_SUCCESS_EVENT_HANDLER).toClass(OnCreateSkillSuccessEventHandler, [
    DI_SYMBOLS.COMMAND_BUS
]);

// Domain Events
container.get<EventBusPort>(DI_SYMBOLS.EVENT_BUS).on('SkillCreatedDomainEvent', () => container.get(DI_SYMBOLS.ON_CREATE_SKILL_SUCCESS_EVENT_HANDLER));

// Commands registration
container.get<Bus<Command>>(DI_SYMBOLS.COMMAND_BUS).register('CreateSkillCommandHandler', () => container.get<CommandHandler<CreateSkillCommand>>(DI_SYMBOLS.CREATE_SKILL_COMMAND_HANDLER));

export function inject<K extends keyof typeof DI_SYMBOLS>(
    symbol: K
): K extends keyof DI_RETURN_TYPES ? DI_RETURN_TYPES[K] : never {
    return container.get(DI_SYMBOLS[symbol]);
}

export {container};