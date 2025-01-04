"use client";
import { overlayAtom } from "@/utils/store";
import { useAtom } from "jotai";

export default function Overlay() {
    const [overlay, setOverlay] = useAtom(overlayAtom);

    return(
        <div className={`fixed inset-0 scale-100 bg-opaque backdrop-blur-md z-50 flex items-center justify-center ${overlay ? "visible opacity-100" : "invisible opacity-0"} transition-all`}>
            <button onClick={() => setOverlay(null)} className="absolute top-8 left-8 py-3 px-4 ring-2 ring-gray-300 flex items-center rounded-md gap-2 "><i className="fad fa-hand-back-point-left text-md"/>Back</button>
            <div className="max-w-[900px] w-full flex-1 scale-100 h-[80%]">
                {overlay?.title && <div className="flex gap-2 items-center bg-opaque p-4 rounded-t-xl">
                    <i className={`fad fa-${overlay?.icon} text-xl text-accent-500`}/>
                    <h1 className="text-2xl font-black">{overlay?.title}</h1>
                </div>}
                {overlay?.content}
            </div>
        </div>
    )
}