import React from 'react'
import { assests } from '../../../assets/assets'

const Herosection = () => {
  return (
    <div className="relative w-full h-[700px]">
      <img
        src={assests.portfolio_bg}
        alt="Background"
        className="w-full h-full object-cover"
      />
    
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
        <h2 className="text-white text-6xl font-bold text-center ">
          Portfolio
        </h2>
      </div>
    
      
    </div>

  )
}

export default Herosection