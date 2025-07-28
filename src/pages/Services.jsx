import React from 'react'
import HeroSection from '../components/ServicesComponents/ServicesHeroSection/HeroSection'
import Webdevelopment from '../components/ServicesComponents/WebDevelopmentSection/Webdevelopment'
import Digitalmarketing from '../components/ServicesComponents/DigitalMarketing/Digitalmarketing'
import Graphicdesigning from '../components/ServicesComponents/GraphicDesigning/Graphicdesigning'
import Searchengien from '../components/ServicesComponents/Seo/Searchengien'


const Services = () => {
  return (
    <div>
      <HeroSection/>
      <Webdevelopment/>
      <Digitalmarketing/>
      <Graphicdesigning/>
      <Searchengien/>

    </div>
  )
}

export default Services