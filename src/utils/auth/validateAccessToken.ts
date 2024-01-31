import { GraphQLClientSingleton } from "@/graphql";
import { customerName } from "@/graphql/queries/customerName";
import { cookies } from "next/headers";
export const validateAccessToken = async () => {
  try {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value || ''
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customer }: {
      customer: {
        firstName: string
        lastName:string,
        email: string,
        phone:string,
      
      }
    } = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken
    })
    return customer
  } catch (error) {
    console.error(error)
  }
}
