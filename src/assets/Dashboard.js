// import logo from "./images/polygon.png";
import { FaAngleDown } from "react-icons/fa";
import dollar from "./images/Vector.png";
import coin from "./images/coin.png";
import reictoken from "./images/Reic_Token.png";
import media from "./images/media.png";
import Investments from "./Investments";
import Myinvests from "./Myinvestments";
import diamond from "./images/diamond.png";
import Header from "./Header";
import BuyToken from "./BuyToken";
import TokenSuccess from "./tokenSuccess";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Mobile from "./mobileHeader";
import { Link, NavLink } from "react-router-dom";

function Dashboard() {
  const [click, setClick] = useState(false);
  const [buyToken, setBuyToken] = useState(false);
  const [tokenSuccess, setTokenSuccess] = useState(false);
  const [token, setToken] = useState();
  const [ngn, setNgn] = useState();
  const userName = localStorage.getItem("user-name");

  async function wallet() {
    // console.log(formData);
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/wallet/fetch_wallet",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result?.status);
    // alert(result.data.token);
    setToken(result.data.token);
    setNgn(result.data.balance);
  }

  useEffect(() => {
    wallet();
  });

  return (
    <div className="font-family bg-mainbg">
      {buyToken && <BuyToken className="z-10" closeToken={setBuyToken} />}
      {tokenSuccess && (
        <TokenSuccess className="z-10" tokenOnClose={setTokenSuccess} />
      )}

      <Header />
      <Mobile />

      <div className="container">
        <div className="lg:w-4/6 w-full lg:pr-4">
          <div className="welcome bg-welcome p-10 rounded-lg border lg:block hidden">
            <h1 className="text-green font-black text-2xl mb-3">
              Hi, <span className="text-dark ml-2">{userName}</span>
            </h1>
            <p className="font-normal text-lg text-dark">You are welcome</p>
          </div>
          <div className="lg:p-10 px-5 pt-10 pb-4 bg-white rounded-lg lg:my-5">
            <div className="flex items-center hidden lg:flex">
              <img src={reictoken} alt="REIC TOKEN" />
              <h1 className="text-base text-token font-semibold ml-2">
                REIC TOKEN
              </h1>
            </div>
            <div className="flex items-center lg:mt-8 lg:justify-between">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <div className="flex items-center">
                  <div>
                    <img
                      src={reictoken}
                      alt="REIC TOKEN"
                      className="lg:hidden mr-2"
                    />
                  </div>
                  <div>
                    <h1 className="text-tiny text-token font-semibold mb-1.5 lg:hidden">
                      REIC TOKEN
                    </h1>
                    <h1 className="text-base font-medium mr-4 text-dark text-4l">
                      <span>{JSON.stringify(token)}</span> REIC
                    </h1>
                  </div>
                </div>

                <div className="flex items-center border rounded-full lg:py-2.5 lg:px-5 px-3 py-1.5 text-footer lg:text-xs text-xxm">
                  <span
                    className="mr-1"
                    // onClick={() => {
                    //   setTokenSuccess(true);
                    // }}
                  >
                    REIC Coin
                  </span>
                  <FaAngleDown />
                </div>
              </div>
              <div className="hidden lg:block">
                <button
                  className="bg-green font-medium text-bases text-white rounded-full px-8 py-4 hidden lg:block"
                  onClick={() => {
                    setBuyToken(true);
                  }}
                >
                  Buy Token
                </button>
              </div>
            </div>
            <div className="lg:hidden mobile-banner p-4 rounded-lg mt-10">
              <h1 className="text-white text-sm font-semibold">
                Invest and earn BIG!!!
              </h1>
              <div className="flex">
                <h1 className="text-xs font-semibold text-mobile-banner w-fit py-1">
                  1{" "}
                  <span className="uppercase font-semibold text-tiny">
                    reic token{" "}
                  </span>{" "}
                  = N50,000
                </h1>
              </div>
              <Link to="/token">
                <button className="bg-white text-green text-tiny font-normal rounded-full py-1 px-5">
                  Buy Token
                </button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-white mt-3 lg:mt-0">
            <div className="border-b border-stroke px-6 py-3 lg:px-10 lg:py-5 lg:text-lg text-xs text-dark font-medium">
              <h1>Incoming ROI</h1>
            </div>
            <div className="lg:px-10 lg:py-5 px-6 py-3 flex flex-row justify-between">
              <div className="lg:w-3/5 lg:py-10 py-5 w-fit">
                <div className="flex justify-between ">
                  <div className="income">
                    <h1>Return Duration</h1>
                    <p>31 Days</p>
                  </div>
                  <div className="income">
                    <h1>Expected Date</h1>
                    <p>Jul 23, 2022</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="income">
                    <h1>Expected Returns</h1>
                    <p>53,000,000</p>
                  </div>
                  <div className="income">
                    <h1>Amount in Reic Token</h1>
                    <p>10,600,000 REIC</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 lg:p-4 py-4 px-1">
                <div className="bg-mainbg rounded-full w-24 h-24 lg:w-48 lg:h-48 m-auto flex items-center justify-around relative">
                  <div className="bg-white w-16 h-16 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
                    <h1 className="text-center text-xxm lg:text-sm font-semibold text-dark">
                      18 Day's left
                    </h1>
                  </div>
                  <svg
                    className="svg lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    // width="192px"
                    // height="192px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#008E10" />
                        <stop offset="100%" stop-color="#008E10" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="circle hidden lg:block"
                      cx="90"
                      cy="105"
                      r="83"
                      stroke-linecap="round"
                    />
                    <circle
                      className="circle2 lg:hidden"
                      cx="46"
                      cy="50"
                      r="40"
                      stroke-linecap="round"
                    />
                  </svg>
                  {/* <svg
                    className="svg2 lg:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="115px"
                    height="115px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="100%" stop-color="#008E10" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="circle2"
                      cx="63"
                      cy="46"
                      r="40"
                      stroke-linecap="round"
                    />
                  </svg> */}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white mt-3 lg:hidden">
            <div className=" px-6 py-5 text-dark text-xs font-medium flex justify-between items-center">
              <h1>My portfolio growth</h1>
              <button
                className="bg-green text-tiny text-white rounded-full py-1.5 px-6"
                onClick={() => {
                  setClick(!click);
                }}
              >
                View
              </button>
            </div>
            <div
              className={`px-6 py-8 flex items-center justify-between border-t border-stroke hidden ${
                click ? "remove" : "show"
              }`}
            >
              <div className="w-1/2 px-4 border-r border-border-grey ">
                <img src={dollar} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total Earnings Reic
                </p>
                <h1 className="text-dark text-xl font-medium">N200,000</h1>
              </div>
              <div className="w-1/2 px-4">
                <img src={coin} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total Earnings Reic
                </p>
                <h1 className="text-dark text-xl font-medium">N200,000</h1>
              </div>
            </div>
          </div>
          <Investments />
          {/* <Myinvests/> */}

          {/* Let's do some coding thingy */}
        </div>
        {/* side panel */}
        <div className="lg:w-4/12 w-full lg:px-2 lg:block">
          <div className="bg-white p-8 rounded-lg flex items-center hidden lg:flex">
            <div className="w-1/2 px-4 border-r border-light-blue">
              <img src={dollar} alt="dollar-icon" className="mb-4 h-6 w-6" />
              <p className="text-earnings font-medium text-xs mb-1">
                Total Earnings Reic
              </p>
              <h1 className="text-dark text-2xl font-medium">N200,000</h1>
            </div>
            <div className="w-1/2 px-4">
              <img src={coin} alt="dollar-icon" className="mb-4 h-6 w-6" />
              <p className="text-earnings font-medium text-xs mb-1">
                Total Earnings Reic
              </p>
              <h1 className="text-dark text-2xl font-medium">N200,000</h1>
            </div>
          </div>
          <div className="my-5 bg-white rounded-lg pt-4 pb-20 px-4 hidden lg:block">
            <img src={media} alt="media" className="w-full" />
            <h1 className="bg-media p-1.5 rounded text-xs my-5 text-white w-fit text-center">
              NEW INVESTMENTS
            </h1>
            <p className="text-sm text-dark font-semibold">
              Submit your watchlist and win USDT
            </p>
          </div>
          <Myinvests />

          <div className="border rounded-3xl p-4 px-10 bg-primary text-center hidden lg:block">
            <img src={diamond} alt="diamond" className="m-auto" />
            <h1 className="text-neutral font-medium text-xl">
              Best for investments
            </h1>
            <h1 className="text-footer font-normal text-sm">
              Put your CHSB in the Yield Program and get rewarded daily with new
              CHSB.
            </h1>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
