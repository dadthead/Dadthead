import React from 'react'
import './Footer.css'
import { assests } from '../../assets/assets'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';


const Footer = () => {
    return (
        <>
            <div className='w-full h-auto bg-black border-t-1 border-gray-500  shadow-2xl shadow-slate-500 px-4 md:px-6 py-10'>
                <div className='flex flex-col md:flex-row gap-10 justify-between'>

                    {/* Logo & Tagline */}
                    <div className='md:w-1/3 flex flex-col items-center md:items-start'>
                        <img src={assests.logo} className='w-40 mb-4' alt="Logo" />
                        <h2 className='text-2xl text-amber-400 font-bold text-center md:text-left'>
                            Boos is Branding Magician in Marketing
                        </h2>
                    </div>

                    {/* About */}
                    <div className='md:w-1/3 text-center md:text-left'>
                        <h2 className='text-2xl text-amber-400 font-bold mb-2'>About</h2>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cumque quod tempore maiores dicta eligendi beatae sapiente quisquam earum aspernatur! Mollitia architecto eos quasi distinctio at quisquam adipisci reprehenderit nisi.
                        </p>
                        <div className='flex flex-col gap-2'>
                            <p className='text-amber-400 font-bold text-2xl text-center md:text-left underline decoration-1 mb-1 decoration-amber-400'>Quick-links</p>
                            <div className='flex gap-2 justify-center md:justify-start flex-wrap'>
                            <p className='text-amber-400 decoration-1 '>HOME</p>
                            <p className='text-amber-400 '>ABOUT</p>
                            <p className='text-amber-400 '>SERVICE</p>
                            <p className='text-amber-400 '>CONTACT</p>
                            </div>
                          
                        </div>

                    </div>

                    {/* Subscribe + Contact */}
                    <div className='md:w-1/3 flex flex-col items-center md:items-start gap-4'>

                        <div className='flex w-full gap-2'>
                            <input
                                type="text"
                                placeholder='Enter Your Email'
                                className='flex-1  border-1 border-amber-50  rounded-xl  px-4 py-2 text-white bg-transparent'
                            />
                            <button className='bg-amber-400 text-xl font-bold rounded-xl px-4 py-2 text-white hover:bg-amber-500 transition-all'>
                                Subscribe
                            </button>
                        </div>

                        <div className='text-center md:text-left'>
                            <h2 className='text-2xl text-amber-400 font-bold mb-2'>Contact</h2>
                            <div className='flex gap-4 justify-center md:justify-start text-amber-500'>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={28} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><Youtube size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                            </div>
                            <div className='mt-4'>
                                <p className='text-white font-bold'>Address: <span className='text-white'>123 Main Street, Anytown, INDIAN</span></p>
                                <p className='text-white'>Email: <span className='text-white'>v2V2V@example.com</span></p>
                                <p className='text-white font-bold '>Phone: <span className='text-white'>+91 1234567890</span></p>
                            </div>


                        </div>
                    </div>

                </div>

                <hr className='border-t  border-white mt-5' />
            </div>
            <div className='w-full flex bg-black py-1 justify-center '>
                <p className='text-center text-white mb-2.5 '>
                    &copy; 2025 Dad TheAd. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
