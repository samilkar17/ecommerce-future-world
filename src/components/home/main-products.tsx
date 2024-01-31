import { getMainProducts, getProducts } from "@/services/shopify/products";
import Image from "next/image";

export const MainProducts = async () => {
  const  products  = await getMainProducts();
  //const res = await fetch("http://localhost:3000/api");
  //const { products } = await res.json();

  return (
    <section>
      <h3 className="text-center text-text text-5xl mb-2">
        New Products Realeased!
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article
              className="group  transition duration-300 overflow-hidden  rounded-lg p-3 h-full flex flex-col cursor-pointer"
              key={product.id}
            >
              <div className="relative z-1 min-h-400 w-full aspect-video rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  fill
                  alt={product.title}
                  loading="eager"
                  sizes="100vw"
                  className="h-400 transition duration-300  object-cover group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-80"></div>

                <p className="absolute top-0 right-[1.5rem] z-2 text-lg md:text-base font-medium text-text transition line-clamp-2">
                  {product.title}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
