import React from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import banner from "./images/banner.png";
import crowd from "./images/crowdfund.png";

function Mine() {
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
          <div className="mb-8 mine">
            <div className="bg-dashbg w-full px-5 py-1 flex justify-between my-7">
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
              <div className="w-full flex justify-between border-b py-8 border-statusborder">
                <div className="text-footer font-bold text-sm flex">
                  <img src={crowd} alt="crowdfunding" />
                  <div className="ml-2">
                    <h1>Investments</h1>
                    <h2 className="font-medium font-xs">Real-Estate</h2>
                  </div>
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
                <div className="text-footer font-bold text-sm table">
                  <h1>18 days</h1>
                </div>
                <div className="text-right table">
                  <button className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium">
                    Pull Out
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between border-b py-8 border-statusborder">
                <div className="text-footer font-bold text-sm flex">
                  <img src={crowd} alt="crowdfunding" />
                  <div className="ml-2">
                    <h1>Investments</h1>
                    <h2 className="font-medium font-xs">Real-Estate</h2>
                  </div>
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
                <div className="text-footer font-bold text-sm table">
                  <h1>18 days</h1>
                </div>
                <div className="table text-right table">
                  <button className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium">
                    Pull Out
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between border-b py-8 border-statusborder">
                <div className="text-footer font-bold text-sm flex">
                  <img src={crowd} alt="crowdfunding" />
                  <div className="ml-2">
                    <h1>Investments</h1>
                    <h2 className="font-medium font-xs">Real-Estate</h2>
                  </div>
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
                <div className="text-footer font-bold text-sm table">
                  <h1>18 days</h1>
                </div>
                <div className="table text-right table">
                  <button className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium">
                    Pull Out
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between border-b py-8 border-statusborder">
                <div className="text-footer font-bold text-sm flex">
                  <img src={crowd} alt="crowdfunding" />
                  <div className="ml-2">
                    <h1>Investments</h1>
                    <h2 className="font-medium font-xs">Real-Estate</h2>
                  </div>
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
                <div className="text-footer font-bold text-sm table">
                  <h1>18 days</h1>
                </div>
                <div className="table text-right table">
                  <button className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium">
                    Pull Out
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between border-b py-8 border-statusborder">
                <div className="text-footer font-bold text-sm flex">
                  <img src={crowd} alt="crowdfunding" />
                  <div className="ml-2">
                    <h1>Investments</h1>
                    <h2 className="font-medium font-xs">Real-Estate</h2>
                  </div>
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
                <div className="text-footer font-bold text-sm table">
                  <h1>18 days</h1>
                </div>
                <div className="table text-right table">
                  <button className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium">
                    Pull Out
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between border-b py-8 border-statusborder">
                <div className="text-footer font-bold text-sm flex">
                  <img src={crowd} alt="crowdfunding" />
                  <div className="ml-2">
                    <h1>Investments</h1>
                    <h2 className="font-medium font-xs">Real-Estate</h2>
                  </div>
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
                <div className="text-footer font-bold text-sm table">
                  <h1>18 days</h1>
                </div>
                <div className="table text-right table">
                  <button className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium">
                    Pull Out
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-between border-b py-8 border-statusborder">
                <div className="text-footer font-bold text-sm flex">
                  <img src={crowd} alt="crowdfunding" />
                  <div className="ml-2">
                    <h1>Investments</h1>
                    <h2 className="font-medium font-xs">Real-Estate</h2>
                  </div>
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
                <div className="text-footer font-bold text-sm table">
                  <h1>18 days</h1>
                </div>
                <div className="table text-right table">
                  <button className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium">
                    Pull Out
                  </button>
                </div>
              </div>
            </div>
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
