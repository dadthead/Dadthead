import React from 'react'
import { assests } from '../../../assets/assets'
import { motion } from 'framer-motion'




const Abouthero = () => {
  return (
   <div className="relative w-full h-[400px]">
  <img
    src={assests.aboutbanner}
    alt="Background"
    className="w-full h-full object-cover"
  />

<div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-40">
  <motion.h2
   initial={{ opacity: 0, scale: 1.9 }}
   whileInView={{ opacity: 1, scale: 1 }}
   transition={{ duration: 1.0, ease: "easeOut" }}
   viewport={{ once: true }}
   className="text-amber-400 text-5xl font-semibold text-center">
    About Us
  </motion.h2>


  <motion.p
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-white text-center text-base md:text-lg mt-3 px-6 font-light leading-relaxed max-w-2xl playfair"
>
"Driven by purpose and values, we turn vision into value."</motion.p>

</div>



  
</div>

  )
}

export default Abouthero