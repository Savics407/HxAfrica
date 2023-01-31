import React, { useEffect, useState } from "react";
import pullout from "../images/pulledout.svg";
import ongoing from "../images/ongoingRelisted.svg";
import completed from "../images/completedRelisted.svg";
import totalInvestment from "../images/totalInvestment.svg";
import relistedInvestment from "../images/relisted.svg";

function InvestmentCard() {
  const [total, setTotal] = useState();
  async function fetchTotal() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_investment_total`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data.name);
    setTotal(result?.data);
  }
  useEffect(() => {
    fetchTotal();
  }, []);

  return (
    <div>
      <div className="bg-white py-9 px-1 rounded-lg my-5 flex justify-between">
        <div className="flex w-1/5 py-1 px-2 ">
          <div className="mr-3">
            <img src={totalInvestment} alt="total Users" />
          </div>
          <div>
            <h1 className="text-earnings font-medium text-xs truncate">
              Total Investments
            </h1>
            <h1 className="text-dark font-medium text-2xl">
              {total?.total_investment}
            </h1>
          </div>
        </div>
        <div className="border-x-2 flex w-1/5 py-1 px-2">
          <div className="mr-3">
            <img src={relistedInvestment} alt="total Investment" />
          </div>
          <div>
            <h1 className="text-earnings font-medium text-xs truncate">
              Unapproved Investments
            </h1>
            <h1 className="text-dark font-medium text-2xl">
              {total?.total_pending_investments}
            </h1>
          </div>
        </div>
        <div className="flex w-1/5 py-1 px-2">
          <div className="mr-3">
            <img src={pullout} alt="relistedInvestments" />
          </div>
          <div>
            <h1 className="text-earnings font-medium text-xs truncate">
              New Investments
            </h1>
            <h1 className="text-dark font-medium text-2xl">
              {total?.total_new_investments}
            </h1>
          </div>
        </div>
        <div className="border-x-2 flex w-1/5 py-1 px-2">
          <div className="mr-3">
            <img src={ongoing} alt="relistedInvestments" />
          </div>
          <div>
            <h1 className="text-earnings font-medium text-xs truncate">
              Ongoing Investments
            </h1>
            <h1 className="text-dark font-medium text-2xl">
              {total?.total_ongoing_investments}
            </h1>
          </div>
        </div>
        <div className="flex w-1/5 py-1 px-2">
          <div className="mr-3">
            <img src={completed} alt="relistedInvestments" />
          </div>
          <div>
            <h1 className="text-earnings font-medium text-xs truncate">
              Completed Investments
            </h1>
            <h1 className="text-dark font-medium text-2xl">
              {total?.total_completed_investments}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentCard;
