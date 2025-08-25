import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Facebook, Megaphone, Hash } from "lucide-react"; 
// ✅ Use Megaphone instead of Bullhorn
// ✅ Use Hash instead of Hashtag
import { Link } from "react-router-dom";
import BallParticles from "../components/Gsap/BallParticles/Ballparticles";
import Particles from "../components/Gsap/Particles/Particles";

const SocialMediaMarketing = () => {
  const heroRef = useRef(null);
  return (
    <div 
      ref={heroRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-50 px-4 md:px-16 lg:px-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold text-center text-amber-400 mb-12 drop-shadow-lg"
        >
          Social Media Marketing
        </motion.h1>

        {/* Background Particles */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="w-full h-full relative">
            <BallParticles triggerRef={heroRef} />
            <Particles />
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center text-lg sm:text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Elevate your brand presence across platforms with strategic campaigns, engaging visuals, and targeted audience reach.
        </motion.p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-200 mb-20">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 rounded-xl p-6 text-center shadow-md hover:shadow-amber-500/20 transition-all"
          >
            <Megaphone className="w-12 h-12 text-amber-400 mb-4 mx-auto" /> 
            {/* ✅ Replaced Bullhorn with Megaphone */}
            <h3 className="text-xl font-semibold mb-2">Campaign Planning</h3>
            <p>
              Crafting customized content strategies for Facebook, Instagram, Twitter, and LinkedIn that engage and convert.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-800/50 rounded-xl p-6 text-center shadow-md hover:shadow-amber-500/20 transition-all"
          >
            <Hash className="w-12 h-12 text-amber-400 mb-4 mx-auto" />
            {/* ✅ Replaced Hashtag with Hash */}
            <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
            <p>
              Boost your brand recognition using hashtag strategies, influencer collaboration, and viral trends.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-gray-800/50 rounded-xl p-6 text-center shadow-md hover:shadow-amber-500/20 transition-all"
          >
            <Instagram className="w-12 h-12 text-amber-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
            <p>
              Design scroll-stopping visuals and stories tailored for social platforms to capture attention and build community.
            </p>
          </motion.div>
        </div>

        {/* Platforms Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 text-2xl text-amber-400 mb-16"
        >
          <Facebook title="Facebook Marketing" />
          <Instagram title="Instagram Ads" />
          <Linkedin title="LinkedIn Campaigns" />
          <Twitter title="Twitter Strategy" />
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-gray-200 text-lg max-w-4xl mx-auto leading-relaxed space-y-8"
        >
          <p>
            My social media marketing services help businesses connect with audiences through targeted content, influencer partnerships, and paid ads that deliver ROI.
          </p>

          <p>
            With data-driven insights, I optimize posts and campaigns for maximum engagement, ensuring your brand stands out in the digital crowd.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>📊 Analytics-driven performance tracking</li>
            <li>🎯 Targeted paid advertising & retargeting</li>
            <li>🖼️ Creative & consistent brand storytelling</li>
            <li>📅 Monthly content calendars & scheduling</li>
          </ul>
        </motion.div>

        {/* Back Link */}
        <div className="text-center mt-30 mb-30">
          <Link
            to="/portfolio"
            className="text-amber-400 text-2xl hover:underline font-semibold"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
