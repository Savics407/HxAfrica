import { MdClose } from "react-icons/md";
import hdimage from "./images/invest_image.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import moment from "moment";
import { TbLoader } from "react-icons/tb";
import { toast } from "react-toastify";
import sad from "./images/sad.svg";
import { useNavigate } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";

function Details({ closeDetails, itemId }) {
  const [authPullOut, setAuthPullOut] = useState(false);
  const [isClick, setIsClick] = useState(false);
  // const [details, setDetails] = useState(true)

  const [posts, setPosts] = useState();
  // const productID = itemId;
  async function fetchData() {
    const token = localStorage.getItem("user-token");

    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_my_investment",
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

  const [title, setTitle] = useState("");
  const [productId, setProductId] = useState("");

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
        <div
          className="fixed top-0 right-0 bottom-0 left-0 cursor-pointer"
          onClick={() => {
            closeDetails(false);
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
              className={`bg-white rounded-xl border w-1/2 z-10 ${
                isClick ? "hidden" : "block"
              }`}
            >
              <div className="border-b border-stroke px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
                <h1>Investments</h1>
                <MdClose
                  className="cursor-pointer"
                  onClick={() => {
                    closeDetails(false);
                  }}
                />
              </div>
              <div className="px-10 ">
                <div>
                  <img
                    src={hdimage}
                    alt="my-investment-image"
                    className="w-full"
                  />
                </div>

                <div className="border-b border-strek pb-4 ">
                  <h1 className="bg-media p-2 rounded text-sm my-5 capitalize text-dashbg w-fit text-center font-semibold ">
                    {post.product.category.product_category}
                  </h1>
                  <h1 className="text-neutral text-2xl font-semibold">
                    {post.product.title}
                  </h1>
                </div>
                <div className="justify-between">
                  <div className="">
                    <div className="flex justify-between">
                      <div className="income2">
                        <h1>Expected Returns</h1>
                        <p>
                          N
                          <CurrencyFormat
                            value={
                              (post.amount * post.interest) / 100 + post.amount
                            }
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </p>
                      </div>
                      <div className="income2">
                        <h1>Expected Date</h1>
                        <p>{moment(post.due_date).format("MMM DD, yyyy")}</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="income2">
                        <h1>Amount in Reic Token</h1>
                        <p>{post.amount / 50000} REIC</p>
                      </div>
                      <div className="income2">
                        <h1>Invested Amount</h1>
                        <p>
                          N
                          <CurrencyFormat
                            value={post.amount}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right pt-5 pb-8">
                  {post.product.status_investment === "ongoing" ? (
                    <button
                      className="border rounded-full w-44 h-12 text-dashbg bg-red"
                      onClick={() => {
                        setAuthPullOut(true);
                        setIsClick(!isClick);
                        setTitle(post.product.title);
                        setProductId(itemId);
                        localStorage.setItem(
                          "product_title",
                          post.product.title
                        );
                      }}
                    >
                      Pull Out
                    </button>
                  ) : post.status === "completed" ? (
                    <button className="border rounded-full w-44 h-12 text-dashbg bg-green">
                      Completed
                    </button>
                  ) : (
                    <button className="border rounded-full w-44 h-12 text-dashbg bg-red">
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        {authPullOut && (
          <Warning
            closeWarning={setIsClick}
            title={title}
            productId={productId}
            closeDetails={closeDetails}
          />
        )}
      </motion.div>
      {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}
    </>
  );
}

function Warning({ closeWarning, title, productId, closeDetails }) {
  const [warning, setWarning] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [instant, setInstant] = useState(false);
  const [success, setSuccess] = useState(false);
  const product_id = productId;
  async function relist() {
    const payLoad = {
      id: productId,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/exchange/relist_market",
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
    // alert(productId);

    if (result?.status === "success") {
      setSuccess(true);
    } else {
      if (result.status === "error") {
        console.log(result.data);
        // alert(result.message);
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 500,
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
        className={`w-128 bg-white rounded-xl absolute border-green p-6 text-center ${
          !instant || !success ? "block" : "hidden"
        } `}
      >
        <div>
          <h1 className="font-bold text-neutral text-3xl">Pullout Option</h1>
        </div>
        <div className="font-semibold text-base text-neutral my-8">
          <p>
            You can choose to make instant pullout or relist your investment on
            the exchange market.
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="border rounded-full w-44 h-12 text-white bg-green"
            onClick={() => {
              // closeWarning(false);
              relist();
            }}
          >
            List in market
          </button>
          <button
            className="rounded-full w-44 h-12 text-dashbg bg-red"
            onClick={() => {
              setInstant(true);
            }}
          >
            Instant pullout
          </button>
        </div>
      </motion.div>
      {instant && (
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
          className={`w-128 bg-white rounded-xl absolute border-green p-6 text-center ${
            warning ? "block" : "hidden"
          } `}
        >
          <div>
            <h1 className="font-bold text-neutral text-3xl">Warning!</h1>
          </div>
          <div className="font-semibold text-base text-neutral my-8">
            <p>
              Are you sure you want to pull out from the <br />
              <span className="text-green">{title}</span> investments? <br />
              This action will incur charges of N25,000
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="border rounded-full w-44 h-12 text-neutral bg-dashbg"
              onClick={() => {
                closeWarning(false);
                // setWarning(!warning);
              }}
            >
              No, Cancel
            </button>
            <button
              className="rounded-full w-44 h-12 text-dashbg bg-red"
              onClick={() => {
                // closeWarning(false);
                setWarning(!warning);
                setProcessing(true);
              }}
            >
              Yes, Pull Out
            </button>
          </div>
        </motion.div>
      )}
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
          className={`w-128 bg-white rounded-xl absolute border-green p-6 text-center ${
            !instant ? "block" : "hidden"
          } `}
        >
          <div>
            <h1 className="font-bold text-neutral text-3xl">Successful</h1>
          </div>
          <div className="font-semibold text-base text-neutral my-8">
            <p>
              Your investment has been relisted on the market and you will be
              notified when a bid is made by investors.
            </p>
          </div>
          <div className="">
            <button
              className="border rounded-full w-full py-3 text-white bg-green"
              onClick={() => {
                closeDetails(false);
                // setWarning(!warning);
              }}
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}
      {processing && <Processing productId={product_id} />}
    </>
  );
}

function Processing({ productId }) {
  const [sad, setSad] = useState(false);
  const [bvn, setBvn] = useState(true);
  const navigate = useNavigate();
  async function pullout() {
    const payLoad = {
      investment_id: productId,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/pullout_investment",
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
    // alert(productId);

    if (result?.status === "success") {
      setSad(true);
      setBvn(false);
    } else {
      if (result.status === "error") {
        console.log(result.data);
        alert(result.message);
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.href = "/investments/my-investment";
      }
    }
  }

  useEffect(() => {
    pullout();
  }, []);
  // function redirect() {
  //   setTimeout((window.location = "/investment"), 10000);
  // }

  // useEffect(() => {
  //   redirect();
  // });
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
        className={`w-128 bg-white rounded-xl absolute border-green p-6 text-center ${
          bvn ? "block" : "hidden"
        }`}
      >
        <div>
          <h1 className="font-bold text-neutral text-3xl">Processing</h1>
        </div>
        <div className="font-semibold text-base text-neutral my-8">
          <p>
            Please wait while we process your request. This will take few
            seconds.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full w-28 h-12 text-neutral flex justify-around items-center">
            <TbLoader className="animate-spin duration-1000" /> Processing
          </button>
        </div>
      </motion.div>
      {sad && <Sad />}
    </>
  );
}

function Sad() {
  const product_title = localStorage.getItem("product_title");
  useEffect(() => {
    setTimeout((window.location = "/token"), 10000);
  }, []);
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
        className="w-2/4 bg-white rounded-xl absolute border-green p-20 flex justify-center"
      >
        <div className="flex justify-center flex-col px-3 w-1/2">
          <div className="flex justify-center mb-4">
            <img src={sad} alt="sad to see you go" />
          </div>
          <h1 className="font-medium text-neutral text-center text-2xl">
            sad to see you go{" "}
          </h1>
          <div className="font-semibold text-xs text-neutral my-4 text-center">
            <p>
              You have just pulled out from the{" "}
              <span className="text-green">{product_title}</span> investments.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default Details;
