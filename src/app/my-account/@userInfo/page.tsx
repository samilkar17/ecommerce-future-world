import { validateAccessToken } from "@/utils/auth/validateAccessToken";
export const dynamic = "force-dynamic";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();
  

  return (
    <div className="flex flex-col gap-4">
      <h2>Your Info</h2>
      <section>
        <h1>
          Welcome {customer?.firstName} {customer?.lastName}
        </h1>
        <p className="flex flex-col">
          <span>email: {customer?.email}</span>
          <span>phone: {customer?.phone}</span>
        </p>
      </section>
    </div>
  );
}
