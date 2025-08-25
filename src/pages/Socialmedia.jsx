

import React, { useRef } from 'react';
import { ThumbsUp, Hash, LineChart, Megaphone, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BallParticles from '../components/Gsap/BallParticles/Ballparticles';
import Particles from '../components/Gsap/Particles/Particles';

const SocialMediaOptimization = () => {
  const heroRef = useRef(null);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-20 px-4 md:px-16 lg:px-28 z-[2]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-5xl text-center font-bold text-amber-400 mb-32"
        >
          Social Media Optimization
        </motion.h1>

        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-full h-full relative">
            <BallParticles triggerRef={heroRef} />
            <Particles />
          </div>
        </div>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg sm:text-xl text-center max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          I help businesses shine on platforms like Instagram, Facebook, LinkedIn & more using targeted strategies that grow engagement, build trust, and boost conversions.
        </motion.p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <ThumbsUp className="text-3xl text-amber-400" />,
              title: "Engagement Growth",
              desc: "Boost your likes, comments, and shares with tailored content and post timing."
            },
            {
              icon: <Hash className="text-3xl text-amber-400" />,
              title: "Hashtag Targeting",
              desc: "Use powerful hashtags and trends to increase visibility across platforms."
            },
            {
              icon: <LineChart className="text-3xl text-amber-400" />,
              title: "Content Strategy",
              desc: "Plan, schedule, and create meaningful posts that connect with your audience."
            },
            {
              icon: <Megaphone className="text-3xl text-amber-400" />,
              title: "Brand Awareness",
              desc: "Craft your social image with cohesive visuals and tone."
            },
            {
              icon: <Users className="text-3xl text-amber-400" />,
              title: "Audience Insights",
              desc: "Understand who your audience is and what content performs best."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-gray-700 p-6 rounded-xl hover:shadow-xl hover:shadow-amber-500/30 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-amber-300">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Outro Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-300 text-lg sm:text-xl leading-loose"
        >
          <p>
            My SMO approach doesn’t stop at content — I focus on strategy, analytics, and consistent brand identity to turn casual viewers into loyal followers. Let's elevate your online presence, organically.
          </p>
        </motion.div>

        {/* Back Link */}
        <div className="text-center mt-24 mb-28">
          <Link
            to="/portfolio"
            className="inline-block text-amber-400 hover:underline text-2xl font-semibold"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaOptimization;
