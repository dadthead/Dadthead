import React from 'react'
import { assests } from '../../../assets/assets'
import { motion } from 'framer-motion'


const Herocontact = () => {
    return (
        <div className="relative w-full h-[500px]">
            <img
                src={assests.contact}
                alt="Background"
                className="w-full h-full object-cover "
                loading='lazy'
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center ">
                < motion.h2
                 initial={{ opacity: 0, scale: 1.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.0, ease: "easeOut" }}
                 viewport={{ once: true }}
                 className="text-amber-400 text-5xl font-semibold text-center">

                    Contact Us
                </ motion.h2>


                <motion.p
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 viewport={{ once: true }}
                 className="text-white text-center text-base md:text-lg mt-3 px-6 font-light leading-relaxed max-w-2xl playfair">

"At <span class='text-amber-400 font-semibold'>DAD – The Ad</span>, it starts with a message. Let’s create your vision."                </ motion.p>
            </div>

        </div>
    )
}

export default Herocontact