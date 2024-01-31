import { env } from "@/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/467213418782/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/smart_collections.json`,
    products: (id: string) =>
      `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`,
  },
};
