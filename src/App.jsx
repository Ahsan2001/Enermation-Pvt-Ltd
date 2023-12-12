import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Products } from "./pages"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor"




function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="App">

        {/* <AnimatedCursor color="#fff"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: '#5d5d5e'
          }}
          outerStyle={{
            border: '3px solid #c7c5c5'
          }}
          /> */}


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
