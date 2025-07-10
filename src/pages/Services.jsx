import React from 'react'
import HeroSection from '../components/ServicesComponents/ServicesHeroSection/HeroSection'
import Webdevelopment from '../components/ServicesComponents/WebDevelopmentSection/Webdevelopment'
import Digitalmarketing from '../components/ServicesComponents/DigitalMarketing/Digitalmarketing'
import Seo from '../components/ServicesComponents/SeoSection/Seo'
import Graphicdesigning from '../components/ServicesComponents/GraphicDesigning/Graphicdesigning'


const Services = () => {
  return (
    <div>
      <HeroSection/>
      <Webdevelopment/>
      <Digitalmarketing/>
      <Graphicdesigning/>
      <Seo/>
  

    </div>
  )
}

export default Services