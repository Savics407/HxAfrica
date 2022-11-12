import React, { useState } from "react";
import logo from "./images/logo.svg";
import reic from "./images/reic_with_tagline 1.svg";
import reicMoc from "./images/mockup.svg";
import mobileDash from "./images/mobileDash.svg";
import mobileMoc from "./images/mobileMoc.svg";
import mocMobile from "./images/mocMobile.svg";
import { motion } from "framer-motion";

function WaitingList() {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const [Subscribe, setSubscribe] = useState(false);
  async function joinWaitList(e) {
    setSubscribe(true);
    e.preventDefault();
    const payLoad = {
      email: email,
    };
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/join_waitlist",
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const result = await response.json();
    console.log(result.data);
    if (result?.status === "success") {
      setSuccess(true);
      setSubscribe(false);
    }
  }

  return (
    <div className="font-family">
      {success && (
        <div>
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay justify-center flex items-center backdrop-blur-xs z-50">
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
              className="lg:w-128 w-11/12 bg-white rounded-xl border-green p-10 text-center"
            >
              <div className="flex flex-col items-center ">
                {/* <img src={success} alt="success" className="w-28 mb-5" /> */}
                <h1 className="lg:font-bold font-semibold text-neutral text-3xl lg:text-4xl">
                  Congratulations!
                </h1>
              </div>
              <div className="font-semibold lg:text-base text-sm text-neutral my-8">
                <p>
                  You've successfully joined our wait list!
                  <br /> You will be notified on{" "}
                  <span className="text-green">{email}</span> before the launch
                  date
                </p>
              </div>
              <div className=" text-center w-11/12 mb-2 m-auto">
                <button
                  className="rounded-full w-full p-2 text-white bg-green flex justify-around items-center"
                  onClick={() => {
                    setSuccess(false);
                    setEmail(" ");
                  }}
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      <div className="bg-green text-white lg:px-28 px-4 py-4">
        <div className="lg:w-48 w-28 h-12">
          <img src={logo} alt="REIC Logo" />
        </div>
      </div>
      <div className="bg-waiting text-center">
        <div className="lg:p-20 py-14 px-5">
          {/* <h1 className="font-bold lg:text-4xl text-3xl text-center font-roboto">
            The largest real connection with <br className="hidden lg:block" />
            personalized service. <br />
            <span className="text-green">
              Buy with confidence, sell with dividends.
            </span>
          </h1> */}
          <h1 className="font-bold lg:text-4xl text-3xl text-center font-roboto">
            Investing in Real Estate is now <br className="hidden lg:block" /> a{" "}
            <span className="text-green">thing of choice</span>{" "}
            <br className=" lg:hidden" />
            not social class...
          </h1>
        </div>
        <div>
          <h1 className="text-soon font-semibold text-lg lg:text-2xl pb-10">
            Coming soon...
          </h1>
          <h1 className="text-banner text-xl lg:text-3xl">
            Join our waitlist now
          </h1>
        </div>
        <form onSubmit={joinWaitList}>
          <div className="p-5 flex flex-wrap font-inter justify-center">
            <input
              required
              type="email"
              value={email}
              placeholder="Enter your email"
              className="border lg:mr-2 mb-2 lg:mb-0 px-4 bg-white font-normal text-sm lg:text-base rounded-lg w-full py-3 lg:w-auto outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="submit"
              className="bg-green text-sm lg:text-base text-white rounded-lg px-6 py-3 w-full lg:w-auto cursor-pointer"
              value={Subscribe ? "Submitting ..." : "Subscribe"}
              // onClick={joinWaitList}
            />
          </div>
        </form>
        <div className="flex justify-center mt-10">
          <img
            src={reicMoc}
            alt="reic User Dashboard"
            className="w-full lg:w-auto hidden lg:block"
          />
          <img
            src={mobileDash}
            alt="reic User Dashboard"
            className="w-full lg:hidden"
          />
        </div>
      </div>

      <div className="bg-white flex flex-wrap lg:px-48 items-center justify-between pt-20 lg:pb-5 pb-20 relative ">
        <div className="absolute top-0 bottom-0 right-0 left-0 waitMob lg:hidden"></div>
        <div className="absolute top-0 bottom-0 right-0 left-0 wait hidden lg:block z-10"></div>
        {/* <div className="w-full lg:w-auto text-center lg:text-left mb-20 lg:mb-auto border"> */}
        <div className="text-center lg:text-left w-full lg:w-auto mb-20 ">
          <h1 className="font-bold lg:text-4xl text-2xl font-roboto lg:mb-5 mb-3">
            Real Investment, <br /> One Community
          </h1>
          <h1 className="text-banner text-base lg:text-2xl font-normal ">
            Be among the first to know <br className="hidden lg:block" /> when{" "}
            <br className=" lg:hidden" /> we launch!
          </h1>
        </div>

        <div className="w-full lg:w-auto pr-5 lg:pr-auto z-20">
          <img
            src={mobileMoc}
            alt="Mobile Dashboard"
            className="hidden lg:block"
          />
          <img
            src={mocMobile}
            alt="Mobile Dashboard"
            className="lg:hidden w-full"
          />
        </div>
      </div>

      <div className="bg-primary py-10 lg:px-28 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <div className="lg:w-48 w-28 mr-10 -ml-2 pl-5 lg:pl-0">
            <img src={reic} alt="REIC Logo with tagline" />
          </div>
          <div>
            <h1 className="font-semibold text-base lg:text-2xl">
              <span className="text-green">REIC</span> is a product of{" "}
              <span className="text-green">HX</span>
              <span className="text-media font-medium">africa</span>
            </h1>
            <h1 className="font-normal text-sm lg:text-lg text-banner">
              <a href="https://hxafrica.com">www.hxafrica.com</a>
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-auto mt-10 lg:mt-0">
          <h1 className="text-green italic text-sm lg:text-lg text-center ">
            Real Investment, One Community
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WaitingList;
