import React, { useRef, useEffect } from 'react';
import { assests } from '../../../assets/assets';
import Particles from '../../Gsap/Particles/Particles';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt'; // ✅ import vanilla-tilt

const Bgcitysky = () => {
  const triggerRef = useRef(null);
  const tiltRef = useRef(null); // ✅ Create a ref for tilt

  // Initialize VanillaTilt
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.05,
      });
    }

    // Clean up
    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      className="relative bg-[#1E1E1E] p-6 rounded-lg shadow-lg text-center overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-4xl font-semibold mb-10 text-amber-400 z-10 relative">Our Office</h2>

      {/* Image & content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-0 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* ✅ Add ref here for tilt */}
          <img
            ref={tiltRef}
            src={assests.buldingimg}
            alt="Guntur"
            className="w-full lg:w-[70%] object-contain"
          />
        </motion.div>

        {/* Address content */}
        <div className="py-16 px-5 text-center lg:text-left max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-amber-400 mt-4 lg:mt-0">Guntur</h2>
            <p className="text-gray-300 mt-2">
              Digital Marketing Partner, Near Vajrams, 4th Ln, 13th Cross, Brodipet, Guntur, Andhra Pradesh - 522002
            </p>
            <p className="text-gray-300 mt-2">
              Mobile: +91 83330 79696
            </p>
          </motion.div>
        </div>
      </div>

      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles triggerRef={triggerRef} />
      </div>
    </div>
  );
};

export default Bgcitysky;
