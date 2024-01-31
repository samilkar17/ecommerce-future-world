"use client";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ShoppingCartItem from "./shopping-cart-item";
import { useState } from "react";
import { handleCreateCart } from "@/actions";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isBuying, setIsBuying] = useState(false);
  const hasItems = cart.length > 0;

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);
      if(!checkoutUrl) throw new Error('Error creating checkout');
      window.localStorage.removeItem('cart');
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent border-none cursor-pointer relative">
          {hasItems &&(

            <span className="absolute inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold bg-fuchsia-500 rounded-full top-[-0.2rem] left-[1.8rem] z-10">
            {cart.length}
          </span>
            )}
          <ShoppingCartIcon className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      {hasItems && (
        <SheetContent className="w-[400px] sm:w-[540px] bg-primary">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>Products Recently Added</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {cart.map((item,idx) => (
              <ShoppingCartItem item={item} key={idx} />
            ))}
          </div>
          <SheetFooter className="w-full">
            <Button variant={"secondary"} size={"lg"}  onClick={handleBuy} disabled={isBuying}>
              Buy
            </Button>
          </SheetFooter>
        </SheetContent>
      )}
    </Sheet>
  );
}
