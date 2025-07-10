import React from 'react'

const ContactSection = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center  px-4 contact">
  <div className="w-full md:w-[600px]">
    <h1 className="text-4xl md:text-4xl lg:text-5xl text-amber-400 text-center font-bold decoration-1 underline underline-offset-8 mb-6">
      Contact Us
    </h1>

    <div className="p-8 space-y-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-white">Email</label>
          <input
            type="email"
            placeholder="Enter a valid email address"
          
            className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
          />
        </div>
        <div>
          <label className="text-sm text-white">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-white">Mobile</label>
        <input
          type="text"
          placeholder="Enter your mobile"
          className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
        />
      </div>

      <div>
        <label className="text-sm text-white">Message</label>
        <input
          type="text"
          placeholder="Enter your message"
          className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
        />
      </div>

      <button className="bg-transparent text-white border border-yellow-400 hover:bg-yellow-400 font-semibold px-8 py-3 mt-4 rounded-full transition-all duration-300">
        SUBMIT
      </button>
    </div>
  </div>
</div>

  )
}

export default ContactSection