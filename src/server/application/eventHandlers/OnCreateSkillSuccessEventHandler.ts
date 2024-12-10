import {SkillCreatedDomainEvent} from "@/src/server/domain/events/SkillCreatedDomainEvent";
import {Bus, Command, IEventHandler} from "@evyweb/simple-ddd-toolkit";

export class OnCreateSkillSuccessEventHandler implements IEventHandler<SkillCreatedDomainEvent> {
    constructor(private readonly _commandBus: Bus<Command>) {
    }

    async handle({metadata}: SkillCreatedDomainEvent): Promise<void> {
        console.log('From inside the OnCreateSkillSuccessEventHandler with skillId:', metadata.skillId);
        // Can trigger system internal commands using the command bus:
        // this.commandBus.execute(new UpdateSomethingWithSkillId(metadata.skillId));
    }
}