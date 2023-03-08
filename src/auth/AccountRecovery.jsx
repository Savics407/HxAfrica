import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tab from "./tab";
import { toast } from "react-toastify";
import { MdClose, MdCheck } from "react-icons/md"
import { HiArrowRight } from "react-icons/hi"
import { motion } from "framer-motion";

function AccountRecovery() {
  const navigate = useNavigate()
  const [phase1, setPhase1] = useState(true);
  const [phase2, setPhase2] = useState(false);
  const [reset, setReset] = useState(false);
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const [resent, setResent] = useState(false);
  const [loading, setLoading] = useState(false)

  const endPoint = process.env.REACT_APP_MY_API_ENDPOINT;
  async function recovery() {
    const payLoad = {
      email: email,
    };
    const response = await fetch(`${endPoint}recovery/send_otp_recovery_phrase`, {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result?.status);
    if (result?.status === "success") {
      // localStorage.setItem("user-token", result?.data.api_token);
      setError(false);
      // console.log(result.message);
      setPhase1(!phase1);
      setPhase2(!phase2);


    } else {
      if (result.status === "error") {
        setError(!error);
        console.log(result.message);

      }
    }
  }

  async function resendRecovery() {
    const payLoad = {
      email: email,
    };
    const response = await fetch(`${endPoint}recovery/resend_otp_recovery_phrase`, {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result?.status);
    if (result?.status === "success") {
      // localStorage.setItem("user-token", result?.data.api_token);
      setError(false);
      console.log(result.message);
      setResent(true)


    } else {
      if (result.status === "error") {
        setError(!error);
        console.log(result.message);

      }
    }
  }

  async function verifyOTP() {
    const payLoad = {
      otp: otp.join(""),
      email: email,
    };
    setLoading(!loading)
    const response = await fetch(`${endPoint}recovery/verifyOtp_recovery_phrase`, {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result?.status);
    if (result?.status === "success") {
      // localStorage.setItem("user-token", result?.data.api_token);
      setError(false);
      console.log(result.message);
      setPhase2(!phase2);
      setReset(true)
      setLoading(false)
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } else {
      if (result.status === "error") {
        setError(!error);
        console.log(result.message);
        setLoading(false)
      }
    }
  }
  const [otp, setOtp] = useState(new Array(5).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false
    setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)])

    //focus next input 
    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const [password, setPassword] = useState()
  const [confirm, setConfirm] = useState("password")
  const [notEquals, setNotEquals] = useState(false)
  const [success, setSuccess] = useState(false)

  async function createNewPassword() {
    const payLoad = {
      new_password: password,
      email: email,
    };
    setLoading(!loading)
    const response = await fetch(`${endPoint}
recovery/create_recovery_password`, {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result?.status);
    if (result?.status === "success") {
      // localStorage.setItem("user-token", result?.data.api_token);
      setError(false);
      setLoading(false)
      console.log(result.message);
      setSuccess(true)
      redirect()
    } else {
      if (result.status === "error") {
        setError(!error);
        console.log(result.message);
        setLoading(false)
      }
    }
  }

  function redirect() {
    setTimeout(() => {
      navigate("/login")
    }, 7000);
  }

  return (
    <div className="font-family h-screen bg-white">
      <div className="relative z-20">
        <Tab />

      </div>
      {success && <motion.div
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
          className="w-128 bg-white rounded-xl px-6 py-10 text-center"
        >
          <div>
            <h1 className="font-bold text-neutral text-4xl">Success!</h1>
          </div>
          <div className="font-medium text-base text-neutral my-8">
            <p>
              You successfully created a new password
              <br />
              You'll be redirected to login.

            </p>
          </div>
          <div>
            <p className="font-semibold text-xs">Redirecting ...</p>
          </div>
        </motion.div>
      </motion.div>}
      <div className="flex justify-center lg:items-center absolute top-0 left-0 right-0 bottom-0 z-10">

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
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError(false)
                }}

              // value={loginData.email}
              />
              <div>
                {error &&
                  <h1 className="text-center text-xs pt-3 text-red">This email does not exist!  check and try again</h1>
                }
              </div>

            </div>
            <div
              className="w-full bg-green text-white flex justify-center items-center rounded-xl mt-6 font-medium cursor-pointer mb-10"
              onClick={
                recovery
              }
            >
              {/* value={process ? <TbLoader className="animate-spin" /> : "Log in"} */}

              <input
                type="submit"
                className=" cursor-pointer w-full p-3 outline-none"
                value="Continue"

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
                kindly provide the 5 digit pin sent to{" "}
                <b>{email}</b>
              </p>
            </div>
            <div className="pt-10 font-inter flex justify-between">
              {
                otp.map((data, index) => {
                  return <input
                    key={index}
                    type="text"
                    className={`border w-14 text-center mr-2 rounded-lg border-green bg-input p-3 text-neutral focus-within:shadow-lg ${error && "border-red"}`}
                    maxLength="1"
                    value={data}
                    onChange={(e) => {
                      handleChange(e.target, index)
                      setError(false)
                    }}
                    onFocus={(e) => e.target.select()}
                  />
                })}


            </div>
            <div className="py-5 flex justify-center text-red items-center">
              {error && <>
                <MdClose />
                <h1 className="text-xs ml-1">
                  wrong pin! check pin and try again</h1>
              </>
              }
            </div>


            <p className="text-sm py-6 font-medium text-sec lg:text-center text-left ">
              {error ? <>
                <h1 onClick={resendRecovery} className="flex items-center justify-center cursor-pointer">Resend code <span className="ml-2"><HiArrowRight /></span></h1>
              </> : <>
                {resent ? <div className="flex justify-center items-center text-green">Email sent successfully <span className="ml-2">   <MdCheck /></span></div> : <div>
                  Didn't get an email? {/* <Link to="/sign-up"> */}
                  <b className="cursor-pointer" onClick={resendRecovery}>Resend</b>
                </div>}

              </>}

            </p>
            <div
              className="w-full bg-green text-white flex justify-center items-center rounded-xl font-medium cursor-pointer mb-10"
              onClick={verifyOTP}
            >
              {/* value={process ? <TbLoader className="animate-spin" /> : "Log in"} */}

              <input
                type="submit"
                className=" cursor-pointer w-full p-3 outline-none"
                value={loading ? "Processing..." : "Confirm"}

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
                onChange={(e) => setPassword(e.target.value)}

              // value={loginData.email}
              />
            </div>
            <div className="input">
              {/* <label className="">Email Address</label> */}
              <input
                required
                type="text"
                placeholder="confirm new Password"
                className={`box ${notEquals && "!border-red"}`}
                onChange={(e) => {
                  setConfirm(e.target.value)
                  setNotEquals(false)
                }}
              // value={loginData.email}
              />
            </div>
            <div className="flex justify-center text-red items-center">
              {notEquals && <>
                <MdClose />
                <h1 className="text-xs ml-1">
                  confirm password and try again</h1>
              </>
              }
            </div>
            <div
              className="w-full bg-green text-white flex justify-center items-center rounded-xl mt-6 font-medium cursor-pointer mb-10 "
              onClick={() => {
                if (password === confirm) { createNewPassword() } else {
                  setNotEquals(true)
                }

              }}
            >
              {/* value={process ? <TbLoader className="animate-spin" /> : "Log in"} */}

              <input
                type="submit"
                className=" cursor-pointer w-full p-3 outline-none"
                value={loading ? "Processing..." : "Confirm"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountRecovery;
