
// //  import React from 'react';


// //  const Contactform = () => {
// //    return (
// //      <div className=" bg-black w-full  flex flex-col py-20 px-4  items-center justify-center">
// //        <h1 className="text-5xl font-bold text-amber-400 mb-12 ">Contact Us</h1>

// //        <form className="w-full max-w-lg flex flex-col gap-6 bg-black p-8 items-start justify-left ">
// //          <input
// //            type="text"
// //            name="name"
// //            placeholder="Enter Your Name"
// //            className="bg-transparent border-b-2 border-gray-600 focus:border-amber-400 text-white placeholder-white py-2 text-xl outline-none"
// //          />
// //          <input
// //            type="tel"
// //            name="mobile"
// //            placeholder="Mobile Number"
// //            className="bg-transparent border-b-2 border-gray-600 focus:border-amber-400 text-white placeholder-white py-2 text-xl outline-none"
// //          />
// //          <input
// //            type="email"
// //            name="email"
// //            placeholder="Enter Your Email"
// //            className="bg-transparent border-b-2 border-gray-600 focus:border-amber-400 text-white placeholder-white py-2 text-xl outline-none"
// //          />

// //          <button
// //            type="submit"
// //            className="mt-6 bg-amber-400 text-white font-semibold py-2 px-4 rounded-full hover:bg-amber-500 transition-all duration-300"
// //          >
// //            Submit
// //          </button>
// //        </form>
       
// //      </div>
// //    );
// //  };

// //  export default Contactform;


// import React from "react";
// import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa"; //for address icons

// const ContactSection = () => {
//   return (
//      <div  className="bg-black">

//       {/* <div className="relative z-10 max-w-6xl w-full mx-4 md:mx-8 lg:mx-auto flex flex-col md:flex-row text-white">
//         {/* Left contact address */}
//         {/* <div className="w-full md:w-1/2 p-8 space-y-8">
//           <h2 className="text-3xl font-bold uppercase">Contact Us</h2>
          

//           <div className="space-y-4">
//             <div className="flex items-start gap-4">
//               <FaPhoneAlt className="text-yellow-400 mt-1" />
//               <div>
//                 <h4 className="font-bold">Call Us</h4>
//                 <p className="text-sm text-white">
//                   +91 &nbsp; 8885116191
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaMapMarkerAlt className="text-yellow-400 mt-1" />
//               <div>
//                 <h4 className="font-bold">Location</h4>
//                 <p className="text-sm text-white">
//                   4th Ln, &nbsp; 13th Cross, &nbsp; Bradipet, &nbsp; Guntur,  &nbsp; Andhra  &nbsp; Pradesh, &nbsp; 522002  
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <FaClock className="text-yellow-400 mt-1" />
//               <div>
//                 <h4 className="font-bold">Business Hours</h4>
//                 <p className="text-sm text-white">
//                   Mon - Fri &nbsp; ... &nbsp; 10 am - 6 pm<br />
//                   Sat  &nbsp; ... &nbsp; 10 am - 2 pm <br/>
//                   Sun  &nbsp; ...  &nbsp; Closed
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>  */}

//         {/* Form right side  */}
//         <h2 className="text-3xl text-white text-center  font-bold uppercase">Contact Us</h2> 
//         <div className="w-full md:w-1/2 p-8 space-y-6 justify-center items-center ">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter a valid email address"
//                 className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//               />
//             </div>
//             <div>
//               <label className="text-sm">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your Name"
//                 className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm">Mobile</label>
//             <input
//               type="text"
//               placeholder="Enter your mobile"
//               className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//             />
//           </div>

//           <div>
//             <label className="text-sm">Message</label>
//             <input
//             text="text" 
//               placeholder="Enter your message"
//               className="w-full px-4 py-2 mt-1 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-yellow-400"
//             ></input>
//           </div>

//           <button className="bg-yellow-500 hover:bg-yellow-600  font-semibold px-8 py-3 mt-4 rounded-full transition-all duration-300">
//             SUBMIT
//           </button>
//         </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default ContactSection;

import React from 'react'

const ContactSection = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black px-4">
  <div className="w-full md:w-[600px]">
    <h2 className="text-4xl md:text-4xl lg:text-5xl text-amber-400 text-center font-bold uppercase mb-6">
      Contact Us
    </h2>

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

      <button className="bg-yellow-500 hover:bg-yellow-600 font-semibold px-8 py-3 mt-4 rounded-full transition-all duration-300">
        SUBMIT
      </button>
    </div>
  </div>
</div>

  )
}

export default ContactSection