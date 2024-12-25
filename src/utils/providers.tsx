"use client";

import { ToastContainer } from "react-toastify";
import { createStore, Provider, useAtom } from "jotai";
import { useHydrateAtoms } from 'jotai/utils'
import { cloudAtom, noAtom } from "./store";
import { useEffect } from "react";
import QueryProvider from "./queryProvider";
import AuthProvider from "./authProviders";



export default function Providers({ children, cloud }: { children: React.ReactNode, cloud: any }) {
    const [cloudStorage, setCloud] = useAtom(cloudAtom)
    
    useHydrateAtoms([[cloudAtom, cloud]]);

    return (
        <>
        <QueryProvider>
            <AuthProvider>
            {children}
            <ToastContainer position="bottom-right"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                 />
                </AuthProvider>
                </QueryProvider>
        </>
    )
}