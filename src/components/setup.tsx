"use client"

import { UserType } from "@/types/user";
import { FETCH } from "@/utils/fetch";
import { cloudAtom } from "@/utils/store"
import { useAtom } from "jotai"
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";


export default function Setup() {
    const [cloud, setCloud] = useAtom(cloudAtom);
    const [step, setStep] = useState(0);
    const [username, setUsername] = useState("");
    const [available, setAvailable] = useState<boolean>();

    const checkUsernameQuery = useMutation({
    mutationFn  : async (username: string) => FETCH.user.myself.checkusername(username),
    onSuccess: (data) =>{
        console.log(data)
        setAvailable(true)
    },
    onError: ()=> {
        setAvailable(false)
    }

    })

    const setUsernameMutation = useMutation({
        mutationFn: async (username: string) => FETCH.user.myself.username(username),
        onSuccess: (data) => {
            setCloud({...cloud, user: {...cloud.user, setting_up: true} as UserType})
        }
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(username)
            checkUsernameQuery.mutate(username)
        },1000)
        return () => clearTimeout(timer)
    },[username])

    const setupContent = [
        {
            title:"Choose the username",
            content: (
                <div>
                <div className="flex items-center justify-center rounded-xl ring ring-accent-500/30 w-full">
                <input value={username} onChange={(e) => {
                    const sanitizedValue = e.target.value
                    .replace(/\s+/g, "_")
                    .replace(/[^\w_]/g, "");
                    setUsername(sanitizedValue)}} className="p-3 flex-1 bg-transparent outline-none" placeholder="eg. dev100" />
                {!checkUsernameQuery.isLoading && (available ? <i className="fad fa-check-circle p-3 text-green-500" /> :  <i className="fad fa-cross-circle p-3 text-red-500" />)}
                </div>
                <button onClick={() => setUsernameMutation.mutateAsync(username)} className="w-full bg-accent-500 border-2 border-accent-600 p-3 rounded-xl font-medium mt-3">{(checkUsernameQuery || setUsernameMutation).isLoading ? <i className="animate-spin fad fa-spinner-third" /> :"Save"}</button>
                </div>
            )
        }
        //add birth date option here
    ]

    if(cloud?.user && cloud?.user?.setting_up === false) {
    return (
        <div className="fixed inset-0 bg-gray-800/10 backdrop-blur-sm flex items-center justify-center">
        <div className="flex justify-center flex-col md:flex-row w-full h-full max-w-screen md:max-w-[50%] max-h-screen md:max-h-[50%] rounded-2xl p-6 bg-white backdrop-blur-sm">
            <div className="md:flex-1 flex flex-col justify-center p-8 gap-2">
                <h1 className="text-4xl font-bold ">Kalakarry</h1>
                <p className="text-xl text-gray-500">Welcome to Kalakarry!</p>
            </div>
            <div className="md:flex-1 flex flex-col p-8 justify-center gap-1">
                <h2 className="text-lg font-medium">{setupContent[step]?.title}</h2>
                {setupContent[step]?.content}
                </div>
        </div>
        </div>
    )}
    else return;
}