"use client";
import {useAtom} from "jotai";
import {cloudAtom} from "@/utils/store";


export default function Header(){
    const [cloud, setCloud] = useAtom(cloudAtom);
    
    const dropdownOptions = [
      {
        content: (
          <div className="flex gap-3 items-center border-b border-gray-500/20 p-4">
            <div className="p-2 px-3 bg-opaque rounded-full text-accent-500 text-xl flex items-center justify-center aspect-square"><i className="fad fa-user" /></div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">{cloud?.user?.name}</h1>
              <p className="text-sm text-gray-500">{`@${cloud?.user?.username}`}</p>
            </div>
          </div>
        ),
        action: () => console.log("Profile")
      },
      {
        title: "Settings",
        icon: "fad fa-cog",
        action: () => console.log("Settings")
      },
      {
        title: "Logout",
        icon: "fad fa-sign-out",
        action: () => console.log("Logout")
      }
    ]

    return(
        <div className="p-4 border-b border-border flex items-center justify-between relative">
        <h1 className="text-2xl font-bold text-primaryFont">Kalakarry</h1>
        {
      cloud?.user ? (
        <div>
          <h1>{cloud?.user?.username}</h1>
          </div>
      ) : (
        <button>login</button>
      )
     }
     <div className="absolute rounded-2xl border border-gray-500/40 backdrop-blur-md top-[calc(100%+15px)] right-0 flex flex-col gap-1 w-[200px]">
      {
        dropdownOptions.map((option, index) => (
          <>
          {
            option?.content ? option.content : (
              <button onClick={option.action} className="flex items-center w-full gap-3 p-2 px-4 hover:bg-opaque transition-all">
                <div className="p-2 px-3 bg-opaque rounded-full text-xl flex items-center justify-center aspect-square"><i className={`${option.icon} `} /></div>
                <h1 className="">{option.title}</h1>
              </button>
            )
          }
          </>
        ))
      }
     </div>
      </div>
    )
}