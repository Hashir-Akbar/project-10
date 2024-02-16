import React, { useState, useRef } from "react";

// images
import img1 from "../assets/hero.avif";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function Slider() {
  let [currentSlide, setCurrentSlide] = useState(0);

  const sliderItems = [
    {
      item: img1,
      active: currentSlide === 0,
    },
    {
      item: img1,
      active: currentSlide === 1,
    },
    {
      item: img1,
      active: currentSlide === 2,
    },
    {
      item: img1,
      active: currentSlide === 3,
    },
    {
      item: img1,
      active: currentSlide === 4,
    },
    {
      item: img1,
      active: currentSlide === 5,
    },
    {
      item: img1,
      active: currentSlide === 6,
    },
    {
      item: img1,
      active: currentSlide === 7,
    },
  ];

  const nextClick = () => {
    sliderItems.length - 1;

    setCurrentSlide((c) => (c += 1));
  };

  return (
    <>
      <div className="slider ">
        <div className="max-w-xl group relative">
          {sliderItems.map((img, i) => (
            <img
              key={i}
              src={img.active ? img.item : ""}
              className="object-cover h-auto "
            />
          ))}
          <div className="button flex opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between w-full">
            <button className="bg-blue-950 rounded-sm py-4 px-2">
              <GrPrevious
                size={30}
                color="white"
                strokeWidth={4}
                fontWeight={700}
              />
            </button>
            <button
              className="bg-blue-950 rounded-sm py-4 px-2"
              onClick={nextClick}
            >
              <GrNext
                size={30}
                color="white"
                strokeWidth={4}
                fontWeight={700}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
