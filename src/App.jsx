import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, ExternalLink, ChevronDown, Rocket, Code, Layout, Smartphone } from 'lucide-react'

// Sub-components will be imported here or defined below for brevity in this initial setup
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <div className="bg-gradient"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
