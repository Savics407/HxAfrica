import { MdClose } from "react-icons/md";
import hdimage from "./images/invest_image.png";
import { motion } from "framer-motion";
import { useState } from "react";
// import { TbLoader } from 'react-icons/tb'
import users1 from "./images/Frame 14.png";
import users2 from "./images/Frame 18.png";
import users3 from "./images/Frame 19.png";
import users4 from "./images/Frame 20.png";

function JoinInvestment({ closeModal }) {
  const [authPullOut, setAuthPullOut] = useState(false);
  const [isClick, setIsClick] = useState(0);
  // const [details, setDetails] = useState(true)

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
        className="flex items-center justify-center relative z-50"
        // onClick={() => {
        //         closeDetails(false)
        //     }}
      >
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay backdrop-blur-xs"></div>
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
          className={`bg-white rounded-xl border w-1/2 absolute top-12 ${
            isClick ? "hide" : "display"
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
                  REAL ESTATE
                </h1>
                <h1 className="text-darkgray text-sm">
                  <span className="text-secondary">Created:</span> 21 Jun, 2022
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-neutral text-2xl font-semibold">
                  Crowdfunding
                </h1>
                <h1 className="text-darkgray text-sm">
                  <span className="text-secondary">Time:</span> 2:39pm
                </h1>
              </div>
            </div>
            <div className="py-10">
              <div className="flex justify-between pb-2 items-center">
                <h1 className="text-darkgray font-normal text-lg">
                  Property worth
                </h1>
                <div className="flex items-center">
                  <img src={users1} alt="frame" className="z-0" />
                  <img src={users2} alt="frame" className="-ml-3 z-10" />
                  <img src={users3} alt="frame" className="-ml-3 z-10" />
                  <img src={users4} alt="frame" className="-ml-3 z-10" />
                  <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                    +24
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-dark text-2xl font-medium">N200000000</h1>
                <h1 className="text-navbar text-sm font-normal">
                  28 Investors currently actively invested
                </h1>
              </div>
            </div>
            <div className=" bg-total p-4 border rounded-2xl">
              <div className="flex justify-between items-center">
                <h1 className="text-head text-lg font-medium ">
                  Total Invested:
                </h1>
                <h1 className="text-secondary text-lg font-medium ">
                  N190,000,000
                </h1>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <h1 className="text-head text-lg font-medium ">Amount left:</h1>
                <h1 className="text-secondary text-lg font-medium ">
                  N10,000,000
                </h1>
              </div>
              <div className="flex justify-between items-center py-5">
                <h1 className="text-darkgray text-sm font-normal">
                  <span className="text-secondary">Time Frame </span> - 4 Months
                </h1>{" "}
                <h1 className="text-darkgray text-sm font-normal">
                  <span className="text-secondary">Expires in </span> - 18 Days
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
                  className="text-neutral font-bold text-4xl w-3/5 bg-transparent outline-0"
                  // value="50,000"
                  //   onChange={(e) => setAmount(e.target.value)}
                  defaultValue="0.00"
                />
              </div>
            </div>

            <div className="text-right pt-5 pb-8">
              <button
                className="border rounded-full w-44 h-12 text-dashbg bg-green"
                onClick={() => {
                  setAuthPullOut(true);
                  setIsClick(!isClick);
                }}
              >
                Invest
              </button>
            </div>
          </div>
        </motion.div>
        {authPullOut && <Warning closeWarning={setIsClick} />}
      </motion.div>
      {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}
    </>
  );
}

function Warning({ closeWarning }) {
  const [warning, setWarning] = useState(true);
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
          warning ? "display" : "hide"
        } `}
      >
        <div>
          <h1 className="font-bold text-neutral text-3xl">Warning!</h1>
        </div>
        <div className="font-semibold text-base text-neutral my-8">
          <p>
            Are you sure you want to pull our from the{" "}
            <span className="text-green">“Crowdfunding” </span> investments?
          </p>
        </div>
        <div className="flex justify-between">
          <button
            className="border rounded-full w-44 h-12 text-neutral bg-dashbg"
            onClick={() => {
              closeWarning(false);
              setWarning(!warning);
            }}
          >
            No, Cancel
          </button>
          <button className="rounded-full w-44 h-12 text-dashbg bg-red">
            Yes, Pull Out
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default JoinInvestment;
