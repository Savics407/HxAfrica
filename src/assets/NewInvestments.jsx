import Header from "./Header";
import React, { useEffect, useState } from "react";
import banner from "./images/banner.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import InvestTabs from "./InvestTabs";
import raw from "./images/rawland.png";
import dropCoin from "./images/dropcoin.svg";
import completed from "./images/card-tick.svg";
import mine from "./images/mywallet.svg";
import relisted from "./images/convert-card.svg";
import pendingCoin from "./images/ongoingcoin.svg";
import land from "./images/rawland2.png";
import users1 from "./images/Frame 14.png";
import users2 from "./images/Frame 18.png";
import users3 from "./images/Frame 19.png";
import users4 from "./images/Frame 20.png";
// import { FaAngleRight } from "react-icons/fa";
import { TbLoader } from "react-icons/tb";
import JoinInvestment from "./JoinInvestment";
import moment from "moment";
import crowd from "./images/crowdfund.png";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CurrencyFormat from "react-currency-format";
import { FaAngleRight } from "react-icons/fa";
import Tabs from "./Tab";

function NewInvestment() {
  const [joinInvest, setJoinInvest] = useState(false);
  const [buyToken, setBuyToken] = useState(false);
  const [posts, setPosts] = useState();
  const [itemId, setItemID] = useState("");
  const [loading, setLoading] = useState(true);

  const history = useNavigate();
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investment/fetch_new_investment`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);

    setPosts(result.data);
    if (result?.status === "success") {
      setLoading(false);
    }
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  function productDetails(id) {
    setItemID(id);
    // alert(itemId);
    // console.log(id);
    setJoinInvest(true);
  }

  return (
    <div className="font-family bg-mainbg">
      {joinInvest && (
        <JoinInvestment
          className="z-10"
          closeModal={setJoinInvest}
          itemId={itemId}
          setItemID={setItemID}
        />
      )}
      <Header />
      <div className="lg:w-10/12 m-auto lg:mt-20 bg-dashbg rounded-lg lg:py-8 lg:px-4">
        <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between items-center">
          <h1 className="">Investments</h1>
          <button
            className="text-green text-sm font-inter"
            onClick={() => {
              history(-1);
            }}
          >
            Back
          </button>
        </div>
        <div className="bg-white lg:h-auto p-5 w-full rounded-lg">
          <div className="mb-10">
            <div className="flex items-center ">
              <img src={dropCoin} alt="coins" className="mr-2" />
              <h1 className="text-sm text-title font-medium">
                New Investments
              </h1>
            </div>
          </div>
          {/* {posts[0].id} */}
          {/* <InvestTabs /> */}
          <div className="investlists">
            {loading ? (
              <div className="text-center px-20 h-screen py-40">
                <ScaleLoader color="#008E10" height={50} width={6} />
              </div>
            ) : (
              <div className="flex mb-4 flex-wrap">
                {posts
                  ?.sort((a, b) => (a.id < b.id ? 1 : -1))
                  .map((post) => (
                    <div key={post.id} className="real-estate">
                      <div className="mr-1.5 w-1/3 h-full rounded-full">
                        <img
                          // src={raw}
                          src={post.image_path === "" ? raw : post.image_path}
                          alt="rawland"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="mb-2">
                          <abbr title={post.title} className="no-underline">
                            <h1 className="!mb-0 truncate">{post.title}</h1>
                          </abbr>
                          <h2 className="text-pink text-xs">
                            {" "}
                            {post.interest_rate}% Interest Rate
                          </h2>
                        </div>
                        <div className="text-tiny text-grayy mb-2">
                          <p className="!mb-0">
                            Time Frame:{" "}
                            <span className="text-darkgray">
                              {post.duration} Days
                            </span>
                          </p>
                          <p className="">
                            Starts on-{" "}
                            <span className="text-darkgray">
                              {moment(post.expiry_date).format("MMM DD, yyyy")}
                            </span>
                          </p>
                        </div>
                        <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                          <p className="">
                            Property Worth{" "}
                            <span className="text-darkgray text-xs font-medium ml-2">
                              N
                              <CurrencyFormat
                                value={post.cost}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </span>
                          </p>
                        </div>
                        <div className="flex justify-between w-full">
                          <div className="flex items-center">
                            <img src={users1} alt="frame" className="z-0" />
                            <img
                              src={users2}
                              alt="frame"
                              className="-ml-3 z-10"
                            />
                            <img
                              src={users3}
                              alt="frame"
                              className="-ml-3 z-10"
                            />
                            <img
                              src={users4}
                              alt="frame"
                              className="-ml-3 z-10"
                            />
                            <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                              +24
                            </div>
                          </div>
                          <div>
                            <button
                              className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl"
                              onClick={() => {
                                productDetails(post.id);
                              }}
                            >
                              Join Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* <div className="flex justify-center p-10">
              <button className="border border-more font-medium rounded-full w-40 h-10 text-neutral flex justify-center items-center">
                <TbLoader className="mr-3" /> Load more
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center hidden lg:block">
        <h1 className="text-base font-semibold text-footer">
          © 2022 HxAfrica. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default NewInvestment;
