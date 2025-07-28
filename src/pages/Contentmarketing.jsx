
import React , { useRef } from 'react';
import { FaPenNib, FaVideo, FaFileAlt, FaFeatherAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import BallParticles from '../components/Gsap/BallParticles/Ballparticles';
import Particles from '../components/Gsap/Particles/Particles';

const ContentMarketingSection = () => {
  const heroRef = useRef(null);
  
  return (
    <section
    ref={heroRef}

    className="bg-black text-white py-44 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
           className="text-4xl lg:text-5xl font-extrabold text-amber-400 mb-6 z-50"
           >
            Content Marketing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
           className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
           >
            Attract, engage, and convert your audience through strategic content crafted to inform, inspire, and influence.
          </motion.p>

              {/*  Background Particles */}

    <div className="absolute inset-0  overflow-hidden pointer-events-none">
  <div className="w-full h-full relative">
    {/* <BallParticles triggerRef={heroRef} /> */}
    <Particles />
  </div>
</div>

        </div>

        {/* Why Content Marketing */}
        <motion.div
         initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.2 }}
         viewport={{ once: true }}
         className="mb-20"
         >
          <h3 className="text-3xl font-semibold text-amber-400 mb-6">Why Invest in Content Marketing?</h3>
          <ul className="text-left max-w-4xl mx-auto text-gray-300 list-disc space-y-4 px-6 sm:px-12 md:px-20 lg:px-28">
            <li><span className="text-white">Build Trust :</span> &nbsp; Establish authority with informative content your audience values.</li>
            <li><span className="text-white">Drive SEO :</span> &nbsp; Rank higher on search engines with relevant, keyword-rich articles and media.</li>
            <li><span className="text-white">Nurture Leads :</span> &nbsp; Guide prospects through the sales funnel with value-packed content at each stage.</li>
            <li><span className="text-white">Increase Engagement :</span> &nbsp; Keep your audience coming back with compelling stories and visuals.</li>
          </ul>
        </motion.div>

        {/* Icons */}
        <motion.div
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.2 }}
         viewport={{ once: true }}
         className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto text-left"
         >
          <div className="flex gap-5">
            <FaPenNib className="text-amber-400 text-4xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Blog & Article Writing</h4>
              <p className="text-gray-300">SEO-optimized, informative, and engaging content tailored to your brand’s tone.</p>
            </div>
          </div>

          <div className="flex gap-5">
            <FaVideo className="text-amber-400 text-4xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Video Content Strategy</h4>
              <p className="text-gray-300">Scriptwriting, storyboarding, and content planning for YouTube, reels, and ads.</p>
            </div>
          </div>

          <div className="flex gap-5">
            <FaFileAlt className="text-amber-400 text-4xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Ebooks & Whitepapers</h4>
              <p className="text-gray-300">Authoritative downloadable assets that convert leads and build long-term credibility.</p>
            </div>
          </div>

          <div className="flex gap-5">
            <FaFeatherAlt className="text-amber-300 text-4xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-white mb-1">Social Media Content</h4>
              <p className="text-gray-300">Short-form content optimized for engagement, sharing, and storytelling on platforms like Instagram and LinkedIn.</p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2 }}
         viewport={{ once: true }}
         className="text-center mt-20">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From blog posts to video scripts, we design content journeys that inform, persuade, and convert — turning casual readers into loyal customers.
          </p>
        </motion.div>

         <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block mt-12 text-amber-400 hover:underline text-2xl font-semibold"
          >
            ← Back to Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContentMarketingSection;
