import {DomainEvent} from "@evyweb/simple-ddd-toolkit";

interface Metadata {
    skillId: string;
}

export class SkillCreatedDomainEvent extends DomainEvent<Metadata> {
    constructor(eventId: string, skillId: string) {
        super({
            eventId,
            metadata: {
                skillId
            }
        });
    }
}