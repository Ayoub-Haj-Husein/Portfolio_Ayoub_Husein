/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import "./contact.css"
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()
  const sendEmail = async (e) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.sendForm('service_w3uedl5', 'template_q1rymbi', form.current, 'Cn5XZcVw3nyn7gyr9');
      console.log(result);
      e.target.reset()
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };
  
  return ( 
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMailOutline className="contact-option-icon"/>
            <h4>Email</h4>
            <h5>ayoubabdulrahmanhusein</h5>
            <a href="mailto:ayoubabdulrahmanhusein@gmail.com" target="_blank" rel="noopener noreferrer">Send A Message</a>
            {/* oimio */}
            <form action=""></form>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon"/>
            <h4>Messenger</h4>
            <h5>Egatortutorials</h5>
            <a href="https://m.me/ayoub.haj.husein" target="_blank" rel="noopener noreferrer">Send A Message</a>
            {/* oimio */}
            <form action=""></form>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon"/>
            <h4>Whatsapp</h4>
            <h5>962-078-838-6721</h5>
            <a href="https://api.whatsapp.com/send?phone=962788386721" target="_blank" rel="noopener noreferrer">Send A Whatsapp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="Email" name="Email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;