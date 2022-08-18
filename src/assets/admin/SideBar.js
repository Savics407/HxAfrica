import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { RiSettings3Fill } from "react-icons/ri";
import { AiFillPropertySafety } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";

function SideBar() {
  return (
    <div className="">
      <div className="side-nav">
        <NavLink to="/admin-dashboard">
          <div className="sidenav-items">
            <MdDashboard className="s-icons" />
            <h1>Dashboard</h1>
          </div>
        </NavLink>
        <NavLink to="/investment">
          <div className="sidenav-items">
            <FaRegUserCircle className="s-icons" />
            <h1>Marchants</h1>
          </div>
        </NavLink>
        <NavLink to="/token">
          <div className="sidenav-items">
            <GiWallet className="s-icons" />
            <h1>Investment</h1>
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div className="sidenav-items">
            <BiUserPin className="s-icons" />
            <h1>Investors</h1>
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div className="sidenav-items">
            <TiGroup className="s-icons" />
            <h1>Staffs</h1>
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div className="sidenav-items">
            <AiFillPropertySafety className="s-icons" />
            <h1>Roles & Permission</h1>
          </div>
        </NavLink>

        <NavLink to="/settings">
          <div className="sidenav-items">
            <RiSettings3Fill className="s-icons" />
            <h1>Settings</h1>
          </div>
        </NavLink>
      </div>
      <div className="border-t p-5">
        <div className="flex p-3 font-medium text-sideText">
          <BiLogOut className="s-icons" />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
