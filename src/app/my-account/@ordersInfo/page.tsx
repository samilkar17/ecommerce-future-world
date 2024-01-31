import { getCustomerOrders } from "@/services/shopify/graphql/customer";
import CardOrders from "./card-orders";

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();

  return (
    <div className="flex flex-col gap-4">
      <h2>Your orders</h2>
      <section>
        {ordersInfo.orders?.map((order: OrderType,idx) => (
          <CardOrders orders={order} key={idx}/>
       
        ))}
      </section>
    </div>
  );
}
