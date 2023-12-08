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
