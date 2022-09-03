import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CurrencyFormat from "react-currency-format";
import moment from "moment";
import banner from "./images/banner.png";

function Completed() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(true);

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
      <div className="w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4">
        <div className="bg-white p-10 w-full rounded-lg">
          <div className="mb-10">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
          </div>
          {/* <div>
                            <img src={banner} alt="Buy_REIC_Token" className='w-full'/>
                        </div> */}
          <InvestTabs />

          <div className="mb-8">
            {available ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div>
                    <table className=" w-full table-fixed">
                      <thead className="">
                        <tr className="text-left bg-dashbg">
                          <th className="py-2 text-head font-semibold text-sm pl-5 ">
                            Investments
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm ">
                            Duration
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm ">
                            Property Worth
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm ">
                            Amount Invested
                          </th>
                          <th className="py-2 pr-7 text-head font-semibold text-sm ">
                            Amount Gained
                          </th>
                          {/* <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Ends in
                        </th>
                        <th className="py-2 text-head font-semibold text-sm ">
                          Action
                        </th> */}
                        </tr>
                      </thead>

                      <tr className="">
                        <td className="p-3"></td>
                      </tr>
                      {posts?.map((post) => (
                        <tr className="border-b" key={post.id}>
                          <td className=" py-8 text-footer font-bold text-sm ">
                            <div className="ml-2 ">
                              <h1 className="mb-1">{post.product.title}</h1>
                              <h2 className="font-medium font-xs capitalize">
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
                          <td className=" py-8 text-footer font-bold text-sm">
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
                                value={(post.amount * post.interest) / 100}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </h1>
                            <h2 className="font-medium font-xs">
                              {post.interest}% Interest
                            </h2>
                          </td>
                          {/* <td className=" py-8 text-footer font-bold text-sm">
                          <h1>
                            {moment(post.due_date).diff(new Date(), "Days")}{" "}
                            Days
                          </h1>
                        </td> */}
                        </tr>
                      ))}
                    </table>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img src={box} alt="No Completed investment" />
                </div>
                <h1 className="font-semibold text-xs text-statustext text-center -ml-10">
                  Oh oh! You have no completed
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

export default Completed;
