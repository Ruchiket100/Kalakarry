"use client";

import { cloudAtom, noAtom } from "@/utils/store";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Home() {
  const [cloud, setCloud] = useAtom(cloudAtom)

  return (
    <div className="flex flex-col gap-2 bg-primary">
      <div className="p-4 border-b border-border">
        <h1 className="text-2xl font-bold text-primaryFont">Kalakarry</h1>
        {cloud?.auth_token}
      </div>
      </div>
  );
}
