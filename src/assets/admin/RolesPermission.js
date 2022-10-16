import React, { useEffect, useState } from "react";
import Header from "./Admin_header";
import { HiOutlinePlusSm } from "react-icons/hi";
import SideBar from "./SideBar";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import StaffList from "./StaffList";
import RoleList from "./RoleList";

function RolesPermission() {
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

  const [create, setCreate] = useState(false);

  const [permissions, setPermissions] = useState();
  async function fetchPermissions() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/get_permissions",
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
  const [permission1, setPermission1] = useState();
  const [permission2, setPermission2] = useState();
  const [permission3, setPermission3] = useState();
  const [permission4, setPermission4] = useState();
  const [name, setName] = useState();

  async function createRole() {
    const token = localStorage.getItem("user-token");

    const payLoad = {
      name: name,
      permissions: [permission1, permission2, permission3, permission4],
      // "permissions[0]": "Create Staff",
      // "permissions[1]": "Edit Staff",
      // "permissions[2]": "Assign Staff Role",
    };
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/create_role",
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

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPermissions();
    fetchRoles();
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
                    value="Create Role"
                    onClick={createRole}
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
              <RoleList fetchRoles={fetchRoles} roles={roles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RolesPermission;
