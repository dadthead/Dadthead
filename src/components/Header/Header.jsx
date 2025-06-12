import React, { useState } from 'react'
import { assests } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';


const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full top-0 left-0  fixed right-0 ">
            <div className=" w-full flex items-center justify-between py-[-12] px-6 sm:px-12 md:px-10 " >
                <img src={assests.logo} className=" w-23 " alt="" />
                <ul className="hidden md:flex items-center gap-10 text-amber-300 text-[12px] font-semibold uppercase font-sm  ">
                    <NavLink to="/">
                        <li className="cursor-pointer hover:text-white "> Home</li>
                        <hr className="w-3/4 h-[1.5pwx] broder-none hidden bg-white " />
                    </NavLink>

                    <NavLink to="/about">
                        <li className="cursor-pointer hover:text-white "> About</li>
                        <hr className="w-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                    </NavLink>

                    <NavLink to="/services">
                        <li className="cursor-pointer hover:text-white "> Services</li>
                        <hr className="w-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                    </NavLink>

                    <NavLink to="/portfolio">
                        <li className="cursor-pointer hover:text-white "> Portfolio</li>
                        <hr className="w-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                    </NavLink>

                    <NavLink to="/careers">
                        <li className="cursor-pointer hover:text-white "> Careers</li>
                        <hr className="w-3/4 h-[1.5pwx] broder-none hidden bg-amber-400  hover:bg-white " />

                    </NavLink>
                </ul>

                <Link to="/contact">
                    <button className=" text-gray-900 bg-amber-300 font-bold px-6 py-2 rounded-3xl hover:bg-amber-400 text-[12px] hover:text-black uppercase  cursor-pointer hidden md:block ">  Contact</button>
                </Link>

                {/* mobile menu */}

                <img src={assests.menu} onClick={() => setOpen(true)} className="md:hidden w-9  cursor-pointer" alt="" />

                <div className={`fixed top-0 bottom-0 right-0 left-0 overflow-hidden z-50 bg-black  transition-ease-in-out duration-500 ${open ? 'w-full' : 'w-0'} `}>
                    <div className="flex flex-col items-center gap-4 py-8 px-3 ">
                        <img src={assests.cross} onClick={() => setOpen(false)} className="w-9 cursor-pointer absolute top-4 right-4" alt="" />
                        <div className="flex flex-col items-center gap-6 mt-15 font-bold text-2xl">

                            <img src={assests.logo} className=" w-33 top-5 left-2 md:hidden" alt="" />


                            <NavLink className="text-white cursor-pointer hover:text-white " onClick={() => setOpen(false)} to="/">
                                Home
                                <hr className="-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                            </NavLink>

                            <NavLink className="text-white cursor-pointer hover:text-white" onClick={() => setOpen(false)} to="/about">
                                About
                                <hr className="-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                            </NavLink>

                            <NavLink className="text-white cursor:pointer hover:text-white" onClick={() => setOpen(false)} to="/services">
                                Services
                                <hr className="-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                            </NavLink>

                            <NavLink className="text-white cursor:pointer hover:text-white" onClick={() => setOpen(false)} to="/portfolio">
                                Portfolio
                                <hr className="-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                            </NavLink>

                            <NavLink className="text-white cursor:pointer hover:text-white" onClick={() => setOpen(false)} to="/careers">
                                Careers
                                <hr className="-3/4 h-[1.5pwx] broder-none hidden bg-amber-400 " />

                            </NavLink>

                            <Link to="/contact">
                                <button className=" text-gray-600 bg-amber-300 px-6 py-2 rounded-3xl hover:bg-amber-400 text-base hover:text-black uppercase font-semibold cursor-pointer md:hidden">  Contact</button>
                            </Link>


                            <div className='flex items-center gap-8 justify-between py-2'>
                                <div className="flex flex-inline items-center gap-2 text-2xl" >
                                    <img src={assests.call} className=" w-7  top-5 left-2 md:hidden" alt="" />
                                    <p className="text-white text-sm">+91 987651230</p>

                                </div>
                                <div className="flex flex-inline items-center gap-2 text-2xl" >
                                    <img src={assests.mail} className=" w-7 top-5 left-2 md:hidden" alt="" />
                                    <p className="text-white text-sm">7oNfD@example.com</p>
                                </div>
                            </div>
                            <div >
                                <div className="flex gap-4 text-amber-400 text-2xl">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <Facebook size={30} />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <Instagram size={30} />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={30} />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <Twitter size={30} />
                                    </a>
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                        <Youtube size={30} />
                                    </a>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header