
import React, { useRef } from "react";
import {
  Search, Megaphone, LineChart, Bolt, Crosshair, Globe, Clock,          
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BallParticles from "../components/Gsap/BallParticles/Ballparticles";
import Particles from "../components/Gsap/Particles/Particles";

const SEMSection = () => {
  const heroRef = useRef(null);

  const services = [
    {
      icon: <Search className="text-blue-500 w-8 h-8" />,
      title: "Google & Bing Ads",
      desc: "Expert ad management across search, display, and shopping to attract the right customers.",
    },
    {
      icon: <Megaphone className="text-green-500 w-8 h-8" />,
      title: "Ad Copywriting & A/B Testing",
      desc: "Crafted content with continuous testing to optimize ad performance and reduce costs.",
    },
    {
      icon: <LineChart className="text-orange-400 w-8 h-8" />,
      title: "Performance Monitoring",
      desc: "Detailed daily tracking and reporting with conversion-focused insights.",
    },
    {
      icon: <Crosshair className="text-yellow-400 w-8 h-8" />,
      title: "Advanced Targeting",
      desc: "Leverage behavior, location, and demographics for razor-sharp audience segmentation.",
    },
    {
      icon: <Bolt className="text-pink-500 w-8 h-8" />,
      title: "Instant Traffic Surge",
      desc: "Launch campaigns fast and gain immediate traffic and visibility.",
    },
    {
      icon: <Globe className="text-cyan-400 w-8 h-8" />,
      title: "Retargeting Campaigns",
      desc: "Reconnect with users who didn’t convert and boost return on ad spend.",
    },
    {
      icon: <Clock className="text-purple-500 w-8 h-8" />,
      title: "Time-Specific Ads",
      desc: "Run ads during peak user activity times for better results and ROI.",
    },
  ];

  return (
    <section ref={heroRef} className="bg-black text-white py-40 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-amber-400 mb-4"
          >
            Search Engine Marketing (SEM)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Drive high-quality traffic instantly with paid ads that are optimized
            for targeting, conversions, and return on investment.
          </motion.p>

          {/* Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-full h-full relative">
              <BallParticles triggerRef={heroRef} />
              <Particles />
            </div>
          </div>
        </div>

        {/* Why Choose SEM */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-6 text-center">
            Why Choose SEM?
          </h3>
          <ul className="text-base text-gray-300 space-y-4 max-w-4xl mx-auto list-disc px-6 sm:px-12 md:px-20 lg:px-28 leading-relaxed">
            <li>
              <span className="text-gray-400 font-medium">Instant Visibility :</span>{" "}
              Appear at the top of search results when users are searching actively.
            </li>
            <li>
              <span className="text-gray-400 font-medium">Laser-Targeted Reach :</span>{" "}
              Filter by device, location, audience, and timing to hit your ideal
              segment.
            </li>
            <li>
              <span className="text-gray-400 font-medium">Performance-Based :</span>{" "}
              Pay only per click. Track conversions, CTRs, and optimize as you go.
            </li>
            <li>
              <span className="text-gray-400 font-medium">Scalable Campaigns:</span>{" "}
              Easily adjust campaigns to suit budget and business goals.
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-semibold text-amber-400 text-center mb-10">
            Our SEM Services Include:
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                {service.icon}
                <div>
                  <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-20">
            From product launches to aggressive lead generation, our SEM services are
            tailored to scale your digital presence with measurable growth.
          </p>

          <Link
            to="/portfolio"
            className="inline-block text-amber-400 hover:underline text-2xl font-semibold "
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEMSection;
