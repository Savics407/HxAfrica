import React, { useState } from "react";
import logo from "./../assets/images/HXafrica Logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);

  function sideBarFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", sideBarFixed);
  return (
    <div>
      {" "}
      <div className="bg-black text-white lg:py-2 p-3 text-center ">
        <h1 className="font-normal lg:text-base text-sm ">
          Be among the first to know when we launch!
        </h1>
      </div>
      <div
        className={`bg-white px-5 border-b ${
          fix && "fixed top-0 left-0 right-0 z-30"
        }`}
      >
        <div className="content">
          <div className=" flex justify-between items-center">
            <div className="w-[130px] lg:w-auto">
              <img src={logo} alt="HXAfrica Logo" />
            </div>
            <div
              className={`justify-between items-center lg:w-1/2 !block bg-white fixed top-0 -left-full lg:left-auto bottom-0 w-full transition-all duration-1000 lg:!relative lg:!flex  ${
                isOpen && "!left-0 z-30 transform"
              }`}
            >
              <div className="lg:hidden flex justify-between items-center px-5 py-5">
                <div className="w-[130px] lg:w-auto">
                  <img src={logo} alt="HXAfrica Logo" />
                </div>
                <div
                  className="lg:hidden p-2 text-2xl "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CgClose />
                </div>
              </div>

              <div
                className={`flex lg:flex-row font-normal items-center h-[200px] lg:h-auto justify-around flex-col  ${
                  isOpen && "px-1"
                }`}
              >
                <a href="#home" onClick={() => setIsOpen(false)}>
                  <h1 className="px-4 border-b-4 border-green py-8">Home</h1>
                </a>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  <h1 className="px-4">Team</h1>{" "}
                </a>
                <a href="#products" onClick={() => setIsOpen(false)}>
                  <h1 className="px-4 flex items-center">
                    <span className="mr-2">Services </span>{" "}
                    <MdOutlineKeyboardArrowDown />
                  </h1>{" "}
                </a>
                <a href="#service" onClick={() => setIsOpen(false)}>
                  <h1 className="px-4">About us</h1>
                </a>
              </div>
              <div className={`${isOpen && "p-5"} p-5 lg:p-0`}>
                <Link to="/login">
                  <button className="border border-green font-inter capitalize text-green rounded-full px-5 py-3 hover:bg-green hover:text-white transition">
                    Launch App
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="lg:hidden p-2 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CgMenuRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
