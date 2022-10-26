import logo from "./images/reicTagline.png";
import React, { useState } from "react";

function Tab() {
  return (
    <>
      <div className="bg-primary text-center text-green p-3 hidden md:flex">
        {/* <div className="w-40 h-20 border"> */}
        <img src={logo} alt="logo icon" className="w-36" />
        {/* </div> */}
        {/* <h1 className="text-sm font-bold font-family ml-4">REIC</h1> */}
      </div>
    </>
  );
}

function AccountRecovery() {
  const [phase1, setPhase1] = useState(true);
  const [phase2, setPhase2] = useState(false);
  const [reset, setReset] = useState(false);
  return (
    <div className="font-family h-screen bg-white">
      <Tab />
      <div className="flex justify-center lg:items-center absolute top-0 left-0 right-0 bottom-0">
        {phase1 && (
          <div className=" lg:p-10 p-5 lg:w-128 w-full rounded-2xl lg:shadow-2xl">
            <div className="lg:text-center pr-10 lg:pr-0 pt-10 lg:pt-0 ">
              <h1 className="font-bold text-2xl text-neutral">
                Recovery Phase
              </h1>
              <p className="font-normal text-xs pt-2">
                Please kindly provide valid informations so we help you recover
                your account
              </p>
            </div>
            <div className="input py-10">
              {/* <label className="">Email Address</label> */}
              <input
                required
                type="email"
                placeholder="enter registered email"
                className="box"

                // value={loginData.email}
              />
            </div>
            <div
              className="w-full bg-green text-white flex justify-center items-center rounded-xl mt-6 font-medium cursor-pointer mb-10"
              onClick={() => {
                setPhase1(!phase1);
                setPhase2(!phase2);
              }}
            >
              {/* value={process ? <TbLoader className="animate-spin" /> : "Log in"} */}

              <input
                type="submit"
                className=" cursor-pointer w-full p-3 outline-none"
                value="Login"
              />
            </div>
          </div>
        )}
        {phase2 && (
          <div className=" lg:p-10 p-5 lg:w-128 w-full rounded-2xl lg:shadow-2xl">
            <div className="lg:text-center pr-10 lg:pr-0 pt-10 lg:pt-0">
              <h1 className="font-bold text-2xl text-neutral">
                Recovery Phase
              </h1>
              <p className="font-normal text-sm pt-2">
                kindly provide the 4 digit pin sent to{" "}
                <b>youremail@gmail.com</b>
              </p>
            </div>
            <div className="py-10 font-inter flex justify-between">
              {/* <label className="">Email Address</label> */}
              <input
                type="text"
                className="border w-14 text-center mr-2 rounded-lg border-green bg-input p-3 text-neutral focus-within:shadow-lg;"
                maxLength="1"
              />
              <input
                type="text"
                className="border w-14 text-center mr-2 rounded-lg border-green bg-input p-3 text-neutral focus-within:shadow-lg;"
                maxLength="1"
              />
              <input
                type="text"
                className="border w-14 text-center mr-2 rounded-lg border-green bg-input p-3 text-neutral focus-within:shadow-lg;"
                maxLength="1"
              />
              <input
                type="text"
                className="border w-14 text-center mr-2 rounded-lg border-green bg-input p-3 text-neutral focus-within:shadow-lg;"
                maxLength="1"
              />
              <input
                type="text"
                className="border w-14 text-center mr-2 rounded-lg border-green bg-input p-3 text-neutral focus-within:shadow-lg;"
                maxLength="1"
              />
            </div>
            <p className="text-sm font-medium text-sec lg:text-center text-left">
              Didn't get an email? {/* <Link to="/sign-up"> */}
              <b>Resend</b>
              {/* </Link> */}
            </p>
            <div
              className="w-full bg-green text-white flex justify-center items-center rounded-xl mt-6 font-medium cursor-pointer mb-10"
              onClick={() => {
                setReset(!reset);
                setPhase2(!phase2);
              }}
            >
              {/* value={process ? <TbLoader className="animate-spin" /> : "Log in"} */}

              <input
                type="submit"
                className=" cursor-pointer w-full p-3 outline-none"
                value="Confirm"
              />
            </div>
          </div>
        )}

        {reset && (
          <div className=" lg:p-10 p-5 lg:w-128 w-full rounded-2xl lg:shadow-2xl">
            <div className="lg:text-center pr-10 lg:pr-0 py-10 lg:pt-0">
              <h1 className="font-bold text-2xl text-neutral">
                Reset Password
              </h1>
              <p className="font-normal text-sm pt-2 ">
                You can now reset your password then proceed to login to your
                account.
              </p>
            </div>
            <div className="input">
              {/* <label className="">Email Address</label> */}
              <input
                required
                type="text"
                placeholder="enter new password"
                className="box"

                // value={loginData.email}
              />
            </div>
            <div className="input">
              {/* <label className="">Email Address</label> */}
              <input
                required
                type="text"
                placeholder="confirm new Password"
                className="box"

                // value={loginData.email}
              />
            </div>

            <div
              className="w-full bg-green text-white flex justify-center items-center rounded-xl mt-6 font-medium cursor-pointer mb-10"
              onClick={() => {
                setReset(!reset);
                setPhase2(!phase2);
              }}
            >
              {/* value={process ? <TbLoader className="animate-spin" /> : "Log in"} */}

              <input
                type="submit"
                className=" cursor-pointer w-full p-3 outline-none"
                value="Confirm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountRecovery;
