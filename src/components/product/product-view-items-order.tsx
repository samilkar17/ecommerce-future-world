"use client";
import { SyntheticEvent, useState } from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "@/hooks/use-shopping-cart";

interface ProductViewItemsOrderProps {
  maxQuantity: number;
  product: ProductType;
}

export default function ProductViewItemsOrder({
  maxQuantity,
  product,
}: ProductViewItemsOrderProps) {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault();
    addToCart({
      title: product.title,
      price: product.price,
      quantity: counter,
      image: product.image,
      id: product.id,
      merchandiseId: product.gql_id
    });
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  }

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  }
  return (
    <div className="grid grid-cols-2 gap-5 mt-8">
      <div className="flex flex-row flex-no-wrap gap-2 items-center rounded-lg border border-color shadow-lg shadow-indigo-500/30 w-fit">
        <button
          onClick={handleSubtract}
          className="flex justify-center items-center h-12 w-8 text-2xl font-bold text-contrast bg-transparent border-none py-0 px-8 "
        >
          -
        </button>
        <p className="m-0 text-xl font-normal border border-l-2 border-y-0 px-6">
          {counter}
        </p>
        <button
          onClick={handleAdd}
          className="flex justify-center items-center h-12 w-8 text-2xl font-bold text-contrast bg-transparent border-none py-0 px-8 "
        >
          +
        </button>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <button
          type="submit"
          onClick={handleAddToCart}
          className="flex flex-row flex-no-wrap w-full h-12 gap-4 items-center justify-center py-2 px-4 border-none rounded-lg font-bold text-lg mt-auto bg-fuchsia-500"
        >
          <ShoppingCart />
          <span>Add to Cart</span>
        </button>
      </form>
    </div>
  );
}
