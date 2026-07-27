import { VinContextProvider } from './providers/VinContextProvider'
import AppRouter from './router/AppRouter'


export default function App(): React.JSX.Element {

  return (
      <VinContextProvider>
        <AppRouter />
      </VinContextProvider>
  )
}
