import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";

// import { TbLoader } from 'react-icons/tb'

function Withdraw({ closeToken }) {
  const navigate = useNavigate();
  const [click1, isClick1] = useState(true);
  const [click2, isClick2] = useState(true);
  const [click3, isClick3] = useState(true);
  const [balance, setBalance] = useState(false)
  const [userBank, setUserBank] = useState()
  // const [authPullOut, setAuthPullOut] = useState(false)
  const [isCardPay, setIsCardPay] = useState(false);
  const [amount, setAmount] = useState(50000);
  async function withdraw(e) {
    e.preventDefault();
    const email = localStorage.getItem("user-email");
    const payLoad = {
      email,
      amount: amount,
    };
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/paystack/initialize_paystack",
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
    //use toaster and display redirecting to paystack
    // alert(result?.data.data.authorization_url);
    
  }
  async function wallet() {
    const token = localStorage.getItem("user-token");
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
    // setLoading(false)
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
          className="bg-white rounded-xl border w-1/2"
        >
          <div className="border-b border-stroke uppercase px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
            <h1>Add Amount</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                closeToken(false);
              }}
            />
          </div>
          <div className="py-4 px-14">
            <div className="input mb-4 h-90 overflow-y-scroll scroll">
              {userBank?.map(bank => (
                <div key={bank.id} className=" rounded-xl text-footer bg-input p-5 flex justify-between items-center mb-5 border border-transparent hover:border-green">
                  <div>
                    <h1 className="font-normal text-base">{bank.bank_name}</h1>
                    <h1 className="font-semibold text-xl">{bank.account_name}</h1></div>
                  <div>
                    <h1 className="font-normal text-base">{bank.account_number}</h1>
                  </div>
                </div>
              ))}

            </div>
            
            <div className="pt-5 pb-9">
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
            </div>

          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Withdraw;
