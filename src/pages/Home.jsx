import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/HomeComponents/HomeHeroSection/Hero'
import HeroSecondPage from '../components/HomeComponents/SecondPage/HeroSecondPage'
import Ourprojects from '../components/HomeComponents/ProjectsSection/Ourprojects'
import Servicescards from '../components/HomeComponents/Services/Servicescards'
import Clients from '../components/HomeComponents/OurClientsSection/Clients'
import Testimonials from '../components/AboutComponents/Testimonials/Testimonials'
import ContactSection from '../components/HomeComponents/ContactSection/ContactSection'

const Home = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <HeroSecondPage/>
    <Servicescards/>
    <Ourprojects/>
    <Clients/>
    <Testimonials/>
    <ContactSection/>
  
  
    </div>
  )
}

export default Home
