import Header from "./Header";
import { useState } from "react";
import banner from "./images/banner.png";
import { NavLink } from "react-router-dom";
import InvestTabs from "./InvestTabs";
import raw from "./images/rawland.png";
import land from "./images/rawland2.png";
import users1 from "./images/Frame 14.png";
import users2 from "./images/Frame 18.png";
import users3 from "./images/Frame 19.png";
import users4 from "./images/Frame 20.png";
import { TbLoader } from "react-icons/tb";

function Investment() {
  const [buyToken, setBuyToken] = useState(false);

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
            <div className="flex justify-between mb-4">
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-4">
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-4">
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="real-estate">
                <div className="mr-1.5 w-1/3 h-full">
                  <img src={raw} alt="rawland" />
                </div>
                <div className="w-2/3">
                  <div className="mb-2">
                    <h1 className="!mb-0">Raw Land - Real Estate</h1>
                    <h2 className="text-pink text-xs">30% Interest Rate</h2>
                  </div>
                  <div className="text-tiny text-grayy mb-2">
                    <p className="!mb-0">
                      Time Frame:{" "}
                      <span className="text-darkgray">4 months</span>
                    </p>
                    <p className="">
                      Expires -{" "}
                      <span className="text-darkgray">Dec 23, 2022</span>
                    </p>
                  </div>
                  <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                    <p className="">
                      Property Worth{" "}
                      <span className="text-darkgray text-xs font-medium ml-2">
                        N200,000,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                    </div>
                    <div>
                      <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-10">
              <button className="border border-more font-medium rounded-full w-40 h-10 text-neutral flex justify-center items-center">
                <TbLoader className="mr-3" /> Load more
              </button>
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

export default Investment;
