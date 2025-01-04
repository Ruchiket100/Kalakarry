"use client"
import CreateArtOverlays from "@/components/overlays/createArtOverlays";
import { UserType } from "@/types/user";
import { overlayAtom } from "@/utils/store";
import { useAtom } from "jotai";

export default function Client (props: {user?: UserType}) {
    const {user} = props;
    const [overlay, setOverlay] = useAtom(overlayAtom);

    return (
        <>
        <div className="flex flex-col border-b-2 border-borderLight mx-4">
            <div className="p-4 w-full flex items-center justify-between bg-primary"><i onClick={() => window.history.back()} className="fad fa-arrow-left" /></div>
            <div className="flex flex-col gap-4 items-center p-4 justify-center ">
                <div className="p-8 rounded-full flex items-center justify-center bg-accent-500/10 text-3xl text-gray-500"><i className="fas fa-user" /></div>
                <div className="flex flex-col text-center gap-2">
                    <div className="text-4xl font-bold">{user?.name}</div>
                    <div className="text-lg text-accent-500">@{user?.username}</div>
                </div>
            </div>
                <div className="flex gap-4 mx-auto p-4">
                    <div className="flex gap-2 items-center justify-center">
                        <h1 className="font-black">50</h1>
                        <p className="font-medium">Followers</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <h1 className="font-black">50</h1>
                        <p className="font-medium">Following</p>
                    </div>
                    
                </div>
                <button className="bg-slate-700 py-3 px-4 rounded-xl w-full md:max-w-[200px] text-white  mx-auto">Follow</button>
                <br/>
        </div>
        <div>
            <div className="flex gap-2 border-b-2 border-borderLight">
                <div className="flex items-center gap-2 px-4 py-2 bg-opaqueLight cursor-pointer">
                    <i  className="fad fa-palette text-md text-accent-500"/>
                    <h2 className="text-lg text-gray-500 font-medium">Art-pieces</h2>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col items-center justify-center gap-4 p-8 text-center min-h-[400px]">
                    <i className="fas fa-paintbrush-pencil text-gray-500/50 text-8xl"/>
                    <p className="text-lg text-secondaryFont font-black max-w-[300px]">This gallery is feeling lonely. Bring it to life with your creations!</p>
                    <button
                    onClick={() => setOverlay({title: "Create art", icon: "paint-brush", content: <CreateArtOverlays/> })}
                    className="px-4 py-2 rounded-xl ring-1 ring-accent-500 flex items-center gap-2 shadow-md hover:bg-slate-100 transition-all font-medium"><i className="fad fa-paintbrush-fine"/>Create art</button>
                </div>
            </div>
        </div>
        </>
    )
}