import React from 'react'
import { assests } from '../../../assets/assets'


const Herocontact = () => {
    return (
        <div className="relative w-full h-[500px]">
            <img
                src={assests.robotcontact}
                alt="Background"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
                <h2 className="text-white text-6xl font-bold text-center">
                   Contact Us
                </h2>
            </div>
        </div>
    )
}

export default Herocontact