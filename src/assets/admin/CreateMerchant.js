import React, { useEffect, useState } from "react";
import totalMarchants from "../images/TotalMarchants.svg";
import totalProducts from "../images/totalProducts.svg";
import upload from "../images/Upload.svg";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { HiOutlinePlusSm } from "react-icons/hi";
function Create() {
  const [create, setCreate] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  return (
    <div>
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
          ></motion.div>
          <div className="absolute py-36 top-0 right-0 left-0 bottom-0 z-10">
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
                <h1>Add Merchant</h1>
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
                    // value="000000"
                  />
                </div>
                <div className="merchant">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    placeholder="enter merchant email"
                    className="box"
                    // value="000000"
                  />
                </div>
                <div className="merchant">
                  <label>Phone</label>
                  <input
                    required
                    type="tel"
                    placeholder="+234 |"
                    className="box"
                    // value="000000"
                  />
                </div>
                <div className="merchant">
                  <label>Address</label>
                  <input
                    required
                    type="text"
                    placeholder="enter address"
                    className="box"
                    // value="000000"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="merchant w-per">
                    <label>State</label>
                    <select className="box">
                      <option defaultValue>Choose State</option>
                      <option>States</option>
                    </select>
                  </div>
                  <div className="merchant w-per">
                    <label>City</label>
                    <select className="box">
                      <option defaultValue>Choose City</option>
                      <option>Cities</option>
                    </select>
                  </div>
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
                      Upload product Image
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
                      alt="product Image"
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
                    value="Add merchant"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
      <div className="bg-white py-9 rounded-lg my-5 flex justify-between">
        <div className="flex w-1/3 py-1 pl-10 ">
          <div className="mr-3">
            <img src={totalMarchants} alt="total Marchants" />
          </div>
          <div>
            <h1 className="text-earnings font-medium text-xs">
              Total Marchants
            </h1>
            <h1 className="text-dark font-medium text-2xl">600</h1>
          </div>
        </div>
        <div className="border-l-2 flex w-1/3 py-1 pl-10">
          <div className="mr-3">
            <img src={totalProducts} alt="total Products" />
          </div>
          <div>
            <h1 className="text-earnings font-medium text-xs">
              Total Products
            </h1>
            <h1 className="text-dark font-medium text-2xl">2330</h1>
          </div>
        </div>
        <div className="flex w-1/3 py-1">
          <button
            className="bg-green rounded-full flex text-white px-5 py-3 items-center"
            onClick={() => {
              setCreate(true);
            }}
          >
            <span className="mr-2 text-xl">
              <HiOutlinePlusSm />
            </span>{" "}
            Create Marchant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
