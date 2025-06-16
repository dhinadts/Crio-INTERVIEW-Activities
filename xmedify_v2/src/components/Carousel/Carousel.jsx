// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import image1 from "../../assets/Offer10.png";
// import image2 from "../../assets/Offer20.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel({ carouselData, carouselItems, carouselHeading }) {
  return (
    <div className="carousel">
      <div className="text-center heading">{carouselHeading}</div>
      <Swiper
        slidesPerView={carouselItems}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        allowTouchMove
        className="mySwiper"
      >
        {carouselData.map((card) => (
          <SwiperSlide key={card.id}>
            <img src={card.img} alt={card.imgText} />
            <div className="text-center card-name">{card.name}</div>
            <div className="text-center card-role">{card.role}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
