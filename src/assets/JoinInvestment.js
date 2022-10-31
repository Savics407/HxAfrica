import { MdClose } from "react-icons/md";
import hdimage from "./images/invest_image.png";
import success from "./images/Success Icon.svg";
import { TbLoader } from "react-icons/tb";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { TbLoader } from 'react-icons/tb'
import users1 from "./images/Frame 14.png";
import users2 from "./images/Frame 18.png";
import users3 from "./images/Frame 19.png";
import users4 from "./images/Frame 20.png";
import ScaleLoader from "react-spinners/ScaleLoader";
import { toast } from "react-toastify";
import moment from "moment";
import * as CurrencyFormat from "react-currency-format";

function JoinInvestment({ closeModal, itemId }) {
  const [authPullOut, setAuthPullOut] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [posts, setPosts] = useState();
  const productID = itemId;
  // alert(productID);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const token = localStorage.getItem("user-token");

    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_new_investment",
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
    setPosts(result.data);
    if (result?.status === "success") {
      setLoading(false);
    }
  }
  const [balance, setBalance] = useState();
  const [token, setToken] = useState();

  async function wallet() {
    const token = localStorage.getItem("user-token");
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
    setBalance(result?.data.balance);
    setToken(result?.data.token);
  }

  const [percentage, setPercentage] = useState();
  async function fetchPercentage() {
    const token = localStorage.getItem("user-token");

    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/investment_percentage",
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
    setPercentage(result.data);
  }

  useEffect(() => {
    wallet();
    window.scrollTo(0, 0);
    fetchData();
    fetchPercentage();
  }, []);

  const [reic, setReic] = useState("");
  const [title, setTitle] = useState("");
  // alert(amount);

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
            closeModal(false);
          }}
        ></div>

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
          className={`bg-white rounded-xl border w-full lg:w-1/2 absolute top-28 lg:bottom-auto lg:top-12 ${
            isClick ? "hidden" : "block"
          }`}
        >
          <div className="border-b border-stroke lg:px-10 px-5 py-5 text-sm lg:text-2xl lg:font-semibold flex justify-between items-center text-modal">
            <h1>Investments</h1>

            <MdClose
              className="cursor-pointer hidden lg:block"
              onClick={() => {
                closeModal(false);
              }}
            />
            <button
              className="text-green text-sm lg:hidden"
              onClick={() => {
                closeModal(false);
              }}
            >
              {" "}
              Back
            </button>
          </div>
          {loading ? (
            <div className="text-center py-48 h-screen lg:h-auto">
              <ScaleLoader color="#008E10" height={50} width={6} />
            </div>
          ) : (
            <>
              {posts
                ?.filter((post) => post.id === itemId)
                .map((post) => (
                  <div className="lg:px-10 px-5 ">
                    <img
                      // src={hdimage}
                      src={post.image_path}
                      alt="my-investment-image"
                      className="w-full lg:h-40 h-36 object-cover"
                    />
                    <div className="border-b border-strek pb-4">
                      <div className="flex items-center justify-between">
                        <h1 className="bg-media p-2 rounded text-xs lg:text-sm my-4 lg:my-5 text-dashbg w-fit text-center font-semibold capitalize">
                          {post.category.product_category}
                        </h1>
                        <h1 className="text-darkgray text-tiny lg:text-sm">
                          <span className="text-secondary">Created:</span>{" "}
                          {moment(post.updated_at).format("MMM DD, yyyy")}
                        </h1>
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-neutral text-base lg:text-2xl font-semibold capitalize">
                          {post.title}
                        </h1>
                        <h1 className="text-darkgray text-tiny lg:text-sm">
                          <span className="text-secondary">Time:</span>{" "}
                          {moment(post.updated_at).format("LT")}
                        </h1>
                      </div>
                    </div>
                    <div className="py-10">
                      <div className="flex justify-between pb-2 items-center">
                        <h1 className="text-darkgray font-normal text-sm lg:text-lg">
                          Property worth
                        </h1>
                        <div className="flex items-center">
                          <img src={users1} alt="frame" className="z-0" />
                          <img
                            src={users2}
                            alt="frame"
                            className="-ml-3 z-10"
                          />
                          <img
                            src={users3}
                            alt="frame"
                            className="-ml-3 z-10"
                          />
                          <img
                            src={users4}
                            alt="frame"
                            className="-ml-3 z-10"
                          />
                          <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                            +24
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <h1 className="text-dark text-sm lg:text-2xl font-medium">
                          N
                          <CurrencyFormat
                            value={post.cost}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h1>
                        <h1 className="text-navbar lg:text-sm text-tiny font-normal">
                          {post.investments.length === 0
                            ? 0
                            : post.investments.length}{" "}
                          {post.investments.length === 1
                            ? "Investor"
                            : "Investors"}{" "}
                          currently invested
                        </h1>
                      </div>
                    </div>
                    <div className=" bg-total p-4 border rounded-2xl">
                      <div className="flex justify-between items-center">
                        <h1 className="text-head text-xs lg:text-lg font-medium ">
                          Total Invested:
                        </h1>
                        <h1 className="text-secondary text-xs lg:text-lg font-medium ">
                          N
                          <CurrencyFormat
                            value={post.threshold}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h1>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <h1 className="text-head text-xs lg:text-lg font-medium ">
                          Amount left:
                        </h1>
                        <h1 className="text-secondary text-xs lg:text-lg font-medium ">
                          N
                          <CurrencyFormat
                            value={post.cost - post.threshold}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h1>
                      </div>
                      <div className="flex justify-between items-center py-5">
                        <h1 className="text-darkgray text-tiny lg:text-sm font-normal">
                          <span className="text-secondary">Time Frame </span> -{" "}
                          {post.duration} Days
                        </h1>{" "}
                        <h1 className="text-darkgray text-tiny lg:text-sm font-normal">
                          <span className="text-secondary">Starts in </span>
                          {moment(post.expiry_date).diff(
                            new Date(),
                            "Days"
                          )}{" "}
                          Days
                        </h1>
                      </div>
                    </div>
                    <div className="pt-5 pb-9">
                      <p className="text-neutral text-xs lg:text-base font-normal mb-2.5 flex justify-between">
                        <span>Amount</span>{" "}
                        <span className="text-green text-tiny lg:text-sm font-medium">
                          Available Amount: N
                          <CurrencyFormat
                            value={balance}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>
                      </p>

                      <div className="text-nuetral font-bold text-lg flex items-center justify-center lg:py-6 py-4 rounded-lg bg-mainbg relative">
                        <sup className="w-2/5 text-right text-xs lg:text-base">
                          REIC
                        </sup>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="text-neutral font-bold text-2xl lg:text-4xl w-1/2 bg-transparent outline-0"
                          // value="50,000"
                          onChange={(e) => setReic(e.target.value)}
                          defaultValue=""
                          min="0"
                        />
                      </div>
                      <div className="text-center h-1">
                        {reic > 0 && (
                          <span className="text-green text-xs">
                            N
                            <CurrencyFormat
                              value={reic * 50000}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right lg:pt-5 pb-8">
                      <button
                        className="border rounded-full w-full lg:w-44 h-12 text-dashbg bg-green"
                        onClick={() => {
                          // const token = localStorage.getItem("user-wallet");
                          if (reic === "0") {
                            alert("kindly input reic amount to invest");
                          } else if (reic === "") {
                            alert("kindly input reic amount to invest");
                          } else if (reic > token) {
                            toast.error(
                              `Your balance is too small for this investment, kindly make a deposit of ${
                                reic - token
                              } reic or more to continue`,
                              {
                                position: "top-left",
                                autoClose: 3500,
                                hideProgressBar: true,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              }
                            );
                          } else {
                            setAuthPullOut(!authPullOut);
                            setIsClick(!isClick);
                            setTitle(post.title);
                          }
                        }}
                      >
                        Invest
                      </button>
                    </div>
                  </div>
                ))}
            </>
          )}
        </motion.div>

        {authPullOut && (
          <Warning
            closeWarning={setIsClick}
            reic={reic}
            title={title}
            productID={productID}
            closeModal={closeModal}
            percentage={percentage}
          />
        )}
      </motion.div>
    </>
  );
}

// the close modal

export function Warning({
  closeWarning,
  closeModal,
  reic,
  title,
  productID,
  percentage,
}) {
  function redirect() {
    setProcessing(false);
    setCompleted(true);
  }

  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [warning, setWarning] = useState(true);
  console.log(reic);
  const amount = reic * 50000;
  async function invest() {
    const payLoad = {
      product_id: productID,
      amount: amount,
    };
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/join_investment",
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
      setWarning(!warning);
      setProcessing(true);
      setTimeout(redirect, 7000);
    } else {
      if (result.status === "error") {
        console.log(result.data);
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
        className={`lg:w-128 w-11/12 m-auto bg-white rounded-xl fixed top-32 border-green p-6 text-center ${
          warning ? "block" : "hidden"
        } `}
      >
        <div>
          <h1 className="lg:font-bold font-semibold text-neutral text-3xl">
            Notice
          </h1>
        </div>
        <div className="font-semibold lg:text-base text-sm text-neutral my-8">
          <p>
            You are about to invest {reic} REIC to <br />{" "}
            <span className="text-green">{title} </span> <br /> There will be a{" "}
            <span className="text-green">%{percentage}</span> charge for this
            investment
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="border text-sm lg:text-base rounded-full w-36 h-10 lg:w-44 lg:h-12 text-neutral bg-dashbg"
            onClick={() => {
              closeWarning(!closeWarning);
              setWarning(!warning);
              closeModal(false);
              // window.location = "/investment";
            }}
          >
            Cancel
          </button>
          <button
            className="text-sm lg:text-base rounded-full w-36 h-10 lg:w-44 lg:h-12 text-dashbg bg-green"
            onClick={() => {
              // alert("Please wait while we process your investment");
              // alert(productID);

              invest();
            }}
          >
            Continue
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
          className="lg:w-128 w-11/12 m-auto bg-white rounded-xl fixed top-32 border-green p-6 text-center"
        >
          <div>
            <h1 className="lg:font-bold font-semibold text-neutral text-3xl">
              Processing
            </h1>
          </div>
          <div className="font-semibold lg:text-base text-sm text-neutral my-8">
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
          className="lg:w-128 w-11/12 m-auto bg-white rounded-xl fixed top-28 border-green p-6 text-center"
        >
          <div className="flex flex-col items-center ">
            <img src={success} alt="success" className="lg:w-28 w-20 mb-5" />
            <h1 className="lg:font-bold font-semibold text-neutral text-3xl lg:text-4xl">
              Success!
            </h1>
          </div>
          <div className="font-semibold text-xs lg:text-base text-neutral my-8">
            <p>
              You made an investment of{" "}
              <span className="text-green">
                N
                <CurrencyFormat
                  value={reic * 50000}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </span>{" "}
              worth of <br /> <span className="text-green">{reic} Reic </span>{" "}
              to the {title} Project.
            </p>
          </div>
          <div className=" text-center w-11/12 mb-2 m-auto">
            <button
              className="rounded-full w-full p-2 text-white bg-green border-green border flex justify-around items-center"
              onClick={() => navigate("/token")}
            >
              Done
            </button>
          </div>
          <div className=" text-center w-11/12 m-auto">
            <button
              className="rounded-full w-full p-2 text-green border-green border flex justify-around items-center"
              onClick={() => navigate("/investment/my-investment")}
            >
              Go to My Investments
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default JoinInvestment;
