import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import user from "./images/user_icon.png";
import userp from "./images/default_profile.svg";

function MobileHeader() {
  const name = localStorage.getItem("name");
  const user = localStorage.getItem("user-name");
  const [userName, setUserName] = useState();

  const userIcon = localStorage.getItem("user-profile");
  // async function fetchData() {
  //   const token = localStorage.getItem("user-token");
  //   // e.preventDefault();
  //   const response = await fetch(
  //     "https://reic.api.simpoo.biz/api/investor/fetch_user_profile",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   const result = await response.json();
  //   console.log(result.data);
  //   setUserName(result.data.username);
  //   localStorage.setItem("user-name", userName);
  // }

  // useEffect(() => {
  //   // activities();
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="lg:hidden bg-welcome p-6 rounded-lg flex items-center justify-between w-full">
        <div className="">
          <h1 className="text-green font-black text-lg mb-3">
            Hi,{" "}
            <span className="text-dark">
              {user === "null" ? name : user}
              {/* {user === "null" ? name : userName} */}
              {/* {user === "null" || user === "undefined" ? name : userName} */}
            </span>
          </h1>
          <p className="font-normal text-sm text-dark">You are welcome</p>
        </div>
        <div className="flex items-center">
          <Link to="/notification">
            <div className="bg-primary text-dark rounded-full px-3 py-2.5 relative cursor-pointer mr-3">
              <FaBell className="w-4 h-5" />
              <div className="w-2 h-2 bg-red rounded-full absolute top-2.5 right-2.5 border border-white"></div>
            </div>
          </Link>
          <div className="w-9 relative">
            <Link to="/settings">
              {/* <img src={userIcon} alt="User-Icon" className="" /> */}
              {!!userIcon ? (
                <img src={userIcon} alt="User-Icon" className="object-fill  " />
              ) : (
                <img src={userp} alt="User-Icon" className="object-cover" />
              )}
            </Link>
            <div className="w-2 h-2 bg-on rounded-full absolute bottom-0 right-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
