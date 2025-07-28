import React, { useState } from "react";
import { motion } from "framer-motion";
import { Megaphone, Paintbrush, Video, TrendingUp, Users } from "lucide-react";

function Careers() {
  const [showCards, setShowCards] = useState(false);

  const roles = [
    { Icon: Megaphone, title: "Creatives", desc: "Copywriters, Content Creators, Scriptwriters." },
    { Icon: Paintbrush, title: "Designers", desc: "Graphic, Motion, UI/UX visual storytellers." },
    { Icon: Video, title: "Video & Edit Squad", desc: "DOPs, Editors, Reel makers." },
    { Icon: TrendingUp, title: "Performance & Social", desc: "Ad pros & campaign optimizers." },
    { Icon: Users, title: "Client Managers", desc: "Pitch like a pro & keep clients smiling." },
  ];

  return (
    <div className=" text-white py-8 px-5 md:px-14 mt-10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl italic px-10 md:px-28 mb-16 font-stretch-extra-expanded text-gray-300 playfair"
        >
          We’re not your regular ad agency. We don’t do boring. We create trends. If you think wild, move fast, and deliver magic — we want you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl italic mb-16 max-w-3xl font-stretch-extra-expanded mx-auto text-gray-400 playfair"
        >
          At Dad The Ad, we believe great campaigns come from people who love what they do. If you're the kind who can think wild, move fast, and deliver magic — we want you on our side.
        </motion.p>

        {/* What We Look For */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="border-l-4 border-amber-400 items-center justify-center mb-20 max-w-2xl mx-auto"
        >
          <h3 className="text-4xl font-bold mb-2 text-amber-400">What We Look For</h3>
          <p className="mb-2">Attitude + talent. Degrees? Meh.</p>
          <ul className="space-y-2 text-base">
            <li>👉 Can you think differently?</li>
            <li>👉 Can you push boundaries?</li>
            <li>👉 Can you execute like a boss?</li>
          </ul>
        </motion.div>

        {/* If Yes, Read On Button */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold mb-12 text-amber-400 cursor-pointer border-b-2 border-amber-400 inline-block"
          onClick={() => setShowCards((ture) => !ture)}
        >
          If Yes, Read On.
        </motion.h3>

        {/* Hidden Role Cards until clicked on  button */}
        {showCards && (
          <>
            {/* Role Cards */}
            <div className="space-y-8">
              {roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row items-center w-full md:w-1/2 mx-auto mb-20 md:items-start gap-5 p-5 md:p-6 bg-black border-b-[2px] border-amber-400 rounded-2xl shadow-xl hover:shadow-amber-400/30 transition duration-500"
                >
                  <div className="bg-amber-400 p-4 rounded-full shadow-md shadow-amber-500">
                    <role.Icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-semibold text-amber-400 mb-1">{role.title}</h4>
                    <p className="text-gray-300">{role.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

           
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-4 text-gray-300"
            >
              Don’t see your role? Still apply. If you're awesome at something and think you can add value — we’re listening.
            </motion.p>

            <p className="mb-12">
              👉 Send your work to{" "}
              <a href="mailto:abc@dadthead.com" className="underline text-amber-400 hover:text-white transition">
                abc@dadthead.com
              </a>
            </p>

            {/*  Inside cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto text-gray-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Life Inside Dad The Ad</h3>
              <p className="mb-2">
                We don’t wear suits. We wear ideas. We fight over fonts, not egos. Messy, fast, and mad about good work.
              </p>
              <p>
                Team shoots. Brainstorm jams. Clients who trust us. And a vibe that feels like home.
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-14 px-12 py-4 bg-amber-400 text-black font-bold rounded-full shadow-xl hover:bg-white transition duration-300"
            >
              Let’s Build
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}

export default Careers;
