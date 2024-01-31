"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";


export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className=" ">
        <Image
          src="/images/error.png"
          alt="error image"
          width={500}
          height={300}
        
          objectFit="cover"
        />
      </div>
      <h2 className="text-5xl text-cyan-600 drop-shadow-xl">Algo salio mal! 😞</h2>
      <Button variant="secondary" onClick={reset}>
        Intentar de nuevo
      </Button>
    </div>
  );
}
