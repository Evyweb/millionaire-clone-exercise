import {createSkillAction} from "@/src/server/presentation/controllers/serverActions/createSkillAction";
import {container} from "@/src/server/DependencyInjection";

// We make fewer tests than the command handler or the repository,
// the goal here is just to check if everything is working correctly together
// Here the commandHandler will be triggered by the bus
// We will just test the happy path and one possible failing path, it is enough here as we are
// already testing every possible errors in the command handler tests and the format of presentation is simple

describe('createSkillAction', () => {
    beforeEach(() => {
        const logger = container.get<Console>('EVENT_LOGGER');
        vi.spyOn(logger, 'log').mockImplementation(vi.fn());
    });

    describe('When the skill can be created', () => {
        it('should successfully display the success message', async () => {
            // Arrange
            const formData = new FormData();
            formData.set('label', 'NEW_SKILL');

            // Act
            const viewModel = await createSkillAction(formData);

            // Assert
            expect(viewModel.statusCode).toEqual(200);
            expect(viewModel.successMessage).toMatch(
                /Skill "NEW_SKILL" has been created successfully with id: [0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
            );
            expect(viewModel.errorMessage).toEqual('');
        });
    });

    describe('When the skill cannot be created', () => {
        it('should display the error message', async () => {
            // Arrange
            const formData = new FormData();
            formData.set('label', '');

            // Act
            const viewModel = await createSkillAction(formData);

            // Assert
            expect(viewModel.statusCode).toEqual(400);
            expect(viewModel.successMessage).toEqual('');
            expect(viewModel.errorMessage).toEqual('Skill label should contain at least 2 characters');
        });
    });
});