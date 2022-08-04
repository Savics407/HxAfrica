import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import React, { useEffect, useState } from "react";
import banner from "./images/banner.png";

function Completed() {
  const [posts, setPosts] = useState();
  const [available, setAvailable] = useState(false);

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
                <div className="bg-dashbg w-full px-5 py-1 flex justify-between my-8">
                  <div className="text-head font-semibold text-sm table">
                    <h1>Investments</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Duration</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Property Worth</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Amount Invested</h1>
                  </div>
                  <div className="text-head font-semibold text-sm table">
                    <h1>Amount Gained</h1>
                  </div>
                  {/* <div className="text-head font-semibold text-sm table text-center">
                    <h1>Status</h1>
                  </div> */}
                </div>

                {posts?.map((post) => (
                  <div
                    key={post.id}
                    className="w-full flex justify-between px-5 border-b py-8 border-statusborder"
                  >
                    <div className="text-footer font-bold text-sm table">
                      <h1>{post.product.title}</h1>
                      <h2 className="font-medium font-xs">
                        {post.product.product_category}
                      </h2>
                    </div>
                    <div className="text-footer font-bold text-sm table">
                      <h1>{post.duration} Days</h1>
                    </div>
                    <div className="text-footer font-bold text-sm table">
                      <h1>N{post.product.cost}</h1>
                    </div>
                    <div className="text-footer font-bold text-sm table">
                      <h1>N{post.amount}</h1>
                    </div>
                    <div className="text-footer font-bold text-sm table">
                      <h1>N40,000.00</h1>
                      <h2 className="font-medium font-xs">
                        {post.interest}% Interest
                      </h2>
                    </div>
                    {/* <div className="table text-right">
                      <button className="bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium">
                        Claimed
                      </button>
                    </div> */}
                  </div>
                ))}
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

          {/* <div className="w-full flex justify-between px-5 border-b py-8 border-statusborder">
            <div className="text-footer font-bold text-sm table">
              <h1>Investments</h1>
              <h2 className="font-medium font-xs">Real-Estate</h2>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>4 Months</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N200,000,000</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N40,000.00</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N40,000.00</h1>
              <h2 className="font-medium font-xs">100% Interest</h2>
            </div>
            <div className="table text-right">
              <button className="bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium">
                Claimed
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between px-5 border-b py-8 border-statusborder">
            <div className="text-footer font-bold text-sm table">
              <h1>Investments</h1>
              <h2 className="font-medium font-xs">Real-Estate</h2>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>4 Months</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N200,000,000</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N40,000.00</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N40,000.00</h1>
              <h2 className="font-medium font-xs">100% Interest</h2>
            </div>
            <div className="table text-right">
              <button className="bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium">
                Claimed
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between px-5 border-b py-8 border-statusborder">
            <div className="text-footer font-bold text-sm table">
              <h1>Investments</h1>
              <h2 className="font-medium font-xs">Real-Estate</h2>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>4 Months</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N200,000,000</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N40,000.00</h1>
            </div>
            <div className="text-footer font-bold text-sm table">
              <h1>N40,000.00</h1>
              <h2 className="font-medium font-xs">100% Interest</h2>
            </div>
            <div className="table text-right">
              <button className="bg-pending text-xs text-pendingtext w-28 h-9 rounded-full font-medium">
                Not Claimed
              </button>
            </div>
          </div> */}
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
