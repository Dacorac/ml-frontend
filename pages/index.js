import Head from 'next/head'
import ItemList from '../src/components/ItemList/ItemList'
import fetchItems from '../src/services/items.service'
import { QueryClientProvider, QueryClient, useQuery } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: fetchItems,
    },
  },
})

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
            <ItemList keyword="Motorola g" />
      </QueryClientProvider>
    </>
  )
}
