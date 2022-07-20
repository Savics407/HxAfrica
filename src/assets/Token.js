import React, { useState, useEffect } from "react";
// import logo from "./images/polygon.png";
import { FaAngleDown } from "react-icons/fa";
import reictoken from "./images/Reic_Token.png";
import Header from "./Header";
import dollar from "./images/Vector.png";
import coin from "./images/coin.png";
import status from "./images/status-up.png";
// import reictoken from './images/Reic_Token.png'
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Withdraw from "./AddBank";

function Token() {
  const [isCardPay, setIsCardPay] = useState(false);
  const [amount, setAmount] = useState(50000);
  async function buy(e) {
    e.preventDefault();
    const email = localStorage.getItem("user-email");
    const payLoad = {
      email,
      amount: amount,
    };
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/paystack/initialize_paystack",
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    //use toaster and display redirecting to paystack
    // alert(result?.data.data.authorization_url);
    console.log(result?.data.data.authorization_url);
    window.location.href = result?.data.data.authorization_url;
    return null;
  }
  //Token Withdrawal
  const [buyToken, setBuyToken] = useState(false);

  //token balance
  const [token, setToken] = useState();
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
  }

  useEffect(() => {
    wallet();
  });

  return (
    <div className="font-family">
      {buyToken && <Withdraw className="z-10" closeToken={setBuyToken} />}

      <Header />

      <div className="w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4">
        <div className="">
          <div className="p-10 bg-white rounded-lg mb-5 flex">
            <div className="w-2/5">
              <div className="flex items-center">
                <img src={reictoken} alt="REIC TOKEN" />
                <h1 className="text-base text-token font-semibold ml-2">
                  REIC TOKEN
                </h1>
              </div>
              <div className="flex items-center mt-8 justify-between">
                <div className="flex items-center justify-between ">
                  <h1 className="font-medium mr-4 text-dark text-4xl">
                    <span>{JSON.stringify(token)}</span> REIC
                  </h1>
                  <div className="flex items-center border rounded-full py-2.5 px-5">
                    <span className="mr-1">REIC Coin</span>
                    <FaAngleDown />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 flex items-center justify-between w-3/5">
              <div className="pl-14 pr-4 border-l border-strokegrey ">
                <img src={status} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total Earnings Reic
                </p>
                <h1 className="text-dark text-2xl font-medium">20</h1>
              </div>
              <div className="px-4 border-strokegrey ">
                <img src={dollar} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total Earnings Reic
                </p>
                <h1 className="text-dark text-2xl font-medium">N200,000</h1>
              </div>
              <div className="px-4">
                <img src={coin} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total Earnings Reic
                </p>
                <h1 className="text-dark text-2xl font-medium">N200,000</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/2 mr-2">
              <div className="bg-welcome p-10 rounded-lg border flex justify-between items-center">
                <p className="font-medium text-base text-dark">
                  Easy Withdrawal to Local Bank
                </p>
                <div>
                  <button
                    className="w-48 h-12 rounded-full bg-green text-white text-base font-medium"
                    onClick={() => {
                      setBuyToken(true);
                    }}
                  >
                    Withdraw Token
                  </button>
                </div>
              </div>
              <div className="my-5">
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  exit={{
                    scale: 0,
                    transition: {
                      delay: 0.5,
                    },
                  }}
                  className="bg-white rounded-xl"
                >
                  <div className="border-b border-stroke px-10 py-5 font-semibold flex justify-between items-center text-dark text-lg">
                    <h1>Quick Purchase</h1>
                  </div>
                  <div className="py-10 px-10">
                    <div className="pb-4 flex items-center">
                      <img
                        src={reictoken}
                        alt="my-investment-image"
                        className="w-8"
                      />
                      <div className="ml-4 flex items-center">
                        <span className="text-tokentext text-xl font-extra-bold mr-2">
                          1
                        </span>
                        <span className="text-token uppercase text-sm font-semibold mr-2">
                          {" "}
                          reic token
                        </span>
                        <span className="text-tokentext text-xl font-semibold">
                          {" "}
                          = N50,000
                        </span>
                      </div>
                    </div>

                    <div className="py-10">
                      <p className="text-payment text-base font-normal mb-2.5">
                        Payment Method
                      </p>
                      <div className="flex justify-between ">
                        <button
                          className="border-2 border-border rounded-lg w-1/2 h-12 text-token text-base font-semibold mr-1 hover:bg-green hover:text-dashbg duration-300"
                          onClick={() => setIsCardPay(true)}
                        >
                          Card payment
                        </button>
                        <button
                          className="border-2 border-border rounded-lg w-1/2 h-12 text-token text-base font-semibold ml-1 hover:bg-green hover:text-dashbg duration-300"
                          onClick={() => alert("NO Bank added yet")}
                        >
                          Bank Transfer
                        </button>
                      </div>
                    </div>

                    <div className="pt-5 pb-9">
                      <p className="text-payment text-base font-normal mb-2.5">
                        Amount
                      </p>
                      <div className="text-nuetral font-bold text-lg flex justify-center py-6 rounded-lg bg-mainbg relative">
                        <input
                          type="number"
                          placeholder="enter amount"
                          className="text-neutral font-bold text-4xl text-center bg-transparent outline-0"
                          onChange={(e) => setAmount(e.target.value)}
                          defaultValue="50000"
                        />
                      </div>
                    </div>
                    <div className="text-right py-8 flex justify-between items-center">
                      <div className=" flex items-center">
                        <input
                          required
                          type="checkbox"
                          className="border mr-2 checked:bg-green"
                          value="1"
                        />
                        <p className="text-sm text-footer font-medium">
                          Save method as default
                        </p>
                      </div>
                      {!isCardPay && (
                        <button
                          className="rounded-full w-44 h-12 text-dashbg bg-green"
                          onClick={() => {
                            alert("select Payment Method");
                          }}
                        >
                          Buy Token
                        </button>
                      )}
                      {isCardPay && (
                        <button
                          className="rounded-full w-44 h-12 text-dashbg bg-green"
                          onClick={buy}
                        >
                          Pay with Card
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="w-1/2 ml-2 font-inter">
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                exit={{
                  scale: 0,
                  transition: {
                    delay: 0.5,
                  },
                }}
                className="bg-white rounded-xl"
              >
                <div className="border-b border-stroke px-10 py-5 font-semibold flex justify-between items-center text-dark text-lg">
                  <h1>Recent Transactions</h1>
                  <button className="font-medium text-sm border rounded-full py-1 px-4">
                    Clear All
                  </button>
                </div>
                <div className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3">
                    Token Purchase
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
                      <span>You</span> made a deposit of{" "}
                      <span className="">N20,000</span> purchase of{" "}
                      <span>REIC Token</span>, Transaction ID:{" "}
                      <span>UTTA005129</span>
                    </p>
                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      Jul 22, 2:45pm
                    </p>
                  </div>
                </div>
                <div className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3">
                    Token Purchase
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
                      <span>You</span> made a deposit of{" "}
                      <span className="">N20,000</span> purchase of{" "}
                      <span>REIC Token</span>, Transaction ID:{" "}
                      <span>UTTA005129</span>
                    </p>
                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      Jul 22, 2:45pm
                    </p>
                  </div>
                </div>
                <div className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3">
                    Withdrawal
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
                      <span>You</span> made a Withdrawal of{" "}
                      <span className="">N20,000</span> to your bank,
                      Transaction ID: <span>UTTA005129</span>
                    </p>
                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      Jul 22, 2:45pm
                    </p>
                  </div>
                </div>
                <div className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3">
                    Token Purchase
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
                      <span>You</span> made a deposit of{" "}
                      <span className="">N20,000</span> purchase of{" "}
                      <span>REIC Token</span>, Transaction ID:{" "}
                      <span>UTTA005129</span>
                    </p>
                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      Jul 22, 2:45pm
                    </p>
                  </div>
                </div>
                <div className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3">
                    Withdrawal
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
                      <span>You</span> made a Withdrawal of{" "}
                      <span className="">N20,000</span> to your bank,
                      Transaction ID: <span>UTTA005129</span>
                    </p>
                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      Jul 22, 2:45pm
                    </p>
                  </div>
                </div>
                <div className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3">
                    Token Purchase
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
                      <span>You</span> made a deposit of{" "}
                      <span className="">N20,000</span> purchase of{" "}
                      <span>REIC Token</span>, Transaction ID:{" "}
                      <span>UTTA005129</span>
                    </p>
                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      Jul 22, 2:45pm
                    </p>
                  </div>
                </div>
                <div className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3">
                    Token Purchase
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
                      <span>You</span> made a deposit of{" "}
                      <span className="">N20,000</span> purchase of{" "}
                      <span>REIC Token</span>, Transaction ID:{" "}
                      <span>UTTA005129</span>
                    </p>
                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      Jul 22, 2:45pm
                    </p>
                  </div>
                </div>
              </motion.div>
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

export default Token;
