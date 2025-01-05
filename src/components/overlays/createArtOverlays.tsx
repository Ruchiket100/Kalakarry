import { useState } from "react";

export default function CreateArtOverlays() {
  const [isNewCollection, setIsNewCollection] = useState(false);
  const [collection, setCollection] = useState<{
    name: string;
    description: string;
  }>({
    name: "",
    description: "",
  });
  const [art, setArt] = useState<{
    title: string;
    description: string;
    collection?: string;
    image: string;
  }>({
    title: "",
    description: "",
    image: "",
  });

  return (
    <div className="p-4 ">
      <div className="flex w-full gap-4 justify-between">
        <div className="flex flex-col flex-1">
          <label className="font-medium">Title</label>
          <input
            type="text"
            className="w-full py-2 px-3 h-12 outline-accent-500 border border-gray-300 rounded-md p-2 mt-1"
            placeholder="eg. Stairy Nights"
          />
          <br />
          <label className="font-medium">Description</label>
          <textarea
            className="w-full py-2 px-3 h-24 outline-accent-500 border border-gray-300 rounded-md p-2 mt-1"
            placeholder="eg. A beautiful night sky with stars and a moon"
          />
          <br />
          <label className={`font-medium ${isNewCollection ? "hidden" : "block"}`}>Collection</label>
          <select
          onChange={(e) => {
            if(e.target.value === "new-collection") {
              setIsNewCollection(true);
            }
          }}
          className={`px-4 py-2 border border-gray-300 outline-none rounded-md ${isNewCollection ? "hidden" : "block"}`}>
            <option>--Choose--</option>
            <option value="new-collection">Create Collection</option>
          </select>
          <br />
          <div className={`transition-all ${isNewCollection ? "opacity-100 h-auto visible" : "opacity-0 h-0 invisible"}`}>
          <hr className="h-1 w-full bg-border" />
          <br />
          <p className="text-sm font-black pb-2">New Collection</p>
          <div className="flex flex-col">
            <label className="font-medium">Collection Name</label>
            <input
              type="text"
              className="w-full py-2 px-3 h-12 outline-accent-500 border border-gray-300 rounded-md p-2 mt-1"
              placeholder="eg. My first artpieces"
            />
            <br />
            <label className="font-medium">Description</label>
            <textarea
              className="w-full py-2 px-3 h-24 outline-accent-500 border border-gray-300 rounded-md p-2 mt-1"
              placeholder="eg. My first collection of artpieces"
            />
            <br />
            <button className="py-2 px-4 rounded-md border-2 border-gray-500 w-full ">
              Create Collection
            </button>
            </div>
          </div>
          <br />
          <button className="py-3 px-4 rounded-md bg-slate-400 font-black ">
            Post
          </button>
        </div>
        <div className="flex-1 m-4 aspect-video w-full h-full bg-gray-300/50 rounded-md flex items-center justify-center">
          <div className="aspect-square relative p-1">
            <i className="fas fa-frame text-xl" />
            <i className="absolute bottom-0 -right-2 fas fa-plus" />
          </div>
        </div>
      </div>
    </div>
  );
}
