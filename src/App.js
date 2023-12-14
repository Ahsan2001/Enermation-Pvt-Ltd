import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Products } from "./pages"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
