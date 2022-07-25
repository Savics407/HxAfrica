import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import moment from "moment";
import Details from "./Investment_Details";
import crowd from "./images/crowdfund.png";

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
          <div className="mb-10">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
          </div>

          <InvestTabs />
          <div className="mb-8 mine">
            {available ? (
              <>
                <div className="bg-dashbg w-full px-5 py-1 flex justify-between my-7">
                  <div className="text-head font-semibold text-sm header !mr-0">
                    <h1>Investments</h1>
                  </div>
                  <div className="text-head font-semibold text-sm dur">
                    <h1>Duration</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Property Worth</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Amount Invested</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Interest Gained</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Ends in</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table text-center">
                    <h1>Action</h1>
                  </div>
                </div>
                <div className="px-2">
                  {posts?.map((post) => (
                    <div
                      key={post.id}
                      className="w-full flex justify-between border-b py-8 border-statusborder"
                    >
                      <div className="text-footer font-bold text-sm flex header">
                        <img src={crowd} alt="crowdfunding" className="h-10" />
                        <div className="ml-2">
                          <h1>{post.product.title}</h1>
                          <h2 className="font-medium font-xs">
                            {post.product.product_category}
                          </h2>
                        </div>
                      </div>
                      <div className="text-footer font-bold text-sm dur">
                        <h1>{post.duration} Days</h1>
                      </div>
                      <div className="text-footer font-bold text-sm table">
                        <h1>N{post.product.cost}</h1>
                      </div>
                      <div className="text-footer font-bold text-sm table">
                        {/* <h1>N{post.investments}</h1> */}
                        <h1>N{post.amount}</h1>
                      </div>
                      <div className="text-footer font-bold text-sm table">
                        <h1>N40,000.00</h1>
                        <h2 className="font-medium font-xs">
                          {post.interest}% Interest
                        </h2>
                      </div>
                      <div className="text-footer font-bold text-sm table">
                        <h1>
                          {moment(post.due_date).diff(new Date(), "Days")} Days
                        </h1>
                      </div>
                      <div className="text-right table">
                        <button
                          className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium"
                          onClick={() => {
                            productDetails(post.id);
                          }}
                        >
                          Pull Out
                        </button>
                      </div>
                    </div>
                  ))}
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
