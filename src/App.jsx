import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden selection:bg-[#8C5FF5] selection:text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
