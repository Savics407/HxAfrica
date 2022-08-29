import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function RoleList() {
  const [create, setCreate] = useState(false);
  const [roles, setRoles] = useState();
  async function fetchRoles() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/get_roles",
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
    setRoles(result?.data);
  }

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <>
      <div className="rounded-lg bg-white mt-3 mb-3 pb-10">
        {create && (
          <>
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
              className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay  backdrop-blur-sm"
            >
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
                exit={{
                  scale: 0,
                  transition: {
                    delay: 0.5,
                  },
                }}
                className="bg-white rounded-xl border w-2/5 m-auto z-10"
              >
                <div className="border-b border-stroke capitalize font-inter px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
                  <h1>Edit Roles</h1>
                  <MdClose
                    className="cursor-pointer"
                    onClick={() => {
                      setCreate(false);
                    }}
                  />
                </div>
                <div className="px-10 py-5">
                  <div className="merchant">
                    <label>Role Name</label>
                    <input
                      required
                      type="text"
                      placeholder="enter role name"
                      className="box"
                      // value="000000"
                    />
                  </div>

                  <div className="merchant">
                    <label>Select Permissions</label>
                    <div className="mb-4">
                      <label className="!text-black !text-sm !font-normal">
                        <input
                          required
                          type="checkbox"
                          className=" !checked:bg-green "
                        />{" "}
                        Approve Marchant
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="!text-black !text-sm !font-normal">
                        <input
                          required
                          type="checkbox"
                          className=" !checked:bg-green "
                        />{" "}
                        Approve Disbursement
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="!text-black !text-sm !font-normal">
                        <input
                          required
                          type="checkbox"
                          className=" !checked:bg-green "
                        />{" "}
                        Approve Pullout
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="!text-black !text-sm !font-normal">
                        <input
                          required
                          type="checkbox"
                          className=" !checked:bg-green "
                        />{" "}
                        Approve Disbursement
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="!text-black !text-sm !font-normal">
                        <input
                          required
                          type="checkbox"
                          className=" !checked:bg-green "
                        />{" "}
                        Approve Marchant
                      </label>
                    </div>
                  </div>

                  <div className="text-white flex justify-end items-center w-full mt-10 font-medium">
                    <input
                      type="submit"
                      className=" cursor-pointer bg-green py-2 px-10 outline-none rounded-full"
                      value="Update"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
        <div className="py-4 px-9 flex justify-between items-center font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">List of Roles </span>{" "}
          </h1>
          <div className="border-2 w-44 bg-white rounded-lg px-4 py-3">
            <div className="w-full flex justify-between items-center text-sm text-sort">
              <h1>
                Sort By: <span className="font-semibold text-dark">All</span>
              </h1>

              <FaAngleDown />
            </div>
          </div>
        </div>
        <div className="">
          <table className=" w-full table-auto">
            <thead className="">
              <tr className="text-left bg-bar ">
                <th className="py-3 w-1/5 text-mobile-nav font-medium text-xs pl-9">
                  Role Name
                </th>
                <th className="py-3 w-2/5 text-center text-mobile-nav font-medium text-xs ">
                  Permission
                </th>
                <th className="py-3 text-center w-2/5 text-mobile-nav font-medium text-xs ">
                  Action
                </th>
              </tr>
            </thead>
            <tr className="border-b">
              <td className="py-8 pl-5">
                <h1 className="font-normal text-deep text-sm">Staff Name</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm text-center">1</h1>
              </td>
              <td className="py-3 text-center">
                <button
                  className="font-medium text-xs font-inter text-blue py-2 px-2 border-r "
                  onClick={() => setCreate(true)}
                >
                  Edit
                </button>
                <button className="font-medium text-xs font-inter  bg-relist text-relisted rounded-full ml-2 py-1 px-2">
                  Assign role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5">
                <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm text-center">1</h1>
              </td>

              <td className="py-3 text-center">
                <button
                  className="font-medium text-xs font-inter text-blue py-2 px-2 border-r "
                  onClick={() => setCreate(true)}
                >
                  Edit
                </button>
                <button className="font-medium text-xs font-inter  bg-relist text-relisted rounded-full ml-2 py-1 px-2">
                  Assign role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5">
                <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm text-center">1</h1>
              </td>

              <td className="py-3 text-center">
                <button
                  className="font-medium text-xs font-inter text-blue py-2 px-2 border-r "
                  onClick={() => setCreate(true)}
                >
                  Edit
                </button>
                <button className="font-medium text-xs font-inter  bg-relist text-relisted rounded-full ml-2 py-1 px-2">
                  Assign role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5">
                <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm text-center">1</h1>
              </td>

              <td className="py-3 text-center">
                <button
                  className="font-medium text-xs font-inter text-blue py-2 px-2 border-r "
                  onClick={() => setCreate(true)}
                >
                  Edit
                </button>
                <button className="font-medium text-xs font-inter  bg-relist text-relisted rounded-full ml-2 py-1 px-2">
                  Update role
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-8 pl-5">
                <h1 className="font-normal  text-deep text-sm">Staff Name</h1>
              </td>
              <td className="py-8">
                <h1 className="font-normal text-deep text-sm text-center">1</h1>
              </td>

              <td className="py-3 text-center">
                <button
                  className="font-medium text-xs font-inter text-blue py-2 px-2 border-r "
                  onClick={() => setCreate(true)}
                >
                  Edit
                </button>
                <button className="font-medium text-xs font-inter  bg-relist text-relisted rounded-full ml-2 py-1 px-2">
                  Update role
                </button>
              </td>
            </tr>
          </table>
          <div className=" flex pt-20 px-7 items-center justify-between">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleList;
