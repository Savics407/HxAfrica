import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Martabs() {
  const [isClick, setIsClick] = useState(true);
  return (
    <div>
      <div className="flex items-center text-sm mar rounded-lg my-4 text-footer bg-white px-9 ">
        <Link to="/admin/merchants">
          <div className="font-normal border-b-4 border-transparent px-1 py-2.5 hover:text-dark">
            <h1>Merchants </h1>
          </div>
        </Link>
        <span className="w-7"> </span>
        <NavLink to="/merchants/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Pull Funds request </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>

        <NavLink to="/merchants/disbursed-funds">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Disbursed Funds </h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Martabs;
