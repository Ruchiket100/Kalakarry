"use client"
import { UserType } from "@/types/user";

export default function Client (props: {user?: UserType}) {
    const {user} = props;
    return (
        <div>
            <div className="p-4 w-full flex items-center justify-between border-b border-borderLight bg-primary"><i onClick={() => window.history.back()} className="fad fa-arrow-left" /></div>
            <div className="flex gap-4 items-center p-4 border-b-2 border-borderLight">
                <div className="p-4 rounded-full flex items-center justify-center bg-accent-500/10 text-2xl text-gray-500"><i className="fas fa-user" /></div>
                <div className="flex flex-col">
                    <div className="text-xl font-bold">{user?.name}</div>
                    <div className="text-sm text-accent-500">@{user?.username}</div>
                </div>
                </div>
        </div>
    )
}