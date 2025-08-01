// import React from 'react'

// const ContactSection = () => {
//   return (
//     <div className="w-full min-h-screen flex justify-center items-center  px-4 contact">
//   <div className="w-full md:w-[600px]">
//     <h1 className="text-4xl md:text-4xl lg:text-5xl text-amber-400 text-center font-bold decoration-1 underline underline-offset-8 mb-6">
//       Contact Us
//     </h1>

//     <div className="p-8 space-y-6 ">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="text-sm text-white">Email</label>
//           <input
//             type="email"
//             placeholder="Enter a valid email address"
          
//             className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//           />
//         </div>
//         <div>
//           <label className="text-sm text-white">Name</label>
//           <input
//             type="text"
//             placeholder="Enter your Name"
//             className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="text-sm text-white">Mobile</label>
//         <input
//           type="text"
//           placeholder="Enter your mobile"
//           className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//         />
//       </div>

//       <div>
//         <label className="text-sm text-white">Message</label>
//         <input
//           type="text"
//           placeholder="Enter your message"
//           className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//         />
//       </div>

//       <button className="bg-transparent text-white border border-yellow-400 hover:bg-yellow-400 font-semibold px-8 py-3 mt-4 rounded-full transition-all duration-300">
//         SUBMIT
//       </button>
//     </div>
//   </div>
// </div>

//   )
// }

// export default ContactSection


import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Block numbers in name
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) return;

    // Allow only up to 10 digits in mobile
    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "YOUR_ACCESS_KEY_HERE"); // 🔁 Replace with your Web3Forms key

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } else {
      setResult("❌ Failed to send message.");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 contact">
      <div className="w-full md:w-[600px]">
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-amber-400 text-center font-bold underline underline-offset-8 mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="text-sm text-white">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-white">Mobile</label>
            <input
              type="text"
              name="mobile"
              required
              placeholder="Enter your mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
              maxLength="10"
            />
          </div>

          <div>
            <label className="text-sm text-white">Message</label>
            <input
              type="text"
              name="message"
              required
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="bg-transparent text-white border border-yellow-400 hover:bg-yellow-400 font-semibold px-8 py-3 mt-4 rounded-full transition-all duration-300"
          >
            SUBMIT
          </button>

          {result && (
            <p className="text-white mt-2 text-center">{result}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
