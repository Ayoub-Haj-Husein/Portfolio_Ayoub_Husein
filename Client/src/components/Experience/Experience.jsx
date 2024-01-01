import React from "react";
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return ( 
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experianc</h2>
      <div className="container container-experiance">
        <div className="experiance-frontend">
          <h3>Frontend Development</h3>
          <div className="experiance-content">
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend Experiance */}
        <div className="experiance-backend">
        <h3>Backend Development</h3>
          <div className="experiance-content">
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance-details">
              <BsPatchCheckFill className="experiance-details-icon" />
              <div>
                <h4>Sequelize</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;