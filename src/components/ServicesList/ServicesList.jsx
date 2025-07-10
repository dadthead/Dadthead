import React from "react";
import { Link } from "react-router-dom";
import { assetsDetails } from "../../assets/assetsDetails";

function ServiceList() {
  return (
    <div className="py-16 px-5 text-center">
      <h2 className="text-4xl font-semibold mb-10 text-amber-400">Web Development</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {assetsDetails.map((service) => (
          <div
            key={service.id}
            className="flex bg-black border-2 border-white rounded-2xl p-4 py-5 h-[250px] w-full sm:w-[300px] lg:w-[300px] text-left shadow-lg hover:translate-y-[-8px] hover:bg-transparent transition-transform duration-400"
          >
            <div>
              <h3 className="text-base font-semibold py-6 mb-1 text-gray-200">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{service.description.slice(0, 60)}...</p>
              <Link to={`/service/${service.id}`} className="text-amber-400 font-medium hover:underline">
                Find out more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
