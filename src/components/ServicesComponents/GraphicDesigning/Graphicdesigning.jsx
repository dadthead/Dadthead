import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "../../Gsap/Particles/Particles";
import { Graphicdesidning } from "../../Data/Graphicdesidning";

function Graphicdesigning() {
  const triggerRef = useRef(null);


  return (
    <div className="relative py-16 px-5 text-center items-center justify-center">
      {/* Particles background */}
      <div className="absolute inset-0 -z-10">
        <Particles triggerRef={triggerRef} />
      </div>

      <h2 className="text-4xl font-semibold mb-10 text-amber-400">Graphic Designing</h2>
      
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center gap-6">
          {Graphicdesidning.map((service) => (
            <div
              key={service.id}
              className="flex bg-black border-2 border-white rounded-2xl  hover:border-amber-400 p-4 py-5 h-[300px] w-full sm:w-[300px] lg:w-400px text-left shadow-lg hover:translate-y-2 hover:bg-transparent transition-transform duration-400"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16 object-contain mr-3 mt-6 "
              />
              <div>
                <h3 className="text-base font-semibold py-5 text-gray-200">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{service.description}</p>

                <Link
                  className="text-amber-400 hover:underline underline-offset-2"
                  to={`/graphicdesign/${service.id}`}
                >
                  Find out more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Graphicdesigning;
