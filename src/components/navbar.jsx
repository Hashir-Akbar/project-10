import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { US } from "country-flag-icons/react/3x2";
// images and svgs
import Logo from "../assets/logo.svg?react";

const Navbar = () => {
  const categoriesDropdownIcon = useRef(null);

  const [isOpen, setIsOpen] = useState(true);
  const [dropTitle, setDropTitle] = useState("All categories");

  const categoryDrop = (e) => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);

    // e.target.style.rotate = '90deg'
  };

  useEffect(() => {
    let c = categoriesDropdownIcon.current.children[0];
    if (isOpen) {
      c.style.rotate = "0deg";
    } else {
      c.style.rotate = "180deg";
    }
  }, [isOpen]);

  const dropdownItems = [
    { name: "All categories", active: true },
    {
      name: "Games",
      active: false,
    },
    { name: "Hardware", active: false },
    { name: "Merchandise", active: false },
    { name: "News & Events", active: false },
    { name: "Support", active: false },
  ];

  const dropItemsActive = (e) => {
    setDropTitle(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const [inputValue, setInputValue] = useState("Search");
  const inputClick = () => {
    setInputValue(() => "");
  };
  const input = useRef(null);

  useEffect(() => {
    let [a, b] = input.current.children;

    const handleClick = (e) => {
      // console.log(e.target === input.current.children[0]);
      if (e.target !== a && e.target !== b && e.target !== a.children[0]) {
        setInputValue(() => "Search");
      }
      if (e.target !== categoriesDropdownIcon) {
        setIsOpen(true);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick); // Specify the event type here
    };
  }, []);

  const inputVal = (e) => {
    setInputValue(e.target.value);
  };

  const navbarList = [
    {
      name: "Support",
      icon: <MdContactSupport />,
      link: "/project-10/",
    },
    {
      name: "Wish List",
      icon: <FaHeart />,
      link: "/project-10/",
    },
    {
      name: "Cart",
      icon: <FaShoppingCart />,
      link: "/project-10/",
    },
    {
      name: "Log in / Sign up",
      icon: <IoPerson />,
      link: "/project-10/",
    },
    {
      name: false,
      icon: <US title="United States" className="w-6" />,
      link: "/project-10/",
    },
  ];

  const subNav = [
    {
      name: "My Nintendo Store",
      icon: "",
    },
    {
      name: "Games",
      icon: "",
    },
    {
      name: "Nintendo Switch",
      icon: "",
    },
    {
      name: "News & Events",
      icon: "",
    },
    {
      name: "Play Nintendo",
      icon: "",
    },
  ];

  return (
    <nav className="  text-theme-black">
      <div className="flex items-center border-b-2 ">
        <Link className="p-5 block  bg-theme-red text-white" to="/project-10">
          {<Logo />}
        </Link>
        <form
          action=""
          className="px-5  group max-w-md w-full   hover:text-theme-red hover:placeholder:text-theme-red "
        >
          <div className="input-group flex border-b-black transition-colors  group-hover:border-b-theme-red border-b items-center py-1  cursor-pointer">
            <div
              className="flex items-center gap-3 text-black w-full transition-colors  hover:text-theme-red"
              ref={input}
              onClick={inputClick}
            >
              <IoSearchSharp className="text-2xl" />
              <input
                type="text"
                value={inputValue}
                onChange={inputVal}
                className="focus-within:outline-none cursor-pointer w-full"
              />
            </div>
            <div className="dropdown relative transition-all min-w-32 text-theme-black hover:text-theme-red">
              <div
                className="flex items-center font-bold text-sm gap-2 "
                onClick={categoryDrop}
              >
                <span className="whitespace-nowrap">{dropTitle}</span>
                <div ref={categoriesDropdownIcon}>
                  <MdKeyboardArrowDown className="text-2xl transition-all duration-300" />
                </div>
              </div>
              <div
                className={
                  isOpen
                    ? "hidden"
                    : "dropdown-content flex flex-col absolute top-8 w-full bg-white py-1 shadow-md rounded-lg z-10"
                }
              >
                {dropdownItems.map((item, index) => (
                  <span
                    onClick={dropItemsActive}
                    className={
                      "font-bold text-xs px-3 py-1 text-black hover:bg-gray-300"
                    }
                    key={index}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </form>

        <div className="ml-auto flex items-center gap-6 px-5 whitespace-nowrap">
          {navbarList.map((item, index) => (
            <Link
              to={item.link}
              className="flex items-center gap-2 font-bold cursor-pointer hover:text-theme-red transition-all"
              key={index}
            >
              <span className="text-2xl">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center relative">
        <div className="flex mx-auto px-2 gap-6 font-bold">
          {subNav.map((items, index) => (
            <div
              key={index}
              className="flex items-center  border-theme-red border-b-4 cursor-pointer py-1"
            >
              <span>{items.icon}</span>
              <span>{items.name}</span>
              <span className="text-2xl">
                <MdKeyboardArrowDown />
              </span>
            </div>
          ))}
        </div>
        <div className="absolute h-44 bg-black w-full top-20"></div>
      </div>
    </nav>
  );
};

export default Navbar;
