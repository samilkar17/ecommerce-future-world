import { env } from "@/config/env";
import { shopifyUrls } from "./urls";

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
    }),
    cache: "force-cache",
    next: {
      tags: ["main-products"],
      //revalidate: 43200,
    },
  });

  const { products } = await response.json();

  return products;
};

export async function getProducts(id?: string): Promise<ProductType[]> {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;
    const res = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const { products } = await res.json();
    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price || 0,
        image: product.images[0].src || "",
        quantity: product.variants[0].inventory_quantity || 0,
        handle: product.handle,
        tags: product.tags,
      };
    });
    return transformedProducts;
  } catch (error) {
    console.error(error);
    return [];
  }
}
