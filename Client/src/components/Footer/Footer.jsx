/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return ( 
    <footer>
      <a href="#" className="footer-logo">EGATOR</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/ayoub-husein-659b54254/"><BsLinkedin /></a>
        <a href="https://github.com/Ayoub-Haj-Husein"><FaGithub /></a>
        <a href="https://www.facebook.com/ayoub.haj.husein"><FaFacebook /></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Ayoub Husein. All Rights Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;