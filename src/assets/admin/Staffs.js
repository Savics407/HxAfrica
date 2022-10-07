import React, { useEffect, useState } from "react";
import Header from "./Admin_header";
import { HiOutlinePlusSm } from "react-icons/hi";
import SideBar from "./SideBar";
import upload from "../images/Upload.svg";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

import StaffList from "./StaffList";

function Staffs() {
  const [create, setCreate] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
      // alert(reader.readAsDataURL(image));
    } else {
      setPreview(null);
    }
    window.scrollTo(0, 0);
  }, [image]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
  });
  async function addStaff() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const payLoad = {
      name: formData.name,
      email: "example@gmail.com",
      phone: formData.phone,
      image: image,
    };
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/add_staff",
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "multipart/form-data",
          // "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data.name);
  }
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
            className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay  backdrop-blur-sm z-10"
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
                <h1>Add Staff</h1>
                <MdClose
                  className="cursor-pointer"
                  onClick={() => {
                    setCreate(false);
                    setImage(null);
                  }}
                />
              </div>
              <div className="px-10 py-5">
                <div className="merchant">
                  <label>Name</label>
                  <input
                    required
                    type="text"
                    placeholder="enter merchant name"
                    className="box"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                  />
                </div>

                <div className="merchant">
                  <label>Phone</label>
                  <input
                    required
                    type="tel"
                    placeholder="+234 |"
                    className="box"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData({ ...formData, phone: event.target.value })
                    }
                  />
                </div>

                {image === null ? (
                  <div className="border bg-file rounded-lg border-dashed flex flex-col items-center p-10">
                    <img src={upload} alt="Upload Icon" />
                    <label
                      for="file"
                      className="cursor-pointer border rounded bg-white font-normal text-xs py-1.5 px-3 mt-2"
                    >
                      Add Image
                    </label>
                    <h1 className="text-product font-normal text-tiny">
                      Upload Staff Image
                    </h1>
                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setImage(file);
                        } else {
                          setImage(null);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="border bg-cover bg-top rounded-lg h-40 w-full relative"
                    // style={{ backgroundImage: `url(${preview})` }}
                  >
                    <img
                      src={preview}
                      alt="product"
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <span
                      className="text-dark shadow bg-dashbg text-xs p-2 absolute left-2 rounded cursor-pointer bottom-2"
                      onClick={() => {
                        setImage(null);
                      }}
                    >
                      change image
                    </span>
                  </div>
                )}

                <div className="text-white flex justify-end items-center w-full mt-10 font-medium">
                  <input
                    type="submit"
                    className=" cursor-pointer bg-green py-3 px-8 outline-none rounded-full"
                    value="Add Staff"
                    onClick={() => {
                      addStaff();
                      alert(image);
                    }}
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
            <h1 className="text-dark  font-black text-3xl mb-3">Staffs</h1>
            <button
              className="bg-green rounded-full flex text-white px-5 py-3 items-center"
              onClick={() => {
                setCreate(true);
              }}
            >
              <span className="mr-2 text-xl">
                <HiOutlinePlusSm />
              </span>{" "}
              Create Staff
            </button>
          </div>
          <div className="flex justify-between">
            <div className="w-full">
              <StaffList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffs;
