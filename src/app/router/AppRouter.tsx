import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import Header from "@/widgets/Header/Header"
import Variables from "@/pages/Variables/Variables"
import VariableDetails from "@/pages/VariableDetails/VariableDetails"
import PageNotFound from "@/pages/PageNotFound/PageNotFound"
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary"

export default function AppRouter(): React.JSX.Element {
  
  return (
    <HashRouter>
      <Header />
      <main>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={< HomePage />}/>
            <Route path='/variables' element={<Variables />}/>
            <Route path='/variables/:variableId' element={<VariableDetails />}/>
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </HashRouter>
  )
}