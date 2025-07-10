import React from "react";
import "./HeroSecondPage.css";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";

const HomeSecondPage = () => {
  return (
    <div className="second  py-17 px-6 md:px-20 ">
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
        <div className="w-full  md:w-1/2 text-white text-base md:text-xl leading-8 px-4 md:px-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
            delectus modi amet soluta iusto officiis ipsa dolores reiciendis?
            Reiciendis quas temporibus saepe nemo aperiam ducimus optio, error
            dolorum deleniti excepturi.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
            delectus modi amet soluta iusto officiis ipsa dolores reiciendis?
            Reiciendis quas temporibus saepe nemo aperiam ducimus optio, error
            dolorum deleniti excepturi.
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