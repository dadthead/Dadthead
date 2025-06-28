import React from 'react'
import { assests } from '../../assets/assets'

const Choose = () => {
  return (
    <div className='bg-black '>
        <h1 className='text-4xl lg:text-5xl font-bold text-center mb-20 text-amber-400 '> Why Choose US </h1>
        <img src={assests.questionmark} alt="" className='  w-full  h-80 object-contain hover:grayscale-0 transition-all duration-300'/>

        
    </div>


  )
}

export default Choose