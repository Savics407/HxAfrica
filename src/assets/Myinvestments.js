import invest from "./images/invests.png";
import invest1 from "./images/invest1.png";
import invest2 from "./images/invest2.png";
import { useState } from "react";
import Details from "./Investment_Details";
import { Link } from "react-router-dom";

function Myinvests() {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
      {openDetails && (
        <Details className="z-10" closeDetails={setOpenDetails} />
      )}

      <div className="rounded-lg bg-white mt-2 lg:pb-4 pb-28">
        <div className="border-b border-stroke px-10 py-5 lg:text-lg text-xs text-dark font-medium flex justify-between items-center cursor-pointer">
          <h1>My Investments</h1>
          <Link to="/investments/my-investment">
            <h1 className="lg:text-dark text-links lg:text-xs text-tiny font-normal">
              View all
            </h1>
          </Link>
        </div>
        <div className="pt-8 px-2">
          <div className="p-2 bg-welcome flex items-center justify-between rounded-lg mb-4">
            <div className="flex items-center">
              <div className="mr-5">
                <img src={invest} alt="investment-icon" />
              </div>
              <div>
                <h1 className="text-dark font-medium text-base">
                  Investment 1
                </h1>
                <p className="text-xs text-green">Software</p>
              </div>
            </div>
            <div>
              <h1
                className="text-links text-tiny lg:text-xs font-normal cursor-pointer"
                onClick={() => {
                  setOpenDetails(true);
                }}
              >
                See details
              </h1>
            </div>
          </div>

          <div className="p-2 bg-welcome flex items-center justify-between rounded-lg mb-4">
            <div className="flex items-center">
              <div className="mr-5">
                <img src={invest1} alt="investment-icon" />
              </div>
              <div>
                <h1 className="text-dark font-medium text-base">
                  Crowdfunding
                </h1>
                <p className="text-xs text-green">Software</p>
              </div>
            </div>
            <div>
              <h1
                className="text-links text-tiny lg:text-xs font-normal cursor-pointer"
                onClick={() => {
                  setOpenDetails(true);
                }}
              >
                See details
              </h1>
            </div>
          </div>

          <div className="p-2 bg-welcome flex items-center justify-between rounded-lg mb-4">
            <div className="flex items-center">
              <div className="mr-5">
                <img src={invest} alt="investment-icon" />
              </div>
              <div>
                <h1 className="text-dark font-medium text-base">
                  Investment 1
                </h1>
                <p className="text-xs text-green">Software</p>
              </div>
            </div>
            <div>
              <h1
                className="text-links text-tiny lg:text-xs font-normal cursor-pointer"
                onClick={() => {
                  setOpenDetails(true);
                }}
              >
                See details
              </h1>
            </div>
          </div>

          <div className="p-2 bg-welcome flex items-center justify-between rounded-lg mb-4">
            <div className="flex items-center">
              <div className="mr-5">
                <img src={invest1} alt="investment-icon" />
              </div>
              <div>
                <h1 className="text-dark font-medium text-base">Raw Land</h1>
                <p className="text-xs text-green">Software</p>
              </div>
            </div>
            <div>
              <h1
                className="text-links text-tiny lg:text-xs font-normal cursor-pointer"
                onClick={() => {
                  setOpenDetails(true);
                }}
              >
                See details
              </h1>
            </div>
          </div>

          <div className="p-2 bg-welcome flex items-center justify-between rounded-lg">
            <div className="flex items-center">
              <div className="mr-5">
                <img src={invest2} alt="investment-icon" />
              </div>
              <div>
                <h1 className="text-dark font-medium text-base">
                  Investment 1
                </h1>
                <p className="text-xs text-green">Software</p>
              </div>
            </div>
            <div>
              <h1
                className="text-links text-tiny lg:text-xs font-normal cursor-pointer"
                onClick={() => {
                  setOpenDetails(true);
                }}
              >
                See details
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myinvests;
