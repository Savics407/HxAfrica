import React, { useState } from "react";
import headerPic from "./../assets/images/appMock.svg";

import HxToken from "./../assets/images/HxToken.svg";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./header";
import Rotate from "./rotate";
import longArrow from "./../assets/images/longArrow.svg";
import tradingMockup from "./../assets/images/tradingMockup.svg";
import houseIcon from "./../assets/images/houseIcon.svg";
import bankBuilding from "./../assets/images/bankBuilding.svg";
import briefcase from "./../assets/images/briefcase.svg";
import cash from "./../assets/images/cash.svg";
import exchange from "./../assets/images/exchange.svg";
import invest from "./../assets/images/invest.svg";
import group from "./../assets/images/groupPic.svg";
import appleStore from "./../assets/images/appleStore.svg";
import googlePlay from "./../assets/images/googlePlay.svg";
import appPreview from "./../assets/images/appPreview.svg";

import Footer from "./footer";


function LandingPage() {
    const [color, setColor] = useState("#000")
const navigate = useNavigate()
  return (
    <div className="font-family bg-white">
      <Helmet>
        <title>HXAfrica | Home</title>
      </Helmet>
      <div className="relative z-40">
        <Header />

      </div>
      <div className="bg-[#FDFDFD] lg:pt-20 py-10 overflow-hidden" id="home">
        <div className="flex justify-between relative">
          <div className="absolute lg:-top-48 -top-40 bottom-0 left-0 -right-[90px] lg:right-0 flex lg:justify-center justify-end items-center border">
            <div className="justify-center items-center flex">
              <img src={longArrow} alt="arrow" className="absolute" />
              <div className=" turn">
                <Rotate color={color} />

              </div>
            </div>
            
          </div>
          <div className="lg:w-[50%] xl:ml-20 2xl:ml-40 lg:py-auto z-20 px-5 ">
            <h1
              className={`lg:font-normal font-medium lg:!leading-[70px] lg:text-5xl text-xl`}
            >
              Empowering your financial future through Smart Real Estate
              Investments
            </h1>
            <h1 className="font-normal text-xs lg:text-xl my-6 xl:pr-20 ">
              {" "}
              Save or Fund Wallet Directly, select an Investment, Invest. Get
              Returns. Trade Investment for Cash anytime
            </h1>
            <div className="text-white bg-black rounded-[11px] lg:rounded-3xl flex items-center justify-between lg:p-4 p-3 xl:mr-10">
              <div className="lg:w-[10%] w-[12%]">
                <img src={HxToken} alt="HxToken" />

              </div>
              <div className="font-Helvetica w-[55%] lg:w-[66%]">
                <h1 className="font-normal lg:text-base text-sm  mb-1">
                  HX Token shaping world’s investment Strategy{" "}
                </h1>
                <h1 className="font-normal lg:text-xs text-[10px] text-skywhite ">
                  Join millions who signed up
                </h1>
              </div>
              <div className=" lg:w-[24%]">
                <Link to="/login">
                <button className="bg-green lg:text-[13px] text-[8px] rounded-full px-5 py-2">
                  Launch App{" "}
                </button>
                </Link>
              </div>
              
            </div>
          </div>

          <div className="w-[50%] rounded-3xl lg:block hidden bg-white pt-10 pl-10">
            <img src={headerPic} alt="header-picture" className="w-full" />
          </div>
        </div>
      </div>

      <div className="py-5 px-5 bg-[#01C317] border-y border-[#111920]">
        <div className="content text-[#111920] text-center lg:text-lg text-sm font-segoe">

          <h1>Start with as little as N50k <span className="font-semibold underline">It’s that simple</span></h1>
        </div>
      </div>

      <div className="py-20 bg-[#111920] font-segoe appleIcon text-white" id="about">
        <div className="content text-center">
          <h1 className="font-normal text-3xl lg:text-[60px]">Investing made easy.</h1>
        </div>
        <div className="content lg:py-32 py-16">
          <div className="flex justify-between items-center px-10 lg:px-40 py-10 flex-wrap">
            <div className="px-10 mb-10 lg:mb-0">
              <div className="side relative">
                <img src={tradingMockup} alt="appleIcon" />
              </div>
            </div>
           
            <div className="lg:w-[350px] font-normal text-sm lg:text-lg text-center lg:text-left">
              <img src={houseIcon} alt="houseIcon" className="mb-2 hidden lg:block" />
              <h1>Your rent gets paid in bulk, you pay back in installments with our Rent-Gap-Financing (RGF) offer</h1>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center px-10 lg:px-40 py-10 flex-wrap">
            <div className="px-10 mb-10 lg:mb-0">

              <div className="side relative">
                <img src={bankBuilding} alt="building" />
              </div>
            </div>
            <div className="lg:w-[350px] font-normal text-sm lg:text-lg text-center lg:text-left">
              <img src={briefcase} alt="briefcaseIcon" className="mb-2 hidden lg:block" />
              <h1>Your contributory down-payment for mortgage loan gets paid, and you access your loan with our Mortgage Pre-Financing (MPF) offer</h1>
            </div>
            
            
          </div>
          <div className="flex justify-between items-center px-10 lg:px-40 py-10 flex-wrap">
            <div className="px-10 mb-10 lg:mb-0">

            <div className="side relative">
              <img src={exchange} alt="exchange" />
            </div>
            </div>
            <div className="w-[350px] font-normal text-sm lg:text-lg text-center lg:text-left">
              <img src={cash} alt="cashIcon" className="mb-2 hidden lg:block" />
              <h1>You sell off your property with ease, and get your cash with our Direct Property Acquisition (DPA) offer</h1>
            </div>
          </div>
          
        </div>
      </div>

      <div className="trust py-20 " id="products">
        
        {/* <div className="w-full lg:w-auto text-center lg:text-left mb-20 lg:mb-auto border"> */}
        <div className="content">
          <div className="flex flex-wrap items-center justify-between px-5 lg:pl-20">
            <div className="lg:w-1/2 mb-10">
              <img src={invest} alt="HxAfrica Mobile UI" />
            </div>
            <div className="text-left lg:w-1/2">
              <h1 className="font-normal lg:!leading-[70px] !leading-[50px] text-4xl lg:text-6xl mb-10 lg:mb-16">
               Why you can <br /> trust us</h1>

              
              <div className="font-normal lg:text-base text-sm text-[#0B1620] mb-10 lg:mb-12">
                  <h1>
                    With HXafrica as we say; “Investing in real estate is now a thing of choice and not social class”, anyone regardless of income level can own and get the full benefits of real estate investments. <br />
                    We are full blown end-to-end real estate service, as we take you from acquisition all the way to exit and everything in between.
                    Think Real Estate, Think HXafrica.
                  </h1>
              </div>
              <div>
                <Link to="/about">
                  <button className="text-black font-bold border border-black rounded-full px-11 py-3 cursor-pointer">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="bg-[#191919] py-20 relative apple">
        <div className="content xl:pl-10 px-5">
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="font-normal text-[#F8FFF9] text-4xl mb-14 lg:hidden">It is more exciting with you</h1>
            <div className="lg:w-1/2 w-full lg:pr-20 mb-10 lg:mb-0">
              <img src={group} alt="group" />
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <div className="rounded-xl lg:p-5">
                <h1 className="font-normal text-[#F8FFF9] leading-[70px] text-6xl mb-14 hidden lg:block">It is more exciting with you</h1>
                <div className="font-inter font-normal mb-2 flex flex-col">
                  
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-5 rounded-lg font-normal text-sm mb-4 outline-none"
                  />
                  <input
                    type="submit"
                    value="Register Now"
                    className="p-3 rounded-full text-lg font-normal bg-green text-white"
                    onClick={() => navigate("/sign-up")}
                  />
                  <h1 className="text-white font-normal text-[10px] font-segoe text-center py-5">By using this website you agree to our <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-[#F8FFF9] pt-16">
        <div className="content">
          <div className="lg:flex justify-between items-center px-5 lg:px-0">
            <div className="lg:w-1/2 lg:pl-20 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className=" text-green text-2xl lg:text-4xl lg:leading-[60px] mb-5">
                Get started and download our mobile app
              </h1>
              <h1 className=" text-black font-normal lg:text-lg text-sm mb-5">
                Download our mobile app now to enjoy our <br /> amazing features.
              </h1>
              <div className="flex justify-center lg:justify-start">
                <img src={appleStore} alt="appleStore button" className="mr-3"/>
                <img src={googlePlay} alt="googlePlay button" />
              </div>
            </div>
            <div className="lg:w-1/2 px-5 lg:px-0">
              <img src={appPreview} alt="appPreview" />
            </div>
           
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default LandingPage;
