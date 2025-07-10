import React from "react";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";


const projects = [
  {
    category: "Abhee Smart Homes",
    title: "",
    image: assests.abheesmart,
    description: "A creative fruit arrangement used in modern food photography and branding.",
    color: "text-amber-400",
  },
  {
    category: "BL Nutri Foods",
    title: "",
    image: assests.blnutri,
    description: "A sleek workspace UI design for startups and small businesses.",
    color: "text-amber-400",
  },
  {
    category: "Global Diagnostics",
    title: "",
    image: assests.diagnos,
    description: "Explore breathtaking sunset views captured during a coastal retreat.",
    color: "text-amber-400",
  },
  {
    category: "Global Diagnostics",
    title: "",
    image: assests.diagnos,
    description: "Explore breathtaking sunset views captured during a coastal retreat.",
    color: "text-amber-400",
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
            transition={{ duration: 0.3, delay: index * 0.3, ease: "easeInOut", type: "spring" }}
            key={index} className="bg-black border border-gray-200 shadow-xl shadow-gray-600 hover:shadow-gray-400 rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.03] transition duration-500">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 bg-black text-white">
              <span className={`text-sm font-semibold ${project.color}`}> -{project.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <button className="bg-amber-400 text-white text-sm px-4 py-2 rounded-full hover:bg-amber-400 transition cursor-pointer">
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section >
  );
};

export default Projects;