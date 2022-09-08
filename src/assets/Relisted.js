import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import banner from "./images/banner.png";
import land from "./images/rawland2.png";
import { TbLoader } from "react-icons/tb";
import New from "./images/new.svg";
import moment from "moment";
import { toast } from "react-toastify";
import relist from "./images/relisted.png";
import * as CurrencyFormat from "react-currency-format";
import ScaleLoader from "react-spinners/ScaleLoader";
import Inherit from "./Inherit";
import Bidding from "./Bidding";

function Relisted() {
  const [relisted, setRelisted] = useState(true);
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_relisted_investment",
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
    // alert(result.data[0].duration);

    setPosts(result.data);
    if (result?.data.length === 0) {
      setRelisted(false);
      // alert(result.data);
    } else {
      setRelisted(true);
    }
    if (result?.status === "success") {
      setLoading(false);
    }
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  const [joinInvest, setJoinInvest] = useState(false);
  const [placeBid, setPlaceBid] = useState(false);
  const [itemId, setItemID] = useState("");
  function productDetails(id) {
    setItemID(id);
    // alert(id);
    setJoinInvest(true);
  }
  function bid(id) {
    setItemID(id);
    // alert(id);

    setPlaceBid(true);
  }

  // onClick={() => {
  //                           inherit(post.pullout.id);
  //                         }}

  return (
    <div className="font-family bg-mainbg">
      {joinInvest && (
        <Inherit
          className="z-10"
          closeModal={setJoinInvest}
          itemId={itemId}
          setItemID={setItemID}
        />
      )}
      {placeBid && (
        <Bidding
          className="z-10"
          closeModal={setPlaceBid}
          itemId={itemId}
          setItemID={setItemID}
        />
      )}
      <Header />
      <div className="w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4">
        <div className="bg-white p-10 w-full rounded-lg">
          <div className="mb-10">
            <h1 className="text-modal text-2xl font-semibold">Investments</h1>
          </div>
          <InvestTabs />
          <div className="mb-8 mine">
            {relisted ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div className="flex flex-wrap mb-4">
                    {posts?.map((post) => (
                      <div className="real-estate w-80 mr-3" key={post.id}>
                        <div className="mr-3 w-1/3 h-full">
                          <img
                            src={land}
                            alt="rawland"
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        <div className="w-2/3">
                          <div className="mb-2">
                            <h1 className="!mb-0">{post.product.title}</h1>
                            <div className="flex items-start">
                              <h2 className="text-green text-xs font-medium mr-1">
                                {post.interest}% Interest Rate
                              </h2>
                              <img src={New} alt="new" />
                            </div>
                          </div>
                          <div className="text-tiny text-grayy mb-3">
                            <p className="!mb-0">
                              Relisted Date:{" "}
                              <span className="text-darkgray">
                                {moment(post.created_at).format("MMM DD, yyyy")}
                              </span>
                            </p>
                            <p className="">
                              Due Date -{" "}
                              <span className="text-darkgray">
                                {" "}
                                {moment(post.due_date).format("MMM DD, yyyy")}
                              </span>
                            </p>
                          </div>
                          <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-3 w-48">
                            <p className="">
                              Amount:{" "}
                              <span className="text-darkgray text-xs font-medium ml-2">
                                {post.pullout === null ? (
                                  "not available"
                                ) : (
                                  <>
                                    N{" "}
                                    <CurrencyFormat
                                      value={
                                        post.pullout === null
                                          ? "not available"
                                          : post.pullout.accumulated_amount
                                      }
                                      displayType={"text"}
                                      thousandSeparator={true}
                                    />
                                  </>
                                )}
                              </span>
                            </p>
                          </div>
                          <div className=" w-48">
                            {post.pullout.user_id === 3 ? (
                              <button
                                className="bg-white text-green text-tiny w-full p-2 rounded-full"
                                onClick={() => {
                                  productDetails(post.product.id);
                                }}
                              >
                                Inherit Investment
                              </button>
                            ) : (
                              <button
                                className="bg-neutral text-white text-tiny w-full p-2 rounded-full"
                                onClick={() => {
                                  bid(post.pullout.id);
                                }}
                              >
                                Place Bid
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img src={relist} alt="No relisted investment" />
                  <h1 className="font-semibold text-xs text-statustext text-center mt-7">
                    No Relisted investments at this time. <br />
                    Keep Investing.
                  </h1>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center p-10 hidden">
            <button className="border border-more font-medium rounded-full w-40 h-10 text-neutral flex justify-center items-center">
              <TbLoader className="mr-3" /> Load more
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Relisted;
