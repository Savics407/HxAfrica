import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function RoleList({ fetchRoles, roles }) {
  const [create, setCreate] = useState(false);
  const [remove, setDelete] = useState(false);

  const [ID, setID] = useState();

  async function deleteRole() {
    const token = localStorage.getItem("user-token");

    const payLoad = {
      id: ID,
    };
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}admin/delete_role`,
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
      setDelete(false);
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchRoles();
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

  const [permissions, setPermissions] = useState();
  async function fetchPermissions() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}admin/get_permissions`,
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
    setPermissions(result?.data);
  }
  useEffect(() => {
    // fetchRoles();
    fetchPermissions();
  }, []);
  const [permission1, setPermission1] = useState();
  const [permission2, setPermission2] = useState();
  const [permission3, setPermission3] = useState();
  const [permission4, setPermission4] = useState();
  const [name, setName] = useState();

  async function updateRole() {
    const token = localStorage.getItem("user-token");

    const payLoad = {
      name: name,
      permissions: [permission1, permission2, permission3, permission4],
    };
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}admin/update_role`,
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
      setCreate(false);
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
  }

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
                      defaultValue={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="merchant">
                    <label>Select Permissions</label>
                    {permissions?.map((permission) => (
                      <div className="mb-4" key={permission.id}>
                        <label className="!text-black !text-sm !font-normal">
                          <input
                            required
                            type="checkbox"
                            value={permission.id}
                            className=" !checked:bg-green "
                            onChange={(e) => {
                              // if (permission.id === "1") {
                              setPermission1(e.target.value);
                              // } else if (permission.id === "2") {
                              setPermission2(e.target.value);
                              // } else if (permission.id === "3") {
                              setPermission3(e.target.value);
                              // } else {
                              setPermission4(e.target.value);
                            }}
                          />{" "}
                          {permission.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="text-white flex justify-end items-center w-full mt-10 font-medium">
                    <input
                      type="submit"
                      className=" cursor-pointer bg-green py-2 px-10 outline-none rounded-full"
                      value="Update"
                      onClick={updateRole}
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
          {/* <div className="border-2 w-44 bg-white rounded-lg px-4 py-3">
            <div className="w-full flex justify-between items-center text-sm text-sort">
              <h1>
                Sort By: <span className="font-semibold text-dark">All</span>
              </h1>

              <FaAngleDown />
            </div>
          </div> */}
        </div>
        <div className="">
          <table className=" w-full table-auto">
            <thead className="">
              <tr className="text-left bg-bar ">
                <th className="py-3 w-1/5 text-mobile-nav font-medium text-xs pl-9">
                  Role Name
                </th>
                {/* <th className="py-3 w-2/5 text-center text-mobile-nav font-medium text-xs ">
                  Permission
                </th> */}
                <th className="py-3 text-center w-2/5 text-mobile-nav font-medium text-xs ">
                  Action
                </th>
              </tr>
            </thead>
            {roles?.map((role) => (
              <tr className="border-b" key={role.id}>
                <td className="py-8 pl-9">
                  <h1 className="font-normal text-deep text-sm">{role.name}</h1>
                </td>
                {/* <td className="py-8">
                  <h1 className="font-normal text-deep text-sm text-center">
                    1
                  </h1>
                </td> */}
                <td className="py-3 text-center">
                  <button
                    className="font-medium text-xs font-inter text-blue py-2 px-2 border-r "
                    onClick={() => {
                      setCreate(true);
                      setName(role.name);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="font-medium text-xs font-inter bg-relist text-relisted rounded-full ml-2 py-1 px-3"
                    onClick={() => {
                      setDelete(true);
                      setID(role.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
          {remove && (
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
                  className="bg-white rounded-xl border w-128 m-auto z-10"
                >
                  <div className="p-10 text-center">
                    <div>
                      <h1 className="lg:font-bold font-medium text-neutral text-2xl lg:text-3xl">
                        Warning!
                      </h1>
                    </div>
                    <div className="font-semibold lg:text-base text-xs text-neutral my-8">
                      <p>Are you sure you want to delete this Role ?</p>
                    </div>
                    <div className="flex justify-between">
                      <button
                        className="border rounded-full lg:w-44 h-12 w-40 text-neutral bg-dashbg text-sm lg:text-base"
                        onClick={() => {
                          setDelete(false);
                          // setWarning(!warning);
                        }}
                      >
                        No, Cancel
                      </button>
                      <button
                        className="rounded-full w-40 lg:w-44 h-12 text-dashbg bg-red text-sm lg:text-base"
                        onClick={deleteRole}
                      >
                        Yes, Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default RoleList;
