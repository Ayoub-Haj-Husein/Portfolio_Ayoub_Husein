import React from "react";
import './portfolio.css'
import IMAGE_1 from '../../assets/image_1.jfif'
import IMAGE_2 from '../../assets/image_2.jfif'
import IMAGE_3 from '../../assets/image_3.jfif'
import IMAGE_4 from '../../assets/image_4.jfif'
import IMAGE_5 from '../../assets/image_5.jfif'
import IMAGE_6 from '../../assets/image_6.jfif'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Portfolio = () => {
  return ( 
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container-portfolio">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMAGE_1} alt="" />
          </div>
          <h3>This Is A The Portfolio Item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Ayoub-Haj-Husein?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMAGE_2} alt="" />
          </div>
          <h3>This Is A The Portfolio Item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Ayoub-Haj-Husein?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMAGE_3} alt="" />
          </div>
          <h3>This Is A The Portfolio Item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Ayoub-Haj-Husein?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMAGE_4} alt="" />
          </div>
          <h3>This Is A The Portfolio Item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Ayoub-Haj-Husein?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMAGE_5} alt="" />
          </div>
          <h3>This Is A The Portfolio Item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Ayoub-Haj-Husein?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMAGE_6} alt="" />
          </div>
          <h3>This Is A The Portfolio Item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Ayoub-Haj-Husein?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;