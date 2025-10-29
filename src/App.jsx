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
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<h1>Services</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
