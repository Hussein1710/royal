import React from 'react'
import Navbar from '../components/Navbar'
import AboutusHero from '../components/About/AboutusHero'
import AboutusSubHero from '../components/About/AboutusSubHero'
import Footer from '../components/Footer'
import Aboutus from '../components/About/Aboutus'
// import Mission from '../components/About/Mission'
import Core from '../components/About/Core'
import BeYourself from '../components/About/BeYourself'
import Contactus from '../components/Contactus'

const AboutUsPage = () => {
  return (
    <div>
        <Navbar />
        <AboutusHero />
        <AboutusSubHero />
        <Aboutus />
        <Core />
        <BeYourself />
        <Contactus />
        <Footer />
    </div>
  )
}

export default AboutUsPage