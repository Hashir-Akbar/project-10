import React from "react";
import { Link } from "react-router-dom";

// images and svgs
import Logo from "../assets/logo.svg?react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <ul className="flex">
        <li>
          <Link className="p-5 block  bg-theme-red " to="/">
            {<Logo />}
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
