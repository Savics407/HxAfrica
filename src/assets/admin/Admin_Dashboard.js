import React from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";
import totalUsers from "../images/totalUsers.svg";
import totalInvestment from "../images/totalInvestment.svg";
import relistedInvestment from "../images/relistedInvestment.svg";
import BarChart from "./BarChart";

function Admin_Dashboard() {
  return (
    <div className="bg-dashbg font-family">
      <Header />
      <div className=" flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className="w-53 pt-5">
          <div className="welcome bg-welcome p-10 rounded-lg border lg:block hidden">
            <h1 className="text-green font-black text-2xl mb-3">
              Hi, <span className="text-dark ml-1">Admin</span>
            </h1>
            <p className="font-normal text-lg text-dark">Welcome Back</p>
          </div>
          <div className="bg-white py-9 rounded-lg my-5 flex justify-between">
            <div className="flex w-1/3 py-1 pl-10 ">
              <div className="mr-3">
                <img src={totalUsers} alt="total Users" />
              </div>
              <div>
                <h1 className="text-earnings font-medium text-xs">
                  Total Users
                </h1>
                <h1 className="text-dark font-medium text-2xl">670 Users</h1>
              </div>
            </div>
            <div className="border-x-2 flex w-1/3 py-1 pl-10">
              <div className="mr-3">
                <img src={totalInvestment} alt="total Investment" />
              </div>
              <div>
                <h1 className="text-earnings font-medium text-xs">
                  Total Investments
                </h1>
                <h1 className="text-dark font-medium text-2xl">2,000</h1>
              </div>
            </div>
            <div className="flex w-1/3 py-1 pl-10">
              <div className="mr-3">
                <img src={relistedInvestment} alt="relistedInvestments" />
              </div>
              <div>
                <h1 className="text-earnings font-medium text-xs">
                  Relisted Investments
                </h1>
                <h1 className="text-dark font-medium text-2xl">150</h1>
              </div>
            </div>
          </div>
          <BarChart />
        </div>
        <div className="w-27 border">Compactment 3</div>
      </div>
    </div>
  );
}

export default Admin_Dashboard;
