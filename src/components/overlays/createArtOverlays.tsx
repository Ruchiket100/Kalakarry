export default function CreateArtOverlays(){
    return(
        <div className="p-4 ">
            <div className="flex w-full gap-4 items-center justify-between">
            <div className="flex flex-col flex-1">
            <label className="font-medium">Title</label>
            <input type="text" className="w-full py-2 px-3 h-12 outline-accent-500 border border-gray-300 rounded-md p-2 mt-1" placeholder="eg. Stairy Nights" />
            <br/>
            <label className="font-medium">Description</label>
            <textarea className="w-full py-2 px-3 h-24 outline-accent-500 border border-gray-300 rounded-md p-2 mt-1" placeholder="eg. A beautiful night sky with stars and a moon" />
            <br/>
            <label className="font-medium">Collection</label>
            </div>
            <div className="flex-1 m-4 aspect-video bg-gray-300/50 rounded-md flex items-center justify-center">
            <div className="aspect-square relative p-1">
                <i className="fas fa-frame text-xl"/>
                <i  className="absolute bottom-0 -right-2 fas fa-plus"/>
                </div>
            </div>
            </div>
        </div>
    )
}