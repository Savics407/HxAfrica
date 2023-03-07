import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  return (
    <div>
    
      <div className="bg-black text-white lg:py-2 p-3 text-center hidden lg:block">
        <h1 className="font-normal lg:text-base text-sm ">
          Be among the first to know when we launch!
        </h1>
      </div>
      <div
        className={`bg-white px-5 border-b py-5 lg:py-0 ${
          fix && "fixed top-0 left-0 right-0"
        }`}
      >
        {isOpen && <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000069] transform duration-2000" onClick={() => setIsOpen(!isOpen)}></div>}
        <div className="content">
          <div className="flex justify-between items-center">
            <Link to="/">
            <div className="w-[130px] lg:w-auto">
              <img src={logo} alt="HXAfrica Logo" />
            </div>
            </Link>
            <div
              className={`lg:justify-between items-center lg:w-1/2 bg-white fixed top-0 -right-full lg:right-auto bottom-0 w-3/4 transition-all duration-1000 lg:!relative lg:!flex  ${
                isOpen && "!right-0 z-30 transform flex flex-col "
              }`}
            >
              <div className="lg:hidden flex justify-end items-center px-5 py-5 border-b w-full">
                {/* <div className="w-[130px] lg:w-auto">
                  <img src={logo} alt="HXAfrica Logo" />
                </div> */}
                <div
                  className="lg:hidden p-2 text-2xl "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CgClose />
                </div>
              </div>

              <div
                className={`flex lg:flex-row font-normal lg:items-center lg:justify-around flex-col link w-full lg:w-auto text-[#1E1E1E] py-5 lg:py-0 ${
                  isOpen && "px-1 "
                }`}
              >
                <NavLink to="/" className="border-b-4 border-transparent" onClick={() => setIsOpen(false)}>
                  <div className="px-4 lg:py-8 py-5">
                    <h1>Home</h1>
                  </div>
                </NavLink>
                <NavLink to="/team" className="border-b-4 border-transparent" onClick={() => setIsOpen(false)}>
                  <div className="px-4 lg:py-8 py-5">
                    <h1>Team</h1>{" "}

                  </div>
                </NavLink>
                <NavLink to="/services" className="border-b-4 border-transparent" onClick={() => setIsOpen(false)}>
                  <div className="px-4 lg:py-8 py-5">
                    <h1>
                      <span className="mr-2">Services </span>{" "}
                      {/* <MdOutlineKeyboardArrowDown /> */}
                    </h1>{" "}
                  </div>

                 
                </NavLink>
                <NavLink to="/about" className="border-b-4 border-transparent" onClick={() => setIsOpen(false)}>
                  <div className="px-4 lg:py-8 py-5">
                    <h1>About us</h1>

                  </div>

                </NavLink>
              </div>
              <div className={`${isOpen && "p-5"} p-5 lg:p-0 w-full lg:w-auto`}>
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
