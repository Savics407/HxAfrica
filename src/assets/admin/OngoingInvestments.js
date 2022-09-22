import React, { useEffect, useState } from "react";
import software from "../images/software.svg";
import realEstate from "../images/realEstate.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";

function OngoingInvestments() {
  const [ongoing, setOngoing] = useState();
  async function fetchOngoing() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/fetch_ongoing_investments",
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
    setOngoing(result?.data);
  }
  useEffect(() => {
    fetchOngoing();
  }, []);
  return (
    <div>
      <div className="rounded-lg bg-white pb-28">
        <div className="border-b border-stroke flex justify-between px-5 py-5 mb-5 font-medium">
          <h1 className="text-lg text-darker">Ongoing Investments</h1>
          <button className="text-dark font-sm">View all</button>
        </div>
        <div className="h-screen overflow-auto scroll">
          {ongoing?.map((ongoing) => (
            <div className="px-5 py-1">
              <div className="bg-welcome rounded-lg flex justify-between items-center px-3 py-3">
                <div className="flex items-center">
                  <div className="mr-2">
                    <img src={software} alt="software" />
                  </div>
                  <div>
                    <h1 className="text-deep truncate w-48">
                      <span title={ongoing.title}>{ongoing.title}</span>
                    </h1>
                    <h1 className="text-media text-xs font-normal capitalize">
                      {ongoing.category.product_category}
                    </h1>
                  </div>
                </div>
                <div className="text-dark text-2xl cursor-pointer">
                  <HiOutlineDotsVertical />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OngoingInvestments;
