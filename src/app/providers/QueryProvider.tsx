import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


type Props = {
  children: React.ReactNode
}

const queryClient = new QueryClient({
   defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
    },
  },
})

export default function QueryProvider({children}: Props): React.JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

}