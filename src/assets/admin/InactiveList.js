import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import avater from "../images/Avatar.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";
import InvestmentTabs from "./InvestmentTabs";
import realEstate from "../images/realEstate.svg";
import * as CurrencyFormat from "react-currency-format";
import { useState } from "react";
import Details from "./Details";
import InactiveDetails from "./InactiveDetails";

function InactiveList() {
  const [inactive, setInactive] = useState();
  const [details, setDetails] = useState(false);
  async function fetchInActive() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_invactive_product",
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
    setInactive(result?.data);
  }

  useEffect(() => {
    fetchInActive();
  }, []);
  const [itemId, setItemID] = useState();
  return (
    <>
      {details && (
        <InactiveDetails
          setDetails={setDetails}
          itemId={itemId}
          fetchInActive={fetchInActive}
        />
      )}
      <InvestmentTabs />
      <div className="rounded-lg bg-white mt-2 mb-3 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav flex justify-between font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">
              Inactive Investments{" "}
            </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {inactive?.length}
            </span>
          </h1>
        </div>
        <div className="">
          <div className="">
            <table className=" w-full">
              <thead className="">
                <tr className="text-left bg-bar">
                  <th className="py-3 text-mobile-nav font-medium text-xs pl-9 w-16">
                    ID
                  </th>
                  <th className="py-3 pr-10 text-mobile-nav font-medium text-xs w-48">
                    Investment
                  </th>
                  <th className="py-3 pl-5 pr-7 text-mobile-nav font-medium text-xs ">
                    Amount
                  </th>
                  <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                    Duration
                  </th>
                  <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                    Interest
                  </th>
                  <th className="py-3 pl-5 w-36 text-mobile-nav font-medium text-xs whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              {inactive?.map((inactive) => (
                <tr className="border-b font-inter" key={inactive.id}>
                  <td className="py-8 pl-9 ">
                    <h1 className="font-normal text-deep text-xs">
                      #{inactive.id}
                    </h1>
                  </td>
                  <td className="py-8 flex items-center">
                    <div className="mr-2">
                      <img src={realEstate} alt="Investment Icon" />
                    </div>
                    <div>
                      <h1 className="font-normal  text-deep text-sm truncate">
                        <span title={inactive.title}>{inactive.title}</span>
                      </h1>
                      <h1 className="font-normal text-green text-xs capitalize">
                        {inactive.category.product_category}
                      </h1>
                    </div>
                  </td>
                  <td className="pl-5 py-8">
                    <h1 className="font-normal text-deep text-xs">
                      N
                      <CurrencyFormat
                        value={inactive.cost}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h1>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      {inactive.duration} days
                    </h1>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      {inactive.interest_rate}%
                    </h1>
                  </td>

                  <td className="py-3 whitespace-nowrap">
                    <div className="flex">
                      <h1 className="font-medium flex items-center text-sm font-inter bg-ongoing text-inactive py-1 px-3 rounded-full ">
                        <AiOutlineArrowUp className="mr-1 text-up text-xs" />
                        Inactive
                      </h1>
                      <button
                        className="font-medium text-sm font-inter text-blue py-1 px-3 rounded-full "
                        onClick={() => {
                          setDetails(true);
                          setItemID(inactive.id);
                        }}
                      >
                        View
                      </button>
                    </div>
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

export default InactiveList;
