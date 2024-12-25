"use client";

import { useEffect, useState } from "react";

export default function Setup () {
    const [inView, setInView] = useState<number>(0);

    const demo =[
        (
            <div>heading text</div>
        ),
        (
            <div>username setup</div>
        ),
        (
            <div>date of birth setup</div>
        ),
        (
            <div>welcome heading</div>
        )
    ]

    const slides = [
        {
            content: (
               <div>
            <h1 className="text-5xl font-bold whitespace-pre-wrap">Discover real-world Art and Artists</h1>
            <p className="flex gap-3 items-center">Let's get you in <i className="far fa-arrow-right"  /></p>
            </div>
            ),
            
        },
        {
            content:(
                <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-extrabold">Let's sign you in.</h1>
                <input  className="p-3 flex items-center rounded-full bg-secondary/10 font-medium ring-2 ring-accent-500 outline-1 outline-accent-700 max-w-[300px] w-full" placeholder="username"/>
                <i className="fad fa-check-circle text-green-600 text-md" />
                </div>
            ),
            wait: true
        }
    ]


    useEffect(() => {
        if( inView <= 2){
            setTimeout(() => {
                setInView(inView + 1)
                console.log("Hello World")
                inView && console.log(slides[inView])
            },400)
        }
    },[])

    return (
        <div className="p-6 flex flex-col gap-4 justify-center min-h-screen">
            {inView != null  && slides[inView]?.content}
        </div>
    )
}