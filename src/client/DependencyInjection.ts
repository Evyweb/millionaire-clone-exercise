import {createContainer, InjectionTokens} from "@evyweb/ioctopus";
import {QueryClient} from "@tanstack/react-query";

export const DI_SYMBOLS: InjectionTokens = {
    QUERY_CLIENT: Symbol('QUERY_CLIENT'),
} as const;

export type DI_RETURN_TYPES = {
    QUERY_CLIENT: QueryClient,
    // CHARACTER_REPOSITORY: ICharacterRepository,
}

const container = createContainer();

container.bind(DI_SYMBOLS.QUERY_CLIENT).toValue(new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
}));

// container.bind(DI_SYMBOLS.CHARACTER_REPOSITORY).toHigherOrderFunction(GraphQLCharacterRepository, []);

export {container};