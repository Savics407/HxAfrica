import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import messenger from "./images/Line.svg";
import moment from "moment";
import Details from "./Investment_Details";
import crowd from "./images/crowdfund.png";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";

function Mine() {
  const [openDetails, setOpenDetails] = useState(false);
  const [posts, setPosts] = useState();
  const [itemId, setItemID] = useState("");
  const [available, setAvailable] = useState(false);

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
  }

  useEffect(() => {
    // activities();
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
      <div className="w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4">
        <div className="bg-white p-10 w-full rounded-lg">
          <div className="mb-10 flex justify-between items-center">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
            <Link to="/investment-chat">
              <button className="flex items-center bg-green rounded px-4 py-2 text-white text-sm">
                <img src={messenger} alt="messenger" />{" "}
                <span className="ml-3">Messages(3)</span>
              </button>
            </Link>
          </div>
          <div className="absolute top-40 left-0 right-0">
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

          <InvestTabs />
          <div className="mb-8 mine">
            {available ? (
              <>
                <div>
                  <table className=" w-full table-auto">
                    <thead className="">
                      <tr className="text-left bg-dashbg">
                        <th className="py-2 text-head font-semibold text-sm pl-5">
                          Investments
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Duration
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Property Worth
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Amount Invested
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Interest Gained
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Ends in
                        </th>
                        <th className="py-2 text-head font-semibold text-sm">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tr className="">
                      <td className="p-3"></td>
                    </tr>
                    {posts?.map((post) => (
                      <tr className="border-b" key={post.id}>
                        <td className=" py-8 text-footer font-bold text-sm flex ">
                          <img
                            src={crowd}
                            alt="crowdfunding"
                            className="h-10"
                          />
                          <div className="ml-2 ">
                            <h1 className="mb-1">{post.product.title}</h1>
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
                          <h1>
                            N
                            <CurrencyFormat
                              value={
                                (post.amount *
                                  ((post.interest *
                                    (post.duration -
                                      moment(post.due_date).diff(
                                        new Date(),
                                        "Days"
                                      ))) /
                                    post.duration)) /
                                100
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </h1>
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
                          {post.status === "ongoing" ? (
                            <button
                              className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium"
                              onClick={() => {
                                productDetails(post.id);
                              }}
                            >
                              Pull Out
                            </button>
                          ) : post.status === "completed" ? (
                            <button className="bg-input text-xs text-green w-28 h-9 rounded-full font-medium">
                              Completed
                            </button>
                          ) : (
                            <button className="bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium">
                              Waiting
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img src={box} alt="No relisted investment" />
                </div>
                <h1 className="font-semibold text-xs text-statustext text-center -ml-10">
                  Oh oh! You have no active
                  <br />
                  investments at this time
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Mine;
