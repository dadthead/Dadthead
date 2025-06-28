import React from "react";
import { motion } from "framer-motion";
import Backgroundui from "./Backgroundui";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#2c2a2a] text-white relative overflow-hidden pt-20 px-4 md:px-16 lg:px-28">
      {/* Content Wrapper with justify-between */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-40">

        {/* Left: Text & Form */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:px-10 md:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400"
          >
            <span className="block">Boss is Branding</span>
            <span className="block">Magician in Marketing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl md:px-10 text-gray-200 leading-relaxed"
          >
            Your one-stop digital marketing partner
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex sm:flex-row gap-4 justify-center md:justify-start md:px-10"
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-2 rounded-full border border-gray-400 bg-transparent text-white text-center sm:text-left w-50 sm:w-auto"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Send
            </button>
          </motion.form>
        </div>

        {/* Right: Background UI */}
        <div className="md:w-1/2  flex justify-center md:justify-center">
          <Backgroundui className="w-full max-w-full pt-5" />
        </div>
      </div>

      {/* Yellow Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffc107"
            fillOpacity="1"
            d="M0,192L40,186.7C80,181,160,171,240,154.7C320,139,400,117,480,112C560,107,640,117,720,144C800,171,880,213,960,224C1040,235,1120,213,1200,197.3C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
