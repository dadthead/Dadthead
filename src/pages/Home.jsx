import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import D_content from '../components/Hero/D_content'
import Servicescards from '../components/Hero/Services/Servicescards'
import Ourprojects from '../components/Hero/Ourprojects'
import Client from '../components/Hero/Clients'
import ContactSection from '../components/Hero/Contactus/ContactSection'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <D_content />
      <Servicescards/>
      <Ourprojects/>
      <Client/>
      <ContactSection/>
      
      
     
 
     
    </div>
  )
}

export default Home
