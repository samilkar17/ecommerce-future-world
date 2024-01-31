'use client'
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);
  const handleClick = () => setBorder(!hasBorder);

  return (
    <section className="grid grid-cols-2 gap-28 max-w-[1000px] my-24 mx-auto p-8 rounded-3xl">
      <div className={cn("relative  rounded-2xl shadow-2xl shadow-white/50 w-[500px] h-[300px]", hasBorder && "border-2 border-contrast")}>
        <button onClick={handleClick}>
          <Image
            className="rounded-2xl"
            src="/images/description.jpeg"
            alt="product marketplace"
            objectFit="cover"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </button>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-semibold mb-2">Bring the future today</h2>
        <p className="text-2xl leading-loose text-text">
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
