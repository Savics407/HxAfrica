import React, { useEffect } from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";
import reictoken from "../images/Reic_Token.png";

function AdminSettings() {
  useEffect(() => {
    // window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    // };
  }, []);
  return (
    <div className="bg-dashbg font-family">
      <Header />
      <div className="flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className=" w-4/5 p-5 mb-20">
          <div className=" bg-white p-5 rounded-lg">
            <h1 className="text-dark  font-black text-3xl mb-3">Settings</h1>
          </div>
          <div className="flex justify-between">
            <div className="w-4/6">
              <div className="rounded-lg bg-white mt-5 mb-3 p-5">
                <div className="">
                  <h1 className="border-b p-5">
                    <span className="text-grayy text-sm capitalize">
                      percent from accumulated interest
                    </span>{" "}
                  </h1>
                  <div className="flex items-center mx-5 my-10 w-3/5 box">
                    <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                      NGN
                    </span>
                    <select className="bg-transparent w-full outline-none">
                      <option defaultValue>1000</option>
                      <option>2000</option>
                    </select>
                  </div>
                </div>

                <div className="">
                  <h1 className="border-b p-5">
                    <span className="text-grayy text-sm capitalize">
                      investment instant pullout
                    </span>{" "}
                  </h1>
                  <div className="flex items-center mx-5 my-10 w-3/5 box">
                    <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                      %{" "}
                    </span>
                    <select className="bg-transparent w-full outline-none">
                      <option defaultValue>10</option>
                      <option>30</option>
                    </select>
                  </div>
                </div>

                <div className="">
                  <h1 className="border-b p-5">
                    <span className="text-grayy text-sm capitalize">
                      duration before an investment would kick off.
                    </span>{" "}
                  </h1>
                  <div className="flex items-center mx-5 my-10 w-3/5 box">
                    <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                      Days
                    </span>
                    <select className="bg-transparent w-full outline-none">
                      <option defaultValue>3</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="text-white flex justify-end items-center w-full mt-20 font-medium">
                  <input
                    type="submit"
                    className=" cursor-pointer bg-green py-2.5 px-12 outline-none rounded-full"
                    value="Update Settings"
                  />
                </div>
              </div>
            </div>
            <div className="w-2/6 pt-5">
              <div className="rounded-xl bg-white border pb-20">
                <div className="border-b py-5 px-7 text-xl text-modal font-semibold">
                  <h1>Token Value </h1>
                </div>
                <div className="py-5 px-7">
                  <div className="pb-4 flex items-center">
                    <img
                      src={reictoken}
                      alt="my-investment-image"
                      className="w-8"
                    />
                    <div className="ml-4 flex items-center">
                      <span className="text-tokentext text-xl font-extra-bold mr-2">
                        1
                      </span>
                      <span className="text-token uppercase text-sm font-semibold mr-4">
                        {" "}
                        reic token
                      </span>
                      <span className="text-tokentext text-xl font-semibold">
                        {" "}
                        = N50,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-7">
                  <h1 className="py-5">
                    <span className="text-grayy text-sm capitalize">
                      Change Value
                    </span>{" "}
                  </h1>

                  <div className="flex items-center box">
                    <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                      NGN
                    </span>
                    <select className="bg-transparent w-full outline-none">
                      <option defaultValue>50,000</option>
                      <option>10,000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
