
import React, { useState } from "react";
import { assests } from "../../../assets/assets";
import { motion } from "framer-motion";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const mobileRegex = /^\d{10}$/;
    return (
      nameRegex.test(formData.name) &&
      emailRegex.test(formData.email) &&
      mobileRegex.test(formData.mobile) &&
      formData.message.trim().length > 0
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("❌ Please fill the form correctly.");
      return;
    }

    setStatus("Sending...");
    const sendForm = new FormData();
    sendForm.append("access_key", "YOUR_ACCESS_KEY_HERE");
    sendForm.append("name", formData.name);
    sendForm.append("email", formData.email);
    sendForm.append("mobile", formData.mobile);
    sendForm.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: sendForm,
    });

    const result = await response.json();
    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } else {
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div
      className="mt-0 py-12 px-4 relative w-full"
      style={{
        backgroundImage: `url(${assests.waysline})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col md:flex-row text-white max-w-5xl mx-auto rounded-lg overflow-hidden justify-between">
        {/* Left side image */}
        <div className="relative flex items-center md:w-1/2 p-6">
          <motion.img
            src={assests.contactman}
            alt="Contact image"
            loading="lazy"
            className="relative z-1 w-3/4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right side form */}
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-center md:text-left">
            Contact US
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="bg-transparent border-b border-gray-300 focus:border-amber-400 outline-none py-2 transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-transparent border-b border-gray-300 focus:border-amber-400 outline-none py-2 transition duration-300"
              required
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="bg-transparent border-b border-gray-300 focus:border-amber-400 outline-none py-2 transition duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-transparent border-b border-gray-300 focus:border-amber-400 outline-none py-2 transition duration-300 resize-none h-24"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-transparent border-2 border-amber-400 hover:bg-amber-400 text-white w-1/2 rounded-full py-2 font-medium transition"
            >
              Send Message
            </button>
            {status && <p className="text-white text-sm pt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
