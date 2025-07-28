import React from 'react'
import { assests } from '../../../assets/assets'
import { motion } from 'framer-motion'

const Herosection = () => {
  return (
    <div className="relative w-full h-[400px]">
      <img
        src={assests.portfolio_bg}
        alt="Background"
        className="w-full h-full object-cover opacity-40"
      />
    
       <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-40">
             <motion.h2
              initial={{ opacity: 0, scale: 1.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-amber-400 text-5xl font-semibold text-center">
               Portfolio
             </motion.h2>

             <motion.p 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
             className="text-white text-center text-lg md:text-lg mt-3 px-6 font-intern leading-relaxed max-w-2xl ">
"Our work shows our passion. At DAD – The Ad, every project tells a story."             </motion.p>
             </div>
    
      
    </div>

  )
}

export default Herosection