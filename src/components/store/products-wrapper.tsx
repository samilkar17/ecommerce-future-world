import ProductCard from "./product-card";

interface ProductsWrapperProps {
  products: ProductType[];
}

export default function ProductsWrapper({ products }: ProductsWrapperProps) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
