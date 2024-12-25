"use client";

import { cloudAtom, noAtom } from "@/utils/store";
import { useAtom } from "jotai";
import { useEffect } from "react";
import Header from "@/components/header";

export default function Home() {
  const [cloud, setCloud] = useAtom(cloudAtom)
  console.log(cloud)

  return (
    <div className="min-h-screen bg-primary">
     <Header/>
     <i className="fad fa-sparkles" />
     </div>
  );
}
