import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "@/pages/HomePage/HomePage"
import Header from "@/widgets/Header"
import Variables from "@/pages/Variables/Variables"
import VariableDetails from "@/pages/VariableDetails/VariableDetails"

export default function AppRouter(): React.JSX.Element {
  
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/variables' element={<Variables />}/>
          <Route path='/variables/:label' element={<VariableDetails />}/>
        </Routes>
      </main>
    </HashRouter>
  )
}