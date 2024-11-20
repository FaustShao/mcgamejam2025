import React, { useEffect, useState } from "react";
import Image from "next/image";

import { FloatingNavCover } from "@/app/[lang]/_components/FloatingNavCover";
import { Language } from "@/app/[lang]/_components/constants";
import LanguageSwitchButton from "@/app/[lang]/_components/LanguageSwitchButton";

export default function Home({ params }: { params: { lang: Language } }) {
  const [floatingNavCover, setFloatingNavCover] = useState<JSX.Element | null>(
    null
  );

  useEffect(() => {
    async function loadFloatingNavCover() {
      const component = await FloatingNavCover({ params });
      setFloatingNavCover(component);
    }
    loadFloatingNavCover();
  }, [params]);

  if (params.lang !== "en-US" && params.lang !== "fr-FR") {
    params.lang = "en-US";
  }

  return (
    <div className="flex flex-col gt-lg:justify-center w-screen h-screen">
      <Image
        src={"/Banner_Unbranded_2024.png"}
        alt={"McGameJam 2024"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />

      {floatingNavCover}
      <LanguageSwitchButton params={params} currentPath="/[lang]" />
    </div>
  );
}
