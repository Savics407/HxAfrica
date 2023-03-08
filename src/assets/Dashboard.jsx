import { FaAngleDown } from "react-icons/fa";
import dollar from "./images/money-recive.svg";
import coin from "./images/coin.svg";
import reictoken from "./images/HXsToken.svg";
import media from "./images/media container.svg";
import Investments from "./Investments";
import Myinvests from "./Myinvestments";
import diamond from "./images/IMAGE.svg";
import Header from "./Header";
import BuyToken from "./BuyToken";
import TokenSuccess from "./tokenSuccess";
import { useEffect, useState } from "react";
import Mobile from "./mobileHeader";
import { Link } from "react-router-dom";
import IncomingROI from "./IncomingROI";
import * as CurrencyFormat from "react-currency-format";

function Dashboard() {
  const [click, setClick] = useState(false);
  const [buyToken, setBuyToken] = useState(false);
  const [tokenSuccess, setTokenSuccess] = useState(false);
  const [token, setToken] = useState();
  const [drop, setDrop] = useState(false);
  const [ngn, setNgn] = useState();
  const [reic, setReic] = useState(true);
  const name = localStorage.getItem("name");
  const user = localStorage.getItem("user-name");

  // const [userName, setUserName] = useState();
  // async function fetchData() {
  //   const token = localStorage.getItem("user-token");
  //   // e.preventDefault();
  //   const response = await fetch(
  //     `${import.meta.env.REACT_APP_MY_API_ENDPOINT}investor/fetch_user_profile",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   const result = await response.json();
  //   console.log(result.data);
  //   setUserName(result?.data.username);
  //   localStorage.setItem("user-name", userName);
  // }
  async function wallet() {
    // console.log(formData);
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}wallet/fetch_wallet`,
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
    localStorage.setItem("user-wallet", result?.data.token);
  }

  const [earnings, setEarnings] = useState();
  async function totalEarnings() {
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}wallet/total_earning`,
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
    setEarnings(result?.data);
  }

  useEffect(() => {
    wallet();
    totalEarnings();
    // fetchData();
  }, []);

  // function redirect() {
  //   window.location = "http://localhost:3000/investment";
  // }

  // setTimeout(redirect(), 4000);

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
              Hi,{" "}
              <span className="text-dark ml-2">
                {user === "null" ? name : user}
              </span>
            </h1>
            <p className="font-normal text-lg text-dark">You are welcome</p>
          </div>
          <div className="lg:p-10 px-5 pt-10 pb-4 bg-white rounded-lg lg:my-5">
            <div className="flex items-center hidden lg:flex">
              <img src={reictoken} alt="Hx TOKEN" />
              <h1 className="text-base text-token font-semibold ml-2">
                Hx TOKEN
              </h1>
            </div>
            <div className="flex items-center lg:mt-8 lg:justify-between">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <div className="flex items-center">
                  <div>
                    <img
                      src={reictoken}
                      alt="Hx TOKEN"
                      className="lg:hidden mr-2"
                    />
                  </div>
                  <div>
                    <h1 className="text-tiny text-token font-semibold mb-1.5 lg:hidden">
                      Hx TOKEN
                    </h1>
                    <h1 className="lg:text-4xl font-medium mr-4 text-dark text-4l">
                      {reic ? (
                        <span>{parseFloat(token).toFixed(2)}</span>
                      ) : (
                        // <span>{Number.parseFloat(token)}</span>
                        //
                        <span>
                          N
                          <CurrencyFormat
                            value={JSON.stringify(ngn)}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                          {/* {JSON.stringify(ngn)} */}
                        </span>
                      )}{" "}
                      {reic && "Hx"}
                    </h1>
                  </div>
                </div>

                <div
                  className="flex items-center border rounded-full lg:px-5 px-3 lg:py-2.5 py-1.5 text-footer lg:text-xs text-xxm cursor-pointer relative"
                  onClick={() => setDrop(!drop)}
                >
                  <span
                    className="mr-1"
                  // onClick={() => {
                  //   setTokenSuccess(true);
                  // }}
                  >
                    {reic ? "Hx Coin" : "NGN"}
                  </span>
                  <FaAngleDown />
                  <div
                    className={`absolute text-neutral right-0 lg:right-0 lg:left-0 top-28 -mt-2 rounded-xl shadow-2xl bg-dashbg text-left w-28 visible duration-300 z-50 ${drop ? "show-note !top-10" : "remove-note"
                      }`}
                  >
                    <div
                      className="arrow2 relative border-b px-4 py-2 hover:bg-mainbg rounded-t-xl "
                      onClick={() => setReic(true)}
                    >
                      <h1 className="text-base font-normal">Hx</h1>
                    </div>

                    <div
                      className="text-base px-4 py-2 hover:bg-mainbg rounded-b-xl "
                      onClick={() => setReic(false)}
                    >
                      <h1>NGN</h1>
                    </div>
                  </div>
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
                    Hx token{" "}
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
          <IncomingROI />
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
              className={`px-6 py-8 flex items-center justify-between border-t border-stroke hidden ${!click ? "remove" : "show"
                }`}
            >
              <div className="w-1/2 px-4 border-r border-border-grey ">
                <img src={dollar} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total Earnings Hx Token
                </p>
                <h1 className="text-dark text-xl font-medium">
                  {earnings?.token.toFixed(2)} Hx
                </h1>
              </div>
              <div className="w-1/2 px-4">
                <img src={coin} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total Investments
                </p>
                <h1 className="text-dark text-xl font-medium">
                  N
                  <CurrencyFormat
                    value={earnings?.NGN}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </h1>
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
                Total Earnings Hx Token
              </p>
              <h1 className="text-dark text-2xl font-medium">
                {earnings?.token.toFixed(2)} Hx
              </h1>
            </div>
            <div className="w-1/2 px-4">
              <img src={coin} alt="dollar-icon" className="mb-4 h-6 w-6" />
              <p className="text-earnings font-medium text-xs mb-1">
                Total Earnings Naira
              </p>
              <h1 className="text-dark text-2xl font-medium">
                N
                <CurrencyFormat
                  value={earnings?.NGN}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </h1>
            </div>
          </div>
          <div className="my-5 bg-white rounded-lg pt-4 pb-20 px-4 hidden lg:block">
            <img src={media} alt="media" className="w-full" />
            <h1 className="bg-media p-1.5 rounded text-xs my-5 text-white w-fit text-center">
              NEW INVESTMENTS
            </h1>
            <p className="text-sm text-dark font-semibold">
              Make profitable ROI's in Hx Token as you buy more token
            </p>
          </div>
          <Myinvests />

          <div className="border rounded-3xl p-4 px-10 bg-primary text-center hidden lg:block">
            <img src={diamond} alt="diamond" className="m-auto" />
            <h1 className="text-neutral font-medium text-xl">
              Best for investments
            </h1>
            <h1 className="text-footer font-normal text-sm">
              Enjoy Predictable cash flow, excellent returns and creation of
              wealth.
            </h1>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1 className="text-base font-semibold text-footer">
          © 2022 HxAfrica. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
