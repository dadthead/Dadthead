import React from "react";
import { assests } from "../../assets/assets"; // replace with your actual image path
// import { motion } from "motion/react"

const AboutSection = () => {
  return (
    <div className="relative  bg-black flex items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Decorative Logo in background */}
      <img
        src={assests.d}
        alt="D Logo"
        className="absolute w-[400px] md:w-[500px] opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      {/* Foreground content */}
      <div className="z-10 max-w-4xl text-center md:text-left space-y-6">
        {/* <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        
        className="text-2xl md:text-3xl font-bold text-yellow-400">
          "At DAD — The Ad we believe that every brand has a story"
        </motion.h2> */}
        <p className="text-gray-200 text-lg leading-relaxed">
          At DAD – The AD, We believe that every brand has a story, a soul, and a unique origin.
          Our mission is to uncover that essence and translate it into artistic expressions
          that connect deeply with your audience. We don’t just design logos or draft campaigns;
          we craft narratives that leave a lasting impact.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
