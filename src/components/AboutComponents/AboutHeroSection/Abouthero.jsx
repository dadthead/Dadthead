import React from 'react'
import { assests } from '../../../assets/assets'




const Abouthero = () => {
  return (
   <div className="relative w-full h-[400px]">
  <img
    src={assests.aboutbanner}
    alt="Background"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
    <h2 className="text-amber-400 text-6xl font-bold text-center">
      About Us
    </h2>
  </div>

  
</div>

  )
}

export default Abouthero