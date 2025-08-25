import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Digitalmarketing } from '../Data/DigitalMarketing';
import { motion } from 'framer-motion';
import { assests } from '../../assets/assets';
import BallParticles from '../../components/Gsap/BallParticles/Ballparticles';
import Particles from '../../components/Gsap/Particles/Particles';


const DigitalMarketingSingle = () => {
  const heroRef = useRef(null);

  const { id } = useParams();
  const digitalData = Digitalmarketing.find((item) => item.id === Number(id));

  if (!digitalData) {
    return <h2>Service not found</h2>;
  }

  return (
    <div
      ref={heroRef}
      className="text-amber-400   ">
      {/* Banner section */}
      <div className="relative w-full md:w-full h-[250px] md:h-[400px] ">
        <img
          src={assests.dm}
          alt="Background"
          loading='lazy'
          className="w-full md:h-[400px] object-cover hidden md:block"
        />

        <div className='absolute inset-0 flex flex-col items-center justify-center bg-opacity-40'>

          <motion.h2
            initial={{ opacity: 0, scale: 1.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-amber-400 text-4xl md:text-5xl z-[2] font-semibold text-center mt-30">
            {digitalData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white text-center text-lg z-[2] md:text-lg mt-4 px-6 font-light max-w-2xl mx-auto ">
            "Strategic digital marketing that delivers real results — only at <span className="text-amber-400 font-semibold">DAD – The Ad</span>."
          </motion.p>

          {/*  Background Particles */}

          <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
            <div className="w-full h-full relative">
              <BallParticles triggerRef={heroRef} />
              <Particles />
            </div>
          </div>


        </div>
      </div>

      {/* Content section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          What is {digitalData.title}?
        </h3>
        <p className="text-gray-200 mb-6 whitespace-pre-line">{digitalData.content}</p>

        <div className="mt-8 space-y-4">
          <p className="text-gray-400">👉 {digitalData.point1}</p>
          <p className="text-gray-400">👉 {digitalData.point2}</p>
          <p className="text-gray-400">👉 {digitalData.point3}</p>
          <p className="text-gray-400">👉 {digitalData.point4}</p>
          <p className="text-gray-400">👉 {digitalData.point5}</p>
          <p className="text-gray-400">👉 {digitalData.point6}</p>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div className="bg-black text-white py-16 px-4">
        <h2 className="text-3xl text-amber-400 md:text-4xl font-bold text-center mb-16">{digitalData.whychoose}</h2>
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {digitalData.whychooseItems?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src={item.subimg}
                  alt={item.subtitle}
                  loading='lazy'
                  className="w-45 h-38 md:w-80 md:h-80 object-cover"
                />
              </div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <h3 className="text-xl text-amber-400 md:text-2xl font-semibold mb-3">{item.subtitle}</h3>
                {item.subpoints && Array.isArray(item.subpoints) ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    {item.subpoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">{item.subdescription}</p>
                )}              </motion.div>
            </div>
          ))}

          <Link
            to="/services"
            className="inline-block mt-8 text-amber-400 hover:underline text-3xl font-semibold text-center"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingSingle;
