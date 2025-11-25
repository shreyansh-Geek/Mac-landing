import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import ProductViewer from './components/Productviewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"
import Showcase from './components/showcase.jsx'
import Performance from './components/performance.jsx'
import Features from './components/Features.jsx'
import Highlights from './components/Highlights.jsx'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
    </main>
  )
}

export default App