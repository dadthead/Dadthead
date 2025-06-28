import React from "react";
import { assests } from "../../assets/assets";

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
];

const Projects = () => {
  return (
    <section className="bg-black w-full pt-0">
      {/* Wavy Gradient Header */}
      <div className="w-full bg-gradient-to-r from-black  to-black text-white text-center py-16 relative rounded-b-[50px]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl  font-bold text-amber-400">Our Latest Projects</h2>
          <p className="mt-4 text-white/80">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className={`text-sm font-semibold ${project.color}`}> -{project.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="bg-amber-400 text-white text-sm px-4 py-2 rounded-full hover:bg-amber-400 transition">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
