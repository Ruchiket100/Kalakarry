"use client";

import { ToastContainer } from "react-toastify";



export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
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
        </>
    )
}