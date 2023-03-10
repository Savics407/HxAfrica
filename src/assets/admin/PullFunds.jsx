import React from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";

import PullList from "./PullList";

import Products from "./Products";
import CreateMarchant from "./CreateMerchant";

function PullFunds() {
  return (
    <div className="bg-dashbg font-family">
      <Header />
      <div className="flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className=" w-4/5 p-5 mb-20">
          <div className=" bg-white p-10 rounded-lg">
            <h1 className="text-dark font-black text-3xl mb-3">Marchants</h1>
          </div>
          <div className="">
            <div className="">
              <CreateMarchant />
              <PullList />
            </div>
            {/* <div className="w-2/6 mt-5 rounded-lg bg-white">
              <Products />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PullFunds;
