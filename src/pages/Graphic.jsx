import React , { useRef } from "react";
import { motion } from "framer-motion";
import { FaPencilRuler, FaPalette, FaLightbulb, FaImage, FaBrush, FaVectorSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import BallParticles from '../components/Gsap/BallParticles/Ballparticles';
import Particles from '../components/Gsap/Particles/Particles';

const GraphicDesign = () => {
    const heroRef = useRef(null);

    return (
        <section 
        ref={heroRef}

      className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-50 px-4 md:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto">

                <motion.h2
               initial={{ opacity: 0, scale: 1.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl text-center font-bold text-amber-400 mb-32">
                
                    Graphic Design
                </motion.h2>

                {/*  Background Particles */}

        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="w-full h-full relative">
            <BallParticles triggerRef={heroRef} />
            <Particles />
          </div>
        </div>

                {/* Introduction Text  */}
                <motion.div
                initial ={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto mb-20"
                >
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Creative Visuals for Exceptional Brands</h3>
                    <p className="text-gray-300 text-lg mb-4">
                        Graphic design is more than aesthetics – it's storytelling through visuals. At our core, we believe in building powerful first impressions, clear brand communication, and standout creative expressions. Whether you're launching a brand or refreshing your look, our designs are made to connect with your audience.
                    </p>
                    <p className="text-gray-300 text-lg mb-4">
                        From vibrant digital artwork to professional marketing materials, our team crafts assets that don’t just look great but deliver results. We turn design challenges into creative opportunities with flair, functionality, and finesse.
                    </p>
                </motion.div>

                {/* Icons */}
                <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-20">
                    <motion.div
                    initial ={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                     
                     className="flex flex-col items-center text-center">
                        <FaPencilRuler className="text-amber-400 text-5xl mb-4" />
                        <h4 className="text-xl font-medium">Creative Concepts</h4>
                        <p className="text-sm text-gray-300">Sketching with purpose and planning with style.</p>
                    </motion.div>

                    <motion.div
                    initial ={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                     
                     className="flex flex-col items-center text-center">
                        <FaPalette className="text-amber-400 text-5xl mb-4" />
                        <h4 className="text-xl font-medium">Color Harmony</h4>
                        <p className="text-sm text-gray-300">Balanced tones to express the right emotions.</p>
                    </motion.div>

                    <motion.div
                    initial ={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                     
                     className="flex flex-col items-center text-center">
                        <FaLightbulb className="text-amber-400 text-5xl mb-4" />
                        <h4 className="text-xl font-medium">Innovative Thinking</h4>
                        <p className="text-sm text-gray-300">Fresh ideas that make your designs stand out.</p>
                    </motion.div>

                    <motion.div
                    initial ={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                     
                     className="flex flex-col items-center text-center">
                        <FaImage className="text-amber-400 text-5xl mb-4" />
                        <h4 className="text-xl font-medium">Visual Appeal</h4>
                        <p className="text-sm text-gray-300">Every pixel crafted for perfection and clarity.</p>
                    </motion.div>

                    <motion.div
                    initial ={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                     
                     className="flex flex-col items-center text-center">
                        <FaBrush className="text-amber-400 text-5xl mb-4" />
                        <h4 className="text-xl font-medium">Artistic Touch</h4>
                        <p className="text-sm text-gray-300">Illustrative styles with a bold design language.</p>
                    </motion.div>

                    <motion.div
                    initial ={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                     
                     className="flex flex-col items-center text-center">
                        <FaVectorSquare className="text-amber-400 text-5xl mb-4" />
                        <h4 className="text-xl font-medium">Precision Vectoring</h4>
                        <p className="text-sm text-gray-300">Scalable graphics built for branding success.</p>
                    </motion.div>
                </div>

                {/* Portfolio Preview Section */}
                <motion.div
                initial ={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed space-y-8 text-gray-200 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-12">Why Our Designs Stand Out</h2>

                    <p>
                        Whether it's a brand logo, marketing poster, UI/UX assets, or social media creatives, we approach every project with deep attention to detail. Our graphic designers blend strategic thinking with artistic execution to make sure your visuals not only look stunning but align with your brand's voice.
                    </p>
                    <p>
                        We believe design is a language. A logo speaks identity, a banner evokes emotion, and a presentation tells a story. Our mission is to make your story unforgettable through cohesive design systems that span print, digital, and motion graphics.
                    </p>
                    <p>
                        We stay updated with the latest design trends, from minimalist layouts to bold gradients and 3D effects, ensuring your graphics feel modern yet timeless. Every element is tailored to your target audience, optimized for engagement and clarity.
                    </p>
                </motion.div>

                <motion.div
                initial ={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white text-left max-w-4xl mx-auto mb-10 mt-22 "
                >
                    <h3 className="text-3xl font-semibold text-amber-400 mb-6 text-center">Our Graphic Design Expertise Includes:</h3>
                    <ul className="list-disc list-inside text-lg text-gray-300 space-y-5 mt-10">
                        <li>✨ Logo Design & Brand Identity Creation</li>
                        <li>🎯 Social Media Post & Banner Graphics</li>
                        <li>📰 Brochures, Flyers, Posters & Print Collaterals</li>
                        <li>📱 UI/UX Assets for Mobile & Web Applications</li>
                        <li>📽️ Motion Graphics & Animated Explainers</li>
                        <li>📦 Packaging Design & Product Mockups</li>
                        <li>🎨 Custom Illustrations & Iconography</li>
                        <li>🧠 Creative Direction & Art Consultation</li>
                    </ul>
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

export default GraphicDesign;
