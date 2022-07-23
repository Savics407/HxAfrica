import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import banner from "./images/banner.png";
import land from "./images/rawland2.png";
import { TbLoader } from "react-icons/tb";
import moment from "moment";

function Ongoing() {
  const [posts, setPosts] = useState();
  const [ongoing, setOngoing] = useState(true);
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_ongoing_investment",
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
    // if (result?.data.length === 0) {
    //   setOngoing(false);
    //   alert(result.data);
    // } else {
    //   setOngoing(true);
    // }
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
          <div className="investlists">
            <div className="flex flex-wrap mb-4">
              {posts?.map((post) => (
                <div key={post.id} className="real-estate">
                  <div className="mr-1.5 w-1/3">
                    <img src={land} alt="rawland" />
                  </div>
                  <div className="w-2/3">
                    <div className="mb-2">
                      <h1 className="!mb-0">{post.product.title}</h1>
                      <h2 className="text-green text-xs">
                        {post.interest}% Interest Rate
                      </h2>
                    </div>
                    <div className="text-tiny text-grayy mb-3">
                      <p className="!mb-0">
                        Time Frame:{" "}
                        <span className="text-darkgray">
                          {post.duration} months
                        </span>
                      </p>
                      <p className="">
                        Expires -{" "}
                        <span className="text-darkgray">
                          {moment(post.due_date).calendar()}
                        </span>
                      </p>
                    </div>
                    <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-3 w-48">
                      <p className="">
                        Property Worth{" "}
                        <span className="text-darkgray text-xs font-medium ml-2">
                          N{post.product.cost}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center p-10 hidden">
            <button className="border border-more font-medium rounded-full w-40 h-10 text-neutral flex justify-center items-center">
              <TbLoader className="mr-3" /> Load more
            </button>
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

export default Ongoing;
