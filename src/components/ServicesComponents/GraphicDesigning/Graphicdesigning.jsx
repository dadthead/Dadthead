import React from "react";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";

function Graphicdesigning() {
  const services = [
    {
      title: "Graphic Desing",
      description:
        "Creating a distinctive visual symbol to represent a brand or company.",
      img: assests.logo,
      link: "Find out more",
    },
   
  ];

  return (
    <div className="py-16 px-5 text-center graphic">
      <h2 className="text-4xl font-semibold mb-10 text-amber-400">Graphic Designing</h2>
      <motion.div
  className="flex flex-col md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex bg-black border-2 border-white rounded-2xl p-4 py-5 h-[300px] w-full sm:w-[300px] lg:w-400px text-left shadow-lg hover:translate-y-[-8px] hover:bg-transparent transition-transform duration-400"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 object-contain mr-3 mt-6 "
            />
            <div>
              <h3 className="text-base font-semibold py-10 mb-1 text-gray-200">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{service.description}</p>
              <a
                href="#"
                className="text-amber-400 font-medium hover:underline"
              >
                {service.link}
              </a>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
}

export default Graphicdesigning;
