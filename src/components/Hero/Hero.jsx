import React from 'react';
import Header from '../Header/Header';

const Hero = () => {
    return (
        <>
            <Header />
            <div
                className="w-full h-screen bg-cover bg-center "
                style={{ backgroundImage: `url('/Heropage1.jpg')` }}
            >
                {/* Centered Content */}
                <div className="relative z-10 flex flex-col pb-30 justify-center items-center h-full text-white text-center">
                    <h2 className="text-4xl  md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
                        Welcome to DadtheAD
                    </h2>
                    <p className="text-lg">Your one-stop digital marketing partner</p>
                </div>
            </div>
        </>
    );
};

export default Hero;
