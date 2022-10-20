import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import search from "../images/Small.svg";
import avater from "../images/Avatar.svg";
// import Martabs from "./Martabs";
// import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
// import { MdArrowForwardIos } from "react-icons/md";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import EditMerchants from "./EditMerchants";

function MarchantsList() {
  const [merchants, setMerchants] = useState();
  async function fetchMerchants() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_merchants",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data.name);
    setMerchants(result?.data);
  }

  async function removeMerchant() {
    const token = localStorage.getItem("user-token");

    const payLoad = {
      user_id: merchantId,
    };
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/remove_merchant",
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    if (result?.status === "success") {
      setRemove(false);
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (result?.message) {
        toast(`${result.message}`, {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    fetchMerchants();
  }

  useEffect(() => {
    fetchMerchants();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [edit, setEdit] = useState(false);
  const [merchantId, setMerchantId] = useState();
  const [remove, setRemove] = useState(false);
  const [name, setName] = useState();
  const [filter, setFilter] = useState("All");
  const [select, setSelect] = useState(false);
  const [sort, setSort] = useState(false);
  // const [userId, setUserId] = useState();

  return (
    <>
      {edit && <EditMerchants setEdit={setEdit} merchantId={merchantId} />}
      {remove && (
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
          className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay backdrop-blur-sm z-10"
        >
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
            className={`lg:w-128 w-11/12 bg-white rounded-xl fixed top-48 border-green p-6 text-center`}
          >
            <div>
              <h1 className="lg:font-bold font-medium text-neutral text-2xl lg:text-3xl">
                Warning!
              </h1>
            </div>
            <div className="font-semibold lg:text-base text-xs text-neutral my-8">
              <p>
                Are you sure you want to remove <br />
                <span className="text-green"> {name}</span> from REIC ?
              </p>
            </div>
            <div className="flex justify-between">
              <button
                className="border rounded-full lg:w-44 h-12 w-40 text-neutral bg-dashbg text-sm lg:text-base"
                onClick={() => {
                  setRemove(false);
                  // setWarning(!warning);
                }}
              >
                No, Cancel
              </button>
              <button
                className="rounded-full w-40 lg:w-44 h-12 text-dashbg bg-green text-sm lg:text-base"
                onClick={removeMerchant}
              >
                Yes, Remove
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      <div className="flex justify-between my-6">
        <div className="border-2 w-44 bg-white rounded-lg relative cursor-pointer">
          <div
            className="w-full flex justify-between items-center px-4 py-3 text-sm text-sort"
            onClick={() => setSelect(!select)}
          >
            <h1 className="truncate">
              Sort By:{" "}
              <span className="font-semibold text-dark ">{filter}</span>
            </h1>

            {select ? <FaAngleDown /> : <FaAngleRight />}
          </div>
          <div
            className={`absolute shadow-lg rounded-b-lg top-full left-0 right-0 bg-white text-sm text-sort ${
              select ? "visible" : "invisible"
            }`}
          >
            <div
              className="border-b px-4 py-3 cursor-pointer hover:bg-welcome"
              onClick={() => {
                setSearchTerm("");
                setFilter("All");
                setSort(false);
                setSelect(!select);
              }}
            >
              <h1>
                Sort by: <span className="font-semibold text-dark">All</span>
              </h1>
            </div>
            <div
              className="border-b px-4 py-3 cursor-pointer hover:bg-welcome"
              onClick={() => {
                setSort("true");
                setFilter("A - Z");
                setSelect(!select);
              }}
            >
              <h1>
                Sort by: <span className="font-semibold text-dark">A - Z</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="border-2 bg-white rounded-lg flex items-center px-5 justify-between w-411">
          <input
            type="search"
            placeholder="Search Merchants"
            className="outline-none font-normal text-sm w-full py-2"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <img src={search} alt="search" />
        </div>
      </div>

      {/* <Martabs /> */}
      <div className="flex items-center text-sm mar rounded-lg my-4 text-footer bg-white px-9 ">
        <Link to="/admin/merchants">
          <div
            className={` text-dark text-base border-b-4 border-green font-medium px-1 py-2.5 hover:text-dark `}
          >
            <h1>Merchants </h1>
          </div>
        </Link>
        <span className="w-7"> </span>
        <NavLink to="/admin/merchants/pull-funds-request">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Pull Funds request </h1>
          </div>
        </NavLink>
        <span className="w-7"> </span>
        <NavLink to="/admin/merchants/disbursed-funds">
          <div className="font-normal px-1 py-2.5 border-b-4 border-transparent hover:text-dark ">
            <h1>Disbursed Funds </h1>
          </div>
        </NavLink>
      </div>
      <div className="rounded-lg bg-white mt-2 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">List of Merchants </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {merchants?.length}
            </span>
          </h1>
        </div>
        <div className="">
          <table className="w-full table-auto">
            <thead className="">
              <tr className="text-left bg-bar">
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs pl-9">
                  Name
                </th>
                <th className="py-3 pr-7 pl-3 text-mobile-nav font-medium text-xs ">
                  Email Address
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Address
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  State/City
                </th>
                {/* <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Earnings
                </th> */}
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Action
                </th>
              </tr>
            </thead>
            {sort ? (
              <>
                {merchants
                  ?.filter((val) => {
                    if (searchTerm == "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .sort((a, b) => (a.name < b.name ? 1 : -1))

                  .map((merchant) => (
                    <tr className="border-b font-inter" key={merchant.id}>
                      <td className="py-8 pl-5 flex w-48">
                        <div className="mr-2 flex items-center">
                          <span className="mr-2 font-normal text-xs text-deep">
                            {merchant.id}
                          </span>
                          <div className="w-10 h-10">
                            <img
                              src={
                                merchant.logo_path === ""
                                  ? avater
                                  : merchant.logo_path
                              }
                              alt="merchant avater"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <h1 className="font-normal truncate text-deep text-sm">
                            <span title={merchant.name}> {merchant.name} </span>
                          </h1>
                          <h1 className="font-normal text-statustext text-xs">
                            {merchant.products.length} Products
                          </h1>
                        </div>
                      </td>
                      <td className="py-8 px-3">
                        <h1 className="font-normal truncate text-deep text-xs">
                          <span title={merchant.email}> {merchant.email} </span>
                        </h1>
                      </td>
                      <td className="py-8">
                        <h1 className="font-normal text-deep text-xs w-32">
                          {merchant.address}
                        </h1>
                      </td>
                      <td className="py-8">
                        <h1 className="font-normal text-deep text-xs">
                          {merchant.city}
                        </h1>
                      </td>
                      {/* <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">N200,000</h1>
                  </td> */}

                      <td className="py-3 truncate">
                        <button
                          className="font-medium text-xs font-inter text-blue py-2 pr-2 border-r "
                          onClick={() => {
                            setEdit(true);
                            setMerchantId(merchant.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="font-medium text-xs font-inter text-red py-1 px-2"
                          onClick={() => {
                            setRemove(true);
                            setName(merchant.name);
                            window.scrollTo(0, 0);
                            setMerchantId(merchant.id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
              </>
            ) : (
              <>
                {merchants
                  ?.filter((val) => {
                    if (searchTerm == "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((merchant) => (
                    <tr className="border-b font-inter" key={merchant.id}>
                      <td className="py-8 pl-5 flex w-48">
                        <div className="mr-2 flex items-center">
                          <span className="mr-2 font-normal text-xs text-deep">
                            {merchant.id}
                          </span>
                          <div className="w-10 h-10">
                            <img
                              src={
                                merchant.logo_path === ""
                                  ? avater
                                  : merchant.logo_path
                              }
                              alt="merchant avater"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <h1 className="font-normal truncate text-deep text-sm">
                            <span title={merchant.name}> {merchant.name} </span>
                          </h1>
                          <h1 className="font-normal text-statustext text-xs">
                            {merchant.products.length} Products
                          </h1>
                        </div>
                      </td>
                      <td className="py-8 px-3">
                        <h1 className="font-normal truncate text-deep text-xs">
                          <span title={merchant.email}> {merchant.email} </span>
                        </h1>
                      </td>
                      <td className="py-8">
                        <h1 className="font-normal text-deep text-xs w-32">
                          {merchant.address}
                        </h1>
                      </td>
                      <td className="py-8">
                        <h1 className="font-normal text-deep text-xs">
                          {merchant.city}
                        </h1>
                      </td>
                      {/* <td className="py-8">
                    <h1 className="font-normal text-deep text-xs">N200,000</h1>
                  </td> */}

                      <td className="py-3 truncate">
                        <button
                          className="font-medium text-xs font-inter text-blue py-2 pr-2 border-r "
                          onClick={() => {
                            setEdit(true);
                            setMerchantId(merchant.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="font-medium text-xs font-inter text-red py-1 px-2"
                          onClick={() => {
                            setRemove(true);
                            setName(merchant.name);
                            window.scrollTo(0, 0);
                            setMerchantId(merchant.id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
              </>
            )}
          </table>
          {/* <div className=" flex pt-20 px-7 items-center justify-between">
            <div className="border rounded-lg bg-page text-footer text-sm p-3">
              <span>Page 1 of 32</span>
            </div>
            <div className="flex justify-between w-80">
              <div className="text-backarrow bg-back rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center justify-center text-xs font-semibold">
                <MdArrowBackIosNew />
              </div>
              <div className="text-white bg-green rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                1
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                2
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                ...
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                9
              </div>
              <div className="border text-dark rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                10
              </div>
              <div className="border text-backarrow rounded p-2 w-8 h-8 duration-100 cursor-pointer hover:bg-green hover:text-white flex items-center text-xs justify-center ">
                <MdArrowForwardIos />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default MarchantsList;
