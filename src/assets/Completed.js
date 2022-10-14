import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CurrencyFormat from "react-currency-format";
import moment from "moment";
import completed from "./images/card-tick.svg";
import banner from "./images/banner.png";
import { useNavigate } from "react-router-dom";

function Completed() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(true);
  const navigate = useNavigate();

  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_completed_investment",
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

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  return (
    <div className="font-family bg-mainbg">
      <Header />

      <div className="lg:w-10/12 m-auto lg:mt-20 bg-dashbg rounded-lg lg:py-8 lg:px-4">
        <div className="bg-white h-screen lg:h-auto lg:p-10 w-full rounded-lg">
          <div className="mb-10 hidden lg:block">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
          </div>
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
              <img src={completed} alt="coins" className="mr-2" />
              <h1 className="text-sm text-title font-medium">
                Completed Investments
              </h1>
            </div>
          </div>

          <InvestTabs />

          <div className="mb-8 ">
            {available ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div className="overflow-auto px-4 bg-white">
                    <table className="w-full lg:table-auto">
                      <thead className="">
                        <tr className="text-left bg-dashbg">
                          <th className="py-2 text-head font-semibold text-sm  whitespace-nowrap pl-5 pr-20 lg:w-auto ">
                            Investments
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm  whitespace-nowrap">
                            Duration
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm  whitespace-nowrap">
                            Property Worth
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm  whitespace-nowrap">
                            Amount Invested
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm  whitespace-nowrap">
                            Amount Gained
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm  whitespace-nowrap">
                            Status
                          </th>

                          {/* <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Ends in
                        </th>
                        <th className="py-2 text-head font-semibold text-sm  whitespace-nowrap">
                          Action
                        </th> */}
                        </tr>
                      </thead>

                      <tr className="">
                        <td className="p-3"></td>
                      </tr>
                      {posts?.map((post) => (
                        <tr className="border-b" key={post.id}>
                          <td className=" py-8 text-footer font-bold text-sm whitespace-nowrap ">
                            <div className="ml-2 ">
                              <h1 className="mb-1">{post.product.title}</h1>
                              <h2 className="font-medium font-xs capitalize">
                                {post.product.category.product_category}
                              </h2>
                            </div>
                          </td>
                          <td className=" py-8 text-footer font-bold text-sm whitespace-nowrap">
                            <h1>{post.duration} Days</h1>
                          </td>
                          <td className="py-8 text-footer font-bold text-sm whitespace-nowrap">
                            <h1>
                              N
                              <CurrencyFormat
                                value={post.product.cost}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </h1>
                          </td>
                          <td className=" py-8 text-footer font-bold text-sm whitespace-nowrap">
                            <h1>
                              N
                              <CurrencyFormat
                                value={post.amount}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </h1>
                          </td>
                          <td className=" py-8 text-footer font-bold text-sm whitespace-nowrap">
                            <h1>
                              N
                              <CurrencyFormat
                                value={(
                                  (post.amount * post.interest) /
                                  100
                                ).toFixed(2)}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </h1>
                            <h2 className="font-medium font-xs">
                              {post.interest}% Interest
                            </h2>
                          </td>
                          <td className=" py-8 text-footer font-bold text-sm whitespace-nowrap">
                            <button className="bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium">
                              Completed
                            </button>
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
                    alt="No Completed investment"
                    className="-mr-10"
                  />
                </div>
                <h1 className="font-semibold text-xs text-statustext text-center">
                  Oh oh! You have no completed
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

export default Completed;
