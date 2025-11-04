import React from "react"
import Home from "./components/Home"
import About from "./components/about"
import Contact from "./components/contacts"
import Footer from "./components/footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
  <Home />
  <About />
  <Contact />
  <Footer />
  </>
  )
}

export default App;