import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import avater from "../images/Avatar.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import InvestmentTabs from "./InvestmentTabs";
import realEstate from "../images/realEstate.svg";
import * as CurrencyFormat from "react-currency-format";
import Details from "./Details";
import search from "../images/Small.svg";
import ApprovedDetails from "./ApprovedDetails";

function ApprovedList() {
  const [details, setDetails] = useState(false);
  const [approved, setApproved] = useState();
  const [itemId, setItemID] = useState();
  async function fetchApproved() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_approved_investments`,
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
    setApproved(result?.data);
  }

  useEffect(() => {
    fetchApproved();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [select, setSelect] = useState(false);

  return (
    <>
      {details && (
        <ApprovedDetails
          setDetails={setDetails}
          itemId={itemId}
          fetchApproved={fetchApproved}
        />
      )}

      <InvestmentTabs />
      <div className="flex justify-between my-6">
        <div className="border-2 w-44 bg-white rounded-lg relative cursor-pointer">
          <div
            className="w-full flex justify-between items-center px-4 py-3 text-sm text-sort"
            onClick={() => setSelect(!select)}
          >
            <h1 className="truncate">
              Sort By:{" "}
              <span className="font-semibold text-dark ">{filter}</span>
            </h1>

            {select ? <FaAngleDown /> : <FaAngleRight />}
          </div>
          <div
            className={`absolute shadow-lg rounded-b-lg top-full left-0 right-0 bg-white text-sm text-sort ${select ? "visible" : "invisible"
              }`}
          >
            <div
              className="border-b px-4 py-3 cursor-pointer hover:bg-welcome"
              onClick={() => {
                setSearchTerm("");
                setFilter("all");
                setSelect(!select);
              }}
            >
              <h1>
                Sort by: <span className="font-semibold text-dark">All</span>
              </h1>
            </div>
            <div
              className="border-b px-4 py-3 cursor-pointer hover:bg-welcome"
              onClick={() => {
                setSearchTerm("waiting");
                setFilter("Pending");
                setSelect(!select);
              }}
            >
              <h1>
                Sort by:{" "}
                <span className="font-semibold text-dark">Pending</span>
              </h1>
            </div>
            <div
              className="border-b px-4 py-3 cursor-pointer hover:bg-welcome"
              onClick={() => {
                setSearchTerm("ongoing");
                setFilter("Ongoing");
                setSelect(!select);
              }}
            >
              <h1>
                Sort by:{" "}
                <span className="font-semibold text-dark">Ongoing</span>
              </h1>
            </div>
            <div
              className="border-b px-4 py-3 cursor-pointer hover:bg-welcome"
              onClick={() => {
                setSearchTerm("completed");
                setFilter("Completed");
                setSelect(!select);
              }}
            >
              <h1>
                Sort by:{" "}
                <span className="font-semibold text-dark">Completed</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="border-2 bg-white rounded-lg flex items-center px-5 justify-between w-411">
          <input
            type="search"
            placeholder="Search investment by name"
            className="outline-none font-normal text-sm w-full py-2"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="rounded-lg bg-white mt-2 mb-3">
        <div className="py-7 px-9 text-lg text-mobile-nav flex justify-between font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">
              Approved investments{" "}
            </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {approved?.length}
            </span>
          </h1>
        </div>
        <div className="pb-10">
          <div className="overflow-auto scroll pb-10">
            <table className="w-full ">
              <thead className="">
                <tr className="text-left bg-bar">
                  <th className="whitespace-nowrap py-3 pr-7 text-mobile-nav font-medium text-xs pl-9 w-24">
                    ID
                  </th>
                  <th className="whitespace-nowrap py-3 pl-2 text-mobile-nav font-medium text-xs">
                    Investment
                  </th>
                  <th className="whitespace-nowrap py-3 pr-7 text-mobile-nav font-medium text-xs ">
                    Amount
                  </th>
                  <th className="whitespace-nowrap py-3 pr-7 text-mobile-nav font-medium text-xs pl-2">
                    Interest
                  </th>
                  <th className="whitespace-nowrap py-3 pr-7 text-mobile-nav font-medium text-xs ">
                    Amount Invested
                  </th>
                  <th className="whitespace-nowrap py-3 pr-7 text-mobile-nav font-medium text-xs ">
                    Investors
                  </th>
                  <th className="whitespace-nowrap py-3 pr-7 text-mobile-nav font-medium text-xs ">
                    Status
                  </th>
                </tr>
              </thead>
              {approved
                ?.filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.status_investment
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((approved) => (
                  <tr className="border-b font-inter" key={approved.id}>
                    <td className="py-8 pl-9">
                      <h1 className="font-normal text-deep text-xs">
                        #{approved.id}
                      </h1>
                    </td>
                    <td className="py-8 pl-2 flex items-center whitespace-nowrap w-60">
                      <div className="mr-2 w-10 h-10">
                        <img
                          src={
                            approved.image_path === ""
                              ? realEstate
                              : approved.image_path
                          }
                          alt="Investment Icon"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="w-40">
                        <h1 className="font-normal text-deep text-sm truncate">
                          <span title={approved.title}>{approved.title}</span>
                        </h1>
                        <h1 className="font-normal text-green text-xs capitalize">
                          {approved.category.product_category}
                        </h1>
                      </div>
                    </td>
                    <td className="py-8">
                      <h1 className="font-normal text-deep text-xs">
                        N
                        <CurrencyFormat
                          value={approved.cost}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h1>
                    </td>
                    <td className="py-8 pl-2">
                      <h1 className="font-normal text-deep text-xs">
                        {approved.interest_rate} %
                      </h1>
                    </td>
                    <td className="py-8">
                      <h1 className="font-normal text-deep text-xs">
                        N
                        <CurrencyFormat
                          value={approved.threshold}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </h1>
                    </td>
                    <td className="py-8">
                      <h1 className="font-normal text-deep text-xs">
                        {approved.investments.length}
                      </h1>
                    </td>

                    <td className="py-3 whitespace-nowrap">
                      {approved.status_investment === "waiting" ? (
                        <button className="font-medium text-sm font-inter !bg-newbg text-new py-1 px-4 rounded-full ">
                          New
                        </button>
                      ) : approved.status_investment === "ongoing" ? (
                        <button className="font-medium text-sm font-inter bg-letsee text-endsin py-1 px-4 rounded-full ">
                          Ongoing
                        </button>
                      ) : approved.status_investment === "completed" ? (
                        <button className="font-medium text-sm font-inter bg-bgGreen text-gren py-1 px-3 rounded-full ">
                          Completed
                        </button>
                      ) : (
                        <button className="font-medium text-sm font-inter bg-approved text-appText py-1 px-3 rounded-full ">
                          New
                        </button>
                      )}

                      <button
                        className="font-medium text-sm font-inter text-blue py-1 px-3 rounded-full "
                        onClick={() => {
                          setDetails(true);
                          setItemID(approved.id);
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
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

export default ApprovedList;
