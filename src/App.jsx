import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";

import Index from "./pages/Index";
import About from "./pages/About";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<h1>Services</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
