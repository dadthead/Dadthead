import React from "react";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";
import { button } from "framer-motion/client";


const projects = [
  {
     category: "BL Nutri Foods",
    title: "",
    image: assests.BLNutri,
description: "Empowering wellness with BL Nutri—where science meets nutrition for a healthier you.",
    color: "text-amber-400",
    // button : "https://blnutrifoods.com/"
    
  },
  {
   category: "Yogya",
    title: "",
    image: assests.Yogyaa,
description: "Discover the elegance of Yogya—where tradition meets modern style in every frame.",
  color: "text-amber-400",
    button : "https://theyogya.com/"
  },
  {
    category: "AEFL",
    title: "",
    image: assests.aefl,
description: "Experience the artistry of AEFL—where visuals meet emotion through cinematic expression.",
   color: "text-amber-400",
    button : "https://www.aefl.co.in/"
  },
  {
    

    category: "Radhika ",
    title: "",
    image: assests.Radhika,
description: "Radhika Rayudu—redefining confidence through advanced cosmetic gynecology and personalized care.",
    color: "text-amber-400",
    button : "https://radhikacosmeticgynecology.com/"
  },
];

const Projects = () => {
  return (
    <section className="bg-black w-full pt-0">
      {/* Wavy Gradient Header */}
      <div className="w-full text-white text-center py-16 relative ">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl  font-bold text-amber-400 decoration-1 underline underline-offset-8">Our Latest Projects</h2>
          <p className="mt-4 text-white/80">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1, ease: "easeInOut", type: "spring" }}
            key={index} className="bg-black border border-gray-200 shadow-xl shadow-gray-600 hover:shadow-gray-400 rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.03] transition duration-500">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
              loading="lazy"
            />
            <div className="p-6 bg-black text-white">
              <span className={`text-sm font-semibold ${project.color}`}> -{project.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
             {/* ✅ Conditional Button Rendering Here */}
      {project.button ? (
        <a
          href={project.button}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-amber-400 text-white text-sm px-4 py-2 rounded-full hover:bg-amber-500 transition cursor-pointer">
            View Project
          </button>
        </a>
      ): (
          <button
          disabled
          className="bg-gray-500 text-white text-sm px-4 py-2 rounded-full cursor-not-allowed"
        >
          No Link Available
        </button>

      )}
            </div>
          </motion.div>
        ))}
      </div>
    </section >
  );
};

export default Projects;