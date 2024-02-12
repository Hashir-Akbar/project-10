import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className={`${props.width} cursor-auto`} onClick={props.onClick}>
      <Link className={`relative group/link  inline-block`} to={props.link}>
        <div
          className={`${props.backAniCss} group-hover/link:animate-wiggle transition duration-500 group-hover/link:${props.hoverBg} `}
        ></div>
        <div
          className={`absolute ${props.textColor} whitespace-nowrap font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          {props.btnValue}
        </div>
      </Link>
    </button>
  );
};

export default Button;
