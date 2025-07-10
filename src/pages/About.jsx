import React from 'react'
import Abouthero from '../components/AboutComponents/AboutHeroSection/Abouthero'
import Content from '../components/AboutComponents/Ourstorycontent/Content'
import Aboutcontent from '../components/AboutComponents/AboutContent/Aboutcontent'
import Testimonials from '../components/AboutComponents/Testimonials/Testimonials'
import Whychoose from '../components/AboutComponents/WhyChooseSection/Whychoose'



const About = () => {
  return (
    <div>
      <Abouthero />
      <Content />
      <Whychoose />
      <Testimonials />
      <Aboutcontent />



    </div>
  )
}

export default About