import React from "react";
import { NavLink } from "react-router-dom";

function Martabs() {
  return (
    <div>
      <div className="flex items-center text-sm mar rounded-lg my-4 text-footer bg-white px-9 ">
        <NavLink to="/marchants">
          <div className=" font-normal border-b-4 border-transparent px-1 py-2.5 hover:text-dark">
            <h1>Merchants </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Pull Funds request </h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Martabs;
