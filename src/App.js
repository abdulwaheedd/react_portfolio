import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import Home from "./pages/home"
import About from "./pages/about"
import Skills from "./pages/skills"
import Resume from "./pages/resume"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import Navbar from "./components/NavBar"
import options from "./utils/particles.js"

const App = () => {
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])
  const particlesLoaded = (container) => {
    // console.log(container);
  }
  const handleInit = async (main) => {
    await loadFull(main)
  }
  return (
    <div className="app">
      {/* Particles js  */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
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
