import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import land from "./images/rawland2.png";
import moment from "moment";
import dropCoin from "./images/dropcoin.svg";
import crowd from "./images/crowdfund.png";
import { toast } from "react-toastify";
import pendingCoin from "./images/timer-pause.svg";
import * as CurrencyFormat from "react-currency-format";
import success from "./images/Success Icon.svg";
import { TbLoader } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScaleLoader from "react-spinners/ScaleLoader";
import TopUp from "./TopUp";
import InvestHeader from "./InvestHeader";

function Pending() {
  const [available, setAvailable] = useState(true);
  const [authCancel, setAuthCancel] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [proID, setProID] = useState();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_pending_investment",
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

    if (result?.status === "success") {
      setLoading(false);
    }
  }
  const [percentage, setPercentage] = useState();

  async function cancelPercentage() {
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/cancel_percentage",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result?.status);
    setPercentage(result?.data);
  }

  useEffect(() => {
    // activities();
    cancelPercentage();

    fetchData();
  }, []);
  const [itemId, setItemID] = useState("");
  const [topUp, setTopUp] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [warning, setWarning] = useState(true);
  function redirect() {
    setProcessing(false);
    setCompleted(true);
  }
  //   function productDetails(id) {
  //     setItemID(id);
  //     // setOpenDetails(true);
  //   }
  function joinNow(id) {
    setItemID(id);
    setTopUp(true);
  }
  async function Cancel() {
    const payLoad = {
      investment_id: proID,
    };
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/cancel_investment",
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
    console.log(result);
    if (result?.status === "success") {
      setProcessing(true);
      setWarning(!warning);
      setTimeout(redirect, 7000);
    } else {
      if (result?.status === "error") {
        // alert(result.message);
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
  return (
    <div className="font-family">
      {topUp && (
        <TopUp
          className="z-10"
          closeModal={setTopUp}
          itemId={itemId}
          setItemID={setItemID}
          setTile={setTitle}
          setAuthCancel={setAuthCancel}
        />
      )}
      <Header />
      <div className="lg:w-10/12 m-auto lg:mt-20 bg-dashbg rounded-lg lg:py-8 lg:px-4">
        <div className="bg-white lg:h-auto lg:p-10 w-full rounded-lg">
          <InvestHeader />
          <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between items-center">
            <h1 className="">Investments</h1>
            <button
              className="text-green text-sm font-inter"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </div>
          <div className=" p-5 lg:hidden">
            <div className="flex items-center ">
              <img src={pendingCoin} alt="coins" className="mr-2" />
              <h1 className="text-sm text-title font-medium">
                Pending Investments
              </h1>
            </div>
          </div>
          <InvestTabs />
          <div className="mb-8 pb-20 lg:pb-0 px-5 lg:px-0 bg-white investlists">
            {available ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div className="flex flex-wrap mb-4">
                    {posts?.map((pending) => (
                      <div key={pending.id} className="real-estate ">
                        <div className="mr-2  h-full w-1/3">
                          <img
                            // src={land}
                            src={
                              pending.product.image_path === ""
                                ? land
                                : pending.product.image_path
                            }
                            alt="rawland"
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        <div className="w-2/3">
                          <div className="mb-2 flex justify-between">
                            <div className="w-4/5">
                              {" "}
                              <abbr
                                title={pending.product.title}
                                className="no-underline"
                              >
                                <h1
                                  data-tip={pending.product.title}
                                  className="!mb-0 truncate"
                                >
                                  {pending.product.title}
                                </h1>
                              </abbr>
                              <h2 className="text-green text-xs">
                                {pending.product.interest_rate}% Interest Rate
                              </h2>
                            </div>
                          </div>
                          <div className="text-tiny text-grayy mb-3">
                            <p className="!mb-0">
                              Time Frame:{" "}
                              <span className="text-darkgray">
                                {pending.duration} Days
                              </span>
                            </p>
                            <p className="">
                              Expires -{" "}
                              <span className="text-darkgray">
                                {moment(pending.due_date).format(
                                  "MMM DD, yyyy"
                                )}
                              </span>
                            </p>
                          </div>
                          <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                            <p className="">
                              Property Worth{" "}
                              <span className="text-darkgray text-xs font-medium ml-2">
                                N
                                <CurrencyFormat
                                  value={pending.product.cost}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>
                            </p>
                          </div>
                          {pending.product.cost > pending.product.threshold ? (
                            <div>
                              <button
                                className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl"
                                onClick={() => {
                                  // Cancel(pending.id);
                                  setProID(pending.id);
                                  joinNow(pending.id);
                                }}
                              >
                                Top up
                              </button>
                            </div>
                          ) : (
                            <div>
                              <button
                                className="bg-white text-red text-tiny font-normal w-24 h-7 rounded-2xl"
                                onClick={() => {
                                  setTitle(pending.product.title);
                                  setAuthCancel(true);
                                  // Cancel(pending.id);
                                  setProID(pending.id);
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={box}
                    alt="No relisted investment"
                    className="-mr-10"
                  />
                </div>
                <h1 className="font-semibold text-xs text-statustext text-center">
                  Oh oh! You have no Pending
                  <br />
                  investments at this time
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      {authCancel && (
        <Warning
          closeWarning={setAuthCancel}
          proID={proID}
          title={title}
          fetch={fetchData}
          Cancel={Cancel}
          warning={warning}
          processing={processing}
          completed={completed}
          percentage={percentage}
        />
      )}
    </div>
  );
}

export function Warning({
  closeWarning,
  proID,
  title,
  fetch,
  Cancel,
  warning,
  processing,
  completed,
  percentage,
}) {
  const navigate = useNavigate();

  //   const Cancel = () => {
  //     const payLoad = {
  //       investment_id: productID,
  //     };
  //     const token = localStorage.getItem("user-token");
  //     fetch("https://reic.api.simpoo.biz/api/investment/cancel_investment", {
  //       method: "POST",
  //       body: JSON.stringify(payLoad),
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Accept: "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));
  //   };
  // alert(productID);
  async function cancel() {
    const payLoad = {
      investment_id: proID,
    };
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/cancel_investment",
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
    console.log(result);
    // if (result?.status === "success") {
    //   setProcessing(true);
    //   setWarning(!warning);
    //   setTimeout(redirect, 7000);
    // } else {
    //   if (result?.status === "error") {
    //     // alert(result.message);
    //     toast.error(`${result.message}`, {
    //       position: "top-left",
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //       closeOnClick: false,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   }
    // }
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
        className="flex items-center justify-center relative z-50"
        // onClick={() => {
        //         closeDetails(false)
        //     }}
      >
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-overlay backdrop-blur-xs"
          onClick={() => {
            closeWarning(false);
          }}
        ></div>
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
          className={`lg:w-128 w-11/12 bg-white rounded-xl fixed top-48 border-green p-6 text-center ${
            warning ? "block" : "hidden"
          } `}
        >
          <div>
            <h1 className="lg:font-bold font-semibold text-neutral text-3xl">
              Warning!
            </h1>
          </div>
          <div className="font-semibold text-sm lg:text-base text-neutral my-8">
            <p>
              You are about to cancel your investment <br />
              on <span className="text-green">{title} </span> This action will
              incur
              <span className="text-green">%{percentage}</span> charges of your
              Investment
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="border rounded-full text-sm lg:text-base w-36 h-10 lg:w-44 lg:h-12 text-neutral bg-dashbg"
              onClick={() => {
                closeWarning(!closeWarning);
                fetch();
              }}
            >
              No, Return
            </button>
            <button
              className="rounded-full text-sm lg:text-base w-36 h-10 lg:w-44 lg:h-12 text-dashbg bg-red"
              onClick={() => {
                Cancel();
              }}
            >
              Yes, Cancel
            </button>
          </div>
        </motion.div>

        {processing && (
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
            className="lg:w-128 w-11/12 bg-white rounded-xl fixed top-48 border-green p-6 text-center"
          >
            <div>
              <h1 className="lg:font-bold font-semibold text-neutral text-3xl">
                Processing
              </h1>
            </div>
            <div className="font-semibold ;g:text-base text-sm text-neutral my-8">
              <p>
                Please wait while we process your Investment. <br />
                This will take few seconds.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="rounded-full w-28 h-12 text-neutral flex justify-around items-center">
                <TbLoader className="animate-spin" /> Processing
              </button>
            </div>
          </motion.div>
        )}

        {completed && (
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
              <img src={success} alt="success" className="w-28 mb-5" />
              <h1 className="font-bold text-neutral text-4xl">Success!</h1>
            </div>
            <div className="font-semibold text-base text-neutral my-8">
              <p>Your investment have been canceled</p>
            </div>
            <div className=" text-center w-11/12 mb-2 m-auto">
              <button
                className="rounded-full w-full p-2 text-white bg-green flex justify-around items-center"
                onClick={() => {
                  closeWarning(!closeWarning);
                  fetch();
                }}
              >
                Done
              </button>
            </div>
            <div className=" text-center w-11/12 m-auto">
              <button
                className="rounded-full w-full p-2 text-green border-green border flex justify-around items-center"
                onClick={() => navigate("/investments/my-investment")}
              >
                Go to My Investments
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Pending;
