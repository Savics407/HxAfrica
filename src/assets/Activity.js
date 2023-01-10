import Header from "./Header";
import { motion } from "framer-motion";
import Protabs from "./Protabs";
import { BiLogOut } from "react-icons/bi";
import opps from "./images/Artwork.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Activity() {
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
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
  return (
    <div className="font-family bg-mainbg">
      <Header />

      <div className="lg:w-10/12 w-full m-auto lg:mt-20 bg-white rounded-lg pb-10 lg:py-8 lg:px-10">
        <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between">
          <h1 className="capitalize">Profile Details</h1>
          <button
            className="bg-green rounded-full text-dashbg py-1 px-5 text-xs font-bold flex items-center justify-center "
            onClick={logOut}
          >
            <BiLogOut className="mr-1 text-sm" /> Log Out
          </button>
        </div>
        <div className="bg-white rounded-xl">
          <div className="lg:block hidden py-10 font-semibold flex justify-between items-center text-modal text-2xl">
            <h1>Profile Details</h1>
          </div>

          <Protabs />
          <div className="my-16 flex items-center justify-center ">
            <div className="text-center lg:my-10  my-20">
              <img
                src={opps}
                alt="Opps Nothing new here"
                className="w-48 lg:w-auto mb-5 lg:mb-0"
              />
              <h1 className="font-semibold lg:text-lg text-sm text-footer">
                Opps Nothing new here
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center hidden lg:block">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Activity;
