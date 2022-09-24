import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { RiSettings3Fill } from "react-icons/ri";
import { AiFillPropertySafety } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";

function SideBar() {
  const [fix, setFix] = useState(false);
  function sideBarFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else setFix(false);
  }

  window.addEventListener("scroll", sideBarFixed);
  return (
    <div className={`${fix ? "fixed -top-10 w-1/5" : "w-full"}`}>
      <div className="side-nav">
        <NavLink to="/admin/dashboard">
          <div className="sidenav-items">
            {/* <MdDashboard className="s-icons" />
             */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                // fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.8V3.7C16.5 2.575 16.02 2.125 14.8275 2.125H11.7975C10.605 2.125 10.125 2.575 10.125 3.7V8.8C10.125 9.925 10.605 10.375 11.7975 10.375H14.8275C16.02 10.375 16.5 9.925 16.5 8.8Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 15.55V14.2C16.5 13.075 16.02 12.625 14.8275 12.625H11.7975C10.605 12.625 10.125 13.075 10.125 14.2V15.55C10.125 16.675 10.605 17.125 11.7975 17.125H14.8275C16.02 17.125 16.5 16.675 16.5 15.55Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.875 10.45V15.55C7.875 16.675 7.395 17.125 6.2025 17.125H3.1725C1.98 17.125 1.5 16.675 1.5 15.55V10.45C1.5 9.325 1.98 8.875 3.1725 8.875H6.2025C7.395 8.875 7.875 9.325 7.875 10.45Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.875 3.7V5.05C7.875 6.175 7.395 6.625 6.2025 6.625H3.1725C1.98 6.625 1.5 6.175 1.5 5.05V3.7C1.5 2.575 1.98 2.125 3.1725 2.125H6.2025C7.395 2.125 7.875 2.575 7.875 3.7Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Dashboard</h1>
          </div>
        </NavLink>
        <NavLink to="/admin/merchants">
          <div className="sidenav-items">
            {/* <FaRegUserCircle className="" /> */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.59505 10.9225C9.75899 10.9225 10.7025 9.97893 10.7025 8.81499C10.7025 7.65105 9.75899 6.70749 8.59505 6.70749C7.43111 6.70749 6.48755 7.65105 6.48755 8.81499C6.48755 9.97893 7.43111 10.9225 8.59505 10.9225Z"
                  // stroke="#292D32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.4875 15.775C12.4875 14.0275 10.7475 12.6025 8.59501 12.6025C6.44251 12.6025 4.70251 14.02 4.70251 15.775"
                  // stroke="#292D32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 10C15.75 13.9375 12.5625 17.125 8.625 17.125C4.6875 17.125 1.5 13.9375 1.5 10C1.5 6.0625 4.6875 2.875 8.625 2.875C9.6075 2.875 10.545 3.06999 11.4 3.42999C11.3025 3.72999 11.25 4.045 11.25 4.375C11.25 4.9375 11.4075 5.47 11.685 5.92C11.835 6.175 12.03 6.40748 12.255 6.60248C12.78 7.08248 13.4775 7.375 14.25 7.375C14.58 7.375 14.895 7.32248 15.1875 7.21748C15.5475 8.07248 15.75 9.0175 15.75 10Z"
                  // stroke="#292D32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.25 4.375C17.25 4.615 17.22 4.84749 17.16 5.07249C17.0925 5.37249 16.9725 5.665 16.815 5.92C16.455 6.5275 15.8775 6.99998 15.1875 7.21748C14.895 7.32248 14.58 7.375 14.25 7.375C13.4775 7.375 12.78 7.08248 12.255 6.60248C12.03 6.40748 11.835 6.175 11.685 5.92C11.4075 5.47 11.25 4.9375 11.25 4.375C11.25 4.045 11.3025 3.72999 11.4 3.42999C11.5425 2.99499 11.7825 2.60502 12.0975 2.28252C12.645 1.72002 13.41 1.375 14.25 1.375C15.135 1.375 15.9375 1.75751 16.4775 2.37251C16.9575 2.90501 17.25 3.61 17.25 4.375Z"
                  // stroke="#292D32"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.3674 4.35999H13.1324"
                  // stroke="#292D32"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.25 3.26501V5.50751"
                  // stroke="#292D32"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Merchants</h1>
          </div>
        </NavLink>
        <NavLink to="/admin/investments">
          <div className="sidenav-items ">
            {/* <GiWallet className="s-icons" />
             */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.49497 2.5136L9.47247 2.5661L7.29747 7.6136H5.15997C4.64997 7.6136 4.16247 7.7186 3.71997 7.9061L5.03247 4.7711L5.06247 4.6961L5.11497 4.5761C5.12997 4.5311 5.14497 4.4861 5.16747 4.4486C6.14997 2.1761 7.25997 1.6586 9.49497 2.5136Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5376 7.7636C13.2001 7.6586 12.8401 7.6136 12.4801 7.6136H7.29761L9.47261 2.5661L9.49511 2.5136C9.60761 2.5511 9.71261 2.6036 9.82511 2.6486L11.4826 3.3461C12.4051 3.7286 13.0501 4.1261 13.4401 4.6061C13.5151 4.6961 13.5751 4.7786 13.6276 4.8761C13.6951 4.9811 13.7476 5.0861 13.7776 5.1986C13.8076 5.2661 13.8301 5.3336 13.8451 5.3936C14.0476 6.0236 13.9276 6.7961 13.5376 7.7636Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.1413 11.2738V12.7363C16.1413 12.8863 16.1338 13.0363 16.1263 13.1863C15.9838 15.8038 14.5213 17.1238 11.7463 17.1238H5.89629C5.71629 17.1238 5.53629 17.1088 5.36379 17.0863C2.97879 16.9288 1.70379 15.6538 1.54629 13.2688C1.52379 13.0963 1.50879 12.9163 1.50879 12.7363V11.2738C1.50879 9.76627 2.42379 8.46877 3.72879 7.90627C4.17879 7.71877 4.65879 7.61377 5.16879 7.61377H12.4888C12.8563 7.61377 13.2163 7.66627 13.5463 7.76377C15.0388 8.22127 16.1413 9.61627 16.1413 11.2738Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.0325 4.7711L3.72 7.9061C2.415 8.4686 1.5 9.7661 1.5 11.2736V9.0761C1.5 6.9461 3.015 5.1686 5.0325 4.7711Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.1389 9.07574V11.2732C16.1389 9.62324 15.0439 8.22074 13.5439 7.77074C13.9339 6.79574 14.0464 6.03074 13.8589 5.39324C13.8439 5.32574 13.8214 5.25824 13.7914 5.19824C15.1864 5.91824 16.1389 7.39574 16.1389 9.07574Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 13.7899C7.5 14.4349 7.995 14.9549 8.61 14.9549H9.865C10.4 14.9549 10.835 14.4999 10.835 13.9399C10.835 13.3299 10.57 13.1149 10.175 12.9749L8.16 12.2749C7.765 12.1349 7.5 11.9199 7.5 11.3099C7.5 10.7499 7.935 10.2949 8.47 10.2949H9.725C10.34 10.2949 10.835 10.8149 10.835 11.4599"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16406 9.625V15.625"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Investment</h1>
          </div>
        </NavLink>
        <NavLink to="/admin/investors">
          <div className="sidenav-items">
            {/* <BiUserPin className="s-icons" /> */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 14.77H12.93C12.33 14.77 11.76 15.0025 11.34 15.4225L10.0575 16.69C9.47248 17.2675 8.52001 17.2675 7.93501 16.69L6.6525 15.4225C6.2325 15.0025 5.655 14.77 5.0625 14.77H4.5C3.255 14.77 2.25 13.7725 2.25 12.5425V4.3525C2.25 3.1225 3.255 2.125 4.5 2.125H13.5C14.745 2.125 15.75 3.1225 15.75 4.3525V12.535C15.75 13.765 14.745 14.77 13.5 14.77Z"
                  // stroke="#5E636D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.05255 7.3375C9.02255 7.3375 8.97753 7.3375 8.94003 7.3375C8.15253 7.3075 7.53003 6.67 7.53003 5.875C7.53003 5.065 8.18254 4.4125 8.99254 4.4125C9.80254 4.4125 10.455 5.0725 10.455 5.875C10.4625 6.67 9.84005 7.315 9.05255 7.3375Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.93758 9.595C5.94008 10.2625 5.94008 11.35 6.93758 12.0175C8.07008 12.775 9.93008 12.775 11.0626 12.0175C12.0601 11.35 12.0601 10.2625 11.0626 9.595C9.93008 8.845 8.07758 8.845 6.93758 9.595Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Investors</h1>
          </div>
        </NavLink>
        <NavLink to="/admin/staffs">
          <div className="sidenav-items">
            {/* <TiGroup className="s-icons" /> */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                // fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5001 5.995C13.4551 5.9875 13.4026 5.9875 13.3576 5.995C12.3226 5.9575 11.4976 5.11 11.4976 4.06C11.4976 2.9875 12.3601 2.125 13.4326 2.125C14.5051 2.125 15.3676 2.995 15.3676 4.06C15.3601 5.11 14.5351 5.9575 13.5001 5.995Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.7276 11.455C13.7551 11.6275 14.8876 11.4475 15.6826 10.915C16.7401 10.21 16.7401 9.05501 15.6826 8.35001C14.8801 7.81751 13.7326 7.6375 12.7051 7.8175"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.47761 5.995C4.52261 5.9875 4.57511 5.9875 4.62011 5.995C5.65511 5.9575 6.48011 5.11 6.48011 4.06C6.48011 2.9875 5.61761 2.125 4.54511 2.125C3.47261 2.125 2.61011 2.995 2.61011 4.06C2.61761 5.11 3.44261 5.9575 4.47761 5.995Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.25008 11.455C4.22258 11.6275 3.09008 11.4475 2.29508 10.915C1.23758 10.21 1.23758 9.05501 2.29508 8.35001C3.09758 7.81751 4.24508 7.6375 5.27258 7.8175"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.00006 11.5975C8.95506 11.59 8.90256 11.59 8.85756 11.5975C7.82256 11.56 6.99756 10.7125 6.99756 9.6625C6.99756 8.59 7.86006 7.7275 8.93256 7.7275C10.0051 7.7275 10.8676 8.5975 10.8676 9.6625C10.8601 10.7125 10.0351 11.5675 9.00006 11.5975Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.81754 13.96C5.76004 14.665 5.76004 15.82 6.81754 16.525C8.01754 17.3275 9.98254 17.3275 11.1825 16.525C12.24 15.82 12.24 14.665 11.1825 13.96C9.99004 13.165 8.01754 13.165 6.81754 13.96Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Staffs</h1>
          </div>
        </NavLink>
        <NavLink to="/admin/roles-permission">
          <div className="sidenav-items ">
            {/* <AiFillPropertySafety className="s-icons" />
             */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6824 8.96499C15.6824 12.6325 13.0199 16.0675 9.38239 17.0725C9.13489 17.14 8.86488 17.14 8.61738 17.0725C4.97988 16.0675 2.31738 12.6325 2.31738 8.96499V5.67248C2.31738 5.05748 2.78239 4.35998 3.35989 4.12748L7.53738 2.41751C8.47488 2.03501 9.53238 2.03501 10.4699 2.41751L14.6474 4.12748C15.2174 4.35998 15.6899 5.05748 15.6899 5.67248L15.6824 8.96499Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10C9.82843 10 10.5 9.32843 10.5 8.5C10.5 7.67157 9.82843 7 9 7C8.17157 7 7.5 7.67157 7.5 8.5C7.5 9.32843 8.17157 10 9 10Z"
                  // stroke="#5E636D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10V12.25"
                  // stroke="#5E636D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Roles & Permission</h1>
          </div>
        </NavLink>
        <NavLink to="/admin/transactions">
          <div className="sidenav-items ">
            {/* <AiFillPropertySafety className="s-icons" />
             */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6824 8.96499C15.6824 12.6325 13.0199 16.0675 9.38239 17.0725C9.13489 17.14 8.86488 17.14 8.61738 17.0725C4.97988 16.0675 2.31738 12.6325 2.31738 8.96499V5.67248C2.31738 5.05748 2.78239 4.35998 3.35989 4.12748L7.53738 2.41751C8.47488 2.03501 9.53238 2.03501 10.4699 2.41751L14.6474 4.12748C15.2174 4.35998 15.6899 5.05748 15.6899 5.67248L15.6824 8.96499Z"
                  // stroke="#5E636D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10C9.82843 10 10.5 9.32843 10.5 8.5C10.5 7.67157 9.82843 7 9 7C8.17157 7 7.5 7.67157 7.5 8.5C7.5 9.32843 8.17157 10 9 10Z"
                  // stroke="#5E636D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10V12.25"
                  // stroke="#5E636D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Transactions</h1>
          </div>
        </NavLink>
        <NavLink to="/admin/settings">
          <div className="sidenav-items  ">
            {/* <RiSettings3Fill className="s-icons" /> */}
            <div className="s-icons">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                // stroke="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11.875C10.2426 11.875 11.25 10.8676 11.25 9.625C11.25 8.38236 10.2426 7.375 9 7.375C7.75736 7.375 6.75 8.38236 6.75 9.625C6.75 10.8676 7.75736 11.875 9 11.875Z"
                  // stroke="#5E636D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.5 10.285V8.965C1.5 8.185 2.1375 7.54 2.925 7.54C4.2825 7.54 4.8375 6.58 4.155 5.4025C3.765 4.7275 3.9975 3.85 4.68 3.46L5.9775 2.7175C6.57 2.365 7.335 2.575 7.6875 3.1675L7.77 3.31C8.445 4.4875 9.555 4.4875 10.2375 3.31L10.32 3.1675C10.6725 2.575 11.4375 2.365 12.03 2.7175L13.3275 3.46C14.01 3.85 14.2425 4.7275 13.8525 5.4025C13.17 6.58 13.725 7.54 15.0825 7.54C15.8625 7.54 16.5075 8.1775 16.5075 8.965V10.285C16.5075 11.065 15.87 11.71 15.0825 11.71C13.725 11.71 13.17 12.67 13.8525 13.8475C14.2425 14.53 14.01 15.4 13.3275 15.79L12.03 16.5325C11.4375 16.885 10.6725 16.675 10.32 16.0825L10.2375 15.94C9.5625 14.7625 8.4525 14.7625 7.77 15.94L7.6875 16.0825C7.335 16.675 6.57 16.885 5.9775 16.5325L4.68 15.79C3.9975 15.4 3.765 14.5225 4.155 13.8475C4.8375 12.67 4.2825 11.71 2.925 11.71C2.1375 11.71 1.5 11.065 1.5 10.285Z"
                  // stroke="#5E636D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1>Settings</h1>
          </div>
        </NavLink>
      </div>
      {/* <div className="border-t p-5">
        <div className="flex p-3 font-medium text-sideText">
          <BiLogOut className="s-icons" />
          <h1>Logout</h1>
        </div>
      </div> */}
    </div>
  );
}

export default SideBar;
