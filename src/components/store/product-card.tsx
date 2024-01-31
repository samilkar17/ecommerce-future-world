import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardInterface) {
  return (
    <>
      <Link href={`product/${product.handle}?id=${product.id}`}>
        <article
          className="group  transition duration-300 overflow-hidden  rounded-lg p-3 h-full flex flex-col cursor-pointer"
          key={product.id}
        >
          <div className="relative z-1 min-h-400 w-full aspect-video rounded-md overflow-hidden">
            <Image
              src={product.image}
              fill
              alt={product.title}
              loading="eager"
              sizes="100vw"
              className="h-400 transition duration-300  object-cover group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-80"></div>
            <div className="absolute top-0 right-[1.5rem] z-2 text-lg md:text-base font-medium text-text transition line-clamp-2 text-right mt-4">
              <h3 className="text-xl">{product.title}</h3>
              <span className="inline-block bg-red-500 text-white p-1 position-absolute top-[-0.5rem] right-[-1rem] rounded-md transform rotate-5">${product.price} USD</span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
