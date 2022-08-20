import React from "react";
import totalMarchants from "../images/TotalMarchants.svg";
import totalProducts from "../images/totalProducts.svg";
import { HiOutlinePlusSm } from "react-icons/hi";
function Create() {
  return (
    <div>
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
          <button className="bg-green rounded-full flex text-white px-5 py-3 items-center">
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
