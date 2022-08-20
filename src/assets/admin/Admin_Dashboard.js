import React from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";
import totalUsers from "../images/totalUsers.svg";
import totalInvestment from "../images/totalInvestment.svg";
import relistedInvestment from "../images/relistedInvestment.svg";
import toggle from "../images/Inputs.svg";
import rectangle from "../images/rectangle.svg";
import rectangle2 from "../images/rectangle2.svg";
import BarChart from "./BarChart";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import moment from "moment";
import { FaAngleRight } from "react-icons/fa";

function Admin_Dashboard() {
  return (
    <div className="bg-dashbg font-family">
      <Header />
      <div className=" flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className="w-53 pt-5 mb-20">
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
          <div className="rounded-lg bg-white mt-2 px-5 mb-3 pb-10">
            <div className="border-b border-stroke py-5 text-lg text-darker font-medium flex justify-between items-center cursor-pointer">
              <h1 className="">Activities</h1>
              <h1 className="text-blue text-xs flex items-center font-normal">
                See all transactions{" "}
                <FaAngleRight className="ml-2 text-blue text-sm" />
              </h1>
            </div>
            <div className="py-4">
              <table className=" w-full table-auto">
                <thead className="">
                  <tr className="text-left bg-table">
                    <th className="py-2 text-darker font-medium text-sm pl-5">
                      Type
                    </th>
                    <th className="py-2 pr-7 text-darker font-medium text-sm ">
                      Amount
                    </th>
                    <th className="py-2 pr-7 text-darker font-medium text-sm ">
                      Date
                    </th>
                    <th className="py-2 pr-7 text-darker font-medium text-sm ">
                      Time
                    </th>
                    <th className="py-2 pr-7 text-darker font-medium text-sm ">
                      status
                    </th>
                    {/* <th className="py-2 pr-7 text-darker font-medium text-sm">
                          Ends in
                        </th>
                        <th className="py-2 text-darker font-medium text-sm ">
                          Action
                        </th> */}
                  </tr>
                </thead>
                <tr className="py-8 border-b">
                  <td className="py-3 pl-5">
                    <h1 className="font-medium text-neutral text-xs">
                      Loan Request
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      20,000 <span className="text-currency">NGN</span>
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      Jul 16, 2022
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">8:30pm</h1>
                  </td>

                  <td className="py-3">
                    <button className="font-medium text-sm font-inter bg-bgGreen text-green rounded-full py-1 px-2">
                      Success
                    </button>
                  </td>
                </tr>
                <tr className="py-8 border-b">
                  <td className="py-3 pl-5">
                    <h1 className="font-medium text-neutral text-xs">
                      Buy Airtime
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      20,000 <span className="text-currency">NGN</span>
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      Jul 16, 2022
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">8:30pm</h1>
                  </td>

                  <td className="py-3">
                    <button className="font-medium text-sm font-inter bg-bgGreen text-green rounded-full py-1 px-2">
                      Success
                    </button>
                  </td>
                </tr>
                <tr className="py-8 border-b">
                  <td className="py-3 pl-5">
                    <h1 className="font-medium text-neutral text-xs">
                      Repay Loan
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      20,000 <span className="text-currency">NGN</span>
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      Jul 16, 2022
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">8:30pm</h1>
                  </td>

                  <td className="py-3">
                    <button className="font-medium text-sm font-inter bg-bgGreen text-green rounded-full py-1 px-2">
                      Success
                    </button>
                  </td>
                </tr>
                <tr className="py-8 border-b">
                  <td className="py-3 pl-5">
                    <h1 className="font-medium text-neutral text-xs">
                      Loan Request
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      20,000 <span className="text-currency">NGN</span>
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      Jul 16, 2022
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">8:30pm</h1>
                  </td>

                  <td className="py-3">
                    <button className="font-medium text-sm font-inter bg-bgGreen text-green rounded-full py-1 px-2">
                      Success
                    </button>
                  </td>
                </tr>
                <tr className="py-8 border-b">
                  <td className="py-3 pl-5">
                    <h1 className="font-medium text-neutral text-xs">
                      Loan Request
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      20,000 <span className="text-currency">NGN</span>
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      Jul 16, 2022
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">8:30pm</h1>
                  </td>

                  <td className="py-3">
                    <button className="font-medium text-sm font-inter bg-bgGreen text-green rounded-full py-1 px-2">
                      Success
                    </button>
                  </td>
                </tr>
                <tr className="py-8 border-b">
                  <td className="py-3 pl-5">
                    <h1 className="font-medium text-neutral text-xs">
                      Loan Request
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      20,000 <span className="text-currency">NGN</span>
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">
                      Jul 16, 2022
                    </h1>
                  </td>
                  <td className="py-3">
                    <h1 className="font-medium text-neutral text-xs">8:30pm</h1>
                  </td>

                  <td className="py-3">
                    <button className="font-medium text-sm font-inter bg-bgGreen text-green rounded-full py-1 px-2">
                      Success
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="w-27 pt-5 pr-5">
          <div className="bg-push flex justify-between rounded-lg py-5 pl-5 pr-10">
            <h1 className="text-white text-sm font-medium">
              Push Notification
            </h1>
            <img src={toggle} alt="toggle" />
          </div>
          <div className="rounded-lg bg-white p-10 my-5">
            <div className="w-44 m-auto">
              <CircularProgressbarWithChildren
                value={78}
                // text={"Total Investments"}
                // value={20}
                // text={10}
                strokeWidth={10}
                maxValue={100}
                // counterClockwise={true}s
                styles={buildStyles({
                  rotation: 0.04,
                  strokeLinecap: "round",
                  pathTransitionDuration: 0.5,
                  pathColor: "#008E10",
                  textColor: "#008E10",
                  trailColor: "#FF7171",
                })}
              >
                <div className="font-medium text-center">
                  <h1 className="text-green text-xs mb-2">Total Investments</h1>
                  <h1 className="text-darker text-xl ">2000</h1>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="flex justify-center mt-10">
              <div className="flex text-tiny font-normal text-banner mr-5">
                <img src={rectangle2} alt="green icon" className="mr-1" />
                <h1>Investment 78%</h1>
              </div>
              <div className="flex text-tiny font-normal text-banner">
                <img src={rectangle} alt="pink icon" className="mr-1" />
                <h1>Relisted 22%</h1>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white mt-2 pb-28">
            <div className="border-b border-stroke px-5 py-5 mb-5 text-lg text-darker font-medium">
              <h1 className="">Top Investments</h1>
            </div>
            <div className="px-5">
              <div className="border-b flex justify-between items-center py-5">
                <div>
                  <h1 className="text-deep text-sm  ">Crowdfunding</h1>
                  <h1 className="text-statustext text-xs font-normal">
                    200 Investors
                  </h1>
                </div>
                <div className="text-slight text-sm">
                  <h1>N200,000</h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="border-b flex justify-between items-center py-5">
                <div>
                  <h1 className="text-deep text-sm  ">Crowdfunding</h1>
                  <h1 className="text-statustext text-xs font-normal">
                    200 Investors
                  </h1>
                </div>
                <div className="text-slight text-sm">
                  <h1>N200,000</h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="border-b flex justify-between items-center py-5">
                <div>
                  <h1 className="text-deep text-sm  ">Crowdfunding</h1>
                  <h1 className="text-statustext text-xs font-normal">
                    200 Investors
                  </h1>
                </div>
                <div className="text-slight text-sm">
                  <h1>N200,000</h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="border-b flex justify-between items-center py-5">
                <div>
                  <h1 className="text-deep text-sm  ">Crowdfunding</h1>
                  <h1 className="text-statustext text-xs font-normal">
                    200 Investors
                  </h1>
                </div>
                <div className="text-slight text-sm">
                  <h1>N200,000</h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="border-b flex justify-between items-center py-5">
                <div>
                  <h1 className="text-deep text-sm  ">Crowdfunding</h1>
                  <h1 className="text-statustext text-xs font-normal">
                    200 Investors
                  </h1>
                </div>
                <div className="text-slight text-sm">
                  <h1>N200,000</h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="border-b flex justify-between items-center py-5">
                <div>
                  <h1 className="text-deep text-sm  ">Crowdfunding</h1>
                  <h1 className="text-statustext text-xs font-normal">
                    200 Investors
                  </h1>
                </div>
                <div className="text-slight text-sm">
                  <h1>N200,000</h1>
                </div>
              </div>
            </div>
            <h1 className="text-blue text-sm px-5 my-4">Show more</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Dashboard;
