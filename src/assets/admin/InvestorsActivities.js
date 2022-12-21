import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import search from "../images/Small.svg";
import avater from "../images/Avatar.svg";
import Martabs from "./Martabs";
import moment from "moment";
import * as CurrencyFormat from "react-currency-format";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function InvestorsActivities() {
  const [activities, setActivities] = useState();

  async function merchantActivities() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_investor_activities",
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
    setActivities(result?.data);
  }

  useEffect(() => {
    merchantActivities();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* <Martabs /> */}
      <div className="flex items-center text-sm mar rounded-lg my-4 text-footer bg-white px-9 ">
        <Link to="/admin/transactions">
          <div
            className={`font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark `}
          >
            <h1>Merchants </h1>
          </div>
        </Link>
        <span className="w-7"> </span>
        <NavLink to="/admin/transactions/investors">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Investors </h1>
          </div>
        </NavLink>
      </div>
      <div className="rounded-lg bg-white mt-2 px-5 mb-3 pb-10">
        <div className="border-b border-stroke py-5 text-lg text-darker font-medium flex justify-between items-center cursor-pointer">
          <h1 className="">Activities</h1>
          {/* <h1 className="text-blue text-xs flex items-center font-normal">
            See all transactions{" "}
            <FaAngleRight className="ml-2 text-blue text-sm" />
          </h1> */}
          <div className="border-2 bg-white rounded-lg flex items-center px-5 py-1 justify-between w-411">
            <input
              type="search"
              placeholder="Search by ID"
              className="outline-none font-normal text-sm w-full py-2"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <img src={search} alt="search" />
          </div>
        </div>

        <div className="py-4">
          <table className=" w-full table-auto">
            <thead className="">
              <tr className="text-left bg-table">
                <th className="py-2 text-darker font-medium text-sm pl-5">
                  ID
                </th>
                <th className="py-2 pr-7 text-darker font-medium text-sm ">
                  Name
                </th>
                <th className="py-2 pr-7 text-darker font-medium text-sm ">
                  Type
                </th>
                <th className="py-2 pr-7 text-darker font-medium text-sm ">
                  Amount
                </th>
                <th className="py-2 pr-7 text-darker font-medium text-sm ">
                  Date
                </th>
                <th className="py-2 pr-7 text-darker font-medium text-sm ">
                  Time
                </th>
                <th className="py-2 pr-7 text-darker font-medium text-sm ">
                  status
                </th>
                {/* <th className="py-2 pr-7 text-darker font-medium text-sm">
                          Ends in
                        </th>
                        <th className="py-2 text-darker font-medium text-sm ">
                          Action
                        </th> */}
              </tr>
            </thead>
            {activities
              ?.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (searchTerm.includes(val.id)) {
                  return val;
                }
              })
              .map((activities) => (
                <tr className="py-8 border-b">
                  <td className="py-3 pl-5">
                    <h1 className="font-medium text-neutral text-xs capitalize">
                      #{activities.id}
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs capitalize">
                      {activities.user.name}
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs capitalize">
                      {activities.type === "pullout_product_funds"
                        ? "Pullout Funds"
                        : activities.type}
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      <CurrencyFormat
                        value={activities.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      <span className="text-currency">NGN</span>
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      {moment(activities.created_at).format("MMM DD, yyyy")}
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      {moment(activities.created_at).format("LT")}
                    </h1>
                  </td>

                  <td className="py-3">
                    <button className="font-medium text-sm font-inter bg-bgGreen text-green rounded-full py-1 px-2">
                      {activities.status}
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
        {/* </div> */}
        {/* </div> */}
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
      {/* </div> */}
    </>
  );
}

export default InvestorsActivities;
