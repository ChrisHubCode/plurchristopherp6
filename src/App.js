import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Error from "./pages/error/Error";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import House from "./pages/House/House";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/fiche-logement/:id" element={<House />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
