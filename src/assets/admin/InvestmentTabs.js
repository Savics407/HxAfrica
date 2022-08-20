import React from "react";
import { NavLink } from "react-router-dom";

function InvestmentTabs() {
  return (
    <div>
      <div className="flex items-center mar text-sm rounded-lg my-4 text-footer bg-white px-9 ">
        <NavLink to="/admin/investments">
          <div className=" font-normal border-b-4 border-transparent px-1 py-2.5 hover:text-dark">
            <h1>Investments </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Approved </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Inactive </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Pullout Request </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Relisted </h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default InvestmentTabs;
