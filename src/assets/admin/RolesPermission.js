import React, { useEffect, useState } from "react";
import Header from "./Admin_header";
import { HiOutlinePlusSm } from "react-icons/hi";
import SideBar from "./SideBar";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

import StaffList from "./StaffList";
import RoleList from "./RoleList";

function RolesPermission() {
  const [create, setCreate] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-dashbg font-family">
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
                <h1>Staff Roles</h1>
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
      <Header />
      <div className="flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className=" w-4/5 p-5 mb-20">
          <div className=" bg-white p-10 rounded-lg flex justify-between">
            <h1 className="text-dark  font-black text-3xl mb-3">Roles</h1>
            <button
              className="bg-green rounded-full flex text-white px-5 py-3 items-center"
              onClick={() => {
                setCreate(true);
              }}
            >
              <span className="mr-2 text-xl">
                <HiOutlinePlusSm />
              </span>{" "}
              Create Role
            </button>
          </div>
          <div className="flex justify-between">
            <div className="w-full">
              <RoleList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RolesPermission;
