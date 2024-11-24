"use client";

import { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Password (props:{label:string, value?:string, onChange?:(e:any)=>void}) {
    const {label, value, onChange}= props;
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    useEffect(()=> {
        if(!show){
            const length = value?.length || 0;
            let tempt = ""
            for(let i = 0; i < length; i++){
                tempt += "•"
            }
            setInputValue(tempt)
        }else {
            setInputValue(value)
        }
    },[show, setShow, onChange, value])

    return(
        <div className="rounded-full flex items-center px-3 w-full border-2 border-gray-500 bg-white/10  backdrop-blur-sm">
            <input type={!!show ? "text" :"password"} value={value} onChange={onChange} className=" w-full p-3 flex items-center px-1 bg-transparent text-md outline-none placeholder:text-gray-300" placeholder={label}/>
            <button className={`outline-none ${!!show ? "text-white" : "text-gray-500"}`} onClick={()=> setShow(!show)} >
                {!!show ? 
                <VisibilityIcon/> : <VisibilityOffIcon/>}
            </button>
        </div>
    )
}