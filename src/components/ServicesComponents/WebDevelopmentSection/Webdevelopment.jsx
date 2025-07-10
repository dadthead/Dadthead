import React from "react";
import { Link } from "react-router-dom";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";
import { a } from "motion/react-client";

function WebDevelopment() {
  const services = [
    {
      id: 1,
      title: "Landing Page",
      description: "Craft a website that showcases your products and supports online sales.",
      img: assests.LandingPage,

    },
    {
      id: 2,
      title: "Static Websites",
      description: "A blog website to share articles, tutorials, or personal stories beautifully.",
      img: assests.StaticWebsite,
    },
    {
      id: 3,
      title: "Dynamic Websites",
      description: "Present your work or projects and impress potential clients or employers.",
      img: assests.DynamicWebsite,
    },
    {
      id: 4,
      title: "E-commerce Websites",
      description: "A high-converting landing page for marketing campaigns or product launches.",
      img: assests.Ecommerce,
    },
    {
      id: 5,
      title: "Portfolio Websites",
      description: "A high-converting landing page for marketing campaigns or product launches.",
      img: "/images/portfolio.png",
    },
  ];

  return (
    <div className="py-16 px-5 webdevelopment text-center items-center justify-center">
      <h2 className="text-4xl font-semibold mb-10 text-amber-400">Web Development</h2>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex bg-black border-2 border-white rounded-2xl p-4 py-5 h-[300px] w-full sm:w-[300px] lg:w-[300px] text-left shadow-lg hover:translate-y-[-8px] hover:bg-transparent transition-transform duration-400"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-18 h-18 object-contain mr-3 mt-6 "
              />
              <div>
                <h3 className="text-base font-semibold py-10 mb-1 text-gray-200">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{service.description}</p>
                <Link to={`/service/${service.id}`} className="text-amber-400 font-medium hover:underline">
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

export default WebDevelopment;
