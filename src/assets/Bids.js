import React, { useEffect, useState } from "react";
import Header from "./Header";
import InvestTabs from "./InvestTabs";
import box from "./images/Box.png";
import land from "./images/rawland2.png";
import moment from "moment";
import crowd from "./images/crowdfund.png";
import { toast } from "react-toastify";
import * as CurrencyFormat from "react-currency-format";
import success from "./images/Success Icon.svg";
import { TbLoader } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScaleLoader from "react-spinners/ScaleLoader";
import TopUp from "./TopUp";

function Bids() {
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <div className="font-family">
      <Header />
      <div className="w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4">
        <div className="bg-white p-10 w-full rounded-lg">
          <div className="mb-10 border-b pb-10">
            <h1 className="text-modal text-2xl font-semibold">
              Investment Bid
            </h1>
          </div>

          <div className="mb-8 mine investlists">
            {available ? (
              <>
                {loading ? (
                  <div className="text-center px-20 py-40">
                    <ScaleLoader color="#008E10" height={50} width={6} />
                  </div>
                ) : (
                  <div className="flex flex-wrap mb-4"> Coming Soon </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-128">
                <div className="flex flex-col justify-center items-center">
                  <img src={box} alt="No relisted investment" />
                </div>
                <h1 className="font-semibold text-xs text-statustext text-center -ml-10">
                  You have no bids currently on <br />
                  your cart at the moment.
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bids;
