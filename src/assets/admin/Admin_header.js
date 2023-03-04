import user from "../images/default_profile.svg";
import { FaAngleDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
// import logo from "../images/logo.svg";
import logo from "../images/HXafrica Logo 1.svg";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const [isClick, setIsClick] = useState(false);
  const [logout, setLogout] = useState(false);
  const userName = localStorage.getItem("name");
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
  const [auth, setAuth] = useState(false);
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_dashboard_total`,
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
  // const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
                <h1 className="lg:font-bold font-semibold text-neutral text-3xl lg:text-4xl">
                  Authentication <br />
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
                    navigate("/login");
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
      <div className="bg-green text-center text-white py-4 hidden lg:block">
        <div className="pr-10 pl-0 flex items-center justify-between">
          <Link to="/dashboard">
            <div className="w-48 h-12">
              <img src={logo} alt="Hx Logo" />
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
              <div className="notify animate-ping"></div>
              <div className="notify"></div>
              <div
                className={`notification z-50 ${
                  isClick ? "show-note" : "remove-note"
                }`}
              >
                <div className=" arrow4 relative ">
                  <h1 className="text-2xl font-semibold">Notifications</h1>
                </div>

                <div className="text-sm my-4">
                  <h1>Login attempted from new IP</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm my-4">
                  <h1>Login attempted from new IP</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm my-4">
                  <h1>Request to reset security</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm my-4">
                  <h1>Login attempted from new IP</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm my-4">
                  <h1>Request to reset security</h1>
                  <p className="text-footer text-xs mt-1">
                    2021-03-10 20:19:15
                  </p>
                </div>
                <div className="text-sm my-4">
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
              className={`fixed top-0 left-0 bottom-0 right-0 cursor-pointer z-10 ${
                logout ? "show-note" : "remove-note"
              }`}
              onClick={() => setLogout(!logout)}
            ></div>
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
              <Link to="/admin/settings">
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
    </>
  );
}

export default Header;
