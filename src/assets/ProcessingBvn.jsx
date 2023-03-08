import { TbLoader } from "react-icons/tb";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Processing({ setVerifyBVN, closeToken }) {
  function redirect() {
    setTimeout(() => {
      // setOk(false);

      checkForBvn();
    }, 7000);
  }
  const isBvnVerified = localStorage.getItem("bvn");
  const checkForBvn = () => {
    if (isBvnVerified === "1") {
      addBank();
    } else {
      setBvnCheck(true);
    }
  };

  const [bvnCheck, setBvnCheck] = useState(false);
  const [bvn, setBvn] = useState();
  const accountNo = localStorage.getItem("userAccountNo");
  const bankCode = localStorage.getItem("bankCode");
  const bankName = localStorage.getItem("bank_name");
  const [error, setError] = useState(false);
  const [bvnResult, setBvnResult] = useState();

  async function validateBVN() {
    const token = localStorage.getItem("user-token");
    const payLoad = {
      bvn: bvn,
      account_number: accountNo,
      bank_code: bankCode,
    };
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investor/validate_bvn`,
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result?.status);
    setBvnResult(result);
    if (result?.status === "success") {
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      addBank();
    } else {
      if (result.status === "error") {
        // setProcess(false);
        setError(true);
        setBvnCheck(false);
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
  }

  async function addBank() {
    const token = localStorage.getItem("user-token");
    // if(bankData.bankCode)
    const payLoad = {
      account_number: accountNo,
      bank_code: bankCode,
      bank_name: bankName,
    };
    // alert(payLoad.bank_name)
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investor/add_bank_info`,
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result?.status);
    if (result?.status === "success") {
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setVerifyBVN(false);
      closeToken(true);
    } else {
      if (result?.status === "error") {
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setVerifyBVN(false);
      closeToken(true);
    }
  }

  useEffect(() => {
    redirect();
  }, []);

  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investor/fetch_user_profile`,
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
    localStorage.setItem("bvn", result?.data.is_bvn_verified);
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
        className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay backdrop-blur-xs z-50"
      // onClick={() => {
      //         closeDetails(false)
      //     }}
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
          className={`lg:w-128 w-11/12 bg-white rounded-xl absolute border-green p-6 text-center ${bvnCheck ? "hidden" : "block"
            }`}
        >
          <div>
            <h1 className="font-medium lg:font-bold text-neutral lg:text-3xl text-2xl">
              Processing BVN
            </h1>
          </div>
          <div className="lg:font-semibold font-medium text-base text-neutral my-8">
            <p>
              Please wait while we process your BVN. This will take few seconds.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="rounded-full w-28 h-12 text-neutral flex justify-around items-center">
              <TbLoader className="animate-spin" /> Processing
            </button>
          </div>
        </motion.div>
        {bvnCheck && (
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
            className="lg:w-128 w-11/12 bg-white rounded-xl absolute border-green p-6 text-center"
          >
            <div>
              <h1 className="lg:font-bold font-medium  text-neutral text-2xl lg:text-3xl">
                No BVN Found
              </h1>
            </div>
            <div className="lg:font-semibold font-medium lg:text-base text-sm text-neutral my-8">
              <p>Please add your BVN to continue this action</p>
            </div>
            <div className="input mb-3">
              <input
                required
                type="tel"
                placeholder="enter BVN"
                className="box"
                value={bvn}
                onChange={(event) => setBvn(event.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-full bg-green w-full h-12 text-dashbg flex justify-around items-center"
                onClick={() => {
                  validateBVN();
                  // alert(`${bvn}, ${accountNo}, ${bankCode}, ${bankName}`);
                  fetchData();
                }}
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {error && (
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
            className="w-128 bg-white rounded-xl absolute border-green p-6 text-center"
          >
            <div>
              <h1 className="font-bold text-red text-3xl">Error!</h1>
            </div>
            <div className="font-semibold text-base text-neutral my-8">
              {bvnResult?.status === "error" ? (
                <p>
                  Something went wrong, confirm if you submitted the correct BVN
                </p>
              ) : (
                <p>
                  Sorry! Only bank accounts linked with your BVN can be used for
                  withdrawals.
                </p>
              )}
            </div>

            <div className="flex justify-around">
              <button
                className="rounded-full border text-neutral font-medium text-base px-6"
                onClick={() => {
                  setVerifyBVN(false);
                }}
              >
                Cancel Withdrawal
              </button>
              {bvnResult?.status === "error" ? (
                <button
                  className="rounded-full bg-green h-12 text-dashbg flex justify-around items-center px-12"
                  onClick={() => {
                    setError(false);
                    setBvnCheck(true);
                  }}
                >
                  Retry
                </button>
              ) : (
                <button
                  className="rounded-full bg-green h-12 text-dashbg flex justify-around items-center px-6"
                  onClick={() => {
                    // validateBVN()
                    alert(`${bvn}, ${accountNo}, ${bankCode}`);
                  }}
                >
                  Change Bank
                </button>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Processing;
