"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import Providers from "./providers"

export default function QueryProvider({children}: Readonly<{children: React.ReactNode}>){
    const client = new QueryClient()

    return(
        <QueryClientProvider client={client}>
            <Providers>
            {children}
            </Providers>
        </QueryClientProvider>
    )

}