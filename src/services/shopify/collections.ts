import { env } from "@/config/env";
import { shopifyUrls } from "./urls";

export async function getCollections() {
  try {
    const res = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const { smart_collections } = await res.json();
    const transformedColletions = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      };
    });
    return transformedColletions;
  } catch (error) {
    console.error(error);
  }
}

export async function getCollectionsProducts(id: string) {
  try {
    const res = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const {products} = await res.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}
