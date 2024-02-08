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
import { BsNintendoSwitch } from "react-icons/bs";
import { MdGamepad } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { PiNewspaperFill } from "react-icons/pi";
import { BiSolidStar } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { GiEagleHead } from "react-icons/gi";
import { IoMdPricetag } from "react-icons/io";
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
      icon: <BsNintendoSwitch />,
      active: false,
      hasDrop: true,
    },
    {
      name: "Games",
      icon: <MdGamepad />,
      active: false,
      hasDrop: true,
    },
    {
      name: "Nintendo Switch",
      icon: <SiNintendogamecube />,
      active: false,
      hasDrop: true,
    },
    {
      name: "News & Events",
      icon: <PiNewspaperFill />,
      active: false,
      hasDrop: false,
      to: "/project-10/dd",
    },
    {
      name: "Play Nintendo",
      icon: <BiSolidStar />,
      active: false,
      hasDrop: true,
    },
  ];

  const subMenuDropContents = [];
  const [subMenuDropContent, setSubMenuDropContent] = useState();

  const [nintendoItems, setNintendoItems] = useState(subNav);
  const [isNintendo, setNintendo] = useState(true);
  const subMenuDrop = useRef(null);
  const subMenuDropIcon = useRef(null);

  const nintendoToggle = (i) => {
    const newNintendoItems = nintendoItems.map((item, index) => {
      if (index === i) {
        item.hasDrop && setNintendo(() => (item.active ? true : false));

        !item.hasDrop && setNintendo(true);

        // const dropIcon = subMenuDropIcon.current.childrenAll[2];
        return {
          ...item,
          active: !item.active,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setNintendoItems(newNintendoItems);

    newNintendoItems.map((item, i) => {
      let subDrop = subMenuDropIcon.current.parentNode.children;
      for (let j = 0; j < subDrop.length; j++) {
        const element = subDrop[i];
        const dropIcon = element.children[2];

        item.active
          ? (dropIcon.style.rotate = "180deg")
          : (dropIcon.style.rotate = "0deg");
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      let cc = subMenuDrop.current;
      isNintendo && (cc.style.display = "none !important");
    }, 1500);
  }, [nintendoToggle]);

  const nintendoStoreDrop = [
    {
      name: "Games",
      icon: <MdGamepad />,
      items: ["Nintendo Switch Games", "New Releases", "Sales & Deals"],
    },
    {
      name: "Hardware",
      icon: <FaGamepad />,
      items: [
        "Nintendo Switch Statements",
        "Joy-Con & controllers",
        "Cases & more",
        "Replacement parts",
      ],
    },
    {
      name: "Merchandise",
      icon: <FaTshirt />,
      items: ["Apparel & accessories", "Home & office", "Plush", "Toys"],
    },
    {
      name: "Store exclusives",
      icon: <BiSolidStar />,
      items: [
        "Exclusive products",
        "My Nintendo rewards",
        "Nintendo Switch Online offers",
      ],
    },
    {
      name: "Characters",
      icon: <GiEagleHead />,
      items: ["Pikman", "Splatoon", "Super Mario", "The Legend of Zelda"],
    },
    {
      name: "Sales & Deals",
      icon: <IoMdPricetag />,
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
                    : "dropdown-content flex flex-col absolute top-8 w-full bg-white py-1 shadow-md rounded-lg z-20"
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
      <div className="flex relative  border-b-2 py-1">
        <div className="flex mx-auto  px-2 gap-6  font-bold">
          {nintendoItems.map((items, index) => (
            <Link
              to={items.to}
              ref={subMenuDropIcon}
              key={index}
              className={
                items.active
                  ? "flex items-center gap-2 text-theme-red  border-theme-red border-b-4 cursor-pointer py-1"
                  : "flex items-center gap-2 border-b-4 hover:text-theme-red border-white cursor-pointer py-1"
              }
              onClick={() => {
                nintendoToggle(index);
              }}
            >
              <span>{items.icon}</span>
              <span>{items.name}</span>

              {items.name !== "News & Events" ? (
                <span className="text-2xl  transition-all duration-300">
                  <MdKeyboardArrowDown />
                </span>
              ) : (
                <span></span>
              )}
            </Link>
          ))}
        </div>
        {nintendoItems.map(
          (item, i) =>
            item.hasDrop && (
              <div
                key={i}
                ref={subMenuDrop}
                className={
                  isNintendo
                    ? "h-0 absolute top-12 w-full  bg-black transition-all ease-linear"
                    : "absolute transition-all  ease-linear h-44 text-white bg-black w-full top-12"
                }
              >
                {item.active && i === 0 && (
                  <div className="absolute z-10 w-full">
                    <div className="py-4 bg-theme-red flex w-full justify-center after:bg-NavPattern after:absolute after:top-14 after:h-6 after:bg-repeat-x after:mt-1 after:w-full">
                      <Link className="flex max-w-max font-bold gap-2 text-lg items-center">
                        <BsNintendoSwitch />
                        My Nintendo Store
                      </Link>
                    </div>

                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                )}
                {item.active && i === 1 && (
                  <div className="absolute z-10">Hello Games</div>
                )}
                {item.active && i === 2 && (
                  <div className="absolute z-10">Hello Nintendo Switch</div>
                )}
                {item.active && i === 4 && (
                  <div className="absolute z-10">Hello Play</div>
                )}
              </div>
            )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
