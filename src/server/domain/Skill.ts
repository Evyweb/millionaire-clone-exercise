import {Aggregate, Result} from "@evyweb/simple-ddd-toolkit";
import {SkillLabel} from "@/src/server/domain/SkillLabel";
import {SkillId} from "@/src/server/domain/SkillId";
import {SkillCreationError} from "@/src/server/domain/errors";

interface SkillProperties {
    id: SkillId;
    label: SkillLabel;
}

export class Skill extends Aggregate<SkillProperties> {
    static from(data: SkillProperties): Result<Skill, SkillCreationError> {
        // Invariant enforcement rules here if any
        const skill = new Skill(data);
        return Result.ok(skill);
    }

    static fromRawData(id: SkillId, label: string): Result<Skill, SkillCreationError> {
        // Validation rules
        const skillLabelCreation = SkillLabel.createFrom(label);
        if (skillLabelCreation.isFail()) {
            return Result.fail(skillLabelCreation.getError());
        }

        const skillLabel = skillLabelCreation.getValue();

        return Skill.from({
            id,
            label: skillLabel,
        });
    }
}