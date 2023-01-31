import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";
import realEstate from "../images/realEstate.svg";
import Details from "./Details";
import { FaAngleDown } from "react-icons/fa";
import search from "../images/Small.svg";

function InvestmentTabs() {
  return (
    <>
      <div className="flex items-center mar text-sm rounded-lg mb-4 text-footer bg-white px-9 ">
        <Link to="/admin/investments">
          <div className=" text-dark text-base border-b-4 border-green font-medium  px-1 py-2.5 hover:text-dark">
            <h1>Investments </h1>
          </div>
        </Link>
        <span className="w-7"> </span>
        <NavLink to="/admin/investments/approved">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Approved </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/admin/investments/inactive">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Inactive </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/admin/investments/completed">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Completed </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/admin/investments/relisted">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Relisted </h1>
          </div>
        </NavLink>
      </div>
    </>
  );
}
function InvestmentList() {
  const [pending, setPending] = useState();
  const [details, setDetails] = useState(false);
  const [itemId, setItemId] = useState();
  async function fetchInvestment() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_pending_investments`,
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
    setPending(result?.data);
  }

  useEffect(() => {
    fetchInvestment();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {details && (
        <Details
          setDetails={setDetails}
          itemId={itemId}
          fetchInvestment={fetchInvestment}
        />
      )}
      <InvestmentTabs />
      <div className="flex justify-end my-6">
        {/* <div className="border-2 w-44 bg-white rounded-lg px-4 py-3">
          <div className="w-full flex justify-between items-center text-sm text-sort">
            <h1>
              Sort By: <span className="font-semibold text-dark">All</span>
            </h1>

            <FaAngleDown />
          </div>
        </div> */}
        <div className="border-2 bg-white rounded-lg flex items-center px-5 py-1 justify-between w-411">
          <input
            type="search"
            placeholder="Search investment by name"
            className="outline-none font-normal text-sm w-full py-2"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <img src={search} alt="search" />
        </div>
      </div>

      <div className="rounded-lg bg-white mt-2 mb-3 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav flex justify-between font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">
              Unapproved investments{" "}
            </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {pending?.length}
            </span>
          </h1>
          {/* <button className="text-sm text-dark">Select Multiple</button> */}
        </div>
        <div className="">
          <table className=" w-full">
            <thead className="">
              <tr className="text-left bg-bar">
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs pl-9 w-16">
                  ID
                </th>
                <th className="py-3 pr-10 w-52 text-mobile-nav font-medium text-xs ">
                  Investment
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Amount
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Duration
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Interest
                </th>
                {/* <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Investors
                </th> */}
                <th className="py-3 pr-7 w-44 text-mobile-nav font-medium text-xs text-center">
                  Action
                </th>
              </tr>
            </thead>
            {pending
              ?.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((pending) => (
                <tr className="border-b font-inter">
                  <td className="py-8 pl-9">
                    <h1 className="font-normal text-deep text-xs">
                      #{pending.id}
                    </h1>
                  </td>
                  <td className="py-8 flex items-center">
                    <div className="mr-2 w-11 h-11">
                      <img
                        src={realEstate}
                        alt="Investment Icon"
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-52 pr-3">
                      <h1 className="font-normal  text-deep text-sm truncate">
                        {/* {pending.title} */}
                        <span title={pending.title}>{pending.title}</span>
                      </h1>
                      <h1 className="font-normal text-green text-xs">
                        {pending.category.product_category}
                      </h1>
                    </div>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      N
                      <CurrencyFormat
                        value={pending.cost}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h1>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      {pending.duration} Days
                    </h1>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      {pending.interest_rate}%
                    </h1>
                  </td>

                  <td className="py-3">
                    <button
                      className="font-medium text-xs font-inter text-green py-2 px-2 border-r"
                      onClick={() => {
                        setDetails(true);
                        setItemId(pending.id);
                      }}
                    >
                      Approve
                    </button>
                    <button
                      className="font-medium text-xs font-inter text-red py-1 border-r px-2"
                      onClick={() => {
                        setDetails(true);
                        setItemId(pending.id);
                      }}
                    >
                      Decline
                    </button>
                    <button
                      className="font-medium text-xs font-inter text-blue py-2 px-2 "
                      onClick={() => {
                        setDetails(true);
                        setItemId(pending.id);
                      }}
                    >
                      View
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

export default InvestmentList;
