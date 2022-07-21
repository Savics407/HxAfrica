import React from "react";
import { FaBell } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import user from "./images/user_icon.png";

function mobileHeader() {
  const userName = localStorage.getItem("user-name");

  return (
    <>
      <div className="lg:hidden bg-welcome p-6 rounded-lg flex items-center justify-between w-full">
        <div className="">
          <h1 className="text-green font-black text-lg mb-3">
            Hi, <span className="text-dark">{userName}</span>
          </h1>
          <p className="font-normal text-sm text-dark">You are welcome</p>
        </div>
        <div className="flex items-center">
          <Link to="/notification">
            <div className="bg-primary text-dark rounded-full px-3 py-2.5 relative cursor-pointer mr-3">
              <FaBell className="w-4 h-5" />
              <div className="w-2 h-2 bg-red rounded-full absolute top-2.5 right-2.5 border border-white"></div>
            </div>
          </Link>
          <div className="w-9 relative">
            <Link to="/settings">
              <img src={user} alt="User-Icon" className="" />
            </Link>
            <div className="w-2 h-2 bg-on rounded-full absolute bottom-0 right-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default mobileHeader;
