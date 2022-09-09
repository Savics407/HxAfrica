import { MdClose } from "react-icons/md";
import hdimage from "./images/invest_image.png";
import success from "./images/Success Icon.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { TbLoader } from 'react-icons/tb'
import users1 from "./images/Frame 14.png";
import users2 from "./images/Frame 18.png";
import users3 from "./images/Frame 19.png";
import users4 from "./images/Frame 20.png";
import { toast } from "react-toastify";
import { TbLoader } from "react-icons/tb";
import moment from "moment";
import * as CurrencyFormat from "react-currency-format";

function JoinOngoing({ closeModal, itemId, productDetails }) {
  const [authPullOut, setAuthPullOut] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const userID = localStorage.getItem("user-id");

  const [posts, setPosts] = useState();
  const productID = itemId;
  // alert(productID);

  async function fetchData() {
    const token = localStorage.getItem("user-token");

    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_ongoing_investment",
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
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  const [reic, setReic] = useState(0);
  const [title, setTitle] = useState("");
  const [proID, setProID] = useState();
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
        {posts
          ?.filter((post) => post.id === itemId)
          .map((post) => (
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
              className={`bg-white rounded-xl border w-1/2 absolute top-12 ${
                isClick ? "hidden" : "block"
              }`}
            >
              <div className="border-b border-stroke px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
                <h1>Investments</h1>

                <MdClose
                  className="cursor-pointer"
                  onClick={() => {
                    closeModal(false);
                  }}
                />
              </div>

              <div className="px-10 ">
                <img src={hdimage} alt="my-investment-image" />
                <div className="border-b border-strek pb-4">
                  <div className="flex items-center justify-between">
                    <h1 className="bg-media p-2 rounded text-sm my-5 text-dashbg w-fit text-center font-semibold ">
                      {post.product.category.product_category}
                    </h1>
                    <h1 className="text-darkgray text-sm">
                      <span className="text-secondary">Created:</span>{" "}
                      {moment(post.product.created_at).format("MMM DD, yyyy")}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-neutral text-2xl font-semibold capitalize">
                      {post.product.title}
                    </h1>
                    <h1 className="text-darkgray text-sm">
                      <span className="text-secondary">Time:</span>{" "}
                      {moment(post.product.created_at).format("LT")}
                    </h1>
                  </div>
                </div>
                <div className="py-10">
                  <div className="flex justify-between pb-2 items-center">
                    <h1 className="text-darkgray font-normal text-lg">
                      Property worth
                    </h1>
                    {/* <div className="flex items-center">
                      <img src={users1} alt="frame" className="z-0" />
                      <img src={users2} alt="frame" className="-ml-3 z-10" />
                      <img src={users3} alt="frame" className="-ml-3 z-10" />
                      <img src={users4} alt="frame" className="-ml-3 z-10" />
                      <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                        +24
                      </div>
                </div> */}
                  </div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-dark text-2xl font-medium">
                      N
                      <CurrencyFormat
                        value={post.product.cost}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h1>
                    {/* <h1 className="text-navbar text-sm font-normal">
                      {post.investments.length === 0
                        ? 0
                        : post.investments.length}{" "}
                      {post.investments.length === 1 ? "Investor" : "Investors"}{" "}
                      currently actively invested
                    </h1> */}
                  </div>
                </div>
                <div className=" bg-total p-4 border rounded-2xl">
                  <div className="flex justify-between items-center">
                    <h1 className="text-head text-lg font-medium ">
                      Total Invested:
                    </h1>
                    <h1 className="text-secondary text-lg font-medium ">
                      N
                      <CurrencyFormat
                        value={post.product.threshold}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h1>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <h1 className="text-head text-lg font-medium ">
                      Amount left:
                    </h1>
                    <h1 className="text-secondary text-lg font-medium ">
                      N
                      <CurrencyFormat
                        value={post.product.cost - post.product.threshold}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </h1>
                  </div>
                  <div className="flex justify-between items-ce4nter py-5">
                    <h1 className="text-darkgray text-sm font-normal">
                      <span className="text-secondary">Time Frame </span> -{" "}
                      {post.duration} Days
                    </h1>{" "}
                    <h1 className="text-darkgray text-sm font-normal">
                      <span className="text-secondary">Expires in </span> -{" "}
                      {moment(post.due_date).diff(new Date(), "Days")} Days
                    </h1>
                  </div>
                </div>
                <div className="pt-5 pb-9">
                  <p className="text-neutral text-base font-normal mb-2.5">
                    Amount
                  </p>
                  <div className="text-nuetral font-bold text-lg flex items-center justify-center py-6 rounded-lg bg-mainbg relative">
                    <sup className="w-2/5 text-right">REIC</sup>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="text-neutral font-bold text-4xl w-1/2 bg-transparent outline-0"
                      // value="50,000"
                      onChange={(e) => setReic(e.target.value)}
                      defaultValue=""
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

                <div className="text-right pt-5 pb-8">
                  <button
                    className={`border rounded-full w-44 h-12 text-dashbg bg-red mr-5 ${
                      post.user_id == userID ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => {
                      if (post.user_id == userID) {
                        productDetails(post.id);
                        closeModal(false);
                      }
                    }}
                  >
                    Pullout
                  </button>
                  <button
                    className="border rounded-full w-44 h-12 text-dashbg bg-green"
                    onClick={() => {
                      const token = localStorage.getItem("user-wallet");
                      if (reic === 0) {
                        alert("kindly input reic amount to invest");
                      } else if (reic === "") {
                        alert("kindly input reic amount to invest");
                      } else if (reic > token) {
                        toast.error(
                          `Your balance is too small for this investment, kindly make a deposit of ${
                            reic - token
                          } reic to continue`,
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
                        setTitle(post.product.title);
                        setProID(post.product_id);
                      }
                    }}
                  >
                    Invest
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

        {authPullOut && (
          <Warning
            closeWarning={setIsClick}
            reic={reic}
            title={title}
            productID={proID}
          />
        )}
      </motion.div>
      {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}
    </>
  );
}

// the close modal

export function Warning({ closeWarning, closeModal, reic, title, productID }) {
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
      "https://reic.api.simpoo.biz/api/investment/join_ongoing_investment",
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
        className={`w-128 bg-white rounded-xl fixed top-20 border-green p-6 text-center ${
          warning ? "block" : "hidden"
        } `}
      >
        <div>
          <h1 className="font-bold text-neutral text-3xl">Notice</h1>
        </div>
        <div className="font-semibold text-base text-neutral my-8">
          <p>
            You are about to invest {reic} REIC to <br />{" "}
            <span className="text-green">{title} </span>
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="border rounded-full w-44 h-12 text-neutral bg-dashbg"
            onClick={() => {
              closeWarning(!closeWarning);
              setWarning(!warning);
              // closeModal(false);
              window.location = "/investment";
            }}
          >
            Cancel
          </button>
          <button
            className="rounded-full w-44 h-12 text-dashbg bg-green"
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
              worth <br /> of <span className="text-green">Reic </span> to the{" "}
              {title} Project.
            </p>
          </div>
          <div className=" text-center w-11/12 mb-2 m-auto">
            <button
              className="rounded-full w-full p-2 text-white bg-green flex justify-around items-center"
              onClick={() => navigate("/token")}
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
    </>
  );
}

export default JoinOngoing;
