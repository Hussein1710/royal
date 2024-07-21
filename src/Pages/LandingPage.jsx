import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import SubHero from '../components/SubHero.jsx'
import Project from '../components/Project.jsx'
import Contactus from '../components/Contactus.jsx'


const LandingPage = () => {
  return (
    <div className=''>
        <Navbar />
        <Hero />
        <SubHero />
        <Project />
        <Contactus />
        <Footer />
    </div>
  )
}

export default LandingPage