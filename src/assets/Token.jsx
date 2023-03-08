import React, { useState, useEffect } from "react";
// import logo from "./images/polygon.png";
import { FaAngleDown } from "react-icons/fa";
import reictoken from "./images/HX Token.svg";
import Header from "./Header";
import dollar from "./images/Vector.png";
import coin from "./images/coin.png";
import widthdraw from "./images/withdraw-token.svg";
import send from "./images/moneysend.svg";
import status from "./images/status-up.png";
// import reictoken from './images/Reic_Token.png'
// import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import AddBank from "./AddBank";
import { BankTransfer } from "./BuyToken";
import Withdraw from "./WithdrawToken";
import RecentActivity from "./recentActivity";
import * as CurrencyFormat from "react-currency-format";
import Processing from "./ProcessingBvn";
import Details from "./BuyToken";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

function Token() {
  const [isCardPay, setIsCardPay] = useState(false);
  const [card, setCard] = useState(false);
  const [isBankPay, setIsBankPay] = useState(false);
  const [card2, setCard2] = useState(false);
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
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}paystack/initialize_paystack`,
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
    localStorage.setItem("bought-amount", amount);

    //use toaster and display redirecting to paystack
    // alert(result?.data.data.authorization_url);
    console.log(result?.data.data.authorization_url);
    window.location.href = result?.data.data.authorization_url;
    return null;
  }
  //Token Withdrawal
  const [buyToken, setBuyToken] = useState(false);
  const [verifyBVN, setVerifyBVN] = useState(false);

  //token balance
  const [ngn, setNgn] = useState();
  const [drop, setDrop] = useState(false);
  const [reic, setReic] = useState(true);
  const [token, setToken] = useState();
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
    console.log(result.status);
    // alert(result.data.token);
    setNgn(result.data.balance);
    setToken(result.data.token);
  }
  const [total, setTotal] = useState();
  async function fetchTotal() {
    // console.log(formData);
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}wallet/total_investment`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.status);
    setTotal(result.data);
  }

  useEffect(() => {
    wallet();
    fetchTotal();
  }, []);

  const [withdraw, setWithdraw] = useState(false);
  const [bankID, setBankID] = useState();
  const [bank, setBank] = useState(false);
  const [purchaseToken, setPurchaseToken] = useState(false);
  return (
    <div className="font-family">
      {purchaseToken && (
        <Details className="z-10" closeToken={setPurchaseToken} />
      )}

      {buyToken && (
        <AddBank
          className="z-10"
          closeToken={setBuyToken}
          setWithdraw={setWithdraw}
          setVerifyBVN={setVerifyBVN}
          setBankID={setBankID}
        />
      )}
      {verifyBVN && (
        <Processing
          className="z-10"
          setVerifyBVN={setVerifyBVN}
          closeToken={setBuyToken}
        />
      )}
      {withdraw && (
        <Withdraw
          className="z-10"
          setWithdraw={setWithdraw}
          closeToken={setBuyToken}
          bankID={bankID}
          wallet={wallet}
        />
      )}
      {bank && <BankTransfer setBank={setBank} bank={bank} />}
      <Header />

      <div className="lg:w-10/12 w-full m-auto lg:mt-20 bg-dashbg rounded-lg lg:py-8 lg:px-4">
        <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold">
          <h1 className="uppercase">my token wallet</h1>
        </div>
        <div className="">
          <div className="lg:p-10 px-4 py-5 bg-white rounded-lg mb-5 flex flex-wrap ">
            <div className="lg:w-2/5 w-full">
              <div className="flex items-center hidden lg:flex">
                <img src={reictoken} alt="Hx TOKEN" />
                <h1 className="text-base text-token font-semibold ml-2">
                  Hx TOKEN
                </h1>
              </div>
              <div className="flex items-center lg:mt-8 justify-between">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <div className="flex items-center">
                    <img
                      src={reictoken}
                      alt="Hx TOKEN"
                      className="lg:hidden mr-2"
                    />

                    <div className="">
                      <h1 className="text-token uppercase text-tiny font-semibold lg:hidden">
                        Hx token
                      </h1>
                      <h1 className="font-medium mr-4 text-dark lg:text-3xl text-4l">
                        {reic ? (
                          <span>
                            {parseFloat(token) === "NaN"
                              ? "0.00"
                              : parseFloat(token).toFixed(2)}
                          </span>
                        ) : (
                          <span>
                            N
                            <CurrencyFormat
                              value={JSON.stringify(ngn)}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </span>
                        )}{" "}
                        {reic && "Hx"}
                      </h1>
                    </div>
                  </div>

                  <div
                    className="flex items-center border rounded-full py-1.5 px-3 lg:py-2.5 lg:px-5 relative cursor-pointer"
                    onClick={() => setDrop(!drop)}
                  >
                    <span className="mr-1 lg:text-xs text-xxm">
                      {reic ? "Hx Coin" : "NGN"}
                    </span>
                    <FaAngleDown />
                    <div
                      className={`absolute text-neutral right-0 lg:left-0 top-28 -mt-2 rounded-xl shadow-2xl bg-dashbg text-left w-28 invisible duration-3#7E7E99#7E7E9900 z-50 ${drop ? "show-note !top-10" : "remove-note"
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
              </div>
            </div>

            <div className="px-8 flex items-center justify-between w-3/5 hidden lg:flex">
              <div className="pl-14 pr-4 border-l border-strokegrey ">
                <img src={status} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  My Investments
                </p>
                <h1 className="text-dark text-2xl font-medium">
                  {total?.total_investment}
                </h1>
              </div>
              <div className="px-4 border-strokegrey ">
                <img src={dollar} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Total in Hx Token
                </p>
                <h1 className="text-dark text-2xl font-medium">
                  {total?.token.toFixed(2)}
                </h1>
              </div>
              <div className="px-4">
                <img src={coin} alt="dollar-icon" className="mb-4 h-6 w-6" />
                <p className="text-earnings font-medium text-xs mb-1">
                  Naira Equivalent
                </p>
                <h1 className="text-dark text-2xl font-medium">
                  N
                  <CurrencyFormat
                    value={total?.NGN}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </h1>
              </div>
            </div>
            <div className="flex py-5 pl-3 lg:hidden">
              <h1 className="text-xs font-semibold text-black w-fit py-1">
                1{" "}
                <span className="uppercase font-semibold text-tiny">
                  Hx token{" "}
                </span>{" "}
                = N50,000
              </h1>
            </div>
          </div>
          <div className="w-full lg:flex">
            <div className="w-1/2 mr-2 hidden lg:block">
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
                      duration: 0.3,
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
                          Hx token
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
                          className={`border-2 border-border rounded-lg w-1/2 h-12 text-token text-base font-semibold mr-1 hover:bg-green hover:text-dashbg duration-300 ${card && "bg-green !text-dashbg"
                            }`}
                          onClick={() => {
                            setIsCardPay(true);
                            setCard(true);
                            setCard2(false);
                            setIsBankPay(false);
                          }}
                        >
                          Card payment
                        </button>
                        <button
                          className={`border-2 border-border rounded-lg w-1/2 h-12 text-token text-base font-semibold ml-1 hover:bg-green hover:text-dashbg duration-300 ${card2 && "bg-green !text-dashbg"
                            }`}
                          onClick={() => {
                            // alert("No Bank added yet");
                            setCard(false);
                            setIsCardPay(false);
                            setCard2(true);
                            setIsBankPay(true);
                          }}
                        >
                          Bank Transfer
                        </button>
                      </div>
                    </div>

                    <div className="pt-5 pb-9">
                      <p className="text-payment text-base font-normal mb-2.5">
                        Amount
                      </p>
                      <div className="text-nuetral font-bold text-lg flex items-center justify-center py-6 rounded-lg bg-mainbg relative">
                        <sup className="w-2/5 text-right">N</sup>

                        <input
                          type="number"
                          placeholder="enter amount"
                          className="text-neutral font-bold text-4xl w-3/5 bg-transparent outline-none"
                          onChange={(e) => setAmount(e.target.value)}
                          thousandSeparator={true}
                          defaultValue="50000"
                        />
                      </div>
                      <span className="text-green text-xs">
                        {amount / 50000} Hx
                      </span>
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

                      {isCardPay ? (
                        <button
                          className="rounded-full w-44 h-12 text-dashbg bg-green"
                          onClick={buy}
                        >
                          Pay with Card
                        </button>
                      ) : isBankPay ? (
                        <button
                          className="rounded-full w-44 h-12 text-dashbg bg-green"
                          onClick={() => {
                            setBank(true);
                          }}
                        >
                          Continue
                        </button>
                      ) : (
                        <button
                          className="rounded-full w-44 h-12 text-dashbg bg-green"
                          onClick={() => {
                            alert("select Payment Method");
                          }}
                        >
                          Buy Token
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="bg-welcome px-4 py-5 lg:hidden flex justify-between mb-4">
              <button
                className="font-normal text-dashbg bg-darkButton rounded-full text-tiny flex items-center py-3 px-5"
                onClick={() => {
                  setBuyToken(true);
                }}
              >
                <img src={widthdraw} alt="withdraw token icon" />{" "}
                <span className="ml-2">Withdraw Token </span>
              </button>
              <button
                className="font-normal text-dashbg bg-green rounded-full text-tiny flex items-center py-3 px-9"
                onClick={() => {
                  setPurchaseToken(true);
                }}
              >
                <img src={send} alt="withdraw token icon" />{" "}
                <span className="ml-2">Buy Token </span>
              </button>
            </div>
            <div className="lg:w-1/2 lg:ml-2 font-inter">
              <ErrorBoundary>
                <RecentActivity />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center hidden lg:block">
        <h1 className="text-base font-semibold text-footer">
          © 2022 HxAfrica. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Token;
