// import logo from './logo.svg';
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./assets/Login";
import Auth from "./assets/Signup";
import Dashboard from "./assets/Dashboard";
import Details from "./assets/Investment_Details";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Processing from "./assets/ProcessingBvn";
import Investment from "./assets/Investment";
import Ongoing from "./assets/Ongoing";
import Completed from "./assets/Completed";
import Mine from "./assets/Mine";
import Relisted from "./assets/Relisted";
import Token from "./assets/Token";
import AddBank from "./assets/AddBank";
import Notification from "./assets/Notification";
import Profile from "./assets/Settings";
import ChangePassword from "./assets/ChangePassword";
import Activity from "./assets/Activity";
import Header from "./assets/Header";
import PrivateRoutes from "./util/PrivateRoutes";
import UseNetworkStatus from "./useNetworkStatus";
import SelectAvater from "./assets/SelectAvater";
import Success from "./assets/Success";
import Withdraw from "./assets/WithdrawToken";
import Admin_Dashboard from "./assets/admin/Admin_Dashboard";
import Staffs from "./assets/admin/Staffs";
import Marchants from "./assets/admin/Marchants";
import PullFunds from "./assets/admin/PullFunds";
import AllInvestments from "./assets/admin/AllInvestments";
import Approved from "./assets/admin/Approved";
import Inactive from "./assets/admin/Inactive";
import RelistedInvestments from "./assets/admin/RelistedInvestments";
import CompletedInvestment from "./assets/admin/CompletedInvestment";
import Investors from "./assets/admin/Investors";
import Banned from "./assets/admin/Banned";
import RolesPermission from "./assets/admin/RolesPermission";
import AdminSettings from "./assets/admin/AdminSettings";
import BiddersChat from "./assets/Chats/biddersChat";
import Owner from "./assets/Chats/Owner";
import Disbursed from "./assets/admin/Disbursed";
import { motion } from "framer-motion";
import Pending from "./assets/Pending";
import Bids from "./assets/Bids";
import NewInvestment from "./assets/NewInvestments";
import AdminRoutes from "./util/AdminRoutes";
import Transactions from "./assets/admin/Transactions";
import InvestorsTransactions from "./assets/admin/InvestorsTransactions";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/fetch_user_profile",
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
    // setUserName(result?.data.username);
    // localStorage.setItem("user-name", userName);
    if (result?.status === "error") {
      setAuth(true);
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <UseNetworkStatus /> */}
      {auth && (
        <div>
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay justify-center flex items-center backdrop-blur-xs z-50">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.5,
                },
              }}
              className="lg:w-128 w-11/12 bg-white rounded-xl border-green p-6 text-center"
            >
              <div className="flex flex-col items-center ">
                {/* <img src={success} alt="success" className="w-28 mb-5" /> */}
                <h1 className="lg:font-bold font-semibold text-neutral text-4xl">
                  Authenication <br />
                  Error!
                </h1>
              </div>
              <div className="font-semibold lg:text-base text-sm text-neutral my-8">
                <p>Kindly login again...</p>
              </div>
              <div className=" text-center w-11/12 mb-2 m-auto">
                <button
                  className="rounded-full w-full p-2 text-white bg-green flex justify-around items-center"
                  onClick={() => {
                    navigate("/");
                    setAuth(false);
                    window.localStorage.removeItem("user-token");
                  }}
                >
                  Login
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/sign-up" element={<Auth />} />
        <Route path="/" element={<Login />} />

        <Route path="/status" element={<UseNetworkStatus />} />
        <Route element={<AdminRoutes />}>
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route
            path="/admin/transactions/investors"
            element={<InvestorsTransactions />}
          />
          <Route path="/admin/staffs" element={<Staffs />} />
          <Route path="/admin/merchants" element={<Marchants />} />
          <Route path="/admin/investors" element={<Investors />} />
          <Route path="/admin/roles-permission" element={<RolesPermission />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/investors/banned" element={<Banned />} />
          <Route
            path="/admin/merchants/pull-funds-request"
            element={<PullFunds />}
          />
          <Route
            path="/admin/merchants/disbursed-funds"
            element={<Disbursed />}
          />
          <Route path="/admin/investments" element={<AllInvestments />} />
          <Route path="/admin/investments/approved" element={<Approved />} />
          <Route path="/admin/investments/inactive" element={<Inactive />} />
          <Route
            path="/admin/investments/completed"
            element={<CompletedInvestment />}
          />
          <Route
            path="/admin/investments/relisted"
            element={<RelistedInvestments />}
          />
          <Route path="/admin/dashboard" element={<Admin_Dashboard />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/investment-chat" element={<BiddersChat />} />
          {/* <Route path="/investment-chat" element={<Owner />} /> */}
          <Route path="/bids" element={<Bids />} />
          <Route path="/buytoken/success" element={<Success />} />
          <Route path="/investment/pending" element={<Pending />} />
          <Route path="/select-avater" element={<SelectAvater />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/activities" element={<Activity />} />
          <Route path="/token" element={<Token />} />
          <Route path="/withdraw" element={<Withdraw />} />

          <Route path="/details" element={<Details />} />
          <Route path="/addbank" element={<AddBank />} />
          <Route path="/bvn" element={<Processing />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/investment" element={<Investment />} />
          <Route
            path="/investment/new-investment"
            element={<NewInvestment />}
          />
          <Route path="/investment/ongoing" element={<Ongoing />} />
          <Route path="/investment/completed" element={<Completed />} />
          <Route
            path="/investment/relisted-investment"
            element={<Relisted />}
          />
          <Route path="/investment/my-investment" element={<Mine />} />
          {/* <Route path="/header" element={<Header />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
