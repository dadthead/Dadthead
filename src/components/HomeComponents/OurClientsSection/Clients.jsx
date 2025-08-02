import React from 'react';
import { assests } from '../../../assets/assets';

const Clients = () => {
  const logos = [
    assests.Yogya,
    assests.blnutry,
    assests.radhikarayadu,
    assests.Japali,
    assests.nyla,
    assests.yeluri,
    assests.vijaydigital,
    assests.sultan,
    assests.ammrutha,
    assests.suzuki,
    assests.medlight,
    assests.globaldiagnostics,
    assests.meerashub,
  ];

  return (
    <div className="bg-black text-center pt-10 overflow-hidden">
      <h1 className="text-amber-400 text-4xl lg:text-5xl font-bold underline decoration-1 underline-offset-8 mb-10">
        Our Clients
      </h1>

      <div className="relative w-full">
        <div className="flex gap-10 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`client-logo-${index}`}
              loading='lazy'
              className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
