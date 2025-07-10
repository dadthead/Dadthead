import React from "react";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <div
      className="mt-20 py-12 px-4 relative w-full"
      style={{
        backgroundImage: `url(${assests.waysline})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col md:flex-row text-white max-w-5xl mx-auto rounded-lg overflow-hidden justify-between">
        {/* Left side image */}
        <div className="relative flex items-center md:w-1/2 p-6">
          <motion.img
            src={assests.contactman}
            alt="Contact image"
            className="relative z-1 w-3/4"
            animate={{
              rotate: [0, 5, -5, 0], 
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Right side form */}
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-center md:text-left">Contact US</h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-gray-300 focus:border-amber-400   outline-none py-2 transition duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-300 focus:border-amber-400 outline-none py-2 transition duration-300"
            />
            <textarea
              placeholder="Your Message"
              className="bg-transparent border-b border-gray-300 focus:border-amber-400 outline-none py-2 transition duration-300 resize-none h-24"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent border-2 border-amber-400 hover:bg-amber-400 text-white w-1/2 rounded-full py-2 font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
