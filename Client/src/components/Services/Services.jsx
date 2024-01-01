import React from "react";
import "./services.css"
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return ( 
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container container-services">
        {/* UI/UX Design */}
        <article className="service">
          <div className="head-service">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="list-service">
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className="service">
          <div className="head-service">
            <h3>Web Development</h3>
          </div>
          <ul className="list-service">
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className="service">
          <div className="head-service">
            <h3>Content Creation</h3>
          </div>
          <ul className="list-service">
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="list-service-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;