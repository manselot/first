import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Counter from "./components/Counter"
import Tutorial from "./pages/Tutorial"
import Index from "./pages/Index"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Index/>}/>
        <Route path={"/index"} element={<Index/>}/>
        <Route path={"/counter"} element={<Counter/>}/>
        <Route path={"/tutorial"} element={<Tutorial/>}/>
      </Routes>
    </Layout>
  )
}
