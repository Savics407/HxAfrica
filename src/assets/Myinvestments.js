import invest from "./images/invests.png";
import invest1 from "./images/invest1.png";
import invest2 from "./images/invest2.png";
import box from "./images/Box.png";

import { useState, useEffect } from "react";
import Details from "./Investment_Details";
import { Link } from "react-router-dom";
import moment from "moment";

function Myinvests() {
  const [openDetails, setOpenDetails] = useState(false);
  const [available, setAvailable] = useState(false);
  const [itemId, setItemID] = useState("");

  const [posts, setPosts] = useState();
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_my_investment",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data[0].id);

    setPosts(result.data);
    if (result?.data.length === 0) {
      setAvailable(false);
      // alert("fetched Successfully");
    } else {
      setAvailable(true);
    }
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  function productDetails(id) {
    setItemID(id);
    // alert(itemId);
    // console.log(id);
    setOpenDetails(true);
  }

  return (
    <>
      {openDetails && (
        <Details
          className="z-10"
          closeDetails={setOpenDetails}
          itemId={itemId}
          setItemID={setItemID}
        />
      )}

      <div className="rounded-lg bg-white mt-2 lg:mb-3 lg:pb-4 pb-28">
        <div className="border-b border-stroke px-10 py-5 lg:text-lg text-xs text-dark font-medium flex justify-between items-center cursor-pointer">
          <h1>My Investments</h1>
          <Link to="/investment/my-investment">
            <h1 className="lg:text-dark text-links lg:text-xs text-tiny font-normal">
              View all
            </h1>
          </Link>
        </div>
        {available ? (
          <div className="pt-8 px-2 h-7x overflow-y-auto scroll">
            {posts?.map((post) => (
              <div
                key={post.id}
                className="p-2 bg-welcome flex items-center justify-between rounded-lg mb-4"
              >
                <div className="flex items-center w-56">
                  <div className="mr-3">
                    <img
                      src={invest}
                      alt="investment-icon"
                      className="h-10 w-10"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-dark font-medium text-base">
                      {post.product.title}
                    </h1>
                    <p className="text-xs text-green">
                      {post.product.product_category}
                    </p>
                  </div>
                </div>
                <div className="w-18">
                  <h1
                    className="text-links text-tiny lg:text-xs font-normal cursor-pointer"
                    onClick={() => {
                      productDetails(post.id);
                    }}
                  >
                    See details
                  </h1>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-128">
            {/* <div className="flex flex-col justify-center items-center">
              <img src={box} alt="No relisted investment" />
            </div> */}
            <h1 className="font-semibold text-sm text-statustext text-center">
              Oh oh! You have no active
              <br />
              investments at this time
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Myinvests;
