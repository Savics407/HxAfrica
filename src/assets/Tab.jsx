import React from "react";
import { Link, NavLink } from "react-router-dom";

function Tabs() {
  return (
    <div>
      <div className=" banner border bg-banner text-dashbg w-full py-6 px-9">
        <h1 className="text-white font-semibold text-2xl mb-2">
          Top Investments
        </h1>
        <h1 className="font-normal text-sm mb-3">
          Join the early investors and earn better
        </h1>
        <div className="flex">
          <h1 className="text-xs font-extrabold bg-green w-fit px-4 py-1 mr-5">
            1{" "}
            <span className="uppercase font-semibold text-tiny">Hx token </span>{" "}
            = N50,000
          </h1>
          <Link to="/token">
            <button className="bg-white text-green text-tiny font-normal rounded-full py-1 px-3">
              Buy Hx Token
            </button>
          </Link>
        </div>
      </div>
      <div className="flex border-b tab my-4 border-vestabsborder text-vestabs text-base font-semibold">
        <div className="tabs mr-8">
          <NavLink to="/investment">
            <div className="vestabs">
              <h1>new investments</h1>
            </div>
          </NavLink>
        </div>
        <div className="tabs mr-8">
          <NavLink to="/investment/pending">
            <div className="vestabs">
              <h1>pending Investments</h1>
            </div>
          </NavLink>
        </div>
        <div className="tabs mr-8">
          <NavLink to="/investment/ongoing">
            <div className="vestabs">
              <h1>Ongoing</h1>
            </div>
          </NavLink>
        </div>
        <div className="tabs mr-8">
          <NavLink to="/investment/completed">
            <div className="vestabs">
              <h1>completed</h1>
            </div>
          </NavLink>
        </div>
        <div className="tabs mr-8">
          <NavLink to="/investment/my-investment">
            <div className="vestabs">
              <h1>My investments</h1>
            </div>
          </NavLink>
        </div>
        <div className="tabs mr-8">
          <NavLink to="/investment/relisted-investment">
            <div className="vestabs">
              <h1>Relisted investments</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
