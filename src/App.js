import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Skills from "./pages/skills"
import Resume from "./pages/resume"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import Navbar from "./components/NavBar"

const App = () => {
  return (
    <div className="app">
      {/* Particles js  */}
      {/* NavBar */}
      <Navbar />
      {/* main page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
