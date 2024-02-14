import React, { useState, useRef } from "react";

// images
import img1 from "../assets/hero.png";
import { useEffect } from "react";

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

  const imgDiv = useRef(null);
  let imgChilds;
  useEffect(() => {
    imgChilds = imgDiv.current.children[0].width;
  }, []);

  function nextClick() {
    let slider = imgDiv.current;

    slider.scroll({
      left: 100,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="display"></div>
      <div
        ref={imgDiv}
        className="sliderItems  border-red-700 border flex  max-w-xl overflow-x-scroll gap-5 "
      >
        {item.map((item, index) => {
          return <img src={item.item} alt="" key={index} />;
        })}
      </div>
      <div className="flex gap-4">
        <button onClick={nextClick} className="border border-purple-700">
          Next
        </button>
        <button className="border border-purple-700">Prev</button>
      </div>
    </div>
  );
}

export default Slider;
