"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Error({ reset }: ErrorProps) {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-8xl font-black m-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent inline-block bg-clip-text">
        Ha ocurrido un error
      </h1>
      <Image src="/images/error.png" width={500} height={500} alt="erro" />
      <p className="text-2xl ">
        Al paracer ha ocurrido un error, pero no te sientas mal! 😞
      </p>
      <Button onClick={reset} variant={"secondary"} className="my-4">
        Intentar de nuevo
      </Button>
    </main>
  );
}
