import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-9xl font-black m-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent inline-block bg-clip-text">404</h1>
      <Image src="/images/404.png" alt="404" width={300} height={300} />
      <h2 className="text-4xl m-0"> ¡Uy, parece que el enlace se escondió!</h2>
      <p className="text-2xl">Pero nuestra tienda está abierta las 24/7</p>
      <Link className="block w-fit-content font-bold no-underline mt-4 py-2 px-4 border-none rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl cursor-pointer text-white " href="/store">
        ¡Vamos de compras!
      </Link>
    </main>
  );
}
