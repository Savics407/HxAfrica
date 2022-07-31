import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import moment from "moment";
import { toast } from "react-toastify";
import opps from "./images/Artwork.png";
import * as CurrencyFormat from "react-currency-format";
import withdraw from "./images/withdraw.svg";
import purchase from "./images/tokenPurchase.svg";
import failed from "./images/failedPurchase.svg";
import investment from "./images/investment.svg";
import reversed from "./images/reversed.svg";
import pullout from "./images/pullout.svg";
import inherited from "./images/inherited.svg";

function RecentActivity() {
  //   const [activity, setActivity] = useState();
  const [posts, setPosts] = useState();
  const [activities, setActivties] = useState(true);
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/wallet/fetch_wallet_activity",
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

    setPosts(result.data);
    if (result?.data.length === 0) {
      setActivties(false);
      // alert(result.data);
    } else {
      setActivties(true);
    }
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  return (
    <div>
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
        className="bg-white rounded-xl"
      >
        <div className="border-b border-stroke px-4 py-5 font-semibold flex justify-between items-center text-dark text-lg">
          <h1>Recent Transaction</h1>
          {/* <button
            className="font-medium text-sm border rounded-full py-1 px-4"
            onClick={""}
          >
            Clear All
          </button> */}
        </div>
        {activities ? (
          <div className="h-100 overflow-y-auto scroll">
            {posts
              ?.sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
              .map((post) => (
                <div
                  key={post.transaction_id}
                  className="px-4 py-3 recent flex"
                >
                  <div className="mr-2">
                    {post.type === "buytoken" ? (
                      <img
                        src={purchase}
                        alt="activity-icon"
                        className="w-11"
                      />
                    ) : post.type === "deposit" ? (
                      <img
                        src={purchase}
                        alt="activity-icon"
                        className="w-11"
                      />
                    ) : post.type === "pullout" ? (
                      <img src={pullout} alt="activity-icon" className="w-11" />
                    ) : post.type === "inherited" ? (
                      <img
                        src={inherited}
                        alt="activity-icon"
                        className="w-11"
                      />
                    ) : post.type === "investment" ? (
                      <img
                        src={investment}
                        alt="activity-icon"
                        className="w-11"
                      />
                    ) : post.type === "withdrawal" ? (
                      <img
                        src={withdraw}
                        alt="activity-icon"
                        className="w-11"
                      />
                    ) : post.type === "reversal" ? (
                      <img
                        src={reversed}
                        alt="activity-icon"
                        className="w-11"
                      />
                    ) : (
                      <img src={failed} alt="activity-icon" className="w-11" />
                    )}
                  </div>
                  <div className="">
                    <div className="flex justify-between mb-3 items-center">
                      <h1 className="text-mobile-nav text-lg font-semibold capitalize">
                        {post.type === "buytoken"
                          ? "Purchase REIC Token"
                          : post.type === "pullout"
                          ? "Pullout Investment"
                          : post.type === "withdrawal"
                          ? "Withdrew Token"
                          : post.type === "reversal"
                          ? "Reversed Investment"
                          : post.type === "failed"
                          ? "Failed Purchase"
                          : post.type}
                      </h1>
                      <h1 className="w-1/3 font-bold text-tiny text-footer text-right">
                        {moment(post.created_at).calendar()}
                      </h1>
                    </div>

                    <div className=" w-3/4">
                      <p className="font-normal text-sm text-footer">
                        <span>You</span> made{" "}
                        {post.type === "investment"
                          ? "an investment"
                          : "a deposit"}{" "}
                        of{" "}
                        <span>
                          N
                          <CurrencyFormat
                            value={post.amount}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>{" "}
                        {post.type === "investment" ? "worth" : "purchase"} of{" "}
                        <span>REIC Token</span>, Transaction ID:{" "}
                        <span>{post.transaction_id}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
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
            className="bg-white rounded-xl h-100 flex items-center justify-center"
          >
            <div className=" -mt-28 flex items-center justify-center">
              <div className="text-center my-10">
                <img src={opps} alt="Opps Nothing new here" />
                <h1 className="font-semibold text-lg text-footer">
                  Opps Nothing new here
                </h1>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default RecentActivity;
