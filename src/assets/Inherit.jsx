import { MdClose } from "react-icons/md";
import hdimage from "./images/invest_image.png";
import success from "./images/Success Icon.svg";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TbLoader } from "react-icons/tb";
import moment from "moment";
import * as CurrencyFormat from "react-currency-format";

function Inherit({ closeModal, itemId }) {
  const [authPullOut, setAuthPullOut] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const productID = itemId;
  // alert(productID);

  async function fetchData() {
    const token = localStorage.getItem("user-token");

    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investment/fetch_relisted_investment`,
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
      `${process.env.REACT_APP_MY_API_ENDPOINT}wallet/fetch_wallet`,
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

  useEffect(() => {
    wallet();
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const [reic, setReic] = useState();
  const [title, setTitle] = useState("");
  // alert(amount);
  async function inherit(id) {
    const payLoad = {
      pullout_id: id,
    };
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investment/inherit_investment`,
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

    // alert(payLoad.pullout_id);
    if (result?.status === "success") {
      setAuthPullOut(!authPullOut);
      setIsClick(!isClick);
    } else {
      if (result.status === "error") {
        // console.log(result.data);
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
          className={`bg-white rounded-xl border w-full lg:w-1/2 absolute top-28 lg:top-12 ${isClick ? "hidden" : "block"
            }`}
        >
          <div
            className="
            border-b border-stroke lg:px-10 px-5 py-5 text-sm lg:text-2xl
            font-semibold flex justify-between items-center text-modal"
          >
            <h1>Investment</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                closeModal(false);
              }}
            />
          </div>
          {loading ? (
            <div className="text-center py-40 bg-white rounded-xl w-full">
              <ScaleLoader color="#008E10" height={50} width={6} />
            </div>
          ) : (
            <>
              {posts
                ?.filter((post) => post.pullout.id === itemId)
                .map((post) => (
                  <div className="lg:px-10 px-5">
                    <img
                      src={
                        post.product.image_path === ""
                          ? hdimage
                          : post.product.image_path
                      }
                      alt="my-investment-image"
                      className="w-full lg:h-40 h-36 object-cover"
                    />
                    <div className="border-b border-strek pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center py-3 lg:py-auto">
                          <h1 className="bg-media p-2 rounded text-sm my-5 text-dashbg w-fit text-center font-semibold mr-2 hidden lg:block">
                            {post.product.title}
                          </h1>
                          <span className="text-endsin text-sm  font-medium bg-ongoing w-fit px-2.5 py-1 rounded">
                            Relisted Investment
                          </span>
                        </div>

                        <h1 className="text-darkgray text-tiny lg:text-sm ">
                          <span className="text-secondary">Created:</span>{" "}
                          {moment(post.updated_at).format("MMM DD, yyyy")}
                        </h1>
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-neutral  text-base lg:text-2xl  font-semibold capitalize">
                          {post.product.title}
                        </h1>
                        <h1 className="text-darkgray text-tiny lg:text-sm">
                          <span className="text-secondary">Time:</span>{" "}
                          {moment(post.updated_at).format("LT")}
                        </h1>
                      </div>
                    </div>

                    <div className=" bg-total p-4 mt-5 border rounded-2xl">
                      <div className="flex justify-between items-center py-3 border-b">
                        <h1 className="text-head text-xs lg:text-lg font-medium ">
                          Accumulated Amount:
                        </h1>
                        <h1 className="text-secondary text-xs lg:text-lg font-medium ">
                          N
                          <CurrencyFormat
                            value={
                              post.pullout === null
                                ? "not available"
                                : post.pullout.accumulated_amount
                            }
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h1>
                      </div>
                      <div className="flex justify-between items-ce4nter py-5">
                        {/* <h1 className="text-darkgray text-sm font-normal">
                                            <span className="text-secondary">Time Frame </span> -{" "}
                                            {post.due_date} Months
                    </h1> */}
                        <h1 className="text-darkgray text-tiny lg:text-sm  font-normal">
                          <span className="text-secondary">Expires in </span>
                          {moment(post.due_date).diff(new Date(), "Days")} Days
                        </h1>
                      </div>
                    </div>
                    <div className="pt-5 pb-9">
                      <p className="text-neutral text-xs lg:text-base font-normal mb-2.5 flex justify-between">
                        <span>Amount</span>
                        <span className="text-green text-tiny lg:text-sm font-medium">
                          Available Amount: N
                          <CurrencyFormat
                            value={balance}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>
                      </p>
                      <div className="text-nuetral font-bold text-base lg:text-lg flex items-center justify-center py-6 rounded-lg bg-mainbg relative">
                        <sup className="w-2/5 text-right">Hx</sup>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="text-neutral font-bold text-3xl lg:text-4xl w-1/2 bg-transparent text-navbar outline-none"
                          // value="50,000"
                          disabled
                          onChange={(e) => setReic(e.target.value)}
                          defaultValue={
                            post.pullout === null
                              ? 50000
                              : (
                                post.pullout.accumulated_amount / 50000
                              ).toFixed(3)
                          }
                        />
                      </div>
                    </div>

                    <div className="text-right pb-8">
                      <button
                        className="border rounded-full w-full lg:w-auto px-6 py-2 text-dashbg bg-green"
                        onClick={() => {
                          // const token = localStorage.getItem("user-wallet");
                          setReic(post.pullout.accumulated_amount / 50000);
                          if (reic === 0) {
                            alert("kindly input reic amount to invest");
                          } else if (reic === "") {
                            alert("kindly input reic amount to invest");
                          } else if (reic > token) {
                            toast.error(
                              `Your balance is too small for this investment, kindly make a deposit of ${reic - token
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
                            setTitle(post.product.title);
                            inherit(post.pullout.id);
                          }
                        }}
                      >
                        Inherit Investment
                      </button>
                    </div>
                  </div>
                ))}
            </>
          )}
        </motion.div>

        {authPullOut && (
          <Processing
            closeWarning={setIsClick}
            reic={reic}
            title={title}
            productID={productID}
          />
        )}
      </motion.div>
      {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}
    </>
  );
}

// the close modal

export function Processing({
  closeWarning,
  closeModal,
  reic,
  title,
  productID,
}) {
  const navigate = useNavigate();
  function redirect() {
    setTimeout(() => {
      setOk(false);
      setProcessing(true);
    }, 7000);
  }
  useEffect(() => {
    redirect();
  }, []);

  const [processing, setProcessing] = useState(false);
  const [ok, setOk] = useState(true);
  console.log(reic);
  const amount = reic * 50000;

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
        className={`lg:w-128 w-11/12 bg-white rounded-xl fixed top-32 border-green p-6 text-center ${!ok && "hidden"
          }`}
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
          className="lg:w-128 w-11/12 bg-white rounded-xl fixed top-32 border-green p-6 text-center"
        >
          <div className="flex flex-col items-center ">
            <img src={success} alt="success" className="w-28 mb-5" />
            <h1 className="lg:font-bold font-semibold text-neutral text-4xl">
              Success!
            </h1>
          </div>
          <div className="font-semibold lg:text-base text-sm text-neutral my-8">
            <p>
              You inherited an investment of{" "}
              <span className="text-green">{reic}</span> worth <br /> of{" "}
              <span className="text-green">Hx Token </span> to the {title}{" "}
              Project.
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

export default Inherit;
