import React, { useState, useRef } from "react";

// images
import img1 from "../assets/hero.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Slider() {
  const sliderItems = [
    {
      item: img1,
    },
    {
      item: img1,
    },
    {
      item: img1,
    },
    {
      item: img1,
    },
    {
      item: img1,
    },
    {
      item: img1,
    },
    {
      item: img1,
    },
    {
      item: img1,
    },
  ];
  const [item, setItem] = useState(sliderItems);

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Slider;
