import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { assests } from '../../assets/assets';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from './Button';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // Scroll down → hide
      } else {
        setShowHeader(true); // Scroll up → set show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setShowHeader(true);
  }, [location.pathname]);

  return (
    <div>
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'} ${open ? 'bg-transparent' : 'bg-transparent'} md:bg-transparent`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3 px-6 sm:px-8 md:px-10">
        <Link to='/'>
          <img src={assests.logo} className="w-24" alt="Logo" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-amber-400 text-sm font-semibold uppercase">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-white' : ''}><li className="cursor-pointer hover:text-white">Home</li></NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white' : ''}><li className="cursor-pointer hover:text-white">About</li></NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-white' : ''}><li className="cursor-pointer hover:text-white">Services</li></NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'text-white' : ''}><li className="cursor-pointer hover:text-white">Portfolio</li></NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'text-white' : ''}><li className="cursor-pointer hover:text-white">Careers</li></NavLink>
        </ul>

        <Link to="/contact" className="hidden md:block">
          <Button />
        </Link>

        <img src={assests.menu} onClick={() => setOpen(true)} className="md:hidden w-9 cursor-pointer" alt="Menu" />

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-1  transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col items-center py-8 px-4 min-h-screen bg-black">
            <img src={assests.cross} onClick={() => setOpen(false)} className="w-8 absolute top-4 right-4 cursor-pointer" alt="Close" />
            <img src={assests.logo} className="w-28 mb-6 mt-12" alt="Logo" />

            <nav className="flex flex-col gap-6 text-white text-xl font-semibold justify-center items-center">
              <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services">Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/portfolio">Portfolio</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/careers">Careers</NavLink>
              <Link to="/contact" onClick={() => setOpen(false)} className="bg-amber-300 text-black px-6 py-2 rounded-full hover:bg-amber-400">Contact</Link>
            </nav>

            <div className="mt-6 flex justify-center items-center text-white text-sm text-center gap-5">
              <div className="flex items-center justify-center gap-2 ">
                <img src={assests.call} className="w-5" alt="Call" />
                <p>+91 83330 79696</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src={assests.mail} className="w-5" alt="Mail" />
                <p>dadtheadbbmm@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 text-amber-400 text-2xl mt-4">
              <a href="https://www.facebook.com/profile.php?id=61570862415128" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
              <a href="https://www.instagram.com/dad_thefisherman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
              <a href="https://www.linkedin.com/company/dad-the-ad/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="https://x.com/DadtheAD?t=zU_GGRmSr_UmZ9I_jNOzJw&s=09" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
              {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a> */}
            </div>
          </div>
        </div>

      </div>

     
    </header>
     {/* WhatsApp */}
      <motion.a
   href="https://wa.me/918333079696" 
      target="_blank"
      rel="noopener noreferrer"
      animate={{ y: [0, -30, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-[2] border-b-4 border-white hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp className="w-6 h-6" />
</motion.a>
    </div>
  );
};

export default Header;
