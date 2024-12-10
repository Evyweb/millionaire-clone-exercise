import {Skill} from "@/src/server/domain/Skill";
import {Result, TechnicalError} from "@evyweb/simple-ddd-toolkit";

export interface SkillRepositoryPort {
    getById(id: string): Promise<Result<Skill, TechnicalError>>;

    save(skillToSave: Skill): Promise<Result<boolean, TechnicalError>>;
}