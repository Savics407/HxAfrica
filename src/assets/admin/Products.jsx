import React, { useEffect, useState } from "react";
import software from "../images/software.svg";
import realEstate from "../images/realEstate.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Products() {
  const [fix, setFix] = useState(false);
  function sideBarFixed() {
    if (window.scrollY >= 300) {
      setFix(true);
    } else setFix(false);
  }

  window.addEventListener("scroll", sideBarFixed);
  const [product, setProduct] = useState();
  async function fetchProducts() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_products`,
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
    setProduct(result?.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <div
        className={`rounded-lg ${fix ? "fixed top-0 bg-white" : "rounded-lg bg-white relative"
          }`}
      >
        <div className="border-b border-stroke flex justify-between px-5 py-5 mb-5 font-medium">
          <h1 className="text-lg text-darker">Products</h1>
          <button className="text-dark font-sm">View all</button>
        </div>
        <div className=" h-p rounded-lg overflow-y-auto scroll">
          {product?.map((product) => (
            <div className="px-5 py-1" key={product.id}>
              <div className="bg-welcome rounded-lg flex justify-between items-center px-3 py-3">
                <div className="flex items-center">
                  <div className="mr-2">
                    <img src={software} alt="software" />
                  </div>
                  <div className=" w-44">
                    <h1 className="text-deep truncate">
                      <span title={product.title}>{product.title}</span>
                    </h1>
                    <h1 className="text-media text-xs font-normal">
                      {product.category.product_category}
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
        {/* <div className="px-5 py-1">
          <div className="bg-welcome rounded-lg flex justify-between items-center px-3 py-3">
            <div className="flex items-center">
              <div className="mr-2">
                <img src={software} alt="software" />
              </div>
              <div>
                <h1 className="text-deep">Investment 1</h1>
                <h1 className="text-media text-xs font-normal">Software</h1>
              </div>
            </div>
            <div className="text-dark text-2xl cursor-pointer">
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
        <div className="px-5 py-1">
          <div className="bg-welcome rounded-lg flex justify-between items-center px-3 py-3">
            <div className="flex items-center">
              <div className="mr-2">
                <img src={realEstate} alt="software" />
              </div>
              <div>
                <h1 className="text-deep">Crowdfunding</h1>
                <h1 className="text-media text-xs font-normal">Real Estate</h1>
              </div>
            </div>
            <div className="text-dark text-2xl cursor-pointer">
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
        <div className="px-5 py-1">
          <div className="bg-welcome rounded-lg flex justify-between items-center px-3 py-3">
            <div className="flex items-center">
              <div className="mr-2">
                <img src={software} alt="software" />
              </div>
              <div>
                <h1 className="text-deep">Investment 1</h1>
                <h1 className="text-media text-xs font-normal">Software</h1>
              </div>
            </div>
            <div className="text-dark text-2xl cursor-pointer">
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
        <div className="px-5 py-1">
          <div className="bg-welcome rounded-lg flex justify-between items-center px-3 py-3">
            <div className="flex items-center">
              <div className="mr-2">
                <img src={realEstate} alt="software" />
              </div>
              <div>
                <h1 className="text-deep">Crowdfunding</h1>
                <h1 className="text-media text-xs font-normal">Real Estate</h1>
              </div>
            </div>
            <div className="text-dark text-2xl cursor-pointer">
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Products;
