import Head from 'next/head'
import ItemList from '../src/components/ItemList'
import styles from '../styles/Home.module.css'
import { QueryClientProvider, QueryClient, useQuery } from "react-query"

const queryClient = new QueryClient()

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
            <ItemList />
      </QueryClientProvider>
    </>
  )
}
