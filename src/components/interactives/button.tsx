export default function Button({children, onClick}: Readonly<{children: React.ReactNode, onClick: () => void}>){
    return(
        <button onClick={onClick} className="w-full rounded-full p-3 flex items-center justify-center text-md font-medium border-2 border-accent-800 bg-accent-500 text-primaryFont">
            {children}
        </button>
    )
}