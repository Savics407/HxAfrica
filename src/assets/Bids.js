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

import ScaleLoader from "react-spinners/ScaleLoader";

function Bids() {
  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
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
    if (result?.data.length === 0) {
      setAvailable(false);
    } else {
      setAvailable(true);
    }
    if (result?.status === "success" && result?.data.length > 0) {
      setLoading(false);
      setBidID(result?.data[0].id);
    }
  }

  async function approveBid(id) {
    const payLoad = {
      id: id,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/exchange/approve_bid",
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    // alert(productId);

    if (result?.status === "success") {
      console.log(result.data);
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchInvestment();
      // setDetails(false);
    } else {
      if (result.status === "error") {
        console.log(result.data);
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setDetails(false);
      }
    }
  }

  async function declineBid(id) {
    const payLoad = {
      id: id,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/exchange/decline_bid",
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    // alert(productId);

    if (result?.status === "success") {
      console.log(result.data);
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchInvestment();
      // setDetails(false);
    } else {
      if (result.status === "error") {
        console.log(result.data);
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setDetails(false);
      }
    }
  }

  useEffect(() => {
    fetchInvestment();
  }, []);
  const [bidID, setBidID] = useState();
  return (
    <div className="font-family">
      <Header />
      <div className="lg:w-10/12 m-auto lg:mt-20 bg-dashbg rounded-lg lg:py-8 lg:px-4">
        <div className="bg-white lg:h-auto lg:p-10 w-full rounded-lg">
          <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between items-center">
            <h1 className="">Investnents bidders</h1>
          </div>
          <div className=" pb-10 flex justify-between items-center">
            <h1 className="hidden lg:block text-modal text-2xl font-semibold ">
              Investment Bid
            </h1>
            {available && (
              <div className="lg:relative absolute top-7 right-5 lg:w-48 w-36">
                <button
                  className="bg-listed flex text-white text-xs rounded px-6 py-3 items-center w-full"
                  onClick={() => {
                    setClick(!click);
                  }}
                >
                  <span className="mr-1 truncate">
                    {bids?.length === 0
                      ? bids[0].investment.product.title
                      : bids
                          ?.filter((bid) => bid.id === bidID)
                          .map((bid) => <>{bid.investment.product.title}</>)}
                  </span>
                  <img src={arrow} alt="arrow-icon" />
                </button>

                <div
                  className={`absolute px-4 pb-4 w-96 text-neutral right-0 top-20 -mt-2 rounded-xl shadow-2xl bg-listed text-left invisible flex flex-col items-center duration-300 z-10 ${
                    click ? "show-note !top-14" : "remove-note"
                  }`}
                >
                  <div className="arr relative w-full"></div>
                  {bids?.map((bids) => (
                    <div
                      className="py-3 w-full pr-20 border-b border-tokentext cursor-pointer hover:opacity-70"
                      onClick={() => {
                        setClick(!click);
                        setBidID(bids.id);
                        // alert(bids.id);
                      }}
                    >
                      <h1 className="text-more font-semibold mb-1.5">
                        {bids.investment.product.title}
                      </h1>
                      <h1 className="text-sm text-footer font-normal">
                        2 Bidders
                      </h1>
                    </div>
                  ))}
                </div>
                <div
                  className={`fixed top-0 left-0 bottom-0 right-0 cursor-pointer ${
                    click ? "show-note" : "remove-note"
                  }`}
                  onClick={() => setClick(!click)}
                ></div>
              </div>
            )}
          </div>

          <div className="lg:mb-8 mb-5 mine investlists">
            {available ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <>
                    {bids
                      ?.filter((bid) => bid.id === bidID)
                      .map((bid) => (
                        <div className="">
                          <div className="flex items-center flex-col lg:flex-row justify-between bg-banner p-5 lg:p-12 lg:py-14 lg:bids lg:w-full w-11/12 rounded-lg lg:rounded-none m-auto mb-10 lg:mb-auto">
                            <div className="lg:w-1/2 w-full flex justify-between items-center mb-7 lg:mb-auto lg:block">
                              <h1 className="text-white font-semibold lg:text-3xl text-sm lg:mb-5">
                                {bid.investment.product.title}
                              </h1>
                              <h1 className="font-semibold uppercase lg:text-sm text-tiny bg-media p-1 px-2 text-dashbg w-fit h-fit rounded">
                                {
                                  bid.investment.product.category
                                    .product_category
                                }
                              </h1>
                            </div>
                            <div className=" flex justify-between items-center w-full lg:w-1/2">
                              <div className=" flex font-inter border-r border-card w-1/2 lg:py-2">
                                <div className="mr-2">
                                  <img
                                    src={bidders}
                                    alt="bidders-icon"
                                    className="w-10 lg:w-12"
                                  />
                                </div>
                                <div>
                                  <h1 className="font-bold lg:text-2xl text-lg text-white">
                                    {bids?.length}
                                  </h1>
                                  <h1 className="text-svg lg:text-xs text-tiny">
                                    Total Bidders
                                  </h1>
                                </div>
                              </div>
                              <div className=" pl-5 flex items-center">
                                <div className="mr-2">
                                  <img
                                    src={card}
                                    alt="bidders-icon"
                                    className="w-10 lg:w-12"
                                  />
                                </div>
                                <div>
                                  <h1 className="text-svg lg:text-xs text-tiny">
                                    {bid.investment.amount / 50000} REIC
                                  </h1>

                                  <h1 className="font-semibold lg:text-2xl text-lg text-white">
                                    N
                                    <CurrencyFormat
                                      value={bid.investment.amount}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                    />
                                  </h1>
                                  <h1 className="text-svg lg:text-xs text-tiny">
                                    Investment worth
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" mt-10 lg:block hidden">
                            <table className=" w-full">
                              <thead className="">
                                <tr className="text-left bg-dashbg">
                                  <th className="py-1 text-head font-semibold text-sm pl-9 w-60">
                                    Investors
                                  </th>
                                  <th className="py-1 text-head font-semibold text-sm ">
                                    Product Name
                                  </th>
                                  <th className="py-1 text-head font-semibold text-sm ">
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
                              {bids?.map((bidder) => (
                                <tr className="border-b " key={bidder.id}>
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
                                      {bidder.investment.product.title}
                                    </h1>
                                  </td>
                                  <td className="py-8">
                                    <h1 className="font-normal text-statustext text-sm">
                                      N
                                      <CurrencyFormat
                                        value={bidder.amount * 50000}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                      />
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
                                    <button
                                      className="font-medium text-xs font-inter text-blue py-2 px-2 border-r"
                                      onClick={() => approveBid(bidder.id)}
                                    >
                                      Approve
                                    </button>
                                    <button
                                      className="font-medium text-xs font-inter text-red py-1 px-2"
                                      onClick={() => declineBid(bidder.id)}
                                    >
                                      Decline
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </table>
                          </div>
                          <div>
                            {bids?.map((bidder) => (
                              <div
                                className="border-b "
                                key={bidder.id}
                                className="shadow w-11/12 m-auto rounded my-5 p-5"
                              >
                                <div className="flex items-center">
                                  <img
                                    src={user}
                                    alt="Investment Icon"
                                    className="w-8 mr-2 "
                                  />
                                  <h1 className="font-normal text-statustext text-sm truncate">
                                    <span title="investors name">
                                      Investors Name
                                    </span>
                                  </h1>
                                </div>
                                <div></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center lg:h-128 h-p">
                <div className="flex justify-center items-center">
                  <img
                    src={box}
                    alt="No relisted investment"
                    className="w-32 lg:w-44"
                  />
                </div>
                <h1 className="font-semibold lg:text-2xl text-sm text-statustext text-center">
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
