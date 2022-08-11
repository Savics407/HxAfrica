import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";

function Success() {
  const amount = localStorage.getItem("bought-amount");
  const navigate = useNavigate();

  function redirect() {
    setTimeout(() => {
      navigate("/token");
    }, 7000);
  }
  useEffect(() => {
    redirect();
  }, []);

  return (
    <div>
      <Dashboard />
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
          className="w-128 bg-white rounded-xl border-green px-6 pt-20 pb-10 text-center"
        >
          <div>
            <h1 className="font-bold text-neutral text-4xl">Success!</h1>
          </div>
          <div className="font-medium text-base text-neutral my-8">
            <p>
              You successfully made a payment of
              <br />
              <span className="text-green">
                N
                <CurrencyFormat
                  value={amount}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </span>{" "}
              to purchase REIC Token
            </p>
          </div>
          <div>
            <p className="font-semibold text-xs">Redirecting ...</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Success;
