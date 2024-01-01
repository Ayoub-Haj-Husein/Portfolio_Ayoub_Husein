import React from "react";
import "./testmonials.css"
import AVATAR_1 from "../../assets/avatar_1.jfif"
import AVATAR_2 from "../../assets/avatar_2.jpg"
import AVATAR_3 from "../../assets/avatar_3.jpg"
import AVATAR_4 from "../../assets/avatar_4.jpg"
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testmonials = () => {
  return ( 
    <section id="testmonials">
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testmonials-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testmonials">
          <div className="client-avatar">
            <img src={AVATAR_1} alt="Avatar_One" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti eaque labore inventore 
            reprehenderit cum laudantium natus a, necessitatibus eum reiciendis architecto cupiditate quisquam 
            doloribus, maiores odit ducimus! Earum, porro?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonials">
          <div className="client-avatar">
            <img src={AVATAR_2} alt="Avatar_Tow" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti eaque labore inventore 
            reprehenderit cum laudantium natus a, necessitatibus eum reiciendis architecto cupiditate quisquam 
            doloribus, maiores odit ducimus! Earum, porro?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonials">
          <div className="client-avatar">
            <img src={AVATAR_3} alt="Avatar_Three" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti eaque labore inventore 
            reprehenderit cum laudantium natus a, necessitatibus eum reiciendis architecto cupiditate quisquam 
            doloribus, maiores odit ducimus! Earum, porro?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonials">
          <div className="client-avatar">
            <img src={AVATAR_4} alt="Avatar_Four" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti eaque labore inventore 
            reprehenderit cum laudantium natus a, necessitatibus eum reiciendis architecto cupiditate quisquam 
            doloribus, maiores odit ducimus! Earum, porro?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testmonials;