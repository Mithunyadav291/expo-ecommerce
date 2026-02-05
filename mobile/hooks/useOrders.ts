import { useApi } from "@/lib/api"
import { useQuery } from "@tanstack/react-query";

export const useOrders=()=>{

    const api=useApi();

     const {
    data:orders,
    isLoading,
    isError
  }=useQuery({
    queryKey:["orders"],
    queryFn:async()=>{
      const {data}=await api.get("/orders");
      return data.orders;
    }
  })

  return {
    orders,
    isLoading,
    isError
  }
}