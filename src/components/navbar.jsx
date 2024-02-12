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
import { HiSpeakerphone } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { PiGameControllerFill } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { BiSolidUniversalAccess } from "react-icons/bi";
import { GrSystem } from "react-icons/gr";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
// images and svgs
import Logo from "../assets/logo.svg?react";
import Navicon from "../assets/iconnav.svg?react";
import Navicon2 from "../assets/iconnav2.svg?react";

// components
import Button from "./button";

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

  const gamesDropItems = [
    {
      name: "Nintendo Switch games",
      icon: <BsNintendoSwitch />,
    },
    {
      name: "New Releases",
      icon: <HiSpeakerphone />,
    },
    {
      name: "Coming Soon",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Shop games",
      icon: <FaGamepad />,
    },
  ];

  const nintendoSwitchDropItems = [
    {
      name: "Nintendo Switch lineup",
      icon: <PiGameControllerFill />,
    },
    {
      name: "Compare systems",
      icon: <MdCompareArrows />,
    },
    {
      name: "Online services",
      icon: <GrServices />,
    },
    {
      name: "Accessories",
      icon: <BiSolidUniversalAccess />,
    },
    {
      name: "Shop Systems",
      icon: <GrSystem />,
    },
  ];

  const playNintendoDropItems = [
    {
      name: "For Kids",
      icon: (
        <div className="flex">
          <HiOutlineEmojiHappy />
          <HiOutlineEmojiHappy />
        </div>
      ),
    },
    {
      name: "For Parents",
      icon: (
        <div className="flex items-center">
          <span>
            <BsFillEmojiSmileFill />
          </span>
          <span className="text-4xl">
            <HiOutlineEmojiHappy />
          </span>
        </div>
      ),
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
                    ? "h-0 absolute top-12 w-full  bg-theme-white transition-all ease-linear"
                    : "absolute group transition-all duration-75  ease-linear h-72 text-theme-black bg-theme-white shadow-sm w-full top-12"
                }
              >
                {item.active && i === 0 && (
                  <div className="absolute z-10 w-full">
                    <div className="py-4 bg-theme-red flex w-full justify-center after:bg-NavPattern after:absolute after:top-14 after:h-6 after:bg-repeat-x after:mt-1 after:w-full">
                      <Link className="flex max-w-max text-white font-bold gap-2 text-lg items-center">
                        <BsNintendoSwitch />
                        My Nintendo Store
                      </Link>
                    </div>

                    <div className="grid grid-cols-6 max-w-6xl pt-8 pb-5 mx-auto justify-items-center">
                      {nintendoStoreDrop.map((item, i) => (
                        <div className="flex flex-col" key={i}>
                          <Link className="flex gap-2 text-md items-center pb-3 font-bold hover:text-theme-red transition-all">
                            <span className="text-theme-red">{item.icon}</span>
                            {item.name}
                          </Link>
                          <div className="flex flex-col text-sm gap-1 whitespace-nowrap">
                            {Array.isArray(item.items) &&
                              item.items.map((r) => <span>{r}</span>)}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      btnValue="Shop All"
                      width="w-full mx-auto"
                      backAniCss="px-12 py-6 border border-theme-red rounded-lg"
                      textColor="text-theme-red"
                    />
                  </div>
                )}
                {item.active && i === 1 && (
                  <div className="absolute z-10 flex gap-8 w-full justify-center pt-20">
                    {gamesDropItems.map((item, i) => (
                      <div
                        key={i}
                        className="text-xl text-center flex flex-col   hover:text-theme-red cursor-pointer items-center  "
                      >
                        <span className="text-6xl group hover:bg-theme-red hover:text-theme-white border px-6 py-3">
                          {item.icon}
                        </span>
                        <span className="max-w-32 text-sm inline-block">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {item.active && i === 2 && (
                  <div className="absolute z-10 flex gap-8 w-full justify-center pt-20">
                    {nintendoSwitchDropItems.map((item, i) => (
                      <div
                        key={i}
                        className="text-xl text-center flex flex-col   hover:text-theme-red cursor-pointer items-center  "
                      >
                        <span className="text-6xl group hover:bg-theme-red hover:text-theme-white border px-6 py-3">
                          {item.icon}
                        </span>
                        <span className="max-w-32 text-sm inline-block">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {item.active && i === 4 && (
                  <div className="absolute z-10 flex gap-8 w-full justify-center pt-20">
                    {playNintendoDropItems.map((item, i) => (
                      <div
                        key={i}
                        className="text-xl text-center flex flex-col   hover:text-theme-red cursor-pointer items-center  "
                      >
                        <span className="text-6xl group hover:bg-theme-red hover:text-theme-white border px-6 py-3">
                          {item.icon}
                        </span>
                        <span className="max-w-32 text-sm inline-block">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
        )}
      </div>
      <div className="bg-theme-light-white flex py-5 items-center justify-center">
        <div className="flex gap-2 items-center pr-3 border-r-black border-r">
          <span className="text-theme-red">
            <Navicon />
          </span>
          <p>
            <span className="font-bold">Free shipping</span> on orders $50 or
            more. <span className="underline">Restrictions apply.</span>
          </p>
        </div>
        <div className="pl-3 flex gap-2 items-center">
          <span className="text-theme-red">
            <Navicon2 />
          </span>
          <p>
            Earn <span className="font-bold underline">My Nintendo Points</span>{" "}
            on digital games
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
