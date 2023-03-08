import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import banner from "./images/banner.png";
import ongoingCoin from "./images/ongoingcoin.svg";
import { useNavigate } from "react-router-dom";
import land from "./images/rawland2.png";
import box from "./images/Box.png";
import Details from "./Investment_Details";
import { TbLoader } from "react-icons/tb";
import * as CurrencyFormat from "react-currency-format";
import moment from "moment";
import { FiArrowUp } from "react-icons/fi";
import JoinInvestment from "./JoinOngoing";
import ScaleLoader from "react-spinners/ScaleLoader";
import { HiOutlineArrowRight } from "react-icons/hi";
import InvestHeader from "./InvestHeader";

function Ongoing() {
  const userID = localStorage.getItem("user-id");
  // alert(userID);
  const [posts, setPosts] = useState();
  const [itemId, setItemID] = useState("");
  const [openDetails, setOpenDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ongoing, setOngoing] = useState(true);
  const navigate = useNavigate();
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investment/fetch_ongoing_investment`,
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
    // alert(result.data[0].duration);

    setPosts(result.data);
    if (result?.data.length === 0) {
      setOngoing(false);
      // alert(result.data);
    } else {
      setOngoing(true);
    }
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
    setOpenDetails(true);
  }
  const [joinInvest, setJoinInvest] = useState(false);

  function joinNow(id) {
    setItemID(id);

    setJoinInvest(true);
  }
  return (
    <div className="font-family bg-mainbg">
      {openDetails && (
        <Details
          className="z-10"
          closeDetails={setOpenDetails}
          itemId={itemId}
          setItemID={setItemID}
          ongoing={fetchData}
        />
      )}

      {joinInvest && (
        <JoinInvestment
          className="z-10"
          closeModal={setJoinInvest}
          itemId={itemId}
          setItemID={setItemID}
          productDetails={productDetails}
        />
      )}
      <Header />
      <div className="lg:w-10/12 m-auto lg:mt-20 bg-dashbg rounded-lg lg:py-8 lg:px-4">
        {/* <div className="bg-white p-10 w-full rounded-lg">
          <div className="mb-10">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
          </div>
          
        */}
        <div className="bg-white h-screen lg:h-auto lg:p-10 w-full rounded-lg">
          <InvestHeader />
          <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between items-center">
            <h1 className="">Investments</h1>
            <button
              className="text-green text-sm font-inter"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </div>
          <div className=" p-5 lg:hidden">
            <div className="flex items-center ">
              <img src={ongoingCoin} alt="coins" className="mr-2" />
              <h1 className="text-sm text-title font-medium">
                Ongoing Investments
              </h1>
            </div>
          </div>
          <InvestTabs />
          <div className="investlists bg-white px-5 pb-10 lg:pb-auto lg:px-0">
            {ongoing ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div className="flex flex-wrap mb-4">
                    {posts?.map((post) => (
                      <div key={post.id} className="real-estate">
                        <div className="mr-2 w-1/3 h-full">
                          <img
                            src={
                              post.product.image_path === ""
                                ? land
                                : post.product.image_path
                            }
                            alt="rawland"
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        <div className="w-2/3">
                          <div className="mb-2 flex justify-between">
                            <div className="w-4/5">
                              {" "}
                              <abbr
                                title={post.product.title}
                                className="no-underline"
                              >
                                <h1
                                  data-tip={post.product.title}
                                  className="!mb-0 truncate"
                                >
                                  {post.product.title}
                                </h1>
                              </abbr>
                              <h2 className="text-green text-xs">
                                {post.interest}% Interest Rate
                              </h2>
                            </div>
                            {post.user_id == userID &&
                              post.product.cost === post.product.threshold && (
                                <div
                                  onClick={() => {
                                    productDetails(post.id);
                                  }}
                                >
                                  <HiOutlineArrowRight className="text-lg text-arrow cursor-pointer" />
                                </div>
                              )}
                          </div>
                          <div className="text-tiny text-grayy mb-3">
                            <p className="!mb-0">
                              Time Frame:{" "}
                              <span className="text-darkgray">
                                {post.duration} Days
                              </span>
                            </p>
                            <p className="">
                              Ends on -{" "}
                              <span className="text-darkgray">
                                {moment(post.due_date).format("MMM DD, yyyy")}
                              </span>
                            </p>
                          </div>
                          <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                            <p className="">
                              Property Worth{" "}
                              <span className="text-darkgray text-xs font-medium ml-2">
                                N
                                <CurrencyFormat
                                  value={post.product.cost}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>
                            </p>
                          </div>
                          {post.product.cost > post.product.threshold ? (
                            <div>
                              <button
                                className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl"
                                onClick={() => {
                                  joinNow(post.id);
                                }}
                              >
                                Join Now
                              </button>
                            </div>
                          ) : (
                            <h1 className="text-endsin text-xxm font-medium flex items-center bg-ongoing w-fit px-2.5 py-1.5 rounded-full">
                              <FiArrowUp className="text-tiny text-rose mr-1 mb-1 " />{" "}
                              <span className="">
                                {moment(post.due_date).diff(new Date(), "Days")}{" "}
                                Days:{" "}
                                {/* {moment(post.due_date).format("h:m")} */}
                                to go
                              </span>
                            </h1>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={box}
                    alt="No relisted investment"
                    className="-mr-10"
                  />
                </div>
                <h1 className="font-semibold text-xs text-statustext text-center">
                  Oh oh! You have no active
                  <br />
                  investments at this time
                </h1>
              </div>
            )}
          </div>
          <div className="flex justify-center p-10 hidden">
            <button className="border border-more font-medium rounded-full w-40 h-10 text-neutral flex justify-center items-center">
              <TbLoader className="mr-3" /> Load more
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center lg:block hidden">
        <h1 className="text-base font-semibold text-footer">
          © 2022 HxAfrica. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Ongoing;
