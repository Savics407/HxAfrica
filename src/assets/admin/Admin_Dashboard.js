import React from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";

function Admin_Dashboard() {
  return (
    <div className="bg-dashbg">
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
          <div className="bg-white p-10 rounded-lg my-5">Total Users</div>
        </div>
        <div className="w-27 border">Compactment 3</div>
      </div>
    </div>
  );
}

export default Admin_Dashboard;
