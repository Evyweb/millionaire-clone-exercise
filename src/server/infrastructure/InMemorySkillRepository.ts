import {SkillRepositoryPort} from "@/src/server/application/ports/SkillRepositoryPort";
import {Skill} from "@/src/server/domain/Skill";
import {Result, TechnicalError, UuidFrom} from "@evyweb/simple-ddd-toolkit";
import {SkillNotFoundDomainError} from "@/src/server/domain/errors/SkillNotFoundDomainError";

export class InMemorySkillRepository implements SkillRepositoryPort {

    private skills: Skill[] = [];

    async getById(id: string): Promise<Result<Skill, SkillNotFoundDomainError>> {
        const skillSearch = this.skills.find(skill => skill.get('id').equals(UuidFrom(id)));
        if (skillSearch) {
            return Result.ok(skillSearch);
        }
        return Result.fail(new SkillNotFoundDomainError(id));
    }

    async save(skillToSave: Skill): Promise<Result<boolean, TechnicalError>> {
        this.skills.push(skillToSave);
        return Result.ok(true);
    }
}