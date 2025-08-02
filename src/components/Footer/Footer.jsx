
import React, { useState } from 'react'
import './Footer.css'
import { assests } from '../../assets/assets'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (!emailPattern.test(email)) {
            setResult("❌ Enter a valid lowercase email address.");
            return;
        }

        setResult("Sending...");

        const formData = new FormData();
        formData.append("email", email);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with your Web3Forms access key

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Subscription successful!");
            setEmail('');
        } else {
            setResult("❌ Failed to subscribe.");
        }
    };

    return (
        <>
            <div className='w-full h-auto bg-black border-t-1 border-gray-500  shadow-2xl shadow-slate-500 px-4 md:px-6 py-10'>
                <div className='flex flex-col md:flex-row gap-10 justify-between'>

                    {/* Logo & Tagline */}
                    <div className='md:w-1/3 flex flex-col items-center md:items-start'>
                        <img src={assests.logo} className='w-40 mb-4' loading='lazy' alt="Logo" />
                        <h2 className='text-2xl text-amber-400 font-bold text-center md:text-left'>
                            Boos is Branding Magician in Marketing
                        </h2>
                    </div>

                    {/* About */}
                    <div className='md:w-1/3 text-center md:text-left'>
                        <h2 className='text-2xl text-amber-400 font-bold mb-2'>About</h2>
                        <p className='text-white'>
                            We are a passionate team dedicated to delivering innovative digital solutions that elevate your brand. With expertise in marketing, design, and technology, we help businesses grow, engage their audience, and achieve measurable results. Our focus is on creativity, strategy, and excellence—bringing your vision to life with precision and purpose.
                        </p>

                        <div className='flex flex-col gap-2'>
                            <p className='text-amber-400 font-bold text-2xl text-center md:text-left underline decoration-1 mb-1 decoration-amber-400'>Quick-links</p>
                            <div className='flex gap-2 justify-center md:justify-start flex-wrap'>
                                <p className='text-amber-400 decoration-1 cursor-pointer'><a href="/">HOME</a></p>
                                <p className='text-amber-400 decoration-1 cursor-pointer '><a href="/about">ABOUT</a></p>
                                <p className='text-amber-400 decoration-1 cursor-pointer'><a href="/services">SERVICE </a></p>
                                <p className='text-amber-400 decoration-1 cursor-pointer'><a href="/contact">CONTACT</a></p>
                            </div>
                        </div>

                    </div>

                    {/* Subscribe + Contact */}
                    <div className='md:w-1/3 flex flex-col items-center md:items-start gap-4'>

                        <form onSubmit={handleSubmit} className='flex w-full gap-2'>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter Your Email'
                                className='flex-1 border-1 border-amber-50 rounded-xl px-4 py-2 text-white bg-transparent'
                                value={email}
                                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                required
                            />
                            <button type='submit' className='bg-amber-400 text-xl font-bold rounded-xl px-4 py-2 text-white hover:bg-amber-500 transition-all'>
                                Subscribe
                            </button>
                        </form>
                        {result && <p className="text-white text-sm mt-2">{result}</p>}

                        <div className='text-center md:text-left'>
                            <h2 className='text-2xl text-amber-400 font-bold mb-2'>Contact</h2>
                            <div className='flex gap-4 justify-center md:justify-start text-amber-500'>
                                <a href="https://www.facebook.com/profile.php?id=61570862415128" target="_blank" rel="noopener noreferrer"><Facebook size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                <a href="https://www.instagram.com/dad_thefisherman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><Instagram size={28} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                <a href="https://www.linkedin.com/company/dad-the-ad/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                <a href="https://x.com/DadtheAD?t=zU_GGRmSr_UmZ9I_jNOzJw&s=09" target="_blank" rel="noopener noreferrer"><Twitter size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a>
                                {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><Youtube size={24} className='hover:text-amber-400 hover:scale-110 transition-all  duration-75' /></a> */}
                            </div>
                            <div className='mt-4'>
                                <p className='text-white font-bold'>Address: <span className='text-white'>Near varjrams, 4th Ln, 13th Cross, Brodipet, Guntur, Andhra Pradesh 522002</span></p>
                                <p className='text-white'>Email: <span className='text-white'>dadtheadbbmm@gmail.com</span></p>
                                <p className='text-white font-bold '>Phone: <span className='text-white'>+91 83330 79696</span></p>
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

export default Footer;

