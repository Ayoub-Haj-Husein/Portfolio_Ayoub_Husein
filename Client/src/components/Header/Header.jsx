import React from "react";
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials'
import "./header.css"

const Header = () => {
  return ( 
    <header>
      <div className="container container-header">
        <h5>Hello, I'm</h5>
        <h1>Ayoub Husein</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src = {ME} alt="Personal_Image" />
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;