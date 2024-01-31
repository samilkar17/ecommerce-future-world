import ProdutsWrapper from "@/components/store/products-wrapper";
import {
  getCollections,
  getCollectionsProducts,
  getProducts,
} from "@/services/shopify";



interface CategoriesProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}
export default async function CategoryPage(props: CategoriesProps) {
  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;
    products = await getCollectionsProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  // throw new Error("Error: Boom!")
  return <ProdutsWrapper products={products} />;
}
