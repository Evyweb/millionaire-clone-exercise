import {createContainer} from "@evyweb/ioctopus";

const createTestingContainer = () => {

    const container = createContainer();

    // const existingCharacters: Character[] = [];
    // container.bind(DI_SYMBOLS.EXISTING_CHARACTERS).toValue(existingCharacters);
    // container.bind(DI_SYMBOLS.CHARACTER_REPOSITORY).toHigherOrderFunction(InMemoryCharacterRepository, [
    //     DI_SYMBOLS.EXISTING_CHARACTERS
    // ]);

    return container;
};

export {createTestingContainer};