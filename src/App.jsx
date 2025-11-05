import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;