import React from "react";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="relative group bg-white hover:bg-gray-300    rounded-2xl p-6 flex flex-col gap-4 w-full max-w-sm border border-gray-200 transition-all duration-500 shadow-md hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 hover:scale-[1.03]">
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400 group-hover:animate-glow z-0" />

      {/* Card content */}
      <div className="relative z-10">
        <div className="w-12 h-12 text-3xl text-amber-400 group-hover:animate-bounce">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-400 transition duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
          {description}
        </p>
        <a
          href={link}
          className="text-amber-400 font-semibold mt-5 hover:underline transition duration-300 inline-block "
        >
          Find out more
        </a>
      </div>
    </div>

  );
};

export default ServiceCard;

