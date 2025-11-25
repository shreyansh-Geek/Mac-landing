import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import ProductViewer from './components/Productviewer.jsx'

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App