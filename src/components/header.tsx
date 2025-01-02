"use client";
import {useAtom} from "jotai";
import {cloudAtom, headerDropdownAtom} from "@/utils/store";
import { useRouter } from "next/navigation";


export default function Header(){
    const [cloud, setCloud] = useAtom(cloudAtom);
    const [headerDropdown, setHeaderDropdown] = useAtom(headerDropdownAtom);

    const router = useRouter();

    console.log(cloud)
    
    const dropdownOptions = [
      {
        content: (
          <div className="flex gap-3 items-center border-b border-gray-500/20 p-4">
            <div className="p-2 px-3 bg-opaque rounded-full text-accent-500 text-xl flex items-center justify-center aspect-square"><i className="fad fa-user" /></div>
            <div className="flex flex-col text-start">
              <h1 className="font-bold text-lg leading-5">{cloud?.user?.name}</h1>
              <p className="text-sm text-gray-500">{`@${cloud?.user?.username}`}</p>
            </div>
          </div>
        ),
        hidden: !cloud?.user,
        action: () => router.push(`/user/${cloud?.user?.username}`)
      },
      // {
      //   title: "Settings",
      //   icon: "fad fa-cog",

      //   action: () => console.log("Settings")
      // },
      {
        title: "Logout",
        icon: "fad fa-sign-out",
        action: () => setCloud({auth_token:undefined, user:undefined})
      }
    ]

    return(
        <div className="p-4 border-b border-border flex items-center justify-between relative">
        <h1 className="text-2xl font-bold text-primaryFont">Kalakarry</h1>
        {
      cloud?.user ? (
        <div onClick={() => setHeaderDropdown(!headerDropdown)} className="flex gap-2 items-center  hover:bg-opaqueLight pr-1 rounded-r-xl rounded-l-full cursor-pointer">
          <div className="p-2 px-3 bg-opaque rounded-full text-accent-500 text-xl flex items-center justify-center aspect-square"><i className="fad fa-user" /></div>
            <i className={`fas fa-chevron-up transition-all duration-150 ${!headerDropdown ? " rotate-180" : "rotate-0" }`} />
          </div>
      ) : (
        <button>login</button>
        
      )
     }
     <div className={`absolute rounded-2xl border border-gray-500/40 backdrop-blur-md overflow-hidden top-[calc(100%+15px)] right-0 flex flex-col w-[200px] transition-all duration-200 ${headerDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
      {
        dropdownOptions.map((option, index) => (
          <button key={index} className="hover:bg-gray-500/10 flex cursor-pointer transition-all" onClick={option.action}>
          {
            option?.content ? option.content : (
              <div  className="flex items-center w-full gap-3 p-2 px-4 ">
                <div className="p-2 px-3 bg-opaque rounded-full text-xl flex items-center justify-center aspect-square"><i className={`${option.icon} `} /></div>
                <h1 className="">{option.title}</h1>
              </div>
            )
          }
          </button>
        ))
      }
     </div>
      </div>
    )
}