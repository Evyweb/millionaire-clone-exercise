'use server';

import {inject} from "@/src/server/DependencyInjection";
import {CreateSkillViewModel} from "@/src/server/presentation/viewModels/CreateSkillViewModel";
import {CreateSkillCommand} from "@/src/server/application/commands/CreateSkill/CreateSkillCommand";
import {CreateSkillResponse} from "@/src/server/application/commands/CreateSkill/CreateSkillResponse";

export const createSkillAction = async (formData: FormData): Promise<CreateSkillViewModel> => {
    const commandBus = inject('COMMAND_BUS');
    const label = formData.get('label') as string;

    const command = new CreateSkillCommand(label);
    const skillCreation = await commandBus.execute<CreateSkillResponse>(command);

    if (skillCreation.isFail()) {
        return {
            statusCode: 400,
            successMessage: '',
            errorMessage: skillCreation.getError().message
        }
    }

    const newSkillId = skillCreation.getValue();

    return {
        statusCode: 200,
        successMessage: `Skill "${label}" has been created successfully with id: ${newSkillId}`,
        errorMessage: ''
    }
};