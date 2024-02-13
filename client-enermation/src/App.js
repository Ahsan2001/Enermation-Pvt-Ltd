import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BusinessUnit, Home, Partners, Platforms,About,Contact } from "./pages"
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
          <Route path="/bussiness-unit" element={<BusinessUnit />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
)
}

export default App
