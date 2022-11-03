import React from "react";
import logo from "./images/logo.svg";
import reic from "./images/reic_with_tagline 1.svg";
import reicMoc from "./images/mockup.svg";
import mobileMoc from "./images/mobileMoc.svg";

function WaitingList() {
  return (
    <div className="font-family">
      <div className="bg-green text-center text-white px-28 py-4 hidden lg:block">
        <div className="w-48 h-12">
          <img src={logo} alt="REIC Logo" />
        </div>
      </div>
      <div className="bg-waiting text-center">
        <div className="p-20">
          <h1 className="font-bold text-4xl text-center font-roboto">
            The largest real connection with <br />
            personalized service. <br />
            <span className="text-green">
              Buy with confidence, sell with dividends.
            </span>
          </h1>
        </div>
        <div>
          <h1 className="text-soon font-semibold text-2xl pb-10">
            Coming soon...
          </h1>
          <h1 className="text-banner text-3xl">Join our waitlist now</h1>
        </div>
        <div className="p-5 flex font-inter justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border mr-2 px-4 bg-white font-normal text-base rounded-lg"
          />
          <button className="bg-green text-white rounded-lg px-6 py-3">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <img src={reicMoc} alt="reic User Dashboard" />
        </div>
      </div>

      <div className="bg-white flex px-48 items-center justify-between pt-20 pb-5 wait">
        <div className="">
          <h1 className="font-bold text-4xl font-roboto mb-5">
            Real Investment, <br /> One Community
          </h1>
          <h1 className="text-banner text-2xl font-normal">
            Be among the first to know <br />
            when we launch!
          </h1>
        </div>
        <div className="">
          <img src={mobileMoc} alt="Mobile Dashboard" />
        </div>
      </div>

      <div className="bg-primary py-10 px-28 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-48 mr-10 -ml-2">
            <img src={reic} alt="REIC Logo with tagline" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl">
              <span className="text-green">REIC</span> is a product of{" "}
              <span className="text-green">HX</span>
              <span className="text-media font-medium">africa</span>
            </h1>
            <h1 className="font-normal text-lg text-banner">
              <a href="https://hxafrica.com">www.hxafrica.com</a>
            </h1>
          </div>
        </div>

        <div>
          <h1 className="text-green italic text-lg">
            Real Investment, One Community
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WaitingList;
