import React from "react";
import "./IconsParticles.css";
import { Facebook, Twitter, Instagram, Linkedin,  } from "lucide-react";

const FloatingIcons = () => {
  return (
    <div className="box-area">

      <div className="icon-float-layer">
        <Facebook className="float-icon delay-1" />
        <Linkedin className="float-icon delay-2" />
        <Twitter className="float-icon delay-3" />
        <Instagram className="float-icon delay-4" />
        
      </div>
    </div>
  );
};

export default FloatingIcons;

















