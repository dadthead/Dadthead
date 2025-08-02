import React from 'react'
import { assests } from '../../../assets/assets'
import { motion } from 'framer-motion'

const HeroCareers = () => {
  return (
    <div className='relative w-full h-[400px]'>
      <img
        src={assests.Careerbanner}
        alt="Background"
        loading='lazy'
        className="md:w-1/2  w-1/2 h-full object-cover opacity-90"
      />
       

        <div className="absolute inset-0 flex flex-col  py-16 px-16  items-center justify-center  bg-opacity-20">
  <motion.h2
    initial={{ opacity: 0, scale: 1.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-4 px-100 tracking-tight "
  >
    Careers
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-lg md:text-xl text-white  italic tracking-wide max-w-xl playfair"
  >
    Where Ideas Hustle, Brands Roar, and Creatives Thrive.
  </motion.p>
</div>


    </div>
  )
}

export default HeroCareers