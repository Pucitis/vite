import React from 'react'
import Intro from './components/intro'
import Timeline from './components/timeline'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
import Footer from './components/footer'
import Contact from './components/contact'
import NavBar from './components/navBar'
import NavButton from './components/navButton'
//import './App.css'

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Intro />
      
      <Portfolio />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
      

    </div>
  )
}

export default App
