// // components/ClientsSection.jsx
// import React from "react";
// import {assests} from "../../assets/assets"

// // Sample client data
// const clients = [
//   {
//     name: "STELLA LARSON",
//     text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
//     img: assests.logo,
//     bgColor: "bg-amber-400",
//   },
//   {
//     name: "STELLA LARSON",
//     text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
//     img: assests.logo,
//     bgColor: "bg-amber-400",
//   },
//   {
//     name: "STELLA LARSON",
//     text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
//     img: assests.logo,
//     bgColor: "bg-amber-400",
//   },

// ];

// const ClientsSection = () => {
//   return (
//     <div className="w-full bg-black py-16 px-4 md:px-20">
//       {/* Heading */}
//       <h2 className="text-3xl text-amber-400  md:text-4xl font-semibold  mb-22 text-center">
//         Our Clients {" "}
//         <span className="font-bold text-white">Love The We Build Stores Experience</span>
//       </h2>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {clients.map((client, index) => (
//           <div
//             key={index}
//             className={`rounded-xl p-6 pt-16 text-white relative overflow-visible ${client.bgColor}`}
//           >
//             {/* Image circle */}
//             <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
//               <img
//                 src={client.img}
//                 alt={client.name}
//                 className="w-24 h-24 rounded-full border-4 border-white object-cover"
//               />
//             </div>

//             {/* Content */}
//             <h3 className="text-center text-lg font-semibold mt-4">
//               {client.name}
//             </h3>
//             <p className="text-sm text-center mt-2">{client.text}</p>
//           </div>
//         ))}
//       </div>

     
      
//     </div>
//   );
// };

// export default ClientsSection;


import React from 'react'
import { assests } from '../../assets/assets'

const Clients = () => {
  return (
    <div className='bg-black text-center text-4xl md:text-4xl lg:text-5xl  pt-10 '>
          <h1 className='text-amber-400 pb-15'>Our Clients</h1>
         
        
      <div className="max-w-8xl  w-full left-7 right-7 relative z-5 bg-black grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7 items-center justify-center pb-20">
        
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300'/>
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300' />
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300'/>
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300'/>
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300'/>
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300'/>
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300'/>
        <img src={assests.logo} alt="logo" className='max-w-6xl  w-full  max-h-36 object-contain hover:grayscale-0 transition-all duration-300'/>
      
      
      
    </div>
    </div>
  )
}

export default Clients