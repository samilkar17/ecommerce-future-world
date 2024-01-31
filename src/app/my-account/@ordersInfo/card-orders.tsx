import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
interface OrderCardInterface {
  orders: OrderType;
}

export default function CardOrders({ orders }: OrderCardInterface) {
  return (
    <ScrollArea className="h-28 w-[390px]">
      <Card className="w-[390px]">
        <CardHeader>
          <CardTitle>{orders.name}</CardTitle>
          {orders.lineItems.edges.map(({ node }) => (
            <CardDescription className="flex justify-between" key={node.title}>
              <span>{node.title}</span>
              <span className="text-fuchsia-500">x {node.currentQuantity}</span>
            </CardDescription>
          ))}
        </CardHeader>
      </Card>
    </ScrollArea>
  );
}
