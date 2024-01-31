
import Link from "next/link";
import ShoppingCart from "./shopping-cart";
import { validateAccessToken } from "@/utils/auth/validateAccessToken";
import dynamic from "next/dynamic";

const NoSSRShoppingCart = dynamic(() => import("./shopping-cart"),{ssr:false})

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
<header className="flex justify-between items-center p-7 w-full">
  <nav className="flex  w-1/2">
    <ul className="flex flex-row text-xl gap-7 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text font-semibold">
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/store">
        <li>Store</li>
      </Link>
    </ul>
  </nav>
  <div className="flex flex-nowrap items-center  gap-x-4">
    {customer?.firstName ? (
      <Link href="/my-account">
      <p className="capitalize">
        Welcome {customer.firstName} {customer.lastName} !
      </p>
      </Link>
    ) : (
      <Link href={"signin"}>Login</Link>
    )}
    <NoSSRShoppingCart/>
  </div>
</header>

  
  );
};
