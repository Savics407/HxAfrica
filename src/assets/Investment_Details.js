import { MdClose } from "react-icons/md";
import hdimage from "./images/invest_image.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import moment from "moment";
import { TbLoader } from "react-icons/tb";

function Details({ closeDetails, itemId }) {
  const [authPullOut, setAuthPullOut] = useState(false);
  const [isClick, setIsClick] = useState(false);
  // const [details, setDetails] = useState(true)
  const [posts, setPosts] = useState();
  const productID = itemId;
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
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
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
                  duration: 0.5,
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
                <img src={hdimage} alt="my-investment-image" />
                <div className="border-b border-strek pb-4 ">
                  <h1 className="bg-media p-2 rounded text-sm my-5 text-dashbg w-fit text-center font-semibold ">
                    {post.product.product_category}
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
                        <p>N53,000,000</p>
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
                        <p>{post.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right pt-5 pb-8">
                  <button
                    className="border rounded-full w-44 h-12 text-dashbg bg-red"
                    onClick={() => {
                      setAuthPullOut(true);
                      setIsClick(!isClick);
                      // alert("clicked on");
                    }}
                  >
                    Pull Out
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

        {authPullOut && <Warning closeWarning={setIsClick} />}
      </motion.div>
      {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}
    </>
  );
}

function Warning({ closeWarning }) {
  const [warning, setWarning] = useState(true);
  const [processing, setProcessing] = useState(false);
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
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
            Are you sure you want to pull out from the{" "}
            <span className="text-green">“Crowdfunding” </span> investments?
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
      {processing && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.5,
            },
          }}
          className="w-128 bg-white rounded-xl absolute border-green p-6 text-center"
        >
          <div>
            <h1 className="font-bold text-neutral text-3xl">Processing BVN</h1>
          </div>
          <div className="font-semibold text-base text-neutral my-8">
            <p>
              Please wait while we process your BVN. This will take few seconds.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="rounded-full w-28 h-12 text-neutral flex justify-around items-center">
              <TbLoader /> Processing
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

// function Processing(){
//     return(
//         <>
//             <motion.div
//                 initial = {{
//                     opacity: 0
//                 }}
//                 animate = {{
//                     opacity: 1,
//                     transition: {
//                         duration: 0.5
//                     }
//                 }}
//                 exit = {{
//                     opacity: 0,
//                     transition: {
//                         delay: 0.5
//                     }
//                 }}
//                 className="w-128 bg-white rounded-xl absolute border-green p-6 text-center">
//                 <div>
//                     <h1 className='font-bold text-neutral text-3xl'>Processing BVN</h1>
//                 </div>
//                 <div className='font-semibold text-base text-neutral my-8'>
//                     <p>Please wait while we process your BVN. This will take few seconds.</p>
//                 </div>
//                 <div className='flex justify-center'>
//                     <button className='rounded-full w-28 h-12 text-neutral flex justify-around items-center'><TbLoader /> Processing</button>
//                 </div>
//             </motion.div>
//         </>
//     )
// }

export default Details;
