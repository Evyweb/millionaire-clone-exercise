import {Result} from "@evyweb/simple-ddd-toolkit";
import {SkillCreationError} from "@/src/server/domain/errors";

export type CreateSkillResponse = Result<string, SkillCreationError>;