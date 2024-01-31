import Image from "next/image";
import ProductViewItemsOrder from "./product-view-items-order";
import { SanitizeHTML } from "../shared";

interface ProductViewProps {
  product: ProductType;
}

export default function ProductView({ product }: ProductViewProps) {
  return (
    <main className="max-w-5xl my-0 mx-auto grid grid-cols-2 gap-20 mt-20">
      <section className="justify-self-end">
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
          className="rounded-2xl drop-shadow-2xl shadow-lg shadow-indigo-500/30"
        />
      </section>
      <section className="flex flex-col">
        <h1 className="text-4xl font-bold mt-0 mb-2">{product.title}</h1>
        <p className="w-fit text-xl leading-7 tracking-[0.5px] rounded-2xl shadow-lg shadow-indigo-500/30 border-2 border-contrast py-2 px-4 mt-4 mb-0">
          {product.tags}
        </p>
        <SanitizeHTML
          tag="p"
          className="text-lg leading-6 tracking-[0.5px] my-4 mx-0"
        >
          {product.description}
        </SanitizeHTML>

        <span className="text-secondary text-4xl">{product.price} USD</span>
        <ProductViewItemsOrder maxQuantity={product.quantity} product={product}/>
      </section>
    </main>
  );
}
