import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

interface ShoppingCartItemProps {
  item: CartItem;
}

export default function ShoppingCartItem({ item }: ShoppingCartItemProps) {
  
  const { removeCartItem } = useShoppingCart();
  return (
    <Card key={item?.id} className="flex items-center ">
      <Image
        loading="eager"
        src={item.image}
        width={70}
        height={70}
        quality={100}
        alt={item.title}
        className="rounded-lg drop-shadow-2xl shadow-lg ml-2 shadow-indigo-500/30"
      />
      <CardHeader>
        <CardTitle className="text-base">{item.title}</CardTitle>
        <div className="flex items-center justify-between">
          <CardDescription>Quantity: {item.quantity}</CardDescription>
          <Button
            onClick={() => removeCartItem(item)}
            variant="destructive"
            size="icon"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
