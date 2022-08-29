import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import search from "../images/Small.svg";
import avater from "../images/Avatar.svg";
import Martabs from "./Martabs";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function MarchantsList() {
  const [merchants, setMerchants] = useState();
  async function fetchMerchants() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_merchants",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data.name);
    setMerchants(result?.data);
  }
  useEffect(() => {
    fetchMerchants();
  }, []);

  return (
    <>
      <div className="flex justify-between my-6">
        <div className="border-2 w-44 bg-white rounded-lg px-4 py-3">
          <div className="w-full flex justify-between items-center text-sm text-sort">
            <h1>
              Sort By: <span className="font-semibold text-dark">All</span>
            </h1>

            <FaAngleDown />
          </div>
        </div>
        <div className="border-2 bg-white rounded-lg flex items-center px-5 justify-between w-411">
          <input
            type="search"
            placeholder="Search Merchants"
            className="outline-none font-normal text-sm w-full py-2"
          />
          <img src={search} alt="search" />
        </div>
      </div>

      {/* <Martabs /> */}
      <div className="flex items-center text-sm mar rounded-lg my-4 text-footer bg-white px-9 ">
        <Link to="/admin/merchants">
          <div
            className={` text-dark text-base border-b-4 border-green font-medium px-1 py-2.5 hover:text-dark `}
          >
            <h1>Merchants </h1>
          </div>
        </Link>
        <span className="w-7"> </span>
        <NavLink to="/admin/merchants/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Pull Funds request </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/admin/merchants/disbursed-funds">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Disbursed Funds </h1>
          </div>
        </NavLink>
      </div>
      <div className="rounded-lg bg-white mt-2 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">List of Merchants </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {merchants?.length}
            </span>
          </h1>
        </div>
        <div className="">
          <table className=" w-full table-auto">
            <thead className="">
              <tr className="text-left bg-bar">
                <th className="py-3 text-mobile-nav font-medium text-xs pl-9">
                  Name
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Email Address
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Address
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  State/City
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Action
                </th>
              </tr>
            </thead>
            {merchants?.map((merchant) => (
              <tr className="border-b font-inter" key={merchant.id}>
                <td className="py-8 pl-5 flex">
                  <div className="mr-2">
                    <img src={avater} alt="merchant avater" />
                  </div>
                  <div>
                    <h1 className="font-normal  text-deep text-sm">
                      {merchant.name}
                    </h1>
                    <h1 className="font-normal text-statustext text-xs">
                      200 Products
                    </h1>
                  </div>
                </td>
                <td className="py-8">
                  <h1 className="font-normal text-deep text-xs">
                    {merchant.email}
                  </h1>
                </td>
                <td className="py-8">
                  <h1 className="font-normal text-deep text-xs w-32">
                    {merchant.address}
                  </h1>
                </td>
                <td className="py-8">
                  <h1 className="font-normal text-deep text-xs">
                    {merchant.city}
                  </h1>
                </td>

                <td className="py-3">
                  <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                    Edit
                  </button>
                  <button className="font-medium text-xs font-inter text-red py-1 px-2">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </table>
          {/* <div className=" flex pt-20 px-7 items-center justify-between">
            <div className="border rounded-lg bg-page text-footer text-sm p-3">
              <span>Page 1 of 32</span>
            </div>
            <div className="flex justify-between w-80">
              <div className="text-backarrow bg-back rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center justify-center text-xs font-semibold">
                <MdArrowBackIosNew />
              </div>
              <div className="text-white bg-green rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                1
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                2
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                ...
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                9
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                10
              </div>
              <div className="border text-backarrow rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                <MdArrowForwardIos />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default MarchantsList;
