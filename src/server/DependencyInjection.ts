import {createContainer, InjectionTokens} from "@evyweb/ioctopus";

export const DI_SYMBOLS: InjectionTokens = {

}

type DI_RETURN_TYPES = {

}

const container = createContainer();

// const existingCharacters: Character[] = [
//     {id: '1', name: 'Luke Skywalker', species: 'Human', homeworld: 'Tatooine'},
//     {id: '2', name: 'Darth Vader', species: 'Human', homeworld: 'Tatooine'},
//     {id: '3', name: 'Yoda', species: 'Yoda', homeworld: 'Dagobah'},
// ];
// container.bind(DI_SYMBOLS.EXISTING_CHARACTERS).toValue(existingCharacters);
// container.bind(DI_SYMBOLS.CHARACTER_REPOSITORY).toHigherOrderFunction(InMemoryCharacterRepository, [DI_SYMBOLS.EXISTING_CHARACTERS]);

export function inject<K extends keyof typeof DI_SYMBOLS>(
    symbol: K
): K extends keyof DI_RETURN_TYPES ? DI_RETURN_TYPES[K] : never {
    return container.get(DI_SYMBOLS[symbol]);
}

export {container};