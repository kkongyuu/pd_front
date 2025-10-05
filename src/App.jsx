import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

//page
import Home from './page/Home'
import Package from './page/Package'
import Currentjob from './page/Currentjob'

function App() {
  useEffect(() => {
    // โหลด particles.js
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 120 },
            color: { value: "#ffcc66" },
            shape: { type: "circle" },
            opacity: { value: 0.1 },
            size: { value: 3.5 },
            line_linked: {
              enable: true,
              distance: 130,
              color: "#ffcc66",
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              random: true,
              out_mode: "bounce"
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: { opacity: 0.5 }
              },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        })
      }
      // ซ่อน loading overlay
      const overlay = document.getElementById('loading-overlay')
      if (overlay) overlay.classList.add('hidden')
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // ...rest of code...
  return (
    <>
      <div id="loading-overlay">
        <div className="spinner-logo">PD</div>
      </div>
      <div id="scroll-bar"></div>
      <div id="particles-js"></div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/current" element={<Currentjob />} />
          <Route path="/contact" element={<Contact/>} />
          {/* เพิ่ม Route อื่นๆ ได้ที่นี่ */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App