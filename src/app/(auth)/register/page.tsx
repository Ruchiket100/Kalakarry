"use client";
import Button from "@/components/interactives/button";
import { useState } from "react";
import Input from "@/components/interactives/input";
import { FETCH } from "@/utils/fetch";
import Link from "next/link";
import { useMutation } from "react-query";
import Password from "@/components/interactives/password";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { cloudAtom } from "@/utils/store";

export default function RegisterPage() {
    const [data, setData] = useState({email:'', password:'', name:''});
    const [ cloud, setCloud]= useAtom(cloudAtom)
    const router =  useRouter();

    const registerUser  = useMutation({
        mutationFn: async (data: {email:string, password:string, name:string}) => {
            return FETCH.auth.register(data);
        }
        ,
        onSuccess: (data) => {
            console.log(data);
            toast("User registered successfully");
            router.push(`/auth-login?token=${data.token}`);
        }
    })
    console.log(cloud)
    return (
        <div className=" min-h-screen min-w-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-1">
            <h1 className="text-3xl font-bold">Kalakarry</h1>
            {cloud?.auth_token}
            <p className="text-secondaryFont">explore artist and their work.</p>
            </div>
            <br/>
            <br/>
            <div className=" text-primaryFont rounded-4xl w-full max-w-[450px] min-h-[50vh] p-8 flex flex-col items-center">  
                <Input label="Full Name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                <br/>
                <Input label="Email"
                value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                />
                <br/>
                <Password label="password"
                value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                />
                <br/>
                <Button onClick={()=> {
                    registerUser.mutate(data);
                }}>Register</Button>
                <p className="pt-3 text-secondaryFont">Already have an account? <Link className="text-primaryFont font-medium" href="">Login</Link></p>
        </div>
        </div>
    )
}