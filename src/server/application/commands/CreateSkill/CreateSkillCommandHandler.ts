import {CommandHandler, EventBusPort, Result} from "@evyweb/simple-ddd-toolkit";
import {CreateSkillCommand} from "@/src/server/application/commands/CreateSkill/CreateSkillCommand";
import {SkillRepositoryPort} from "@/src/server/application/ports/SkillRepositoryPort";
import {IdentityProviderPort} from "@/src/server/application/ports/IdentityProviderPort";
import {Skill} from "@/src/server/domain/Skill";
import {SkillId} from "@/src/server/domain/SkillId";
import {SkillCreatedDomainEvent} from "@/src/server/domain/events/SkillCreatedDomainEvent";
import {SkillCreationFailedDomainEvent} from "@/src/server/domain/events/SkillCreationFailedDomainEvent";
import {CreateSkillResponse} from "@/src/server/application/commands/CreateSkill/CreateSkillResponse";

export class CreateSkillCommandHandler extends CommandHandler<CreateSkillCommand, CreateSkillResponse> {
    constructor(
        private readonly repository: SkillRepositoryPort,
        private readonly identityProvider: IdentityProviderPort,
        private readonly eventBus: EventBusPort
    ) {
        super();
    }

    async handle({label}: CreateSkillCommand): Promise<CreateSkillResponse> {
        const skillId = SkillId.createFrom(this.identityProvider.generateId());
        const skillCreation = Skill.fromRawData(skillId, label);

        if (skillCreation.isFail()) {
            const skillCreationFailedDomainEvent = new SkillCreationFailedDomainEvent({
                eventId: this.identityProvider.generateId(),
                label,
                errorMessage: skillCreation.getError().message
            });
            await this.eventBus.dispatchEvents([skillCreationFailedDomainEvent]);
            return Result.fail(skillCreation.getError());
        }

        const skill = skillCreation.getValue();
        const eventId = this.identityProvider.generateId();
        skill.addEvent(new SkillCreatedDomainEvent(eventId, skill.id()));

        await this.repository.save(skill);

        await this.eventBus.dispatchEvents(skill.getEvents());

        return Result.ok(skill.id());
    }
}