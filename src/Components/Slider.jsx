import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import image from "../images/confetti 1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Install Swiper components

const ImageSlider = () => {
  const images = [image, image, image];

  return (
    <Swiper spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
