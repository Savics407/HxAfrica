import user from "./images/default_profile.svg";
import { FaAngleDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import logo from "./images/REICLogo.png";
import status from "./images/status.png";
import { MdDashboard } from "react-icons/md";
import { MdInsertChart } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiSettings3Fill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isClick, setIsClick] = useState(false);
  const [logout, setLogout] = useState(false);
  const userName = localStorage.getItem("user-name");
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("user-email");
  const userIcon = localStorage.getItem("user-profile");
  const logOut = () => {
    window.localStorage.removeItem("user-token");
    toast.success(`User logged out Successfully`, {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");
  };

  // const notify = () =>
  //   toast.warn("Wow so easy!", {
  //     position: "top-right",
  //     autoClose: 1500,
  //     hideProgressBar: false,
  //     closeOnClick: false,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     onOpen: () => window.alert("Called when I open"),
  //     onClose: () => window.alert("Called when I close"),
  //   });
  return (
    <>
      <div className="bg-green text-center text-white py-4 hidden lg:block">
        <div className="w-10/12 m-auto flex items-center justify-between hidden md:flex">
          <Link to="/dashboard">
            <div className="w-48 h-12">
              <img src={logo} alt="REIC Logo" />
            </div>
          </Link>
          <div className=" border-white flex items-center relative">
            <div
              className="bg-primary text-dark rounded-full px-3 py-2.5 relative cursor-pointer"
              onClick={() => {
                setIsClick(!isClick);
                setLogout(false);
              }}
            >
              <FaBell className="w-4 h-5" />
              <div className="notify"></div>
              <div
                className={`notification z-50 ${
                  isClick ? "show-note" : "remove-note"
                }`}
              >
                <div className="arrow relative">
                  <h1 className="text-2xl font-semibold">Notifications</h1>
                </div>
                <div className="text-sm  my-4">
                  <h1>Login attempted from new IP</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm  my-4">
                  <h1>Login attempted from new IP</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm  my-4">
                  <h1>Request to reset security</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm  my-4">
                  <h1>Login attempted from new IP</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm  my-4">
                  <h1>Request to reset security</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm  my-4">
                  <h1>Login attempted from new IP</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="">
                    <Link to="/notification">
                      <button className="bg-green rounded-full text-dashbg w-48 h-10 text-sm">
                        View all
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button className="border rounded-full text-neutral w-48 h-10 text-sm">
                      Clear all
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex items flex items-center text-sm ml-6 mr-3 relative cursor-pointer"
              onClick={() => {
                setLogout(!logout);
                setIsClick(false);
              }}
            >
              <h1 className="font-semibold mr-1">{userName}</h1>
              <FaAngleDown />
              <div
                className={`absolute py-6 text-neutral px-16 -right-5 top-20 -mt-2 rounded-xl shadow-2xl bg-dashbg text-left invisible  flex flex-col items-center duration-300 z-50 ${
                  logout ? "show-note !top-12" : "remove-note"
                }`}
              >
                <div className="arrow3 relative text-center mb-5">
                  <h1 className="text-2xl font-semibold mb-3">{userName}</h1>
                  <h1 className="text-sm text-footer font-normal">
                    {userEmail}
                  </h1>
                </div>

                <div className="">
                  <button
                    className="bg-green rounded text-dashbg py-3 px-5 w-44 text-sm font-bold flex items-center justify-center"
                    onClick={logOut}
                  >
                    <BiLogOut className="mr-1 text-lg" /> Log Out
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-10 bg-mainbg rounded-full h-10">
              <Link to="/settings">
                {!!userIcon ? (
                  <img
                    src={userIcon}
                    alt="User-Icon"
                    className="object-fill  "
                  />
                ) : (
                  <img src={user} alt="User-Icon" className="object-cover" />
                )}
              </Link>
              <div className="online"></div>

              <div
                className={`fixed top-0 left-0 bottom-0 right-0 cursor-pointer z-10 ${
                  isClick ? "show-note" : "remove-note"
                }`}
                onClick={() => setIsClick(!isClick)}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <NavLink to="/dashboard">
          <div className="nav-items">
            <MdDashboard className="ds-icons" />
            <h1>Dashboard</h1>
          </div>
        </NavLink>
        <NavLink to="/investment">
          <div className="nav-items">
            <MdInsertChart className="ds-icons" />
            <h1>Investment</h1>
          </div>
        </NavLink>
        <NavLink to="/token">
          <div className="nav-items">
            <AiFillDollarCircle className="ds-icons" />
            <h1>Token</h1>
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div className="nav-items">
            <RiSettings3Fill className="ds-icons" />
            <h1>Settings</h1>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
