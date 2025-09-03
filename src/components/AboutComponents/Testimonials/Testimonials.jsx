import React from "react";
import "./Testimonials.css";
import { assests } from "../../../assets/assets";

const testimonials = [
  { name: "Radhika Cosmetic Gynecology Center", title: "Client", text: "Helped us grow awareness and connect with the right patients.", img: assests.radhika },

  { name: "Signet Electricals", title: "Client", text: "Increased our visibility and sales.", img: assests.signet },
  
  { name: "Nyla – The True You (Salon)", title: "Client", text: "Helped grow appointments and reach.", img: assests.nila },
  
  
  { name: "Japali Kitchens", title: "Client", text: "Brought us the right audience.", img: assests.japali },
  
  { name: "SV Fire Safety Services", title: "Client", text: "Delivered quality leads consistently.", img: assests.svfire },

  { name: "Ethos Dental Clinic", title: "Client", text: "Helped us reach more patients effectively.", img: assests.ethos },

  { name: "Sri Kusum (Clothing Store)", title: "Client", text: "Drove more footfall and sales.", img: assests.kusum },
 
];

const columns = [
  { id: 1, direction: "up", visible: "block" },
  { id: 2, direction: "down", visible: "block" },
  { id: 3, direction: "up", visible: "hidden lg:block" },
];

const Testimonials = () => {
  return (
    <div className="bg-black py-12 px-8">
      <h1 className="text-4xl lg:text-5xl decoration-1 underline underline-offset-8  font-bold text-center mb-10 text-amber-400  ">
        Our Valuable Customer Feedback
      </h1>
<p className="text-white text-md mb-20 md:px-50 text-center">
  We take pride in partnering with brands across various industries to deliver impactful results. Here’s what our clients say about working with us — from smart homes to healthcare, and from fashion to food industries, their feedback fuels our passion and commitment to excellence.
</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 ">
        {columns.map((col) => (
          <div className={`scroll-column ${col.visible}`} key={col.id}>
            <div
              className={`flex flex-col gap-4 ${col.direction === "up" ? "scroll-up-animation" : "scroll-down-animation"
                }`}
            >
              {[...testimonials, ...testimonials].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black border border-slate-700 p-4 rounded-xl shadow-[0_10px_30px_rgba(255,193,7,0.2)] w-full transition-transform hover:scale-105"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-20 h-20 border border-amber-400 rounded-full object-cover mx-auto mb-3"
                  />
                  <div className="text-amber-400 mb-2 font-bold text-center">{item.name}</div>
                  <div className="text-sm text-white text-center">{item.text}</div>
                  <div className="text-sm text-white text-center">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
