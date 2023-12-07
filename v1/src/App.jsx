import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Products } from "./pages"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
