
import React , { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BallParticles from '../components/Gsap/BallParticles/Ballparticles';
import Particles from '../components/Gsap/Particles/Particles';


const WebsiteDevelopment = () => {
  const heroRef = useRef(null);
  return (
    <div
    ref = {heroRef} 
      className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-50 px-4 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
         initial={{ opacity: 0, scale: 1.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}

          className="text-5xl text-center font-bold text-amber-400 mb-32">
        
          Website Development
        </motion.h1>


        {/*  Background Particles */}

    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
  <div className="w-full h-full relative">
    <BallParticles triggerRef={heroRef} />
    <Particles />
  </div>
</div>



        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 text-gray-300 text-lg sm:text-xl leading-relaxed"
        >
          <p>
            Welcome to my <span className="text-amber-400 font-semibold">Website Development</span> showcase — a modern, responsive, and performance-optimized web application built using the latest technologies.
          </p>
          <p className="mt-4">
            This project highlights my capabilities in crafting seamless digital experiences using <span className="text-amber-400 font-semibold">React.js</span> and <span className="text-amber-400 font-semibold">Tailwind CSS</span>. From clean UI design to interactive functionality and efficient deployment, every element is tailored for real-world impact.
          </p>
        </motion.div>

        {/* Video + Content Section 1 */}
        <div className="flex flex-col items-center gap-12 mb-20">
          {/* Video */}
          <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-xl shadow-amber-500/20 border border-black bg-black/50 p-4">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[360px] object-cover rounded-lg border border-gray-700"
              poster="https://digitalmarketingpartner.in/wp-content/uploads/2023/04/BON.gif.webp"
            >
              <source
                src="https://digitalmarketingpartner.in/wp-content/uploads/2023/04/BON.gif.webp"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content */}
          <div className="w-full max-w-3xl text-white p-6 rounded-lg shadow-lg bg-black/30">
            <h2 className="text-3xl font-semibold mb-4">SEO-Optimized Website Experience</h2>
            <p className="text-lg leading-relaxed">
              These SEO-focused websites are tailored for high Google rankings and performance. From lightning-fast loading to mobile responsiveness and strategic keyword placement, every detail helps convert visits into lasting impressions.
            </p>
          </div>
        </div>

        {/* Image + Content Section 2 */}
        <div className="flex flex-col items-center gap-12 mb-20">
          {/* Image */}
          <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-xl shadow-amber-500/20 border border-black bg-black/50 p-4">
            <img
              src="https://digitalmarketingpartner.in/wp-content/uploads/2023/04/Food-recipe-Tips.gif.webp"
              alt="Interactive Visual"
              className="w-full h-[360px] object-cover rounded-lg border border-gray-700"
            />
          </div>

          {/* Content */}
          <div className="w-full max-w-3xl text-white p-6 rounded-lg shadow-lg bg-black/30">
            <h2 className="text-3xl font-semibold mb-4">Creative & Interactive Design</h2>
            <p className="text-lg leading-relaxed">
              Engaging visuals, subtle animations, and interactive interfaces are crafted to elevate user engagement. This design approach enhances retention while delivering smooth and enjoyable navigation across all devices.
            </p>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed space-y-8 text-gray-200 max-w-4xl mx-auto"
        >
          <p>
            This project is a modern, fully responsive website developed using
            <span className="text-amber-400 font-semibold"> React.js </span> and
            <span className="text-amber-400 font-semibold"> Tailwind CSS</span>. It delivers seamless user experiences across devices with a minimalist design and intuitive UI.
          </p>

          <p>
            Built with <span className="text-amber-400 font-semibold">React Router</span> for dynamic routing, it includes animated sections, a featured portfolio, and a SendGrid-integrated contact form for direct communication.
          </p>

          {/* Key Features */}
          <div>
            <p className="text-amber-400 font-semibold text-xl mb-2">Key Features:</p>
            <ul className="list-none list-inside space-y-1 pl-2">
              <li>⚡ Lightning-fast performance and optimized load times</li>
              <li>📱 Fully responsive layout for all screen sizes</li>
              <li>🛠️ Modular component architecture</li>
              <li>✉️ Contact form with real-time email delivery using SendGrid</li>
              <li>🌐 SEO-friendly structure for improved visibility</li>
            </ul>
          </div>

          <p>
            This project showcases my ability to deliver polished frontend interfaces, develop modular React components, and implement real-world deployment solutions with technical precision and visual appeal.
          </p>
        </motion.div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block mt-12 text-amber-400 hover:underline text-2xl font-semibold mb-12" 
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
