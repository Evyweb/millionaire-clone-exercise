'use client';

import {useContext} from "react";
import {DependencyContext} from "@/app/_providers/DependencyProvider";
import {DI_RETURN_TYPES, DI_SYMBOLS} from "@/src/client/DependencyInjection";

export function useDependency<K extends keyof typeof DI_SYMBOLS>(symbol: K): K extends keyof DI_RETURN_TYPES ? DI_RETURN_TYPES[K] : never {
    const container = useContext(DependencyContext);

    if (!container) {
        throw new Error("DependencyContext is not provided");
    }

    return container.get(DI_SYMBOLS[symbol]) as K extends keyof DI_RETURN_TYPES
        ? DI_RETURN_TYPES[K]
        : never;
}