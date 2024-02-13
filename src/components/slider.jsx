import React, { useState } from "react";

function slider() {
  const [item, setItem] = useState();

  const sliderItems = [{}];

  return (
    <div>
      <div className="display">

      </div>
      <div className="sliderItems"></div>
    </div>
  );
}

export default slider;
