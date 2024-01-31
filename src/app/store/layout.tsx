import { getCollections } from "@/services/shopify";
import Link from "next/link";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();
  return (
    <main>
      <h2 className="text-center text-4xl font-extrabold">
        Explore Our Collections
      </h2>
      <nav className="flex md:flex-row sm:flex-col items-center justify-center gap-4 my-4">
        {collections.map((collection: any) => (
          <Link
            key={collection.id}
            href={`/store/${collection.handle}`}
            className="px-4 py-2 rounded-full bg-indigo-800"
          >
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
