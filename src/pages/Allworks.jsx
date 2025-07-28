import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BallParticles from '../components/Gsap/BallParticles/Ballparticles';
import Particles from '../components/Gsap/Particles/Particles';

const AllWorks = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-50 px-4 md:px-16 lg:px-28">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 1.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}

          className="text-5xl text-center font-bold text-amber-400 mb-32">
          All Works
        </motion.h2>


        {/*  Background Particles */}

        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="w-full h-full relative">
            <BallParticles triggerRef={heroRef} />
            <Particles />
          </div>
        </div>


        {/* Website Development */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            Website Development
          </h3>
          <p className="text-gray-300  text-xl leading-relaxed mb-3">
            We create high-performance, responsive websites that reflect your brand and business goals.
            Whether it’s a simple static site or a dynamic web app, our team ensures pixel-perfect
            results with clean code and optimized performance.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>Custom front-end and back-end development</li>
            <li>Mobile-responsive and user-friendly UI</li>
            <li>CMS and e-commerce integration (WordPress.)</li>
            <li>SEO-ready code structure and metadata</li>
            <li>Fast-loading and scalable performance</li>
          </ul>
        </motion.div>

        <div className="md:grid grid-cols-2 gap-8 space-y-4 md:space-y-0  w-full  max-w-5xl rounded-xl overflow-hidden shadow-xl shadow-amber-500/20 border border-black bg-black/50 p-4">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }}

            src="https://digitalmarketingpartner.in/wp-content/uploads/2023/04/Food-recipe-Tips.gif.webp"
            alt="Interactive Visual"
            className="w-full h-[360px] object-cover rounded-lg border border-gray-700"
          />
          <motion.video
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }}

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
          </motion.video>
        </div>


        {/* SEO Optimization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 mt-15"
        >
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            SEO Optimization
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-3">
            We optimize your website to improve visibility on search engines like Google and increase organic traffic.
            Our SEO strategies focus on keyword research, content optimization, and link building to drive organic results.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>Keyword research and optimization</li>
            <li>Content optimization for search engines</li>
            <li>Link building and backlinking</li>
            <li>Regular maintenance and updates</li>
          </ul>
        </motion.div>

        {/* SEO Marketing */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}

          className="mb-12 mt-15">
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            SEO Marketing
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-3">
            Our SEO Marketing services focus on increasing your website's visibility across search engines through proven optimization techniques.
            We drive organic traffic to your site by aligning with search engine algorithms and understanding user intent.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>In-depth keyword research and strategy planning</li>
            <li>On-page SEO optimization (titles, meta, structure)</li>
            <li>Off-page SEO including backlinks and outreach</li>
            <li>Technical SEO (site speed, mobile-friendliness, indexing)</li>
            <li>Content SEO to rank for valuable search terms</li>
            <li>Monthly reports and performance insights</li>
          </ul>
        </motion.div>


        {/* Content Writing */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 mt-15"
        >
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            Content Writing
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-3">
            Our content writing services deliver compelling, SEO-optimized content tailored to engage your audience and strengthen your brand voice.
            Whether it's web content, blog articles, or marketing copy — we craft every piece with clarity, creativity, and purpose.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>Website content that informs and converts</li>
            <li>SEO blog posts and long-form articles</li>
            <li>Captivating social media captions and taglines</li>
            <li>Product descriptions and landing page content</li>
            <li>Email newsletters and campaign content</li>
            <li>Proofreading, editing, and content refresh services</li>
          </ul>
        </motion.div>


        {/* Social Media Optimization */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 mt-15">
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            Social Media Optimization (SMO)
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-3">
            We enhance your social media presence through smart optimization techniques that boost visibility, engagement, and brand consistency. Our strategies ensure your profiles reflect your brand voice and attract the right audience.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>Profile optimization across all platforms</li>
            <li>Hashtag research and implementation</li>
            <li>Posting schedule setup and content strategy</li>
            <li>Cross-platform integration and branding</li>
            <li>Bio and description optimization for visibility</li>
            <li>Engagement analysis and regular reporting</li>
          </ul>
        </motion.div>


        {/* Social Media Marketing */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 mt-15">
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            Social Media Marketing (SMM)
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-3">
            Our Social Media Marketing services focus on driving brand awareness, engagement, and conversions through creative and targeted campaigns. We design ad strategies tailored to each platform and ensure measurable results for your business.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>Platform-specific ad campaigns (Facebook, Instagram, LinkedIn, etc.)</li>
            <li>Audience targeting and budget planning</li>
            <li>Creative content design (images, videos, and reels)</li>
            <li>Conversion tracking and performance analysis</li>
            <li>Campaign optimization for better ROI</li>
            <li>Monthly reports and marketing insights</li>
          </ul>
        </motion.div>


        {/* Graphic Design */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}

          className="mb-12 mt-15">
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            Graphic Design
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-3">
            Our graphic design services bring your brand to life with visually captivating content. From logos to digital creatives, we ensure your visual identity communicates your message clearly and creatively across all platforms.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>Logo and brand identity design</li>
            <li>Marketing materials (flyers, brochures, banners)</li>
            <li>Social media creatives and ads</li>
            <li>UI/UX assets for websites and apps</li>
            <li>Custom illustrations and infographics</li>
            <li>Consistent design language across platforms</li>
          </ul>
        </motion.div>



        {/* Data Analytics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 mt-15">
          <h3 className="text-3xl text-amber-400 font-semibold mb-3">
            Data Analytics
          </h3>
          <p className="text-gray-300 text-xl leading-relaxed mb-3">
            Our Data Analytics services help you make informed business decisions by transforming raw data into meaningful insights. We analyze trends, customer behavior, and operational metrics to guide your strategies with precision.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg pl-4 space-y-1">
            <li>Data collection and preprocessing from multiple sources</li>
            <li>Trend analysis and predictive modeling</li>
            <li>Customer behavior and segmentation analysis</li>
            <li>Dashboard creation and visualization (Power BI / Tableau)</li>
            <li>Business intelligence for strategic planning</li>
            <li>Real-time data monitoring and alerts</li>
          </ul>
        </motion.div>


        <div className='text-center mt-10 mb-20'>
          <Link to="/contact" className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-transparent hover:text-amber-500 border border-amber-500 transition duration-300 ease-in-out">
            Contact Us
          </Link>
        </div>


      </div>
    </section>
  );
};

export default AllWorks;
