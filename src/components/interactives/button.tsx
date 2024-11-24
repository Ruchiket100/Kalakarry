export default function Button({children, onClick}: Readonly<{children: React.ReactNode, onClick: () => void}>){
    return(
        <button onClick={onClick} className="w-full rounded-full p-3 flex items-center justify-center font-bold bg-[#CCC8FF] text-black">
            {children}
        </button>
    )
}