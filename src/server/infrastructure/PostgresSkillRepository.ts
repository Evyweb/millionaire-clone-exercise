import {SkillRepositoryPort} from "@/src/server/application/ports/SkillRepositoryPort";
import {Result, TechnicalError} from "@evyweb/simple-ddd-toolkit";
import {Skill} from "@/src/server/domain/Skill";

export class PostgresSkillRepository implements SkillRepositoryPort {
    getById(id: string): Promise<Result<Skill, TechnicalError>> {
        throw new Error("Method not implemented.");
    }

    save(skillToSave: Skill): Promise<Result<boolean, TechnicalError>> {
        throw new Error("Method not implemented.");
    }
}
