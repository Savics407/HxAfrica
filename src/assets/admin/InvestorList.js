import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import search from "../images/Small.svg";
import avater from "../images/Avatar.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Banuser from "./Banuser";
import * as CurrencyFormat from "react-currency-format";

function InvestorList() {
  const [investors, setInvestors] = useState();
  async function fetchInvestors() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_investors",
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
    setInvestors(result?.data);
  }

  useEffect(() => {
    fetchInvestors();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [ban, setBan] = useState(false);
  const [userID, setUserId] = useState();
  return (
    <>
      {ban && (
        <Banuser
          setBan={setBan}
          userID={userID}
          fetchInvestors={fetchInvestors}
        />
      )}
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
            placeholder="Search Investors"
            className="outline-none font-normal text-sm w-full py-2"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <img src={search} alt="search" />
        </div>
      </div>

      {/* <Martabs /> */}
      <div className="flex items-center text-sm mar rounded-lg my-4 text-footer bg-white px-9 ">
        <Link to="/admin/investors">
          <div
            className={` text-dark text-base border-b-4 border-green font-medium px-1 py-2.5 hover:text-dark `}
          >
            <h1>Investors </h1>
          </div>
        </Link>
        <span className="w-7"> </span>
        <NavLink to="/admin/investors/banned">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Banned </h1>
          </div>
        </NavLink>
      </div>
      <div className="rounded-lg bg-white mt-2 mb-3 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">List of Investors </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {investors?.length}
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
                <th className="py-3 text-mobile-nav font-medium text-xs">
                  Investment
                </th>
                <th className="py-3 text-mobile-nav font-medium text-xs">
                  Email
                </th>
                <th className="py-3 text-mobile-nav font-medium text-xs">
                  Phone number
                </th>
                <th className="py-3 text-mobile-nav font-medium text-xs">
                  Reic Balance
                </th>
                <th className="py-3 text-mobile-nav font-medium text-xs w-32 text-center">
                  Action
                </th>
              </tr>
            </thead>
            {investors
              ?.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((investor) => (
                <tr className="border-b font-inter">
                  <td className="py-8 pl-5 flex items-center">
                    <div className="mr-2">
                      <img src={avater} alt="merchant avater" />
                    </div>
                    <div>
                      <h1 className="font-normal  text-deep text-sm">
                        {investor.name}
                      </h1>
                    </div>
                  </td>
                  <td className="py-3 text-xs text-neutral">
                    <h1>{investor.investment.length}</h1>
                  </td>
                  <td className="py-3  text-xs text-neutral">
                    <h1>{investor.email}</h1>
                  </td>
                  <td className="py-3 text-xs text-neutral">
                    <h1>{investor.phone}</h1>
                  </td>
                  <td className="py-3 text-xs text-neutral">
                    <h1>
                      N
                      <CurrencyFormat
                        value={investor.wallet.balance.toFixed(2)}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h1>
                  </td>
                  <td className="py-3 text-center">
                    {investor.is_ban == "1" ? (
                      <Link to="/admin/investors/banned">
                        {" "}
                        <button className="font-medium text-sm font-inter bg-approved text-appText py-1 px-2.5 rounded-full">
                          Banned
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="font-medium text-sm font-inter bg-relist text-relisted py-1 px-2.5 rounded-full"
                        onClick={() => {
                          setBan(true);
                          setUserId(investor.id);
                        }}
                      >
                        Ban User
                      </button>
                    )}
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

export default InvestorList;
