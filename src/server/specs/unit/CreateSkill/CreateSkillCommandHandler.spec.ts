import {FakeIdentityProvider} from "@/src/server/specs/unit/fakes/FakeIdentityProvider";
import {CreateSkillCommand} from "@/src/server/application/commands/CreateSkill/CreateSkillCommand";
import {InMemorySkillRepository} from "@/src/server/infrastructure/InMemorySkillRepository";
import {
    CreateSkillCommandHandler
} from "@/src/server/application/commands/CreateSkill/CreateSkillCommandHandler";
import {mock, MockProxy} from "vitest-mock-extended";
import {EventBusPort} from "@evyweb/simple-ddd-toolkit";
import {SkillCreatedDomainEvent} from "@/src/server/domain/events/SkillCreatedDomainEvent";
import {SkillCreationFailedDomainEvent} from "@/src/server/domain/events/SkillCreationFailedDomainEvent";
import {SkillLabelTooShortError} from "@/src/server/domain/errors/SkillLabelTooShortError";
import {SkillNotFoundDomainError} from "@/src/server/domain/errors/SkillNotFoundDomainError";

// The command handler tests will use the in memory implementation of the repository and some fake implementations
// The goal here is to test the flow and all possible paths
// Normally in CQRS, commands don't return a value. But most of the people return le id when there is a creation for example
// So it avoid to retrieve again the data for nothing

describe('CreateSkillCommandHandler', () => {
    let commandHandler: CreateSkillCommandHandler;
    let eventBus: MockProxy<EventBusPort>;
    let repository: InMemorySkillRepository;

    beforeEach(() => {
        vi.setSystemTime(new Date('01/01/2025'));
        repository = new InMemorySkillRepository();
        eventBus = mock<EventBusPort>();
        const identityProvider = new FakeIdentityProvider();
        identityProvider.setNextValues(
            '00000000-0000-0000-0000-000000000001',
            '00000000-0000-0000-0000-000000000002',
        );

        commandHandler = new CreateSkillCommandHandler(repository, identityProvider, eventBus);
    });

    describe('When the skill is valid', () => {
        it('should save the new skill', async () => {
            // Arrange
            const label = 'XXX';
            const skillId = '00000000-0000-0000-0000-000000000001';
            const command = new CreateSkillCommand(label);

            // Act
            await commandHandler.handle(command);

            // Assert
            const skillFound = await repository.getById(skillId);
            const skill = skillFound.getValue();
            expect(skill.get('id').get('value')).toEqual(skillId);
            expect(skill.get('label').get('value')).toEqual(label);
        });

        it('should emit the "skill created event"', async () => {
            // Arrange
            const command = new CreateSkillCommand('NEW LABEL');

            // Act
            await commandHandler.handle(command);

            // Assert
            const skillId = '00000000-0000-0000-0000-000000000001';
            const eventId = '00000000-0000-0000-0000-000000000002';
            const expectedDomainEvent = new SkillCreatedDomainEvent(eventId, skillId);
            expect(eventBus.dispatchEvents).toHaveBeenCalledWith([expectedDomainEvent]);
        });

        it('should return the new skill id', async () => {
            // Arrange
            const label = 'OTHER_LABEL';
            const skillId = '00000000-0000-0000-0000-000000000001';
            const command = new CreateSkillCommand(label);

            // Act
            const skillCreation = await commandHandler.handle(command);

            // Assert
            const createdSkillId = skillCreation.getValue();
            expect(createdSkillId).toEqual(skillId);
        });
    });

    describe('When the skill is not valid', () => {
        describe.each([
            {shortLabel: ''},
            {shortLabel: 'X'},
            {shortLabel: 'XX'},
        ])('When the label is too short', ({shortLabel}) => {
            it(`should not save the skill with label: "${shortLabel}"`, async () => {
                // Arrange
                const skillId = '00000000-0000-0000-0000-000000000001';
                const command = new CreateSkillCommand(shortLabel);

                // Act
                await commandHandler.handle(command);

                // Assert
                const skillFound = await repository.getById(skillId);
                expect(skillFound.isFail()).toBeTrue();

                const expectedError = new SkillNotFoundDomainError(skillId);
                expect(skillFound.getError()).toEqual(expectedError);
            });

            it('should emit the "skill created failed event" with the reason', async () => {
                // Arrange
                const command = new CreateSkillCommand(shortLabel);

                // Act
                await commandHandler.handle(command);

                // Assert
                const eventId = '00000000-0000-0000-0000-000000000002';
                const error = new SkillLabelTooShortError();
                const expectedDomainEvent = new SkillCreationFailedDomainEvent({
                    eventId,
                    label: shortLabel,
                    errorMessage: error.message
                });
                expect(eventBus.dispatchEvents).toHaveBeenCalledWith([expectedDomainEvent]);
            });

            it('should return the error', async () => {
                // Arrange
                const command = new CreateSkillCommand(shortLabel);

                // Act
                const skillCreation = await commandHandler.handle(command);

                // Assert
                expect(skillCreation.getError()).toEqual(new SkillLabelTooShortError());
            });
        });
    });
});