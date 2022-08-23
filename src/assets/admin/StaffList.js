import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import search from "../images/Small.svg";
import avater from "../images/Avatar.svg";
import Martabs from "./Martabs";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function StaffList() {
  const [staffs, setStaffs] = useState();
  async function fetchStaffs() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_staffs",
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
    setStaffs(result?.data);
  }

  useEffect(() => {
    fetchStaffs();
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

      <div className="rounded-lg bg-white mt-2 mb-3 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">List of Staffs </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {staffs?.length}
            </span>
          </h1>
        </div>
        <div className="">
          <table className=" w-full table-auto">
            <thead className="">
              <tr className="text-left bg-bar">
                <th className="py-3 text-mobile-nav font-medium text-xs pl-9">
                  Staff Name
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Phone Number
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Staff Role
                </th>

                <th className="py-3 text-center w-52 text-mobile-nav font-medium text-xs ">
                  Action
                </th>
              </tr>
            </thead>
            <tr className="border-b">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={avater} alt="merchant avater" />
                </div>
                <div>
                  <h1 className="font-normal text-deep text-sm">Staff Name</h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">08106750047</h1>
              </td>

              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">Secretary</h1>
              </td>

              <td className="py-3 text-center">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Edit
                </button>
                <button className="font-medium text-xs font-inter text-inactive py-1 px-2">
                  Assign role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={avater} alt="merchant avater" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">08106750047</h1>
              </td>

              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">
                  Financial Assistant
                </h1>
              </td>

              <td className="py-3 text-center">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Edit
                </button>
                <button className="font-medium text-xs font-inter text-inactive py-1 px-2">
                  Assign role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={avater} alt="merchant avater" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">08106750047</h1>
              </td>

              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">
                  Financial Assistant
                </h1>
              </td>

              <td className="py-3 text-center">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Edit
                </button>
                <button className="font-medium text-xs font-inter text-inactive py-1 px-2">
                  Assign role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={avater} alt="merchant avater" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">08106750047</h1>
              </td>

              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">
                  Financial Assistant
                </h1>
              </td>

              <td className="py-3 text-center">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Edit
                </button>
                <button className="font-medium text-xs font-inter text-inactive py-1 px-2">
                  Update role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={avater} alt="merchant avater" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">08106750047</h1>
              </td>

              <td className="py-8">
                <h1 className="font-normal text-deep text-sm">
                  Financial Assistant
                </h1>
              </td>

              <td className="py-3 text-center">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Edit
                </button>
                <button className="font-medium text-xs font-inter text-inactive py-1 px-2">
                  Update role
                </button>
              </td>
            </tr>
          </table>
          <div className=" flex pt-20 px-7 items-center justify-between">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffList;
