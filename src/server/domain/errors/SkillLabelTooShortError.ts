import {DomainError} from "@evyweb/simple-ddd-toolkit";

export class SkillLabelTooShortError extends DomainError {
    constructor() {
        super('Skill label should contain at least 2 characters');
    }
}