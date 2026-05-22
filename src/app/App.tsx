import QueryProvider from './providers/QueryProvider'
import { VinContextProvider } from './providers/VinContextProvider'
import AppRouter from './router/AppRouter'


export default function App(): React.JSX.Element {

  return (
    <QueryProvider>
      <VinContextProvider>
        <AppRouter />
      </VinContextProvider>
    </QueryProvider>
  )
}
