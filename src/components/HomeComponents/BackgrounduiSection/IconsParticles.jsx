import React from "react";
import "./IconsParticles.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,  } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="box-area">

      <div className="icon-float-layer">
        <FaFacebookF className="float-icon delay-1" />
        <FaLinkedinIn className="float-icon delay-2" />
        <FaTwitter className="float-icon delay-3" />
        <FaInstagram className="float-icon delay-4" />
        
      </div>
    </div>
  );
};

export default FloatingIcons;

















