import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import search from "../images/Small.svg";
import avater from "../images/Avatar.svg";
import Martabs from "./Martabs";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import * as CurrencyFormat from "react-currency-format";
import realEstate from "../images/realEstate.svg";
import { toast } from "react-toastify";
import moment from "moment";

function DisbursedList() {
  const [disburseFunds, setDisburseFunds] = useState();
  async function fetchDisburse() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_disburse_funds_request`,
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
    setDisburseFunds(result?.data);
  }

  const [status, setStatus] = useState("");

  async function approveDisburse(id) {
    const token = localStorage.getItem("user-token");
    const payLoad = {
      id: id,
      status: status,
    };
    // alert(payLoad.id);
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/approve_merchant_disburse_product_funds`,
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    if (result?.status === "success" && status === "success") {
      toast.success(`${result.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(`Merchant Pullout Declined`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    fetchDisburse();
  }

  useEffect(() => {
    fetchDisburse();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
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
            placeholder="Search Merchants"
            className="outline-none font-normal text-sm w-full py-2"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <img src={search} alt="search" />
        </div>
      </div>

      <Martabs />
      <div className="rounded-lg bg-white mt-2 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">Disbursed Funds </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {disburseFunds?.length}
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
                  Amount
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Investors
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Dates
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Time{" "}
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Status
                </th>
              </tr>
            </thead>
            {disburseFunds
              ?.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.merchant.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((funds) => (
                <tr className="border-b font-inter">
                  <td className="py-8 pl-5 flex items-center">
                    <div className="mr-2">
                      <img src={realEstate} alt="merchant avater" />
                    </div>
                    <div>
                      <h1 className="font-normal  text-deep text-sm">
                        {funds.product.title}
                      </h1>
                      <h1 className="font-normal font-family text-media text-xs">
                        {funds.product.category.product_category}
                      </h1>
                    </div>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      N
                      <CurrencyFormat
                        value={funds.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h1>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      {funds.product.investments.length}
                    </h1>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      {moment(funds.created_at).format("MMM DD, yyyy")}
                    </h1>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">
                      {moment(funds.created_at).format("LT")}
                    </h1>
                  </td>

                  <td className="py-3">
                    {/* <button className="font-medium text-sm font-inter bg-approved text-appText py-1 px-3 rounded-full capitalize">
                      {funds.status}
                    </button> */}
                    {funds.status === "success" ? (
                      <button className="font-semibold text-xs font-inter bg-approved text-appText py-1 px-3 rounded-full ">
                        Approved
                      </button>
                    ) : funds.status === "failed" ? (
                      <button className="font-semibold text-xs font-inter bg-relist text-relisted py-1 px-2.5 rounded-full ">
                        Declined
                      </button>
                    ) : (
                      <div className="whitespace-nowrap text-center">
                        <button
                          className="font-medium text-xs font-inter text-blue py-2 pr-2 border-r "
                          onClick={() => {
                            approveDisburse(funds.id);
                            setStatus("success");
                          }}
                        >
                          Approve
                        </button>
                        <button
                          className="font-medium text-xs font-inter text-red py-1 px-2"
                          onClick={() => {
                            approveDisburse(funds.id);
                            setStatus("failed");
                            // alert(status);
                          }}
                        >
                          Decline
                        </button>
                      </div>
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

export default DisbursedList;
