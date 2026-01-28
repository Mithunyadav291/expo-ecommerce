import { View, Text } from 'react-native'
import React from 'react'
import { useApi } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { Product } from '@/types'

const useProducts = () => {
    const api=useApi()
 const result = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get<Product[]>("/products");
      return data;
    },
  });
  // console.log(result)
  return result;
}

export default useProducts