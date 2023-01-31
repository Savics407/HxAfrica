import { MdClose } from "react-icons/md";
import reictoken from "./images/Reic_Token.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";
import done from "./images/Success Icon.svg";
import { MdOutlineContentCopy } from "react-icons/md";
// import { PaystackButton, usePaystackPayment } from "react-paystack";
import TokenSuccess from "./tokenSuccess";
// import { Toast } from "react-toastify/dist/components";

// import { TbLoader } from 'react-icons/tb'

function Details({ closeToken }) {
  const navigate = useNavigate();
  // const [authPullOut, setAuthPullOut] = useState(false)
  const [card, setCard] = useState(false);
  const [card2, setCard2] = useState(false);
  const [isCardPay, setIsCardPay] = useState(false);
  const [isBankPay, setIsBankPay] = useState(false);
  const [proceed, setProceed] = useState(false);
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
      `${process.env.REACT_APP_MY_API_ENDPOINT}paystack/initialize_paystack`,
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
    // try to load this url on the same page
    window.location.href = result?.data.data.authorization_url;
    return null;
  }

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.5,
          },
        }}
        className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay z-50 backdrop-blur-xs"
        // onClick={() => {
        //         closeDetails(false)
        //     }}
      >
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
          className={`bg-white rounded-xl border lg:w-1/2 w-11/12 ${
            proceed && "hidden"
          }`}
        >
          <div className="border-b border-stroke lg:uppercase px-5 lg:px-10 py-5 text-xl lg:text-2xl font-semibold flex justify-between items-center text-modal">
            <h1>Buy Token</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                closeToken(false);
              }}
            />
          </div>
          <div className="py-4 lg:px-14 px-5">
            <div className="pb-4 flex items-center ">
              <img src={reictoken} alt="my-investment-image" />
              <div className="ml-4 flex items-center">
                <span className="text-tokentext lg:text-2xl text-base font-extra-bold mr-2">
                  1
                </span>
                <span className="text-token uppercase lg:text-base text-xs font-semibold mr-2">
                  {" "}
                  reic token
                </span>
                <span className="text-tokentext text-base lg:text-2xl font-semibold">
                  {" "}
                  = N50,000
                </span>
              </div>
            </div>

            <div className="pt-5 pb-9">
              <p className="text-payment lg:text-base text-xs font-medium lg:font-normal mb-2.5">
                Payment Method
              </p>
              <div className="flex lg:flex-nowrap	 flex-wrap justify-between">
                <button
                  className={`border-2 border-border rounded-full lg:rounded-lg w-full lg:w-72 h-12 mb-3 lg:mb-0 lg:mr-5 text-token text-base font-semibold hover:bg-green hover:text-dashbg duration-300 ${
                    card && "!bg-dark border-dark !text-dashbg"
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
                  className={`border-2 border-border rounded-full lg:rounded-lg w-full lg:w-72 h-12 text-token text-base font-semibold hover:bg-green hover:text-dashbg duration-300 ${
                    card2 && "!bg-dark border-dark !text-dashbg"
                  }`}
                  onClick={() => {
                    // alert("NO Bank added yet");
                    setCard2(true);
                    setIsCardPay(false);
                    setCard(false);
                    setIsBankPay(true);
                  }}
                >
                  Bank Transfer
                </button>
              </div>
            </div>

            <div className="pt-5 pb-9">
              <p className="text-payment text-base lg:text-left text-center font-normal mb-2.5">
                Amount
              </p>
              <div className="text-nuetral font-bold text-lg flex items-center justify-center py-6 rounded-lg bg-mainbg relative">
                <sup className="lg:w-2/5 w-2/6 text-right">N</sup>
                <input
                  type="number"
                  placeholder="50,000"
                  className="text-neutral font-bold text-4xl lg:w-3/5 w-4/6 bg-transparent outline-none"
                  // value="50,000"
                  onChange={(e) => setAmount(e.target.value)}
                  defaultValue="50000"
                />
              </div>
              <span className="text-green text-xs">{amount / 50000} REIC</span>
            </div>
            <div className="text-right pt-5 pb-8 flex justify-between items-center">
              <div className=" flex items-center lg:flex hidden">
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
              {/* <button className='rounded-full w-44 h-12 text-dashbg bg-green'
                                onClick={() => {
                                    // setAuthPullOut(true)
                                    // closeToken  (false)
                                    console.log(amount * 100);
                                    // setIsClick(!isClick)
                                }}>Continue</button> */}
              {isCardPay ? (
                <button
                  className="rounded-full w-full lg:w-44 h-12 text-dashbg bg-green"
                  onClick={buy}
                >
                  Pay with Card
                </button>
              ) : isBankPay ? (
                <button
                  className="rounded-full w-full lg:w-44 h-12 text-dashbg bg-green"
                  onClick={() => setProceed(true)}
                >
                  Continue
                </button>
              ) : (
                //   {...componentProps}
                <span className="text-red h-22 w-full lg:w-auto text-center lg:text-base text-sm">
                  Select Payment Method
                </span>
              )}
            </div>
          </div>
        </motion.div>
        {/* {authPullOut && <Warning closeWarning={setIsClick} />} */}
        {/* <Success /> */}
        {proceed && <BankTransfer closeToken={closeToken} />}
      </motion.div>
      {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}
    </>
  );
}

export function BankTransfer({ closeToken, setBank, bank }) {
  const [kuda, setKuda] = useState();
  async function fetchKuda() {
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}kuda/fetch_mykuda_account`,
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

    setKuda(result?.data);
  }
  const [initialize, setInitialize] = useState();
  const [processing, setProccessing] = useState(false);
  async function initializeKuda() {
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}kuda/initialize_kuda`,
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

    setInitialize(result?.data);
    if (result?.status === "success") {
      checkPayment();
      // setProccessing(true);
      setTimeout(() => setProccessing(true), 2000);
    }
  }

  const [success, setSuccess] = useState(false);
  const [checking, setChecking] = useState();
  async function checkPayment() {
    const token = localStorage.getItem("user-token");
    const payLoad = {
      tracking_reference: initialize,
    };
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}kuda/check_webhook_payment`,
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    setChecking(result);
    if (result.status === "success") {
      setProccessing(false);
      setSuccess(true);
    } else {
      if (result?.status === "error") {
        setTimeout(checkPayment, 20000);
      }
    }
  }
  useEffect(() => {
    fetchKuda();
    initializeKuda();
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.5,
          },
        }}
        className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay z-50 backdrop-blur-xs"
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.5,
            },
          }}
          className={`lg:w-2/5 w-11/12 bg-white rounded-xl absolute border-green ${
            success && "hidden"
          }`}
        >
          <div className="border-b border-stroke capitalize lg:uppercase lg:px-10 px-5 py-5 text-xl lg:text-2xl font-semibold flex justify-between items-center text-modal">
            <h1>Bank Transfer</h1>

            {bank ? (
              <MdClose
                className="cursor-pointer"
                onClick={() => {
                  setBank(false);
                  // navigate("/dashoboar");
                  // alert("bank clicked");
                }}
              />
            ) : (
              <MdClose
                className="cursor-pointer"
                onClick={() => {
                  closeToken(false);
                  // navigate("/dashoboar");
                  // alert("token");
                }}
              />
            )}
          </div>

          <div className="text-sm text-center text-neutral py-5 lg:px-10 px-5">
            <p>
              Please make payment to your dedicated account details below.
              Kindly note that this account info is unique only to your account.
            </p>
          </div>
          <div className=" text-neutral m-auto lg:w-3/4 w-11/12 rounded-xl mb-5 py-3 pl-10 lg:px-5 shadow-lg flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row justify-between w-full mb-2">
              <h1 className="font-semibold mr-3">Account Name:</h1>
              <h1>{kuda?.name}</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full mb-2">
              <h1 className="font-semibold mr-3">Bank Name:</h1>
              <h1>{kuda?.bank}</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-between rounded ">
              <h1 className="font-semibold mr-3">Account Number:</h1>
              <div
                className="flex items-center text-sm bg-green text-white w-fit rounded-full py-1 px-6 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(kuda?.account_number);
                  toast.success(`copied ${kuda?.account_number} to clipboard`, {
                    position: "bottom-center",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              >
                <h1 className="mr-2 ">{kuda?.account_number}</h1>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>
          {processing && (
            <div className="text-center">
              <ScaleLoader color="#008E10" height={13} width={4} />
            </div>
          )}
          <div className="text-xs px-10 ">
            <p className="box !border-0 !text-xs">
              <b>Note:</b> This dialog box will redirect automatically once
              there's a successful payment on this bank account. Meanwhile, you
              can use the button below to manually verify the payment if the
              wait is long
            </p>
          </div>
          <div className="flex justify-center py-5 px-10">
            <button
              className="rounded-full w-full py-2 text-dashbg bg-green"
              onClick={() => {
                checkPayment();
                toast.warning(`${checking.message}`, {
                  position: "bottom-center",
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              Verify Payment
            </button>
          </div>
        </motion.div>
        {success && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.5,
              },
            }}
            className="w-128 bg-white rounded-xl fixed top-20 border-green p-6 text-center"
          >
            <div className="flex flex-col items-center ">
              <img src={done} alt="success" className="w-28 mb-5" />
              <h1 className="font-bold text-neutral text-4xl">Success!</h1>
            </div>
            <div className="font-semibold text-base text-neutral my-8">
              <p>Payment was Successfully received, wallet is being funded</p>
            </div>
            <div className=" text-center w-11/12 mb-2 m-auto">
              <button
                className="rounded-full w-full p-2 text-white bg-green flex justify-around items-center"
                onClick={() => {
                  bank ? setBank(false) : navigate("/token");
                }}
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Details;
