import moment from "moment";
import React, { useEffect, useState } from "react";
import * as CurrencyFormat from "react-currency-format";
import box from "./images/Box.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function IncomingROI() {
  const [available, setAvailable] = useState(false);
  const [posts, setPosts] = useState();
  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investment/fetch_ongoing_investment",
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

  const percentage = 10;


  return (
    <>
      <div className="rounded-lg bg-white mt-3 lg:mt-0">
        <div className="border-b border-stroke px-6 py-3 lg:px-10 lg:py-5 lg:text-lg text-xs text-dark font-medium">
          <h1>Incoming ROI</h1>
        </div>
        {available ? (
          <>
            <div
              key={posts[0].id}
              className="lg:px-10 lg:py-5 px-6 py-3 flex flex-row justify-between"
            >
              <div className="lg:w-3/5 lg:py-10 py-5 w-fit">
                <div className="flex justify-between ">
                  <div className="income">
                    <h1>Return Duration</h1>
                    <p>{posts[0].duration} Days</p>
                  </div>
                  <div className="income">
                    <h1>Expected Date</h1>
                    <p>{moment(posts[0].due_date).format("MMM DD, yyyy")}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="income">
                    <h1>Expected Returns</h1>
                    <p>
                      {/* {(post.amount / 100) * 10 + post.amount} */}
                      <CurrencyFormat
                        value={
                          (posts[0].amount * posts[0].interest) / 100 +
                          posts[0].amount
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                  </div>
                  <div className="income">
                    <h1>Amount in Reic Token</h1>
                    <p>
                      {((posts[0].amount / 100) * 10 + posts[0].amount) / 50000}{" "}
                      REIC
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 lg:p-4 py-4 px-1 ">
                <div className=" rounded-full lg:w-48 lg:h-48 w-24 h-24 m-auto flex items-center justify-around relative font-semibold">
                  {/* <div className="bg-white w-16 h-16 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
                    <h1 className="text-center text-xxm lg:text-sm font-semibold text-dark">
                      {moment(posts[0].due_date).diff(new Date(), "Days")} Day's
                      left
                    </h1>
                  </div> */}
                  <CircularProgressbar
                    value={moment(posts[0].due_date).diff(new Date(), "Days")}
                    text={`${moment(posts[0].due_date).diff(new Date(), "Days")} Days left`}
                    // value={20}
                    // text={10}
                    strokeWidth={15}
                    maxValue={posts[0].duration}
                    // counterClockwise={true}s
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.04,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'round',

                      // Text size
                      textSize: '9px',

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: '#008E10',
                      textColor: '#1E2335',
                      trailColor: '#F8F8F9',
                      backgroundColor: '#F8F8F9',
                    })}
                  />

                  {/* <svg
                    className="svg lg:block"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  // width="192px"
                  // height="192px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#008E10" />
                        <stop offset="100%" stop-color="#008E10" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="circle hidden lg:block"
                      cx="90"
                      cy="105"
                      r="83"
                      stroke-linecap="round"
                    />
                    <circle
                      className="circle2 lg:hidden"
                      cx="46"
                      cy="50"
                      r="40"
                      stroke-linecap="round"
                    />
                  </svg> */}
                </div>
              </div>
            </div>
          </>
        ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <h1 className="font-semibold text-xs text-statustext text-center -ml-10">
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

export default IncomingROI;
