import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SeoOptimization = () => {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen py-44 px-6 sm:px-10 md:px-20">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="text-5xl sm:text-6xl font-bold text-center text-amber-400 mb-12 animate-pulse drop-shadow-lg"
                >
                    SEO Optimization
                </motion.h1>

                {/* Subheading */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 text-gray-300 text-lg sm:text-xl leading-relaxed"
                >
                    <p>
                        Unlock greater online visibility with my <span className="text-amber-400 font-semibold">SEO Optimization</span> strategies — from keyword analysis to performance-driven implementation.
                    </p>
                </motion.div>

                {/* Video Section */}
                <div className="flex justify-center mb-16">
                    <div className="rounded-xl overflow-hidden shadow-lg shadow-amber-500/20 border border-black bg-black/40 p-3 w-full max-w-4xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-[360px] object-cover rounded-lg border border-gray-700"
                            poster="https://digitalmarketingpartner.in/wp-content/uploads/2023/04/BON.gif.webp"
                        >
                            <source src="https://digitalmarketingpartner.in/wp-content/uploads/2023/04/BON.gif.webp" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Professional Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.0 }}
                    viewport={{ once: true }}
                    className="text-lg leading-relaxed space-y-8 text-gray-200 max-w-4xl mx-auto"
                >
                    <p>
                        I specialize in delivering high-impact SEO solutions that enhance both user experience and search engine visibility. From clean code structures to keyword targeting and mobile-first designs, my approach ensures that websites not only rank but also convert.
                    </p>

                    <p>
                        Using on-page and technical SEO best practices, I create optimized site architectures, ensure quick load times, and build a foundation for long-term search success.
                    </p>

                    <div>
                        <p className="text-amber-400 font-semibold text-xl mb-3">Key SEO Services I Offer:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li>🔍 Strategic keyword research & integration</li>
                            <li>💡 Clean and semantic HTML5 markup</li>
                            <li>📷 Comprehensive image alt-text optimization</li>
                            <li>📱 Fully responsive and mobile-friendly layouts</li>
                            <li>🚀 Speed optimization using modern tools (CDN, compression, lazy loading)</li>
                            <li>📈 Google Analytics & Search Console integration</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Back Link */}
                <div className="text-center mt-16">
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

export default SeoOptimization;
