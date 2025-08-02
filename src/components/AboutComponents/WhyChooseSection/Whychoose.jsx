import React from 'react'
import { assests } from '../../../assets/assets'
import { motion } from 'framer-motion'

const Choose = () => {
  return (
    
  <div className="bg-black w-full flex flex-col md:flex-row items-center justify-between">
  {/* Text Section */}
  <motion.div
    className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-12"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h1 className="text-2xl md:text-4xl lg:text-7xl md:font-bold  text-amber-400 font-stretch-ultra-condensed  text-center playfair">
      Why Choose US
    </h1>
  </motion.div>

  {/* Image Section */}
  <motion.div
    className="w-full md:w-1/2 flex justify-center items-center p-4"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img
      src={assests.questionmark}
      alt="Question Mark"
      className="w-full md:w-[80%] lg:w-[70%] h-auto object-contain"
      loading='lazy'
    />
  </motion.div>
</div>




  )
}

export default Choose