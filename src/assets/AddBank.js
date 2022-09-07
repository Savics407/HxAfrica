import { MdClose } from "react-icons/md";
import bank from "./images/bank.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import * as CurrencyFormat from "react-currency-format";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";

function AddBank({ closeToken, setVerifyBVN, setWithdraw, setBankID }) {
  // const [authPullOut, setAuthPullOut] = useState(false)
  const [registered, setRegistered] = useState(true);
  const [main, setMain] = useState(true);
  const [addAccount, setAddAccount] = useState(false);
  const [banks, setBanks] = useState(false);
  const [chooseBank, setChooseBank] = useState(false);
  const [addAmount, setAddAmount] = useState(false);
  const [amount, setAmount] = useState(50000);

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
    setBanks(result.data);
  }

  const [userBank, setUserBank] = useState();
  const [loading, setLoading] = useState(true);

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
    setUserBank(result?.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchBank();
    fetchUserBank();
  }, []);

  const [bankData, setBankData] = useState({
    bankCode: "",
    accountNumber: "",
  });
  const [process, setProcess] = useState(false);
  const [bankInfo, setBankInfo] = useState("Default, bank");
  const split = bankInfo.split(",");
  const bankCode = split[0];
  const bankName = split[1];
  localStorage.setItem("userAccountNo", bankData.accountNumber);
  localStorage.setItem("bankCode", bankCode);
  localStorage.setItem("bank_name", bankName);

  async function resolveBank() {
    const token = localStorage.getItem("user-token");
    const payLoad = {
      account_number: bankData.accountNumber,
      bank_code: bankCode,
    };
    // alert(bankName[0  ])
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
      // toast.success(`${result.message}`, {
      //   position: "top-left",
      //   autoClose: 1500,
      //   hideProgressBar: true,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      // setChooseBank(true)
      setAddAccount(false);
      setProcess(false);
      // setMain(true)
      setVerifyBVN(true);
      closeToken(false);
      // addBank()
    } else {
      if (result.status === "error") {
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
  const save = () => {};

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
        {main && userBank?.length === 0 ? (
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
            className={`bg-white rounded-xl border lg:w-2/5 w-11/12 ${
              !registered && "hidden"
            }`}
          >
            <div className="border-b border-stroke Capitalize lg:uppercase px-10 py-5 lg:text-2xl font-semibold flex justify-between items-center text-modal text-base">
              <h1 className="font-iter">Add Bank</h1>
              <MdClose
                className="cursor-pointer"
                onClick={() => {
                  closeToken(false);
                }}
              />
            </div>
            <div className="p-10 flex flex-col items-center text-token text-sm font-medium">
              <img src={bank} alt="bank-icon" className="lg:w-28 w-20 mb-2" />
              <h1>No registered bank account</h1>
            </div>

            <div
              className="border-2 border-green rounded-full flex items-center w-4/5 m-auto py-3 justify-center mb-10"
              onClick={() => {
                setAddAccount(true);
                setRegistered(!registered);
              }}
            >
              <HiPlus className="text-green" />
              <button className="capitalize ml-3 text-token font-semibold text-sm">
                {" "}
                Add new bank
              </button>
            </div>
          </motion.div>
        ) : (
          <MyBanks
            closeToken={closeToken}
            userBank={userBank}
            loading={loading}
            setLoading={setLoading}
            addAccount={addAccount}
            setAddAccount={setAddAccount}
            setMain={setMain}
            main={main}
            setWithdraw={setWithdraw}
            setBankID={setBankID}
          />
        )}

        {addAccount && (
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
            className="bg-white rounded-xl border w-11/12 lg:w-2/5"
          >
            <div className="border-b border-stroke capitalize lg:uppercase px-5 lg:px-10 py-5 lg:text-2xl text-base font-semibold flex justify-between items-center text-modal">
              <h1 className="font-iter">Add Bank</h1>
              <MdClose
                className="cursor-pointer"
                onClick={() => {
                  closeToken(false);
                }}
              />
            </div>
            <div className="py-4 lg:px-10 px-5">
              <div className="input mb-4">
                <label className="text-footer text-tiny lg:text-base font-normal">
                  Bank Name
                </label>
                {/* <input
                required
                type="email"
                placeholder="enter account name"
                className="box"
              /> */}
                {/* <h1>{bankName}, {bankCode}</h1> */}

                <select
                  className="border rounded-full lg:rounded-xl border-border bg-input p-4 lg:p-3 lg:text-sm text-xs focus-within:shadow-lg outline-none text-green cursor-pointer"
                  value={bankInfo}
                  // name={bankData.bankName}
                  onChange={(event) =>
                    // {setBankData({ ...bankData, bankCode: event.target.value })}
                    setBankInfo(event.target.value)
                  }
                >
                  <option selected>--Choose Bank--</option>

                  {banks?.map((bank) => (
                    <option key={bank.id} value={[bank.code, bank.name]}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input">
                <label className="text-footer text-tiny lg:text-base font-normal">
                  Account Number
                </label>
                <input
                  required
                  type="number"
                  placeholder="enter account number"
                  className="border rounded-full lg:rounded-xl border-border bg-input p-4 lg:p-3 lg:text-sm text-xs focus-within:shadow-lg       outline-none text-green"
                  value={bankData.accountNumber}
                  onChange={(event) =>
                    setBankData({
                      ...bankData,
                      accountNumber: event.target.value,
                    })
                  }
                />
              </div>
              <div>
                <button
                  className="rounded-full lg:rounded-xl w-full h-12 mt-3 text-dashbg bg-green"
                  onClick={() => {
                    setProcess(true);
                    resolveBank();
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
          </motion.div>
        )}
        {/* {chooseBank && <MyBanks />} */}
      </motion.div>
    </>
  );
}

function MyBanks({
  closeToken,
  userBank,
  loading,
  setLoading,
  addAccount,
  setAddAccount,
  setMain,
  main,
  setWithdraw,
  setBankID,
}) {
  // const [addAccount, setAddAccount] = useState(false)
  const [selected, setSelected] = useState(false);
  const [addAmount, setAddAmount] = useState(false);
  const userBankId = (id) => {
    setBankID(id);
  };
  return (
    <>
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
        className={`bg-white rounded-xl border w-11/12 lg:w-1/2 ${
          addAccount && "hidden"
        }`}
      >
        <div className="border-b border-stroke px-5 lg:px-10 py-5 text-base lg:text-2xl font-semibold flex justify-between items-center text-modal">
          <h1 className="font-iter lg:uppercase capitalize">
            Choose Bank Account
          </h1>
          <MdClose
            className="cursor-pointer"
            onClick={() => {
              closeToken(false);
            }}
          />
        </div>

        {loading ? (
          <div className="text-center p-20">
            <ScaleLoader color="#008E10" height={50} width={6} />
          </div>
        ) : (
          <div className="py-4 lg:px-7 px-5">
            <div className="input mb-4 h-90 lg:px-2 overflow-y-scroll scroll">
              {userBank?.map((bank) => (
                <div
                  key={bank.id}
                  className={`rounded-xl text-footer bg-input p-5 flex justify-between items-center mb-5 border border-transparent hover:border-green cursor-pointer`}
                  onClick={() => {
                    setWithdraw(true);
                    closeToken(false);
                    userBankId(bank.id);
                  }}
                >
                  <div>
                    <h1 className="font-normal text-sm lg:text-base">
                      {bank.bank_name}
                    </h1>
                    <h1 className="lg:font-semibold capitalize lg:uppercase font-medium lg:text-xl text-base">
                      {bank.account_name}
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-normal text-xs lg:text-base">
                      {bank.account_number}
                    </h1>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="text-green capitalize font-medium text-sm flex items-center cursor-pointer py-5"
              onClick={() => {
                setAddAccount(true);
                // setAddAmount(!addAmount)
                setMain(false);
                setLoading(true);
              }}
            >
              <HiPlus className="mr-3" />
              <span>Add new bank</span>
            </div>

            {/* <div className="text-right pb-3 flex justify-between items-center">
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
            </div> */}
          </div>
        )}
      </motion.div>
    </>
  );
}
export default AddBank;
