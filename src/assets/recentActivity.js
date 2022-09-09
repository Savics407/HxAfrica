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
import ScaleLoader from "react-spinners/ScaleLoader";
import inherited from "./images/inherited.svg";

function RecentActivity() {
  const [loading, setLoading] = useState(true);
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
    if (result?.status === "success") {
      setLoading(false);
    }
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white rounded-xl">
        <div className="lg:border-b border-stroke px-4 py-5 font-semibold flex justify-between items-center text-dark text-sm lg:text-lg">
          <h1>Recent Transactions</h1>
        </div>
        {activities ? (
          <>
            {loading ? (
              <div className="text-center px-20 py-60">
                <ScaleLoader color="#008E10" height={40} width={4} />
              </div>
            ) : (
              <div className="h-100 overflow-y-auto scroll">
                {posts
                  ?.sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
                  .map((post) => (
                    <div
                      key={post.transaction_id}
                      className="px-4 py-3 recent flex"
                    >
                      <div className="">
                        {post.type === "buytoken" ? (
                          <img
                            src={purchase}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        ) : post.type === "deposit" ? (
                          <img
                            src={purchase}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        ) : post.type === "pullout" ? (
                          <img
                            src={pullout}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        ) : post.type === "inherited" ? (
                          <img
                            src={inherited}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        ) : post.type === "investment" ? (
                          <img
                            src={investment}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        ) : post.type === "withdrawal" ? (
                          <img
                            src={withdraw}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        ) : post.type === "reversal" ? (
                          <img
                            src={reversed}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        ) : (
                          <img
                            src={failed}
                            alt="activity-icon"
                            className="w-12 lg-w-14"
                          />
                        )}
                      </div>
                      <div className="w-full pl-2 flex lg:block justify-between items-center lg:w-auto">
                        <div className="flex justify-between lg:mb-3 items-center">
                          <div>
                            <h1 className="text-mobile-nav text-xs lg:text-lg font-semibold capitalize">
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
                            <h1 className="font-normal text-tiny text-footer lg:hidden">
                              {moment(post.created_at).calendar()}
                            </h1>
                          </div>

                          <h1 className="w-1/3 font-bold text-tiny text-footer text-right hidden lg:block">
                            {moment(post.created_at).calendar()}
                          </h1>
                        </div>

                        <div className=" w-3/4 hidden lg:block">
                          {post.type === "buytoken" ||
                          post.type === "deposit" ? (
                            <p className="font-normal text-sm text-footer">
                              <span>You</span> made a deposit of{" "}
                              <span>
                                N
                                <CurrencyFormat
                                  value={post.amount}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>{" "}
                              worth of{" "}
                              <span> {post.amount / 50000} REIC Token</span>,
                              Transaction ID: <span>{post.transaction_id}</span>
                            </p>
                          ) : post.type === "withdrawal" ? (
                            <p className="font-normal text-sm text-footer">
                              <span>You've</span> successfully withdrawn{" "}
                              <span>
                                N
                                <CurrencyFormat
                                  value={post.amount}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>{" "}
                              worth of{" "}
                              <span> {post.amount / 50000} REIC Token</span> to
                              your bank, Transaction ID:{" "}
                              <span>{post.transaction_id}</span>
                            </p>
                          ) : post.type === "investment" ? (
                            <p className="font-normal text-sm text-footer">
                              <span>You</span> made an investment of{" "}
                              <span>
                                N
                                <CurrencyFormat
                                  value={post.amount}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>{" "}
                              worth of{" "}
                              <span> {post.amount / 50000} REIC Token</span>,
                              Transaction ID: <span>{post.transaction_id}</span>
                            </p>
                          ) : post.type === "reversal" ? (
                            <p className="font-normal text-sm text-footer">
                              {" "}
                              <span>
                                N
                                <CurrencyFormat
                                  value={post.amount}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>{" "}
                              worth of{" "}
                              <span> {post.amount / 50000} REIC Token</span> was
                              reversed back to your wallet, Transaction ID:{" "}
                              <span>{post.transaction_id}</span>
                            </p>
                          ) : post.type === "pullout" ? (
                            <p className="font-normal text-sm text-footer">
                              <span>You've</span> successfully pulled out{" "}
                              <span>
                                N
                                <CurrencyFormat
                                  value={post.amount}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>{" "}
                              worth of{" "}
                              <span>
                                {" "}
                                {post.amount / 50000} REIC Investment
                              </span>
                              , Transaction ID:{" "}
                              <span>{post.transaction_id}</span>
                            </p>
                          ) : post.type === "inherited" ? (
                            <p className="font-normal text-sm text-footer">
                              <span>You,ve</span> successfully inherited{" "}
                              <span>
                                N
                                <CurrencyFormat
                                  value={post.amount}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>{" "}
                              worth of{" "}
                              <span>
                                {" "}
                                {post.amount / 50000} REIC Investment
                              </span>
                              , Transaction ID:{" "}
                              <span>{post.transaction_id}</span>
                            </p>
                          ) : (
                            <p className="font-normal text-sm text-footer">
                              <span>Your</span> purchase of{" "}
                              <span>
                                N
                                <CurrencyFormat
                                  value={post.amount}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </span>{" "}
                              worth of{" "}
                              <span> {post.amount / 50000} REIC Token</span>{" "}
                              failed, Transaction ID:{" "}
                              <span>{post.transaction_id}</span>
                            </p>
                          )}
                        </div>
                        <div className="lg:hidden text-right">
                          <h1 className="text-xs text-dark">
                            {post.token} Reic
                          </h1>
                          <h1
                            className={`font-normal text-tiny ${
                              post.type === "buytoken"
                                ? "text-green"
                                : post.type === "deposit"
                                ? "text-green"
                                : post.type === "withdrawal"
                                ? "text-yellow"
                                : post.type === "investment"
                                ? "text-green"
                                : post.type === "reversal"
                                ? "text-yellow"
                                : post.type === "pullout"
                                ? "text-red"
                                : post.type === "inherited"
                                ? "text-yellow"
                                : "text-red"
                            }`}
                          >
                            N
                            <CurrencyFormat
                              value={post.amount}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </>
        ) : (
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
            className="bg-white rounded-xl h-auto lg:h-100 flex items-center justify-center"
          >
            <div className=" lg:-mt-28 flex items-center justify-center">
              <div className="text-center my-10 pb-20 lg:p-0">
                <img
                  src={opps}
                  alt="Opps Nothing new here"
                  className="w-48 lg:w-auto"
                />
                <h1 className="font-semibold mt-5 lg:mt-auto text-xs lg:text-lg text-footer">
                  Opps Nothing new here
                </h1>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default RecentActivity;
