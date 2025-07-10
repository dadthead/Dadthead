import React from "react";
import "./Testimonials.css";
import { assests } from "../../../assets/assets";

const testimonials = [
  { name: "Abhee Smart Homes", title: "Client", text: "Beautiful design", img: assests.abheesmarthome },
  { name: "Yogya", title: "Client", text: "Amazing experience.", img: assests.Yogya },
  { name: "BL Nutri Foods", title: "Client", text: "Great support.", img: assests.logo },
  { name: "Japali", title: "Client", text: "Loved the design.", img: assests.Japali },
  { name: "Global Diagnostics", title: "Client", text: "Professional work.", img: assests.globaldiagnostics},
  { name: "meerashub", title: "Client", text: "Highly recommended.", img: assests.meerashub },
  { name: "yeluri", title: "Client", text: "Beautiful design", img: assests.yeluri },
  { name: "Nyla", title: "Client", text: "Amazing experience.", img: assests.nyla },
  { name: "Sultan", title: "Client", text: "Great support.", img: assests.sultan },
  { name: "ammrutha", title: "Client", text: "Loved the design.", img: assests.ammrutha },
  { name: "medlight", title: "Client", text: "Professional work.", img: assests.medlight },
  { name: "blnutry", title: "Client", text: "Highly recommended.", img: assests.blnutry },
  {name:"radhikarayadu", title: "Client", text: "Highly recommended.", img: assests.radhikarayadu },
 
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
      <p className="text-white   text-sm mb-20 md:px-50  text-center   ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas hic neque doloribus esse quia, recusandae accusantium ea eos earum. Qui soluta iusto provident similique ab vitae doloremque hic iste!</p>
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
                    className="w-20 h-20 border border-amber-400 rounded-full object-cover mx-auto mb-3"
                  />
                  <div className="text-amber-400 mb-2 font-bold text-center">"{item.name}"</div>
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
