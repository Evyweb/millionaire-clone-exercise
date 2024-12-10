import {Result, ValueObject} from "@evyweb/simple-ddd-toolkit";
import {SkillCreationError} from "@/src/server/domain/errors";
import {SkillLabelTooShortError} from "@/src/server/domain/errors/SkillLabelTooShortError";

interface SkillLabelProperties {
    value: string;
}

export class SkillLabel extends ValueObject<SkillLabelProperties> {
    private static readonly SKILL_LABEL_MIN_CHARACTERS = 2;

    static createFrom(label: string): Result<SkillLabel, SkillCreationError> {
        if (label.length <= this.SKILL_LABEL_MIN_CHARACTERS) {
            return Result.fail(new SkillLabelTooShortError());
        }

        // Other validation rules here

        const skillLabel = new SkillLabel({
            value: label
        });

        return Result.ok(skillLabel);
    }
}