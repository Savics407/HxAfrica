import { MdClose } from "react-icons/md";
import bank from "./images/bank.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi"
import * as CurrencyFormat from "react-currency-format";
import { toast } from "react-toastify";

function AddBank({ closeToken }) {
  // const [authPullOut, setAuthPullOut] = useState(false)
  const [registered, setRegistered] = useState(true)
  const [addAccount, setAddAccount] = useState(false)
  const [banks, setBanks] = useState(false)
  const [addAmount, setAddAmount] = useState(false)
  const [balance, setBalance] = useState(false)
  const [amount, setAmount] = useState(50000);
  const [click1, isClick1] = useState(true);
  const [click2, isClick2] = useState(true);
  const [click3, isClick3] = useState(true);

  // // const [details, setDetails] = useState(true)
  async function fetchBank() {
    // console.log(formData);
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/list_of_banks",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result?.data);
    setBanks(result.data)
  }

  async function wallet() {
    // console.log(formData);
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/wallet/fetch_wallet",
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
    // alert(result.data.token);
    // setToken(result.data.token);
    setBalance(result.data.balance);
    // localStorage.setItem("user-wallet", result?.data.token);
  }


  const [userBank, setUserBank] = useState()
  async function fetchUserBank() {
    // console.log(formData);
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/fetch_user_bank",
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
    setUserBank(result?.data)

  }


  useEffect(() => {
    fetchBank();
    wallet();
    fetchUserBank();
  }, []);

  const [bankData, setBankData] = useState({
    bankCode: "",
    accountNumber: "",
  })
  const [process, setProcess] = useState(false);
  const [bankName, setBankName] = useState()

  async function resolveBank() {
    const token = localStorage.getItem("user-token");
    const payLoad = {
      account_number: bankData.accountNumber,
      bank_code: bankData.bankCode
    }
    // console.log(bankName)
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/resolve_bank_info",
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
    if (result?.status === true) {
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setAddAmount(true)
      // setAddAccount(false)
      // addBank()

    } else {
      if (result.status === false) {
        setProcess(false);
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
      account_number: bankData.accountNumber,
      bank_code: bankData.bankCode,
      bank_name: banks[bankData.bankCode].name
    }
    alert(payLoad.bank_name)
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/add_bank_info",
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
    if (result?.status === true) {
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setAddAmount(true)
      // setAddAccount(false)
    } else {
      if (result.status === false) {
        // setProcess(false);
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

        {registered && <motion.div
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
          className="bg-white rounded-xl border w-2/5"
        >
          <div className="border-b border-stroke uppercase px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
            <h1 className="font-iter">Add Bank</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                closeToken(false);
              }}
            />
          </div>
          <div className="p-10 flex flex-col items-center text-token text-sm font-medium">
            <img src={bank} alt="bank-icon" className="w-28 mb-2" />
            <h1>No registered bank account</h1>
          </div>

          <div className="border-2 border-green rounded-full flex items-center w-4/5 m-auto py-3 justify-center mb-10" onClick={() => {
            setAddAccount(true)
            setRegistered(!registered)
          }}>
            <HiPlus className="text-green" />
            <button className="capitalize ml-3 text-token font-semibold text-sm"> Add new bank</button>
          </div>
        </motion.div>}

        {addAccount && <motion.div
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
          className="bg-white rounded-xl border w-2/5"
        >
          <div className="border-b border-stroke uppercase px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
            <h1 className="font-iter">Add Bank</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                closeToken(false);
              }}
            />
          </div>
          <div className="py-4 px-10">
            <div className="input mb-4">
              <label className="text-footer text-base font-normal">
                Bank Name
              </label>
              {/* <input
                required
                type="email"
                placeholder="enter account name"
                className="box"
              /> */}
              {/* <h1>{bankName}</h1> */}

              <select
                className="box text-green"
                value={bankData.bankCode}
                // name={bankData.bankName}
                onChange={(event) =>
                  {setBankData({ ...bankData, bankCode: event.target.value })}
                  // setBankName(JSON.stringify(event.target.value))
                }
              >
                <option selected>--Choose Bank--</option>

                {banks?.map(bank => (
                  <option key={bank.id} value={bank.code}>{bank.name}</option>
                ))}

              </select>
            </div>
            <div className="input">
              <label className="text-footer text-base font-normal">
                Account Number
              </label>
              <input
                required
                type="number"
                placeholder="enter account number"
                className="box text-green"
                value={bankData.accountNumber}
                onChange={(event) =>
                  setBankData({ ...bankData, accountNumber: event.target.value })
                }
              />
            </div>
            <div>
              <button
                className="rounded-xl w-full h-12 text-dashbg bg-green"
                onClick={() => {
                  setProcess(true);
                  resolveBank()
                }}
              >
                {process ? "processing ..." : "Save"}
              </button>
            </div>
            <div className=" flex items-center pt-10 pb-5">
              <input
                required
                type="checkbox"
                className="border mr-2 checked:bg-green"
                value="1"
              />
              <p className="text-sm text-token font-medium">
                Save as default bank
                </p>
            </div>
          </div>


        </motion.div>}
        {addAmount && <motion.div
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
          className="bg-white rounded-xl border w-1/2"
        >
          <div className="border-b border-stroke uppercase px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
            <h1 className="font-iter">Choose Bank</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                closeToken(false);
              }}
            />
          </div>

          <div className="py-4 px-10">
            <div className="input mb-4 h-90 overflow-y-scroll scroll">
              {userBank?.map(bank => (
                <div key={bank.id} className=" rounded-xl text-footer bg-input p-5 flex justify-between items-center mb-5">
                  <div>
                    <h1 className="font-normal text-base">{bank.bank_name}</h1>
                    <h1 className="font-semibold text-xl">{bank.account_name}</h1></div>
                  <div>
                    <h1 className="font-normal text-base">{bank.account_number}</h1>
                  </div>
                </div>
              ))}

            </div>

            <div className="text-green capitalize font-medium text-sm flex items-center cursor-pointer py-5">
              <HiPlus className="mr-3" /><span>Add new bank</span>
            </div>


            {/* <div className="pt-5 pb-9">
              <p className="text-payment text-base font-normal mb-2.5 flex justify-between">
                <span>Amount</span>{" "}
                <span className="text-green font-medium">
                  Available Amount: N<CurrencyFormat
                    value={balance}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </span>
              </p>
              <div className="text-nuetral font-bold text-lg flex justify-center py-6 rounded-lg bg-mainbg relative">
                <input
                  type="number"
                  placeholder="enter amount"
                  className="text-neutral font-bold text-4xl text-center bg-transparent outline-0"
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
            </div> */}

            <div className="text-right pb-3 flex justify-between items-center">
              <div className=" flex items-center">
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
                className="rounded-full w-44 h-12 text-dashbg bg-green"
                onClick={() => {
                  // setAuthPullOut(true)
                  // setIsClick(!isClick)
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </motion.div>}
      </motion.div>
    </>
  );
}

export default AddBank;
