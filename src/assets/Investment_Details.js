import { MdClose } from "react-icons/md";
import hdimage from "./images/invest_image.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import moment from "moment";
import { TbLoader } from "react-icons/tb";
import { toast } from "react-toastify";
import sad from "./images/sad.svg";
import { useNavigate, Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CurrencyFormat from "react-currency-format";

function Details({ closeDetails, itemId, ongoing }) {
  const [authPullOut, setAuthPullOut] = useState(false);
  const [isClick, setIsClick] = useState(false);
  // const [details, setDetails] = useState(true)
  const [loading, setLoading] = useState(true);

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
    if (result?.status === "success") {
      setLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
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
          className={`bg-white rounded-xl border w-11/12 lg:w-1/2 z-10 ${
            isClick ? "hidden" : "block"
          }`}
        >
          <div className="border-b border-stroke lg:px-10 px-5 py-5 lg:text-2xl text-xs font-semibold flex justify-between items-center text-modal">
            <h1>Investments</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                closeDetails(false);
              }}
            />
          </div>
          {loading ? (
            <div className="text-center lg:py-48 py-40 h-auto">
              <ScaleLoader color="#008E10" height={40} width={5} />
            </div>
          ) : (
            <>
              {posts
                ?.filter((post) => post.id === itemId)
                .map((post) => (
                  <div className="px-5 lg:px-10 ">
                    <div>
                      <img
                        src={
                          post.product.image_path === ""
                            ? hdimage
                            : post.product.image_path
                        }
                        alt="my-investment-image"
                        className="w-full lg:h-40 h-36 object-cover"
                      />
                    </div>

                    <div className="border-b border-strek pb-4 ">
                      <h1 className="bg-media lg:p-2 px-2 py-1 rounded text-xxm lg:text-sm my-5 uppercase  text-dashbg w-fit text-center font-semibold ">
                        {post.product.category.product_category}
                      </h1>
                      <h1 className="text-neutral text-sm lg:text-2xl font-semibold">
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
                                  (post.amount * post.interest) / 100 +
                                  post.amount
                                }
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </p>
                          </div>
                          <div className="income2">
                            <h1>Expected Date</h1>
                            <p>
                              {moment(post.due_date).format("MMM DD, yyyy")}
                            </p>
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
                          className="border rounded-full lg:w-44 lg:h-12 w-24 h-9 text-xs lg:text-xl text-dashbg bg-red"
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
                        <button className="border rounded-full px-6 py-1 text-xs lg:text-xl text-dashbg bg-green">
                          Completed
                        </button>
                      ) : (
                        <Link to="/investment/pending">
                          <button className="border rounded-full lg:w-44 lg:h-12 w-24 h-9 text-xs lg:text-xl text-dashbg bg-red">
                            Cancel
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
            </>
          )}
        </motion.div>

        {authPullOut && (
          <Warning
            closeWarning={setIsClick}
            title={title}
            productId={productId}
            closeDetails={closeDetails}
            ongoing={ongoing}
          />
        )}
      </motion.div>
      {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}
    </>
  );
}

function Warning({ closeWarning, title, productId, closeDetails, ongoing }) {
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
    if (result.message === "Server Error") {
      toast.error(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const [per, setPer] = useState();
  async function percentage() {
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/pullout_percentage",
      {
        method: "POST",
        // body: JSON.stringify(payLoad),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    setPer(result?.data);
  }

  useEffect(() => {
    percentage();
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
        className={`lg:w-128 w-11/12 bg-white rounded-xl absolute border-green p-6 text-center ${
          !instant || !success ? "block" : "hidden"
        } `}
      >
        <div>
          <h1 className="lg:font-bold text-neutral text-2xl lg:text-3xl">
            Pullout Option
          </h1>
        </div>
        <div className="lg:font-semibold lg:text-base text-xs text-neutral my-8">
          <p>
            You can choose to make instant pullout or relist your investment on
            the exchange market.
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="border rounded-full lg:w-44 lg:h-12 w-40 h-12 text-sm lg:text-base text-white bg-green"
            onClick={() => {
              // closeWarning(false);
              relist();
            }}
          >
            List in market
          </button>
          <button
            className="rounded-full lg:w-44 lg:h-12 w-40 h-12 text-dashbg bg-red text-sm lg:text-base"
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
          className={`lg:w-128 w-11/12 bg-white rounded-xl absolute border-green p-6 text-center ${
            warning ? "block" : "hidden"
          } `}
        >
          <div>
            <h1 className="lg:font-bold font-medium text-neutral text-2xl lg:text-3xl">
              Warning!
            </h1>
          </div>
          <div className="font-semibold lg:text-base text-xs text-neutral my-8">
            <p>
              Are you sure you want to pull out from <br /> the
              <span className="text-green"> {title}</span> investment? <br />
              This action will incur <span className="text-green">
                %{per}
              </span>{" "}
              charges of your Investment
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="border rounded-full lg:w-44 h-12 w-40 text-neutral bg-dashbg text-sm lg:text-base"
              onClick={() => {
                closeDetails(false);
                // setWarning(!warning);
              }}
            >
              No, Cancel
            </button>
            <button
              className="rounded-full w-40 lg:w-44 h-12 text-dashbg bg-red text-sm lg:text-base"
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
          className={`w-11/12 lg:w-128 bg-white rounded-xl absolute border-green p-6 text-center ${
            !instant ? "block" : "hidden"
          } `}
        >
          <div>
            <h1 className="font-bold text-neutral text-3xl">Successful</h1>
          </div>
          <div className="font-semibold text-sm lg:text-base text-neutral my-8">
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
                ongoing();
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
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/investment/my-investment");
      }
    }
    if (result.message === "Server Error") {
      toast.error(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    setTimeout(pullout, 7000);
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
        className={`w-11/12 lg:w-128 bg-white rounded-xl absolute border-green p-6 text-center ${
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
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(navigate("/token"), 10000);
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
        className="lg:w-2/4 w-full bg-white rounded-xl absolute border-green lg:p-20 p-10 flex justify-center"
      >
        <div className="flex justify-center flex-col px-3 lg:w-1/2 w-11/12">
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
