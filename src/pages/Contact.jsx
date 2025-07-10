import React from 'react'
import Contactform from '../components/ContactComponents/ContactSection/Contactform'
// import Herocontact from '../components/ContactComponents/ContactHeroSection/Herocontact'
import Bgcitysky from '../components/ContactComponents/AddressSection/Bgcitysky'

const Contact = () => {
  return (
    <div>
      {/* <Herocontact/> */}
      <Contactform/>
      <Bgcitysky/>
    </div>
  )
}

export default Contact 