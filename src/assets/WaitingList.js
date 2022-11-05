import React from "react";
import logo from "./images/logo.svg";
import reic from "./images/reic_with_tagline 1.svg";
import reicMoc from "./images/mockup.svg";
import mobileMoc from "./images/mobileMoc.svg";
import mocMobile from "./images/mocMobile.svg";

function WaitingList() {
  return (
    <div className="font-family">
      <div className="bg-green text-white lg:px-28 px-4 py-4">
        <div className="lg:w-48 w-28 h-12">
          <img src={logo} alt="REIC Logo" />
        </div>
      </div>
      <div className="bg-waiting text-center">
        <div className="lg:p-20 py-14 px-10">
          <h1 className="font-bold lg:text-4xl text-3xl text-center font-roboto">
            The largest real connection with <br />
            personalized service. <br />
            <span className="text-green">
              Buy with confidence, sell with dividends.
            </span>
          </h1>
        </div>
        <div>
          <h1 className="text-soon font-semibold text-lg lg:text-2xl pb-10">
            Coming soon...
          </h1>
          <h1 className="text-banner text-xl lg:text-3xl">
            Join our waitlist now
          </h1>
        </div>
        <div className="p-5 flex flex-wrap font-inter justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border lg:mr-2 mb-2 lg:mb-0 px-4 bg-white font-normal text-sm lg:text-base rounded-lg w-full py-3 lg:w-auto"
          />
          <button className="bg-green text-sm lg:text-base text-white rounded-lg px-6 py-3 w-full lg:w-auto">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={reicMoc}
            alt="reic User Dashboard"
            className="w-full lg:w-auto "
          />
        </div>
      </div>

      <div className="bg-white flex flex-wrap lg:px-48 items-center justify-between pt-20 lg:pb-5 pb-20 lg:wait waitMob">
        <div className="w-full lg:w-auto text-center lg:text-right mb-20 lg:mb-auto">
          <h1 className="font-bold lg:text-4xl text-2xl font-roboto lg:mb-5 mb-3">
            Real Investment, <br /> One Community
          </h1>
          <h1 className="text-banner text-base lg:text-2xl font-normal ">
            Be among the first to know <br className="hidden lg:block" /> when
            <br className=" lg:hidden" />
            we launch!
          </h1>
        </div>
        <div className="w-full lg:w-auto  pr-5 ">
          <img
            src={mobileMoc}
            alt="Mobile Dashboard"
            className="hidden lg:block"
          />
          <img
            src={mocMobile}
            alt="Mobile Dashboard"
            className="lg:hidden w-full"
          />
        </div>
      </div>

      <div className="bg-primary py-10 lg:px-28 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <div className="lg:w-48 w-28 mr-10 -ml-2 pl-5 lg:pl-0">
            <img src={reic} alt="REIC Logo with tagline" />
          </div>
          <div>
            <h1 className="font-semibold text-base lg:text-2xl">
              <span className="text-green">REIC</span> is a product of{" "}
              <span className="text-green">HX</span>
              <span className="text-media font-medium">africa</span>
            </h1>
            <h1 className="font-normal text-sm lg:text-lg text-banner">
              <a href="https://hxafrica.com">www.hxafrica.com</a>
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-auto mt-10 lg:mt-0">
          <h1 className="text-green italic text-sm lg:text-lg text-center ">
            Real Investment, One Community
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WaitingList;
