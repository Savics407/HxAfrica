import React, { useEffect, useState } from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";

import MarchantsList from "./MarchantsList";

import Products from "./Products";
import CreateMarchant from "./CreateMerchant";

function Marchants() {
  const [merchants, setMerchants] = useState();
  async function fetchMerchants() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_merchants`,
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
    setMerchants(result?.data);
  }
  useEffect(() => {
    fetchMerchants();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dashbg font-family">
      <Header />
      <div className="flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className=" w-4/5 p-5 mb-20">
          <div className=" bg-white p-10 rounded-lg">
            <h1 className="text-dark font-black text-3xl mb-3">Merchants</h1>
          </div>
          <div className="">
            <div className="">
              <CreateMarchant
                fetchMerchants={fetchMerchants}
                merchants={merchants}
              />

              <MarchantsList
                merchants={merchants}
                fetchMerchants={fetchMerchants}
              />
            </div>
            {/* <div className="w-2/6 mt-5 bg-white rounded-lg">
              <Products />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marchants;
