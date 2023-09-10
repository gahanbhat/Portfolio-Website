import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
function App() {
  

  return (
    <>
      <div>
        
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />

      </div>
      
    </>
  )
}

export default App
