import React, { useRef } from "react";
import "./HeroSecondPage.css";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";
import Particles from "../../Gsap/Particles/Particles";

const HomeSecondPage = () => {
  const triggerRef = useRef(null);

  return (
    <div className="second relative py-17 px-6 md:px-20">
      {/* Particles background */}
      <div className="absolute inset-0 -z-10">
        <Particles triggerRef={triggerRef} />
      </div>

      <h2 className="text-4xl md:text-6xl text-center text-amber-400 font-bold drop-shadow-lg mb-12 underline decoration-1 underline-offset-8">
        About
      </h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-1/2 text-white text-base md:text-xl leading-8 px-4 md:px-10">
          <p>
            At <span className="text-amber-400 font-semibold"> Dad The AD</span>, we are passionate about crafting digital marketing strategies that ignite growth and build a lasting online presence.
            From SEO and social media marketing to PPC and branding campaigns, our expertise helps brands reach the right audience with maximum impact.
          </p>
          <br />
          <p>
            We combine creativity with data-driven insights to deliver custom solutions that convert visitors into loyal customers. With a team of designers, strategists, and tech experts, we offer end-to-end digital advertising services tailored to every business need.
            Our goal is simple — to help your brand rise above the noise and leave a lasting impression.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src={assests.questionmark}
            alt="About illustration"
            className="w-2/3 max-w-sm"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSecondPage;
