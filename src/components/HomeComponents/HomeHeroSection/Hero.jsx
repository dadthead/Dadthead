
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import IconcsParticles from "../BackgrounduiSection/IconsParticles";
import Backgroundui from "../BackgrounduiSection/Backgroundui";
import BallParticles from "../../Gsap/BallParticles/Ballparticles";

const Hero = () => {
  const heroRef = useRef(null);

  const [formData, setFormData] = useState({ email: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("❌ Please enter a valid email address.");
      return;
    }

    setStatus("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("access_key", "YOUR_ACCESS_KEY_HERE"); // 🔁 Replace with your real key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ email: "" });
    } else {
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div
      ref={heroRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden pt-20 px-4 md:px-16 lg:px-28"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-40">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-5xl md:px-10 md:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400"
          >
            <span className="block">Boss in Branding</span>
            <span className="block">Magician in Marketing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className=" text-lg md:text-2xl md:px-10 text-gray-200 leading-relaxed"
          >
            Your one-stop digital marketing partner
          </motion.p>

          {/* Email Only Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex sm:flex-row gap-4 justify-center md:justify-start md:px-10"
          >
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-8 py-2 rounded-full border border-gray-400 bg-transparent text-white text-center sm:text-left w-50 sm:w-auto z-10 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in-out duration-300"
            />
            <div className="relative inline-block group rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-yellow-300 scale-0 group-hover:scale-100 transition-transform duration-700 ease-in-out rounded-2xl"></div>
              <button
                type="submit"
                className="relative z-10 px-6 py-2 rounded-full bg-amber-400 group-hover:bg-transparent text-black font-bold transition duration-300 ease-in-out group-hover:shadow-lg"
              >
                Send
              </button>
            </div>
          </motion.form>

          {status && (
            <p className="text-white text-md md:px-10 pt-2">{status}</p>
          )}
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <Backgroundui className="w-full max-w-sm pt-5 left-5.5 flex justify-center" />
          <IconcsParticles />
        </motion.div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <div className="particles-container">
          <BallParticles triggerRef={heroRef} />
        </div>
      </div>

      {/* Yellow SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffc107"
            fillOpacity="1"
            d="M0,192L40,186.7C80,181,160,171,240,154.7C320,139,400,117,480,112C560,107,640,117,720,144C800,171,880,213,960,224C1040,235,1120,213,1200,197.3C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
