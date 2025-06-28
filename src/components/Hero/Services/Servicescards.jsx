import React from "react";
import ServiceCard from "./ServiceCard";
import { FaPenFancy, FaGlobe, FaShareAlt, FaEnvelope, FaKeyboard } from "react-icons/fa";

const Servicescards = () => {
  const services = [
    {
      icon: <FaPenFancy className="text-amber-400 text-3xl" />,
      title: "Branding",
      description: "Creating written content for your blog posts to engage and inform readers.",
      link: "#",
    },
    {
      icon: <FaGlobe className="text-amber-400 text-3xl" />,
      title: "Website Development",
      description: "Elevate your online presence with DAD. Expert in web design, WordPress, Shopify, and React, HTML, CSS, JS solutions.",
      link: "#",
    },
    {
      icon: <FaShareAlt className="text-amber-400 text-3xl" />,
      title: "Social Media ",
      description: "Craft compelling social media posts that capture attention and drive engagement.",
      link: "#",
    },
    {
      icon: <FaShareAlt className="text-yellow-400 text-3xl" />,
      title: "Digital marketing",
      description: "Enhance your reach with DMP’s digital marketing services. We excel in PPC, Meta Ads, branding, and user persona strategies",
      link: "#",
    },
    {
      icon: <FaKeyboard className="text-amber-400 text-3xl" />,
      title: "Web Desiner",
      description: "Persuade your audience with exceptional ad copy that converts.",
      link: "#",
    },
     {
      icon: <FaKeyboard className="text-amber-400 text-3xl" />,
      title: "Content Writing",
      description: "Elevate your message with DMP’s Content Writing. We deliver high-quality content to engage and convert your audience.",
      link: "#",
    },
    {
      icon: <FaEnvelope className="text-amber-400 text-3xl" />,
      title: "Search Engine Optimization",
      description: "Drive engagement and conversions with our expert email marketing services.",
      link: "#",
    },

    
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-amber-400 text-center">Our Services</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Servicescards;
