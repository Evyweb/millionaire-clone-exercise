'use client'

import {QueryClientProvider} from '@tanstack/react-query'
import {ReactNode, useState} from 'react'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {useDependency} from "@/app/_hooks/useDependency";

export const ReactQueryClientProvider = ({ children }: { children: ReactNode }) => {
    const client = useDependency('QUERY_CLIENT');

    const [queryClient] = useState(() => client);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    );
}