// import React from "react";
// import ServiceCard from "./ServiceCard";
// import { FaPenFancy, FaGlobe, FaShareAlt, FaEnvelope, FaKeyboard } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Servicescards = () => {
//   const services = [
//     {
//       icon: <FaPenFancy className="text-amber-400 text-3xl" />,
//       title: "Branding",
//       description: "Creating strong brand identities.",
//       link: "#",
//     },
//     {
//       icon: <FaGlobe className="text-amber-400 text-3xl" />,
//       title: "Website Development",
//       description: "Expert in web design, React, HTML, CSS, JS.",
//       link: "/services", // Service page path
//     },
//     {
//       icon: <FaShareAlt className="text-amber-400 text-3xl" />,
//       title: "Social Media",
//       description: "Drive engagement through creative posts.",
//       link: "/services",  // Service page path
//     },
//     {
//       icon: <FaShareAlt className="text-amber-400 text-3xl" />,
//       title: "Digital Marketing",
//       description: "PPC, Meta Ads, branding strategies.",
//       link: "/services",   // Service page path
//     },
//     {
//       icon: <FaKeyboard className="text-amber-400 text-3xl" />,
//       title: "Content Writing",
//       description: "High-quality content to convert audience.",
//       link: "/services",   // Service page path
//     },
//     {
//       icon: <FaEnvelope className="text-amber-400 text-3xl" />,
//       title: "SEO",
//       description: "Boost your site visibility on search engines.",
//       link: "/services",   // Service page path
//     },
//   ];

//   return (
//     <div className="bg-black py-20 px-6 text-center services_bg">
//       <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-amber-400 underline underline-offset-8">
//         Our Services
//       </h2>

//       <motion.div
//         className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         {services.map((service, index) => (
//           <Link to={service.link} key={index}>
//             <ServiceCard {...service} />
//           </Link>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Servicescards;











import React from "react";
import ServiceCard from "./ServiceCard";
import { FaPenFancy, FaGlobe, FaShareAlt, FaEnvelope, FaKeyboard } from "react-icons/fa";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
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
      link: "/services",
    },
    {
      icon: <FaShareAlt className="text-amber-400 text-3xl" />,
      title: "Social Media ",
      description: "Craft compelling social media posts that capture attention and drive engagement.",
      link: "/services",
    },
    {
      icon: <FaShareAlt className="text-yellow-400 text-3xl" />,
      title: "Digital marketing",
      description: "Enhance your reach with DMP’s digital marketing services. We excel in PPC, Meta Ads, branding, and user persona strategies",
      link: "/services",
    },
    
     {
      icon: <FaKeyboard className="text-amber-400 text-3xl" />,
      title: "Content Writing",
      description: "Elevate your message with DMP’s Content Writing. We deliver high-quality content to engage and convert your audience.",
      link: "/services",
    },
    {
      icon: <FaEnvelope className="text-amber-400 text-3xl" />,
      title: "Search Engine Optimization",
      description: "Drive engagement and conversions with our expert email marketing services.",
      link: "/services",
    },

    
  ];

  return (
    <div className="bg-blackmin-h-screen  py-20 px-6 flex flex-col items-center  services_bg">
    
     <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-amber-400 text-center underline decoration-1 underline-offset-8">Our Services</h2>
     
 <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default Servicescards;
