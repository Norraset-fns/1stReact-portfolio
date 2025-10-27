import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-blue-900">
        <NavBar />
        <HeroBanner />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-white">Hello world!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
