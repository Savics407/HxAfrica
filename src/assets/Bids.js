import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Artwork.svg";
import bidders from "./images/bidders.svg";
import arrow from "./images/arrow.svg";
import moment from "moment";
import card from "./images/card.svg";
import { toast } from "react-toastify";
import * as CurrencyFormat from "react-currency-format";
import user from "./images/user_icon.png";
import { TbLoader } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScaleLoader from "react-spinners/ScaleLoader";
import TopUp from "./TopUp";

function Bids() {
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);
  const [bids, setBids] = useState();
  async function fetchInvestment() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/exchange/fetch_investment_bids",
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
    setBids(result?.data);
  }

  useEffect(() => {
    fetchInvestment();
  }, []);

  return (
    <div className="font-family">
      <Header />
      <div className="w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4">
        <div className="bg-white p-10 w-full rounded-lg">
          <div className=" pb-10 flex justify-between items-center">
            <h1 className="text-modal text-2xl font-semibold ">
              Investment Bid
            </h1>
            {available && (
              <div className="relative">
                <button
                  className="bg-listed flex text-white text-xs rounded px-6 py-3 items-center"
                  onClick={() => {
                    setClick(!click);
                  }}
                >
                  <span className="mr-1">Crowdfund...</span>
                  <img src={arrow} alt="arrow-icon" />
                </button>

                <div
                  className={`absolute px-4 pb-4 text-neutral right-0 top-20 -mt-2 rounded-xl shadow-2xl bg-listed text-left invisible  flex flex-col items-center duration-300 z-50 ${
                    click ? "show-note !top-14" : "remove-note"
                  }`}
                >
                  <div className="arr relative w-full"></div>
                  <div className="py-3 w-full pr-20 border-b border-tokentext">
                    <h1 className="text-more font-semibold mb-1.5">
                      Crowdfunding
                    </h1>
                    <h1 className="text-sm text-footer font-normal">
                      2 Bidders
                    </h1>
                  </div>
                  <div className="py-3 pr-20 border-b w-full border-tokentext">
                    <h1 className="text-more font-semibold mb-1.5">
                      Real Estate
                    </h1>
                    <h1 className="text-sm text-footer font-normal">
                      2 Bidders
                    </h1>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mb-8 mine investlists">
            {available ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div className="">
                    <div className="flex  items-center justify-between bg-banner p-12 py-14 bids">
                      <div className=" w-1/2">
                        <h1 className="text-white font-semibold text-3xl mb-5">
                          Crowdfunding
                        </h1>
                        <h1 className="font-semibold uppercase text-sm bg-media p-1 px-2 text-dashbg w-fit rounded">
                          Real Estate
                        </h1>
                      </div>
                      <div className=" flex justify-between items-center w-1/2">
                        <div className=" flex font-inter border-r border-card w-1/2 py-2">
                          <div className="mr-2">
                            <img src={bidders} alt="bidders-icon" />
                          </div>
                          <div>
                            <h1 className="font-bold text-2xl text-white">
                              650
                            </h1>
                            <h1 className="text-svg text-xs">Total Bidders</h1>
                          </div>
                        </div>
                        <div className=" pl-5 flex items-center">
                          <div className="mr-2">
                            <img src={card} alt="bidders-icon" />
                          </div>
                          <div>
                            <h1 className="text-svg text-xs">256.29 REIC</h1>

                            <h1 className="font-semibold text-2xl text-white">
                              N200,000
                            </h1>
                            <h1 className="text-svg text-xs">
                              Investment worth
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-10">
                      <table className=" w-full table-fixed">
                        <thead className="">
                          <tr className="text-left bg-dashbg">
                            <th className="py-1 text-head font-semibold text-sm pl-9 w-72">
                              Investors
                            </th>
                            <th className="py-1 pr-7 text-head font-semibold text-sm ">
                              Amount Invested
                            </th>
                            <th className="py-1 pr-7 text-head font-semibold text-sm ">
                              Date
                            </th>
                            <th className="py-1 pr-7 text-head font-semibold text-sm ">
                              Time
                            </th>
                            <th className="py-1 pr-7 text-head font-semibold text-sm ">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tr className="border-b ">
                          <td className="py-8 pl-9 flex items-center">
                            <div className="mr-2">
                              <img
                                src={user}
                                alt="Investment Icon"
                                className="w-8"
                              />
                            </div>
                            <div className=" w-40">
                              <h1 className="font-normal text-statustext text-sm truncate">
                                <span title="investors name">
                                  Investors Name
                                </span>
                              </h1>
                            </div>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              N195,500
                            </h1>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              Aug 12, 2022
                            </h1>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              12:34pm
                            </h1>
                          </td>

                          <td className="py-3">
                            <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r">
                              Approve
                            </button>
                            <button className="font-medium text-xs font-inter text-red py-1 px-2">
                              Decline
                            </button>
                          </td>
                        </tr>

                        <tr className="border-b ">
                          <td className="py-8 pl-9 flex items-center">
                            <div className="mr-2">
                              <img
                                src={user}
                                alt="Investment Icon"
                                className="w-8"
                              />
                            </div>
                            <div className=" w-40">
                              <h1 className="font-normal text-statustext text-sm truncate">
                                <span title="investors name">
                                  Investors Name
                                </span>
                              </h1>
                            </div>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              N195,500
                            </h1>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              Aug 12, 2022
                            </h1>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              12:34pm
                            </h1>
                          </td>

                          <td className="py-3">
                            <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r">
                              Approve
                            </button>
                            <button className="font-medium text-xs font-inter text-red py-1 px-2">
                              Decline
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b ">
                          <td className="py-8 pl-9 flex items-center">
                            <div className="mr-2">
                              <img
                                src={user}
                                alt="Investment Icon"
                                className="w-8"
                              />
                            </div>
                            <div className=" w-40">
                              <h1 className="font-normal text-statustext text-sm truncate">
                                <span title="investors name">
                                  Investors Name
                                </span>
                              </h1>
                            </div>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              N195,500
                            </h1>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              Aug 12, 2022
                            </h1>
                          </td>
                          <td className="py-8">
                            <h1 className="font-normal text-statustext text-sm">
                              12:34pm
                            </h1>
                          </td>

                          <td className="py-3">
                            <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r">
                              Approve
                            </button>
                            <button className="font-medium text-xs font-inter text-red py-1 px-2">
                              Decline
                            </button>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img src={box} alt="No relisted investment" />
                </div>
                <h1 className="font-semibold text-2xl text-statustext text-center">
                  No bids placed yet
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Bids;
