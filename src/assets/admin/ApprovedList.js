import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import avater from "../images/Avatar.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import InvestmentTabs from "./InvestmentTabs";
import realEstate from "../images/realEstate.svg";
import * as CurrencyFormat from "react-currency-format";
import Details from "./Details";

function ApprovedList() {
  const [details, setDetails] = useState(false);
  const [approved, setApproved] = useState();
  async function fetchApproved() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_approved_investments",
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

  return (
    <>
      {details && <Details setDetails={setDetails} />}

      <InvestmentTabs />
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
            <table className="w-auto table-fixed">
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
              {approved?.map((approved) => (
                <tr className="border-b font-inter" key={approved.id}>
                  <td className="py-8 pl-9">
                    <h1 className="font-normal text-deep text-xs">#1246</h1>
                  </td>
                  <td className="py-8 pl-2 flex items-center whitespace-nowrap w-60">
                    <div className="mr-2">
                      <img src={realEstate} alt="Investment Icon" />
                    </div>
                    <div className="w-40">
                      <h1 className="font-normal text-deep text-sm truncate">
                        <span title={approved.title}>{approved.title}</span>
                      </h1>
                      <h1 className="font-normal text-green text-xs">
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
                      <button className="font-medium text-sm font-inter bg-letsee text-endsin py-1 px-4 rounded-full ">
                        Pending
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
                      onClick={() => setDetails(true)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
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

export default ApprovedList;
