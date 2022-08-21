import React from "react";
import { FaAngleDown } from "react-icons/fa";
import avater from "../images/Avatar.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import InvestmentTabs from "./InvestmentTabs";
import realEstate from "../images/realEstate.svg";

function PulloutList() {
  return (
    <>
      <InvestmentTabs />
      <div className="rounded-lg bg-white mt-2 mb-3 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav flex justify-between font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">Request </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              234
            </span>
          </h1>
          <button className="text-sm text-dark">Select Multiple</button>
        </div>
        <div className="">
          <table className=" w-full table-auto">
            <thead className="">
              <tr className="text-left bg-bar">
                <th className="py-3 text-mobile-nav font-medium text-xs pl-9">
                  Investment
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Investors
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Amount
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Date/Time
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Action
                </th>
              </tr>
            </thead>
            <tr className="border-b font-inter">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={realEstate} alt="Investment Icon" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">
                    Crowdfunding
                  </h1>
                  <h1 className="font-normal text-green text-xs">
                    Real Estate
                  </h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">Paul Felix</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">N200,000</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">
                  Jul 12/ 3:00PM
                </h1>
              </td>

              <td className="py-3">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Approve
                </button>
                <button className="font-medium text-xs font-inter text-red py-1 px-2">
                  Decline
                </button>
              </td>
            </tr>

            <tr className="border-b font-inter">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={realEstate} alt="Investment Icon" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">
                    Crowdfunding
                  </h1>
                  <h1 className="font-normal text-green text-xs">
                    Real Estate
                  </h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">Paul Felix</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">N200,000</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">
                  Jul 12/ 3:00PM
                </h1>
              </td>

              <td className="py-3">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Approve
                </button>
                <button className="font-medium text-xs font-inter text-red py-1 px-2">
                  Decline
                </button>
              </td>
            </tr>

            <tr className="border-b font-inter">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={realEstate} alt="Investment Icon" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">
                    Crowdfunding
                  </h1>
                  <h1 className="font-normal text-green text-xs">
                    Real Estate
                  </h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">Paul Felix</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">N200,000</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">
                  Jul 12/ 3:00PM
                </h1>
              </td>

              <td className="py-3">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Approve
                </button>
                <button className="font-medium text-xs font-inter text-red py-1 px-2">
                  Decline
                </button>
              </td>
            </tr>

            <tr className="border-b font-inter">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={realEstate} alt="Investment Icon" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">
                    Crowdfunding
                  </h1>
                  <h1 className="font-normal text-green text-xs">
                    Real Estate
                  </h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">Paul Felix</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">N200,000</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">
                  Jul 12/ 3:00PM
                </h1>
              </td>

              <td className="py-3">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Approve
                </button>
                <button className="font-medium text-xs font-inter text-red py-1 px-2">
                  Decline
                </button>
              </td>
            </tr>

            <tr className="border-b font-inter">
              <td className="py-8 pl-5 flex items-center">
                <div className="mr-2">
                  <img src={realEstate} alt="Investment Icon" />
                </div>
                <div>
                  <h1 className="font-normal  text-deep text-sm">
                    Crowdfunding
                  </h1>
                  <h1 className="font-normal text-green text-xs">
                    Real Estate
                  </h1>
                </div>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">Paul Felix</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">N200,000</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-xs">
                  Jul 12/ 3:00PM
                </h1>
              </td>

              <td className="py-3">
                <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                  Approve
                </button>
                <button className="font-medium text-xs font-inter text-red py-1 px-2">
                  Decline
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

export default PulloutList;
