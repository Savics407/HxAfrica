import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import moment from "moment";
import * as CurrencyFormat from "react-currency-format";
import Details from "./Investment_Details";
import crowd from "./images/crowdfund.png";
import mine from "./images/mywallet.svg";
import { MdClose } from "react-icons/md";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Link, NavLink, useNavigate } from "react-router-dom";
import InvestHeader from "./InvestHeader";

function Mine() {
  const [openDetails, setOpenDetails] = useState(false);
  const [posts, setPosts] = useState();
  const [itemId, setItemID] = useState("");
  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_my_investment",
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
    // alert(result.data[0].id);

    setPosts(result.data);
    if (result?.data.length === 0) {
      setAvailable(false);
      // alert("fetched Successfully");
    } else {
      setAvailable(true);
    }

    if (result?.status === "success") {
      setLoading(false);
    }
  }
  const [lists, setLists] = useState(false);
  const [length, setLength] = useState();
  async function fetchChatList() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/chat/chat_list",
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
    setLength(result?.data.length);
    if (result?.data.length !== 0) {
      //  setLoading(false);
      setLists(true);
    }
  }

  useEffect(() => {
    // activities();
    fetchChatList();
    fetchData();
  }, []);

  function productDetails(id) {
    setItemID(id);
    // alert(itemId);
    // console.log(id);
    setOpenDetails(true);
  }

  return (
    <div className="font-family bg-mainbg">
      {openDetails && (
        <Details
          className="z-10"
          closeDetails={setOpenDetails}
          itemId={itemId}
          setItemID={setItemID}
        />
      )}
      <Header />

      <div className="lg:w-10/12 m-auto lg:mt-20 bg-dashbg rounded-lg lg:py-8 lg:px-4">
        <div className="bg-white h-screen lg:h-auto lg:p-10 w-full rounded-lg">
          {/* <div className="mb-10 hidden lg:block">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
          </div> */}
          {/* <div className="mb-10 flex justify-between items-center hidden lg:flex">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
            {lists && (
              <Link to="/investment-chat">
                <button className="flex items-center bg-green rounded px-4 py-2 text-white text-sm">
                  <img src={messenger} alt="messenger" />{" "}
                  <span className="ml-3">Messages({length})</span>
                </button>
              </Link>
            )}
          </div> */}
          <InvestHeader />
          {lists && (
            <div className="absolute top-40 left-0 right-0 hidden lg:block">
              <div className=" border border-green rounded-lg w-100 m-auto flex items-center justify-between bg-white text-navbar p-5 shadow-2xl ">
                <h1>
                  You have message request on your listed investment{" "}
                  <Link to="/investment-chat">
                    <span className="text-green underline font-semibold">
                      View Messages
                    </span>
                  </Link>
                </h1>
                <MdClose className="cursor-pointer text-4xl ml-6" />
              </div>
            </div>
          )}

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
              <img src={mine} alt="coins" className="mr-2" />
              <h1 className="text-sm text-title font-medium">My Investments</h1>
            </div>
          </div>

          <InvestTabs />
          <div className="lg:mb-8 pb-20 lg:pb-0 bg-white mine">
            {available ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div className="px-4 bg-white overflow-auto">
                    <table className="w-full table-auto">
                      <thead className="">
                        <tr className="text-left bg-dashbg">
                          <th className="py-2 text-head font-semibold text-sm whitespace-nowrap pl-5 pr-28 lg:pr-0">
                            Investments
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm whitespace-nowrap">
                            Duration
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm whitespace-nowrap">
                            Property Worth
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm whitespace-nowrap">
                            Amount Invested
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm whitespace-nowrap">
                            Interest Gained
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm whitespace-nowrap">
                            Ends in
                          </th>
                          <th className="py-2 text-head font-semibold text-sm whitespace-nowrap">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tr className="">
                        <td className="p-3"></td>
                      </tr>
                      {posts?.map((post) => (
                        <tr className="border-b" key={post.id}>
                          <td className=" py-8 text-footer font-bold text-sm flex">
                            <img
                              src={crowd}
                              alt="crowdfunding"
                              className="h-10"
                            />
                            <div className="ml-2 ">
                              <h1 className="mb-1 truncate w-40 lg:w-36">
                                <span title={post.product.title}>
                                  {post.product.title}
                                </span>
                              </h1>
                              <h2 className="font-medium font-xs">
                                {post.product.category.product_category}
                              </h2>
                            </div>
                          </td>
                          <td className=" py-8 text-footer font-bold text-sm">
                            <h1>{post.duration} Days</h1>
                          </td>
                          <td className="py-8 text-footer font-bold text-sm">
                            <h1>
                              N
                              <CurrencyFormat
                                value={post.product.cost}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </h1>
                          </td>
                          <td className="py-8 text-footer font-bold text-sm">
                            <h1>
                              N
                              <CurrencyFormat
                                value={post.amount}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </h1>
                          </td>
                          <td className=" py-8 text-footer font-bold text-sm">
                            <marquee
                              className=" w-24 bg-dashbg p-1"
                              Scrollamount="2"
                            >
                              <h1>
                                N
                                <CurrencyFormat
                                  value={(
                                    (post.amount *
                                      ((post.interest *
                                        (post.duration -
                                          moment(post.due_date).diff(
                                            new Date(),
                                            "Days"
                                          ))) /
                                        post.duration)) /
                                    100
                                  ).toFixed(2)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />{" "}
                                of{" "}
                                <CurrencyFormat
                                  value={(
                                    (post.amount * post.interest) /
                                    100
                                  ).toFixed(2)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </h1>
                            </marquee>
                            <h2 className="font-medium font-xs">
                              {post.interest}% Interest
                            </h2>
                          </td>
                          <td className=" py-8 text-footer font-bold text-sm">
                            <h1>
                              {moment(post.due_date).diff(new Date(), "Days")}{" "}
                              Days
                            </h1>
                          </td>
                          <td className=" py-8">
                            {post.product.status_investment === "ongoing" ? (
                              <Link to="/investment/ongoing">
                                {" "}
                                <button
                                  className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium"
                                  // onClick={() => {
                                  //   productDetails(post.id);
                                  // }}
                                >
                                  Ongoing
                                </button>
                              </Link>
                            ) : post.status === "completed" ? (
                              <Link to="/investment/completed">
                                {" "}
                                <button className="bg-input text-xs text-green w-28 h-9 rounded-full font-medium">
                                  Completed
                                </button>{" "}
                              </Link>
                            ) : (
                              <Link to="/investment/pending">
                                <button className="bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium">
                                  Waiting
                                </button>
                              </Link>
                            )}
                          </td>
                        </tr>
                      ))}
                    </table>
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
        </div>
      </div>
      <div className="mt-6 pb-10 text-center hidden lg:block">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Mine;
