import React, { useEffect } from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";

import InvestorList from "./InvestorList";
import MerchantActivities from "./MerchantActivities";
import InvestorsActivities from "./InvestorsActivities";

function InvestorsTransactions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-dashbg font-family">
      <Header />
      <div className="flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className=" w-4/5 p-5 mb-20">
          <div className=" bg-white p-10 rounded-lg">
            <h1 className="text-dark  font-black text-3xl mb-3">
              Transactions
            </h1>
          </div>
          <div className="flex justify-between">
            <div className="w-full">
              <InvestorsActivities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorsTransactions;
