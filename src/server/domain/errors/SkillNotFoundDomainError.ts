import {DomainError} from "@evyweb/simple-ddd-toolkit";

export class SkillNotFoundDomainError extends DomainError {
    constructor(id: string) {
        super(`Skill with id: "${id}" not found`);
    }
}