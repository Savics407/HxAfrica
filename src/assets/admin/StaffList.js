import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import search from "../images/Small.svg";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
// import { MdArrowForwardIos } from "react-icons/md";

function StaffList({ fetchStaffs, staffs }) {
  const [roles, setRoles] = useState();
  async function fetchRoles() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/get_roles`,
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
    fetchStaffs();
    fetchRoles();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [assign, setAssign] = useState(false);
  const [roleName, setRoleName] = useState();
  const [ID, setID] = useState();

  async function assignRole() {
    const token = localStorage.getItem("user-token");

    const payLoad = {
      user: ID,
      role: roleName,
    };
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/assignRole`,
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
      setAssign(false);
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // fetchRoles();
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
  }

  return (
    <>
      {assign && (
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
                    setAssign(false);
                  }}
                />
              </div>
              <div className="px-10 py-5">
                <div className="merchant">
                  {/* <label>Select Permissions</label> */}
                  {roles?.map((role) => (
                    <div className="mb-4">
                      <label className="!text-black !text-sm !font-normal flex items-center">
                        <input
                          required
                          type="radio"
                          value={role.name}
                          name="role"
                          className=" mr-2 "
                          onChange={(e) => {
                            setRoleName(e.target.value);
                          }}
                        />{" "}
                        {role.name}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="text-white flex justify-end items-center w-full mt-10 font-medium">
                  <input
                    type="submit"
                    className=" cursor-pointer bg-green py-2 px-10 outline-none rounded-full"
                    value="Assign Role"
                    onClick={assignRole}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
      <div className="flex justify-between my-6">
        <div className="border-2 w-44 bg-white rounded-lg px-4 py-3">
          <div className="w-full flex justify-between items-center text-sm text-sort">
            <h1>
              Sort By: <span className="font-semibold text-dark">All</span>
            </h1>

            <FaAngleDown />
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

      <div className="rounded-lg bg-white mt-2 mb-3 pb-10">
        <div className="py-7 px-9 text-lg text-mobile-nav font-medium border-b cursor-pointer">
          <h1 className="">
            <span className="text-grayy text-sm mr-2">List of Staffs </span>{" "}
            <span className="rounded-full bg-green text-white px-2 text-xs ">
              {staffs?.length}
            </span>
          </h1>
        </div>
        <div className="">
          <table className=" w-full table-auto">
            <thead className="">
              <tr className="text-left bg-bar">
                <th className="py-3 text-mobile-nav font-medium text-xs pl-9">
                  Staff Name
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Phone Number
                </th>
                <th className="py-3 pr-7 text-mobile-nav font-medium text-xs ">
                  Email
                </th>

                <th className="py-3 text-center w-52 text-mobile-nav font-medium text-xs ">
                  Action
                </th>
              </tr>
            </thead>
            {staffs
              ?.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((staff) => (
                <tr className="border-b" key={staff.id}>
                  <td className="py-8 pl-5 flex items-center">
                    <div className="mr-2">
                      <img
                        src={staff.profile_photo_path}
                        alt="merchant avater"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="font-normal text-deep text-sm">
                        {staff.name}
                      </h1>
                    </div>
                  </td>
                  <td className="py-8">
                    <h1 className="font-normal text-deep text-sm">
                      {staff.phone}
                    </h1>
                  </td>

                  <td className="py-8">
                    <h1 className="font-normal text-deep text-sm">
                      {staff.email}
                    </h1>
                  </td>

                  <td className="py-3 text-center">
                    {/* <button className="font-medium text-xs font-inter text-blue py-2 px-2 border-r ">
                      Edit
                    </button> */}
                    <button
                      // className="font-medium text-xs font-inter text-inactive py-1 px-2"
                      className="font-medium text-xs font-inter bg-relist text-relisted rounded-full ml-2 py-1 px-3"
                      onClick={() => {
                        setAssign(true);
                        setID(staff.id);
                      }}
                    >
                      Assign role
                    </button>
                  </td>
                </tr>
              ))}
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

export default StaffList;
