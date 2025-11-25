import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import ProductViewer from './components/Productviewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"
import Showcase from './components/showcase.jsx'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
    </main>
  )
}

export default App