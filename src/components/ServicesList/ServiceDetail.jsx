import React from "react";
import { useParams } from "react-router-dom";
import { assetsDetails } from "../../assets/assetsDetails";

function ServiceDetails() {
  const { id } = useParams();
  const service = assetsDetails.find((item) => item.id === Number(id));

  if (!service) {
    return <h2 className="text-center text-red-500">Service not found!</h2>;
  }

  return (
    <div className="py-16 px-5 text-center">
      <h2 className="text-4xl font-semibold mb-5 text-amber-400">{service.title} </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">{service.description}</p>
    </div>
  );
}

export default ServiceDetails;
