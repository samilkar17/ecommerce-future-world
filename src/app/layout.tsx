import { Roboto } from "next/font/google";
import { Header, Footer } from "@/components/shared";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Chat from "@/components/chat/chat";
import { getProducts } from "@/services/shopify";
import { createAgent } from "@/utils/openai/createAgent";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getProducts();
  const productTitles = products.map((product) => product.title);
  const flatProductTitles = productTitles.join("\n");
  const agent = createAgent(flatProductTitles);
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Toaster />
        <div>{children}</div>
        <Chat agent={agent} />
        <Footer />
      </body>
    </html>
  );
}
