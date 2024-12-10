import {DomainEvent} from "@evyweb/simple-ddd-toolkit";

interface Metadata {
    label: string,
    errorMessage: string;
}

export class SkillCreationFailedDomainEvent extends DomainEvent<Metadata> {
    constructor({eventId, label, errorMessage}: { eventId: string, label: string, errorMessage: string }) {
        super({
            eventId,
            metadata: {
                label,
                errorMessage
            }
        });
    }
}