import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CurrencyFormat from "react-currency-format";

// import { TbLoader } from 'react-icons/tb'

function Withdraw({ setWithdraw, bankID, wallet }) {
  const navigate = useNavigate();
  const [click1, isClick1] = useState(true);
  const [click2, isClick2] = useState(true);
  const [click3, isClick3] = useState(true);
  const [balance, setBalance] = useState();
  const [userBank, setUserBank] = useState();
  // const [authPullOut, setAuthPullOut] = useState(false)
  const [successful, setSuccessful] = useState(false);
  const [amount, setAmount] = useState(50000);
  const [accountNo, setAccountNo] = useState();
  const [loading, setLoading] = useState(false);
  async function withdraw() {
    const payLoad = {
      amount: amount,
    };
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}payment/withdraw`,
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
      setSuccessful(true);
    } else {
      if (result.status === "error") {
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
  }

  async function fetchUserBank() {
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investor/fetch_user_bank`,
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
    setUserBank(result?.data);
  }

  useEffect(() => {
    wallet();
    fetchUserBank();
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
        className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay z-50 backdrop-blur-xs"
      // onClick={() => {
      //         closeDetails(false)
      //     }}
      >
        {userBank
          ?.filter((bank) => bank.id === bankID)
          .map((bank) => (
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.1,
                },
              }}
              exit={{
                scale: 0,
                transition: {
                  delay: 0.5,
                },
              }}
              className={`bg-white rounded-xl border w-11/12 lg:w-1/2 ${successful ? "hidden" : "block"
                }`}
            >
              <div className="border-b border-stroke capitalize lg:uppercase lg:px-10 px-5 py-5 text-base lg:text-2xl font-semibold flex justify-between items-center text-modal">
                <h1>Add Amount</h1>
                <MdClose
                  className="cursor-pointer"
                  onClick={() => {
                    setWithdraw(false);
                  }}
                />
              </div>

              {loading ? (
                <div className="text-center p-20">
                  <ScaleLoader color="#008E10" height={50} width={6} />
                </div>
              ) : (
                <div className="py-4 lg:px-7 px-3">
                  <div className="input mb-4 ">
                    {/* {userBank?.filter((bank) => bank.id === bankID).map((bank) => ( */}
                    <div
                      key={bank.id}
                      className=" rounded-xl text-footer bg-input p-5 flex justify-between items-center mb-5 border border-green"
                    >
                      <div>
                        <h1 className="font-normal text-xs lg:text-base ">
                          {bank.bank_name}
                        </h1>
                        <h1 className="font-normal lg:font-semibold text-sm lg:text-xl">
                          {bank.account_name}
                        </h1>
                      </div>
                      <div>
                        <h1 className="font-normal text-xs lg:text-base">
                          {bank.account_number}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 pb-9">
                    <p className="text-payment text-xs lg:text-base font-normal mb-2.5 flex justify-between">
                      <span>Amount</span>{" "}
                      <span className="text-green font-medium">
                        Available Amount: N
                        <CurrencyFormat
                          value={balance}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </span>
                    </p>
                    <div className="text-nuetral font-bold text-lg flex justify-center items-center py-6 rounded-lg bg-mainbg relative">
                      <sup className="lg:w-2/5 w-2/6 text-right">N</sup>

                      <input
                        type="number"
                        placeholder="50,000"
                        className="text-neutral font-bold text-4xl lg:w-3/5 w-4/6 bg-transparent outline-none"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-center mt-6">
                      <button
                        className={`withd-button ${click1 && "with-dark"}`}
                        //   {`notification z-50 ${isClick ? 'show-note' : 'remove-note'}`}
                        onClick={() => {
                          setAmount(50000);
                          isClick1(true);
                          isClick2(true);
                          isClick3(true);
                        }}
                      >
                        N50,000
                      </button>
                      <button
                        className={`withd-button ${!click2 && "with-dark"}`}
                        onClick={() => {
                          setAmount(100000);
                          isClick1(false);
                          isClick2(!isClick2);
                          isClick3(true);
                        }}
                      >
                        N100,000
                      </button>
                      <button
                        className={`withd-button ${!click3 && "with-dark"}`}
                        onClick={() => {
                          setAmount(200000);
                          isClick1(false);
                          isClick2(true);
                          isClick3(!isClick3);
                        }}
                      >
                        N200,000
                      </button>
                    </div>
                  </div>
                  <div className="text-right pb-3 flex justify-between items-center">
                    <div className=" flex items-center lg:flex hidden">
                      <input
                        required
                        type="checkbox"
                        className="border mr-2 checked:bg-green"
                        value="1"
                      />
                      <p className="text-sm text-footer font-medium">
                        Save as default bank
                      </p>
                    </div>
                    <button
                      className="rounded-full w-full lg:w-44 h-12 text-dashbg bg-green"
                      onClick={() => {
                        setLoading(true);
                        setTimeout(withdraw, 7000);

                        setAccountNo(bank.account_number);
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

        {successful && (
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
            className="lg:w-128 w-11/12 bg-white rounded-xl fixed top-40 border-green py-10 px-6 text-center"
          >
            <div className="flex flex-col items-center ">
              {/* <img src={success} alt="success" className="w-28 mb-5" /> */}
              <h1 className="font-normal lg:font-bold text-neutral text-3xl lg:text-4xl">
                Success!
              </h1>
            </div>
            <div className="font-semibold lg:text-base text-sm text-neutral my-8">
              <p>
                Your Withdrawal of{" "}
                <span className="text-green">
                  N
                  <CurrencyFormat
                    value={amount}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </span>{" "}
                to account: <br />{" "}
                <span className="text-green">{accountNo} </span> was successful.
              </p>
            </div>
            <div className=" text-center lg:w-11/12 mb-2 m-auto">
              <button
                className="rounded-full w-full p-2 text-white bg-green flex justify-around items-center"
                onClick={() => {
                  setWithdraw(false);
                  wallet();
                }}
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Withdraw;
