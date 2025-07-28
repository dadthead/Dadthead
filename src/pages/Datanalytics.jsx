import React, { useRef } from 'react';
import {
  FaChartLine, FaDatabase, FaCogs, FaRobot, FaSearchDollar, FaRegChartBar, FaGlobeAsia,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BallParticles from '../components/Gsap/BallParticles/Ballparticles';
import Particles from '../components/Gsap/Particles/Particles';

const DataAnalyticsSection = () => {
  const heroRef = useRef(null);

  const analyticsServices = [
    {
      icon: <FaChartLine className="text-pink-500 text-3xl" />,
      title: "Business Intelligence",
      desc: "Transform raw data into actionable insights using advanced reporting and real-time dashboards.",
    },
    {
      icon: <FaDatabase className="text-blue-400 text-3xl" />,
      title: "Data Warehousing",
      desc: "Centralize and manage your data efficiently for quick access, integration, and historical analysis.",
    },
    {
      icon: <FaCogs className="text-green-500 text-3xl" />,
      title: "Predictive Analytics",
      desc: "Use historical data and ML models to forecast trends and make smarter business decisions.",
    },
    {
      icon: <FaRobot className="text-purple-500 text-3xl" />,
      title: "AI-Powered Automation",
      desc: "Streamline processes using AI and analytics to reduce manual efforts and boost efficiency.",
    },
    {
      icon: <FaSearchDollar className="text-amber-400 text-3xl" />,
      title: "Customer Insights",
      desc: "Understand buyer behavior and preferences through behavioral data and segmentation analysis.",
    },
    {
      icon: <FaRegChartBar className="text-red-400 text-3xl" />,
      title: "Performance Monitoring",
      desc: "Track key metrics and KPIs in real-time to optimize your operations and marketing outcomes.",
    },
    {
      icon: <FaGlobeAsia className="text-cyan-400 text-3xl" />,
      title: "Scalable Solutions",
      desc: "Deploy data solutions that scale with your business growth and adapt to changing needs.",
    },
  ];

  return (
    <section
    ref = {heroRef}
     className="bg-black text-white py-40 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 z-[2]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-amber-400 mb-4 z-[2]"
          >
            Data Analytics
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto "
          >
            Unlock the power of your data with scalable analytics solutions that drive smarter decisions and measurable outcomes.
          </motion.p>

           {/*  Background Particles */}

    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
  <div className="w-full h-full relative">
    <BallParticles triggerRef={heroRef} />
    <Particles />
  </div>
</div>
        </div>

        {/* Why Data Analytics */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-6 text-center">
            Why Choose Data Analytics?
          </h3>
          <ul className="text-base text-gray-300 space-y-4 max-w-4xl mx-auto list-disc px-6 sm:px-12 md:px-20 lg:px-28 leading-relaxed">
            <li><span className="text-gray-400 font-medium">Data-Driven Decisions :</span> &nbsp; Empower every strategy with facts, not assumptions.</li>
            <li><span className="text-gray-400 font-medium">Real-Time Insights :</span> &nbsp; Get instant visibility into performance and trends.</li>
            <li><span className="text-gray-400 font-medium">Improved Efficiency :</span> &nbsp; Identify bottlenecks and streamline operations using data.</li>
            <li><span className="text-gray-400 font-medium">Competitive Advantage :</span> &nbsp; Stay ahead by predicting market shifts before they happen.</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-amber-400 text-center mb-10">
            Our Data Analytics Services:
          </h3>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {analyticsServices.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Text */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-20">
            From dashboards to forecasts, we help you convert raw data into opportunities that shape the future of your business.
          </p>

          <Link
            to="/portfolio"
            className="inline-block text-amber-400 hover:underline text-2xl font-semibold"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsSection;
