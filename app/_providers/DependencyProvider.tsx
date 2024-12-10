'use client';

import {createContext, FC, ReactNode, useMemo} from "react";
import {Container} from "@evyweb/ioctopus";
import {container} from "@/src/client/DependencyInjection";

export const DependencyContext = createContext<Container | null>(null);

interface DependencyProviderProps {
    customContainer?: Container;
    children: ReactNode;
}

export const DependencyProvider: FC<DependencyProviderProps> = ({customContainer, children}) => {
    const resolvedContainer = useMemo(() => {
        if (customContainer) {
            return customContainer;
        }
        return container;
    }, [customContainer]);

    return (
        <DependencyContext.Provider value={resolvedContainer}>
            {children}
        </DependencyContext.Provider>
    );
};
