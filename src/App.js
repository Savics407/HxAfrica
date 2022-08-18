// import logo from './logo.svg';
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./assets/Login";
import Auth from "./assets/Signup";
import Dashboard from "./assets/Dashboard";
import Details from "./assets/Investment_Details";
import { Routes, Route, Link } from "react-router-dom";
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

function App() {
  return (
    <div>
      {/* <UseNetworkStatus /> */}
      <Routes>
        <Route path="/sign-up" element={<Auth />} />
        <Route path="/" element={<Login />} />
        <Route path="/status" element={<UseNetworkStatus />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/buytoken/success" element={<Success />} />

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
          <Route path="/investments/ongoing" element={<Ongoing />} />
          <Route path="/investments/completed" element={<Completed />} />
          <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
          <Route
            path="/investments/relisted-investment"
            element={<Relisted />}
          />
          <Route path="/investments/my-investment" element={<Mine />} />
          {/* <Route path="/header" element={<Header />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
