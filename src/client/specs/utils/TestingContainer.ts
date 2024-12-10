import {createContainer, InjectionTokens} from "@evyweb/ioctopus";

export const DI_SYMBOLS: InjectionTokens = {
    // CHARACTER_REPOSITORY: Symbol('CHARACTER_REPOSITORY'),
} as const;

const createTestingContainer = () => {
    const container = createContainer();

    // container.bind(DI_SYMBOLS.CHARACTER_REPOSITORY).toHigherOrderFunction(GraphQLCharacterRepository);

    return container;
}

export {createTestingContainer};