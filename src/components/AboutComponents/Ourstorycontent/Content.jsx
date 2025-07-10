import React from 'react';

const Content = () => {
  return (
    <div className="bg-black text-amber-400 w-full px-4 sm:px-6 md:px-16 py-12 overflow-x-hidden">
      <h1 className='text-4xl lg:text-5xl font-bold text-center mb-20 '>Wel Come To <span className='text-white'>  Our Story</span> </h1>
      {/* Artistry in Advertising Content */}
      <div className="grid grid-cols-12 gap-6 items-start justify-end">

        {/* Left Column Heading */}
        <div className="col-span-4 flex justify-end">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight text-right mt-20 mb-4">
            The <span className="text-white">Artistry</span>
            <br />in Advertising
          </h2>
        </div>

        {/* Right Column with Vertical Line */}
        <div className="col-span-8 border-l border-white pl-4 text-sm sm:text-base leading-relaxed">
          <p className="mb-6 text-justify">
            <span className="text-white font-semibold">At DAD</span>, we don’t just create ads; we craft masterpieces that resonate, inspire, and leave a lasting impact. Under the dynamic leadership of <span className="text-white font-semibold">ASHOK</span>, our Managing Director, <span className="text-white font-semibold">DAD</span> stands tall as a powerhouse of creativity and innovation in the branding and marketing world. With a passion for turning ideas into impactful realities, Ashok brings a unique blend of vision and expertise the drives project we undertake.
          </p>
          <p className="text-justify">
            At DAD, we don't just create ads; we craft masterpieces that resonate, inspire, and leave a lasting impact. Under the dynamic leadership of <span className="text-white font-semibold">ASHOK</span>, Our Managing Director, DAD stands tall as a powerhouse of creativity and innovation in the branding and marketing world. With a passion for turning ideas into impactful realities, Ashok brings a unique blend of vision and expertise that drives every project we undertake. Our tagline, <span className="italic font-medium">“Boss in Branding, Magic in Marketing,”</span> is more than just words—it’s our commitment to delivering exceptional results. From shaping compelling brand identites to executing making strategies that captivate audiences, DAD is dedicated to making your brand the start of its story.
          </p>
        </div>

      </div>
      <div className='w-full h-1 bg-black my-8'></div>

      {/* Business Content */}

      <div className="grid grid-cols-12 gap-6 items-start justify-end">

        {/* Left Column Heading */}
        <div className="col-span-4 flex justify-end">
          <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold leading-tight text-right mt-5 mb-4">
            Where Art Meets <span className="text-white">Business</span>

          </h2>
        </div>

        {/* Right Column with Vertical Line */}
        <div className="col-span-8 border-l border-white pl-4 text-sm sm:text-base leading-relaxed">
          <p className="mb-6 text-justify">
            In a world cluttered with mundane marketing,<span className="text-white font-semibold"> DAD </span> transforms your brand into a masterpiece. We belive that every company deserves a unique and perfect brand identity - one that not only stands out but also tells a compelling story. Our mission is to breathe life into your brand with the same meticulous care and passion an artist puts into a canvas
          </p>

        </div>

      </div>

      <div className='w-full h-1 bg-black my-8'></div>

      {/* Magic Touch content */}

      <div className="grid grid-cols-12 gap-6 items-start">

        {/* Left Column Heading */}
        <div className="col-span-4 flex justify-end">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-right mt-8 mb-4">
            Our <span className="text-white">Magic Touch</span>
          </h2>
        </div>

        {/* Right Column with Vertical Line */}
        <div className="col-span-8 border-l border-white pl-4 text-sm sm:text-base leading-relaxed">
          <p className="mb-6 text-justify">
            <span className="text-white font-semibold">At DAD</span>, Our core values revolve around perfection, innovation, and artistry. We take pride in our ability to deliver customized brand art that resonates with your audience and elevates your business to new heights. Whether you're a startup seeking to make your mark or an established company looking to redefine your identity, we're here to make your brand unforgettable.
          </p>
        </div>





      </div>
   
<h2 className='text-2xl text-white sm:text-3xl lg:text-3xl font-bold leading-tight text-right mt-8 mb-4'>  
  
          "A relationship between <span   className='text-amber-400'> Product Services & Customer  </span>must be like <span className='text-amber-400'>  'Fish & Net."</span>
</h2>

    </div>
  );
};

export default Content;
