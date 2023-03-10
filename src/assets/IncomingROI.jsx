import moment from "moment";
import React, { useEffect, useState } from "react";
import * as CurrencyFormat from "react-currency-format";
import box from "./images/Box.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ScaleLoader from "react-spinners/ScaleLoader";
import MoonLoader from "react-spinners/MoonLoader";
import "react-circular-progressbar/dist/styles.css";

function IncomingROI() {
  const [available, setAvailable] = useState(true);
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchIncoming() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}wallet/incoming_roi`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.status);
    // alert(result.data.due_date);

    setPosts(result.data);
    if (result?.status === "success") {
      setAvailable(true);
      setLoading(false);
      // alert("fetched Successfully");
    } else {
      setAvailable(false);
    }
  }

  useEffect(() => {
    fetchIncoming();
  }, []);

  return (
    <>
      <div className="rounded-lg bg-white mt-3 lg:mt-0">
        <div className="border-b border-stroke px-6 py-3 lg:px-10 lg:py-5 lg:text-lg text-xs text-dark font-medium">
          <h1>Incoming ROI</h1>
        </div>
        {available ? (
          <>
            {loading ? (
              <div className="text-center p-20">
                <ScaleLoader color="#008E10" height={40} width={4} />
              </div>
            ) : (
              <div className="lg:px-10 lg:py-5 px-6 py-3 flex flex-row justify-between">
                <div className="lg:w-3/5 lg:py-10 py-5 w-fit">
                  <div className="flex justify-between ">
                    <div className="income">
                      <h1>Return Duration</h1>
                      <p> {posts.duration} Days</p>
                    </div>
                    <div className="income">
                      <h1>Expected Date</h1>
                      <p>{moment(posts.due_date).format("MMM DD, yyyy")}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="income">
                      <h1>Expected Returns</h1>
                      <p>
                        {/* {(post.amount / 100) * 10 + post.amount} */}
                        <CurrencyFormat
                          value={
                            (posts.amount * posts.interest) / 100 + posts.amount
                          }
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </p>
                    </div>
                    <div className="income">
                      <h1>Amount in Hx Token</h1>
                      <p>
                        {((posts.amount / 100) * 10 + posts.amount) / 50000} Hx
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/5 lg:p-4 py-4 px-1  ">
                  <div className=" rounded-full lg:w-48 lg:h-48 w-24 h-24 m-auto flex items-center justify-around relative font-semibold">
                    <CircularProgressbar
                      value={moment(posts.due_date).diff(new Date(), "Days")}
                      text={`${moment(posts.due_date).diff(
                        new Date(),
                        "Days"
                      )} Days left`}
                      // value={20}
                      // text={10}
                      strokeWidth={15}
                      maxValue={posts.duration}
                      // counterClockwise={true}s
                      styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.04,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "round",

                        // Text size
                        textSize: "9px",

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: "#008E10",
                        textColor: "#1E2335",
                        trailColor: "#F8F8F9",
                        backgroundColor: "#F8F8F9",
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="font-semibold text-xs text-statustext text-center">
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
