import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./header.css"

const HeaderSocials = () => {
  return ( 
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/ayoub-husein-659b54254/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Ayoub-Haj-Husein" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.facebook.com/ayoub.haj.husein" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    </div>
  );
}

export default HeaderSocials;
