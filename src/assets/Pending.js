import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import moment from "moment";
import crowd from "./images/crowdfund.png";
import { toast } from "react-toastify";
import * as CurrencyFormat from "react-currency-format";
import success from "./images/Success Icon.svg";
import { TbLoader } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Pending() {
  const [available, setAvailable] = useState(true);
  const [authCancel, setAuthCancel] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [proID, setProID] = useState(false);
  const [posts, setPosts] = useState();
  const [title, setTitle] = useState();
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
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  return (
    <div>
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
            {available ? (
              <>
                <div>
                  <table className=" w-full table-auto">
                    <thead className="">
                      <tr className="text-left bg-dashbg">
                        <th className="py-2 text-head font-semibold text-sm pl-5">
                          Investments
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Duration
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Property Worth
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Amount Invested
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Interest Gained
                        </th>
                        <th className="py-2 pr-7 text-head font-semibold text-sm">
                          Ends in
                        </th>
                        <th className="py-2 text-head font-semibold text-sm">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tr className="">
                      <td className="p-3"></td>
                    </tr>
                    {posts?.map((pending) => (
                      <tr className="border-b">
                        <td className=" py-8 text-footer font-bold text-sm flex ">
                          <img
                            src={crowd}
                            alt="crowdfunding"
                            className="h-10"
                          />
                          <div className="ml-2 ">
                            <h1 className="mb-1">{pending.product.title}</h1>
                            <h2 className="font-medium font-xs">
                              {pending.product.category.product_category}
                            </h2>
                          </div>
                        </td>
                        <td className=" py-8 text-footer font-bold text-sm">
                          <h1>{pending.duration} Days</h1>
                        </td>
                        <td className="py-8 text-footer font-bold text-sm">
                          <h1>
                            N
                            <CurrencyFormat
                              value={pending.product.cost}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </h1>
                        </td>
                        <td className="py-8 text-footer font-bold text-sm">
                          <h1>
                            N
                            <CurrencyFormat
                              value={pending.amount}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </h1>
                        </td>
                        <td className=" py-8 text-footer font-bold text-sm">
                          <h1>
                            N
                            <CurrencyFormat
                              value={400000}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </h1>
                          <h2 className="font-medium font-xs">
                            {pending.product.interest_rate}% Interest
                          </h2>
                        </td>
                        <td className=" py-8 text-footer font-bold text-sm">
                          <h1>
                            {moment(pending.due_date).diff(new Date(), "Days")}{" "}
                            Days
                          </h1>
                        </td>
                        <td className=" py-8">
                          <button
                            className="bg-pending text-xs text-red w-28 h-9 rounded-full font-medium"
                            onClick={() => {
                              setProID(pending.id);
                              setAuthCancel(true);
                              setTitle(pending.product.title);
                            }}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img src={box} alt="No relisted investment" />
                </div>
                <h1 className="font-semibold text-xs text-statustext text-center -ml-10">
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
          productID={proID}
          title={title}
          fetch={fetchData}
        />
      )}
    </div>
  );
}

export function Warning({ closeWarning, productID, title, fetch }) {
  function redirect() {
    setProcessing(false);
    setCompleted(true);
  }

  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [warning, setWarning] = useState(true);
  async function Cancel() {
    const payLoad = {
      investment_id: productID,
    };
    // alert(payLoad.investment_id);
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
          className={`w-128 bg-white rounded-xl fixed top-48 border-green p-6 text-center ${
            warning ? "block" : "hidden"
          } `}
        >
          <div>
            <h1 className="font-bold text-neutral text-3xl">Warning!</h1>
          </div>
          <div className="font-semibold text-base text-neutral my-8">
            <p>
              You are about to cancel your investment on <br />{" "}
              <span className="text-green">{title} </span>
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="border rounded-full w-44 h-12 text-neutral bg-dashbg"
              onClick={() => {
                closeWarning(!closeWarning);
                fetch();
              }}
            >
              Back
            </button>
            <button
              className="rounded-full w-44 h-12 text-dashbg bg-red"
              onClick={() => {
                Cancel();
              }}
            >
              Yes Proceed
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
            className="w-128 bg-white rounded-xl fixed top-20 border-green p-6 text-center"
          >
            <div>
              <h1 className="font-bold text-neutral text-3xl">Processing</h1>
            </div>
            <div className="font-semibold text-base text-neutral my-8">
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
                  //   fetch();
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
