import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import moment from "moment";
import { toast } from "react-toastify";
import opps from "./images/Artwork.png";
import * as CurrencyFormat from "react-currency-format";

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
        <div className="border-b border-stroke px-10 py-5 font-semibold flex justify-between items-center text-dark text-lg">
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
                <div key={post.transaction_id} className="px-10 py-3 recent">
                  <h1 className="text-green text-lg font-semibold mb-3 capitalize">
                    {post.type === "buytoken"
                      ? "Token Purchase"
                      : post.type === "pullout"
                      ? "Token Pulled Out"
                      : post.type}
                  </h1>
                  <div className="flex">
                    <p className="w-2/3 font-normal text-sm text-footer">
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

                    <p className="w-1/3 font-bold text-xs text-footer text-right">
                      {moment(post.created_at).calendar()}
                    </p>
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
