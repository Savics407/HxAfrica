import invest_icon from "./images/investment.png";
import crowd from "./images/crowd.png";
import renovate from "./images/renovate.svg";
import sales from "./images/sales.svg";
import raw from "./images/rawland.png";
import land from "./images/rawland2.png";
import users1 from "./images/Frame 14.png";
import users2 from "./images/Frame 18.png";
import users3 from "./images/Frame 19.png";
import users4 from "./images/Frame 20.png";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
// import crowd from "./images/crowdfund.png";
import * as CurrencyFormat from "react-currency-format";
import { FiArrowUp } from "react-icons/fi";
import ScaleLoader from "react-spinners/ScaleLoader";
import { HiOutlineArrowRight } from "react-icons/hi";

function Investments() {
  const userID = localStorage.getItem("user-id");

  const [posts, setPosts] = useState();
  const [newLoad, setNewLoad] = useState(true);
  async function fetchData() {
    const token = localStorage.getItem("user-token");

    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investment/fetch_new_investment`,
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
    setPosts(result.data);
    if (result?.status === "success") {
      setNewLoad(false);
    }
  }

  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(true);

  const [ongoing, setOngoing] = useState();
  const [data, setData] = useState();
  async function fetchOngoing() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}investment/fetch_ongoing_investment`,
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
    // alert(result.data[0].due_date);

    setData(result.data);
    if (result?.data.length === 0) {
      setOngoing(false);
      // alert("fetched Successfully");
    } else {
      setOngoing(true);
    }

    if (result?.status === "success") {
      setAvailable(false);
    }
  }

  const [categories, setCategories] = useState();
  async function fetchCategories() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}products/fetch_product_category`,
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
    // alert(result.data[0].due_date);

    setCategories(result.data);
    if (result?.status === "success") {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    fetchOngoing();
    fetchCategories();
  }, []);

  return (
    <>
      <div className="rounded-lg bg-white w-full lg:my-5 my-3 pb-4">
        <div className="lg:border-b border-stroke lg:px-10 lg:py-5 px-6 py-5 lg:text-lg text-xs font-semibold flex justify-between items-center cursor-pointer">
          <h1 className="text-dark">Investments</h1>
          <Link to="/investment">
            <h1 className="text-links lg:text-xs text-tiny font-normal">
              View all investment
            </h1>
          </Link>
        </div>
        <div className="overflow-hidden mt-5 ">
          {loading ? (
            <div className="text-center p-20">
              <ScaleLoader color="#008E10" height={40} width={4} />
            </div>
          ) : (
            <div className="cat flex flex-wrap">
              {categories?.map((post) => (
                <div
                  className={`categories bg-light-purple ${post.product_category === "renovate"
                    ? "bg-light-orange"
                    : post.product_category === "mortgage"
                      ? "bg-light-blue"
                      : post.product_category === "sales"
                        ? "bg-sky-blue"
                        : "bg-light-purple"
                    }`}
                >
                  <div className="cate-block">
                    <div className="flex lg:flex-row flex-col text-dark py-3">
                      <div className="mr-3 mb-2 lg:mb-0">
                        {/* <img src={renovate} alt="investment_icon" /> */}
                        {post.product_category === "renovate" ? (
                          <img src={renovate} alt="investment_icon" />
                        ) : post.product_category === "mortgage" ? (
                          <img src={crowd} alt="investment_icon" />
                        ) : post.product_category === "sales" ? (
                          <img src={sales} alt="investment_icon" />
                        ) : (
                          <img src={invest_icon} alt="investment_icon" />
                        )}
                      </div>
                      <div>
                        <h1 className="text-sm font-medium text-dark capitalize">
                          {/* {categories[0].product_category === "rent_financing" &&
                        "Rent Financing"} */}
                          {post.product_category === "rent_financing"
                            ? "Rent Financing"
                            : post.product_category}
                        </h1>
                        <h1 className="text-tiny font-medium text-dark">
                          {post.products.length}{" "}
                          {post.products.length === 1
                            ? "Investment"
                            : "Investments"}{" "}
                          ongoing
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-6 flex flex-col lg:flex-row">
          <div className="section">
            <h1>New Investments</h1>
            {newLoad ? (
              <div className="text-center p-20">
                <ScaleLoader color="#008E10" height={40} width={4} />
              </div>
            ) : (
              <>
                {posts
                  ?.filter((post) => post === posts[0])
                  .map((post) => (
                    <div
                      key={post.id}
                      className="p-3 mb-4 bg-mainbg rounded-2xl flex items-center justify-between"
                    >
                      <div className="w-1/3 h-44 rounded-full">
                        {/* <div className="w-full h-full "> */}
                        <img
                          src={post.image_path === "" ? raw : post.image_path}
                          // src={raw}
                          alt={post.title}
                          className="h-full w-full object-cover rounded-2xl"
                        />
                        {/* </div> */}
                      </div>

                      <div className="w-2/3 flex flex-col pl-3">
                        <div className="mb-2">
                          {/* <h1 className="!mb-0">{post.title}</h1> */}
                          <abbr title={post.title} className="no-underline">
                            <h1 className="!mb-0 truncate">{post.title}</h1>
                          </abbr>
                          <h2 className="text-pink text-xs">
                            {" "}
                            {post.interest_rate}% Interest Rate
                          </h2>
                        </div>
                        <div className="text-tiny text-grayy mb-2">
                          <p className="!mb-0">
                            Time Frame:{" "}
                            <span className="text-darkgray">
                              {post.duration} Days
                            </span>
                          </p>
                          <p className="">
                            Starts on -{" "}
                            <span className="text-darkgray">
                              {moment(post.expiry_date).format("MMM DD, yyyy")}
                            </span>
                          </p>
                        </div>
                        <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                          <p className="">
                            Property Worth{" "}
                            <span className="text-darkgray text-xs font-medium ml-2">
                              N
                              <CurrencyFormat
                                value={post.cost}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </span>
                          </p>
                        </div>
                        <div className="flex w-full">
                          <div className="flex items-center">
                            <img src={users1} alt="frame" className="z-0" />
                            <img
                              src={users2}
                              alt="frame"
                              className="-ml-3 z-10"
                            />
                            <img
                              src={users3}
                              alt="frame"
                              className="-ml-3 z-10"
                            />
                            <img
                              src={users4}
                              alt="frame"
                              className="-ml-3 z-10"
                            />
                            <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                              +24
                            </div>
                          </div>
                          <div className="pl-4">
                            <Link to="/investment">
                              <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                                Join Now
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="section">
            <h1>Ongoing Investments</h1>
            {available ? (
              <div className="text-center p-20">
                <ScaleLoader color="#008E10" height={40} width={4} />
              </div>
            ) : (
              <>
                {ongoing ? (
                  <Link to="/investment/ongoing">
                    <div
                      key={data[0].id}
                      className="p-3 mb-4 bg-mainbg rounded-2xl flex items-center justify-between"
                    >
                      {/* <div className="mr-2 h-full w-1/3">
                    <img src={land} alt="rawland" />
                  </div> */}
                      <div className="w-1/3 h-44 rounded-full">
                        <img
                          src={
                            data[0].product.image_path === ""
                              ? land
                              : data[0].product.image_path
                          }
                          alt="rawland"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div className="w-2/3 pl-3 flex flex-col">
                        <div className="mb-2 flex justify-between ">
                          <div className="w-4/5">
                            {" "}
                            <abbr
                              title={data[0].product.title}
                              className="no-underline"
                            >
                              <h1 className="!mb-0 truncate">
                                {data[0].product.title}
                              </h1>
                            </abbr>
                            <h2 className="text-green text-xs">
                              {data[0].interest}% Interest Rate
                            </h2>
                          </div>
                          {data[0].product.cost ===
                            data[0].product.threshold && (
                              <div
                              // onClick={() => {
                              //   productDetails(post.id);
                              // }}
                              >
                                <HiOutlineArrowRight className="text-lg text-arrow cursor-pointer" />
                              </div>
                            )}
                        </div>
                        <div className="text-tiny text-grayy mb-3">
                          <p className="!mb-0">
                            Time Frame:{" "}
                            <span className="text-darkgray">
                              {data[0].duration} Days
                            </span>
                          </p>
                          <p className="">
                            Ends on -{" "}
                            <span className="text-darkgray">
                              {moment(data[0].due_date).format("MMM DD, yyyy")}
                            </span>
                          </p>
                        </div>
                        <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                          <p className="">
                            Property Worth{" "}
                            <span className="text-darkgray text-xs font-medium ml-2">
                              N
                              <CurrencyFormat
                                value={data[0].product.cost}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                            </span>
                          </p>
                        </div>
                        {data[0].product.cost > data[0].product.threshold ? (
                          <div>
                            <button
                              className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl"
                            // onClick={() => {
                            //   productDetails(post.id);
                            // }}
                            >
                              Join Now
                            </button>
                          </div>
                        ) : (
                          <button className="text-endsin font-medium flex items-center bg-ongoing w-fit px-2.5 py-1.5 rounded-full">
                            <FiArrowUp className="text-tiny text-rose mr-1 mb-1 " />{" "}
                            <span className="text-xxm">
                              {moment(data[0].due_date).diff(
                                new Date(),
                                "Days"
                              )}{" "}
                              Days:{" "}
                              {/* {moment(post.due_date).format("h:m")} */}
                              to go
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="font-semibold text-xs text-statustext text-center">
                      Oh oh! You have no active
                      <br />
                      investments at this time
                    </h1>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex items-center p-4 hidden lg:flex">
          <FaInfoCircle className="text-join text-sm mr-1" />{" "}
          <h1 className="text-join text-sm">
            Join the early investors and earn better
          </h1>
        </div>
      </div>
    </>
  );
}

export default Investments;
