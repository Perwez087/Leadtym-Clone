import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Offer from './components/Offer'
import Community from './components/Community'
import Join from './components/Join'
// import Slider from './components/Slider'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <Offer/>
      <Community/>
      <Join/>
      {/* <Slider/> */}
      <Footer/>
    </div>
  )
}

export default App
