import React, { useState } from "react";
import logoWhite from "./../assets/images/HXafrica Logo 1.svg";
import barrier from "./../assets/images/barrier.svg";
import headerPic from "./../assets/images/appMock.svg";
import vector from "./../assets/images/Vector.svg";
import ceo from "./../assets/images/boards/Ugo Peters.png";
import gov from "./../assets/images/boards/Justice Emmanuel.png";
import prof from "./../assets/images/boards/Prof Ndubuisi Ekekwe.png";
import pascal from "./../assets/images/boards/paschal Okwundu.png";
import francis from "./../assets/images/boards/Mr. Francis Okumagba.png";
import sufian from "./../assets/images/boards/owolabi.jpeg";
import alhaji from "./../assets/images/boards/Alhaji Ibraheem Yelwa.png";
import amby from "./../assets/images/boards/Amby Uche.png";
import aca from "./../assets/images/boards/Chidinma Queen Alfred.png";
import linus from "./../assets/images/boards/Linus Caleb.png";
import Akinjide from "./../assets/images/boards/Akinjide Fagbemi.png";
import tayo from "./../assets/images/boards/Temitayo Gbadebo..png";
import Austin from "./../assets/images/boards/Austin Igwe.png";
import Adiukwu from "./../assets/images/boards/Chris Adiukwu.jpeg";

import liquidity from "./../assets/images/liquidity.svg";
import access from "./../assets/images/access.svg";
import shot from "./../assets/images/mobileDash.png";
import rent from "./../assets/images/Rent.svg";
import check from "./../assets/images/money-check.svg";
import bag from "./../assets/images/moneybag.svg";
import Drew from "./../assets/images/Drew.svg";
import Candice from "./../assets/images/Candice.svg";
import Natali from "./../assets/images/Natali.svg";
import Demi from "./../assets/images/Demi.svg";
import Lana from "./../assets/images/Lana.svg";
import Phoenix from "./../assets/images/phoenix.svg";
import facebook from "./../assets/images/fb.svg";
import twitter from "./../assets/images/twitter.svg";
import phone from "./../assets/images/phone.svg";
import HxToken from "./../assets/images/HxToken.svg";
import mail from "./../assets/images/mail.svg";
import whatsapp from "./../assets/images/whatsapp.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./header";


function LandingPage() {
  

  return (
    <div className="font-family bg-white">
      <Helmet>
        <title>HXAfrica | Home</title>
      </Helmet>
      <Header />
      <div className=" bg-[#FDFDFD]" id="home">
        <div className="content flex items-center border">
          <div className="lg:w-1/2 px-5 lg:px-auto py-10 border lg:py-auto z-20">
            <h1
              className={`font-normal leading-[70px] lg:text-5xl text-[34px]`}
            >
              Empowering your financial future through Smart Real Estate
              Investments
            </h1>
            <h1 className="font-normal text-xl my-6">
              {" "}
              Save or Fund Wallet Directly, select an Investment, Invest. Get
              Returns. Trade Investment for Cash anytime
            </h1>
            <div className="text-white bg-black rounded-3xl flex items-center justify-between p-4">
              <img src={HxToken} alt="HxToken" />
              <div className="font-Helvetica">
                <h1 className="font-normal text-base mb-1">
                  HX Token shaping world’s investment Strategy{" "}
                </h1>
                <h1 className="font-normal text-xs text-skywhite ">
                  Join millions who signed up
                </h1>
              </div>
              <button className="bg-green text-[13px] rounded-full px-5 py-2">
                Launch App{" "}
              </button>
            </div>
          </div>

          <div className="pt-20 w-1/2 lg:block hidden">
            <img src={headerPic} alt="header-picture" className="" />
          </div>
        </div>
      </div>

      <div className="py-20 px-5 bg-white">
        <div className="content">
          <div className="border px-5 lg:px-20 py-12 gradient lg:flex justify-between items-center font-roboto text-white text-xl lg:text-2xl">
            <div>
              <h1 className="font-normal mb-2">
                Save or Fund Wallet Directly, select an Investment, Invest.{" "}
                <br /> Get Returns. Trade Investment for Cash anytime
              </h1>
              <h1 className="font-semibold mt-6">It's that simple!</h1>
            </div>
            <div className="mt-10 lg:mt-0">
              <a href="#products">
                <button className="bg-white rounded-lg font-inter text-appText flex px-4 lg:py-2 py-3 items-center justify-center text-base w-full lg:w-auto">
                  Learn More{" "}
                  <img src={vector} alt="angle-arrow" className="ml-3" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-20 bg-white" id="about">
        <div className="content">
          <div>
            <h1 className="text-green font-roboto font-bold text-3xl lg:text-4xl">
              About our Company{" "}
            </h1>
            <h1 className="text-banner font-normal mb-2 text-xl lg:text-2xl">
              Get to know who we are{" "}
            </h1>
          </div>
          <div className="text-banner font-normal mb-2 text-2xl lg:px-48 px-5 py-14">
            <h1>
              We have positioned to solve the perennial problems that plagues
              the real estate industry; With our block-chain powered technology,
              we are presenting lasting solutions to;
            </h1>
          </div>
          <div className="flex flex-wrap justify-center ">
            <div className="border border-features pb-20 pt-10 rounded-3xl w-72 mb-5 flex flex-col items-center">
              <img src={barrier} alt="High Entry Barrier" className="mb-2" />

              <h1 className="lg:text-2xl text-xl">High Entry Barrier</h1>
            </div>
            <div className="border border-features pb-20 pt-10 rounded-3xl w-72 mb-5 flex flex-col items-center mx-3">
              <img src={liquidity} alt="Liquidity" className="mb-2" />

              <h1 className="lg:text-2xl text-xl">Liquidity</h1>
            </div>
            <div className="border border-features pb-20 pt-10 rounded-3xl w-72 mb-5 flex flex-col items-center">
              <img src={access} alt="Liquidity" className="mb-2" />

              <h1 className="lg:text-2xl text-xl">Access to Finance</h1>
            </div>
          </div>
          <div className="text-banner font-normal mb-2 text-lg lg:text-2xl lg:px-44 px-5 py-14 ">
            <h1>
              Our approach opens up the industry for the low-to-middle income
              earners to participate in the real estate industry
            </h1>
            <h1 className="mt-6">
              What we have built is a real estate community.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-product lg:px-48 px-5 py-20 relative " id="products">
        <div className="absolute top-0 bottom-0 right-0 left-0 waitMob lg:hidden"></div>
        <div className="absolute top-0 bottom-0 right-0 left-0 wait hidden lg:block z-10"></div>
        {/* <div className="w-full lg:w-auto text-center lg:text-left mb-20 lg:mb-auto border"> */}
        <div className="content">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-left lg:w-2/5 w-full z-20 mb-10 lg:mb-0">
              <h1 className="font-bold text-2xl lg:text-3xl font-roboto mb-2">
                Join Nigeria's First Real Estate Cooperative (Hx),
              </h1>

              <h1 className="text-banner text-xl lg:text-2xl font-normal mb-2 ">
                With Hx
              </h1>

              <div className="font normal text-lg text-black my-10 pr-5">
                <div className="my-4">
                  <img src={rent} alt="house-building" />
                  <h1>
                    Opportunity to get your annual rent paid in bulk while you
                    pay in instalment all through the year (Rent
                    Pay-small-small)
                  </h1>
                </div>
                <div className="my-4">
                  <img src={rent} alt="house-building" />
                  <h1>
                    Opportunity to become a landlord easily by co-owning rental
                    property with members (ogbonge landlord){" "}
                  </h1>
                </div>
                <div className="my-4">
                  <img src={check} alt="house-building" />
                  <h1>
                    Opportunity to save-in-land with your "shikini" moni with
                    members (Ogbonge Investor)
                  </h1>
                </div>
                <div className="my-4">
                  <img src={bag} alt="house-building" />
                  <h1>
                    Opportunity to own your own house now while you pay back for
                    up to 30 years! (Sack-your-landlord)
                  </h1>
                </div>
              </div>
              <div>
                <Link to="/sign-up">
                  <button className="bg-green text-white rounded-lg px-11 items-center py-3 flex font-inter cursor-pointer w-full lg:w-auto justify-center">
                    Register Now <AiOutlineArrowRight className="ml-3" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:pr-5 lg:pr-auto z-20">
              <img src={shot} alt="HxAfrica Mobile UI" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white lg:px-48 px-10 py-20 relative ">
        <div className="content">
          <div className="flex flex-wrap items-center justify-between">
            <div className="lg:w-1/2 w-full lg:pr-20 mb-10 lg:mb-0">
              <h1 className="font-bold text-4xl lg:text-5xl font-roboto text-black mb-4">
                {" "}
                Get registered with us{" "}
              </h1>
              <h1 className="font-normal mb-2 text-xl lg:text-2xl text-banner">
                You can send us a direct email on{" "}
                <span className="text-green">hello@hxafrica.com</span>
              </h1>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <div className="rounded-xl shadow-2xl w-[100%] p-5 lg:p-10 lg:w-128 ">
                <h1 className="font-bold text-2xl mb-8">Register Now</h1>
                <div className="font-inter font-normal mb-2 flex flex-col">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-3 rounded-lg border mb-6 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 rounded-lg border mb-6 outline-none"
                  />
                  <input
                    type="submit"
                    value="Register"
                    className="p-3 rounded-lg bg-green text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:px-36 px-5 " id="service">
        <div className="content">
          <div>
            <h1 className="text-green font-roboto text-3xl lg:text-4xl font-bold mb-3">
              Our Services{" "}
            </h1>
            <h1 className="font-normal mb-2 text-xl lg:text-2xl lg:w-96 ">
              Our specialized service delivery entities
            </h1>
          </div>
          <div className="flex flex-wrap justify-between py-10 text-white">
            <div className="flex items-end border rounded-2xl  w-full h-[263px] lg:w-49 lg:h-482 realtors p-5 lg:p-10 mb-5">
              <div className="">
                <h1 className="font-bold text-xl lg:text-4xl mb-3">
                  Realtors First
                </h1>
                <h1 className="font-normal mb-2 text-xs lg:text-xl mb-4">
                  Connecting Real Estate Buyers with Sellers
                </h1>
                <a href="https://realtorsfirst.com" target="_blank">
                  <button className="flex px-3 lg:px-5 py-3 bg-pendingtext items-center rounded-lg text-xs lg:text-base">
                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                  </button>
                </a>
              </div>
            </div>
            <div className="flex items-end border rounded-2xl w-full h-[263px] lg:w-49 lg:h-482 clover p-5 lg:p-10 mb-5">
              <div className="">
                <h1 className="font-bold text-xl lg:text-4xl mb-3">
                  Cloverhedera
                </h1>
                <h1 className="font-normal mb-2 text-xs lg:text-xl mb-4">
                  Real Estate Consultancy Company
                </h1>
                <a href="https://cloverhedera.com.ng " target="_blank">
                  <button className="flex px-3 lg:px-5 py-3 bg-pendingtext items-center rounded-lg text-xs lg:text-base">
                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                  </button>
                </a>
              </div>
            </div>
            <div className="flex items-end border rounded-2xl w-full h-[263px] lg:w-49 lg:h-482 rayne p-5 lg:p-10 mb-5">
              <div className="">
                <h1 className="font-bold text-xl lg:text-4xl mb-3">
                  RayneRise
                </h1>
                <h1 className="font-normal mb-2 text-xs lg:text-xl mb-4">
                  Unmatched Advertisng Services
                </h1>
                <a href="https://raynerise.com" target="_blank">
                  <button className="flex px-3 lg:px-5 py-3 bg-pendingtext items-center rounded-lg text-xs lg:text-base">
                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                  </button>
                </a>
              </div>
            </div>
            <div className="flex items-end border rounded-2xl w-full h-[263px] lg:w-49 lg:h-482 gineer p-5 lg:p-10 mb-5">
              <div className="">
                <h1 className="font-bold text-xl lg:text-4xl mb-3">
                  Imagineering
                </h1>
                <h1 className="font-normal mb-2 text-xs lg:text-xl mb-4">
                  Engineering Imaginations
                </h1>
                <a href="https://Imagineering.ng" target="_blank">
                  <button className="flex px-3 lg:px-5 py-3 bg-pendingtext items-center rounded-lg text-xs lg:text-base">
                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ash py-14 px-5">
        <div className="content">
          <div className="flex flex-col items-center">
            <h1 className="font-inter font-semibold text-deep text-3xl mb-7">
              With HXafrica
            </h1>
            <h1 className="font-normal mb-2 text-banner text-xl lg:text-2xl lg:w-9/12 text-center">
              With HXafrica as we say; “Investing in real estate is now a thing
              of choice and not social class”, anyone regardless of income level
              can own and get the full benefits of real estate investments We
              are full blown end-to-end real estate service, as we take you from
              acquisition all the way to exit and everything in between. <br />
              Think Real Estate, Think HXafrica.
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-5 lg:px-32" id="board">
        <div className="content">
          <div className="flex flex-col items-center font-roboto">
            <h1 className=" font-semibold text-deep text-3xl mb-3 text-center">
              Board Of Directors/ Advisors
            </h1>
            <h1 className="font-normal mb-2 text-statustext text-xl w-full lg:w-3/5 text-center ">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do you best work.
            </h1>
          </div>
          <div className="py-10 flex flex-wrap justify-around">
            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={Adiukwu}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Chris Adiukwu</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                GM Hx Cooperative
              </h1>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={gov}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">
                Justice Emmanuel Fagbenle (rtd)
              </h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Chairman - Corporate Governance/Legal Advisory
              </h1>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={sufian}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg">Mr Sufian Owolabi Abdulkarim</h1>
              <h1 className="font-normal mb-2 text-green">SEC Advisor</h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={prof}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Prof Ndubuisi Ekekwe</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Technical & Entrepreneurship Advisory
              </h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={pascal}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Paschal Okwundu</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Growth-Hacking Advisory
              </h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={alhaji}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Alhaji Ibraheem Yelwa</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Finance (Microfinance & Compliance)
              </h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={francis}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Mr. Francis Okumagba</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Finance (SEC & Banking) and Business Development Advisory
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 lg:px-32 px-5" id="management">
        <div className="content">
          <div className="flex flex-col items-center font-roboto">
            <h1 className=" font-semibold text-deep text-3xl text-center mb-3">
              Meet Our Management Team
            </h1>
            <h1 className="font-normal mb-2 text-statustext text-xl lg:w-3/5 text-center ">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do you best work.
            </h1>
          </div>
          <div className="py-10 flex flex-wrap justify-around">
            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={ceo}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Ugo Peters</h1>
              <h1 className="font-normal mb-2 text-green text-center">CEO</h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={Akinjide}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Akinjide Fagbemi</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Real Estate Operations
              </h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={Austin}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Austin Igwe</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Go-to-Market Advisory
              </h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={amby}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Amby Uche</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Admin & Project Management
              </h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={linus}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Linus Caleb</h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Brand & Web Consultant
              </h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={tayo}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">Temitayo Gbadebo</h1>
              <h1 className="font-normal mb-2 text-green text-center">CTO</h1>
            </div>

            <div className="flex flex-col items-center w-full lg:w-1/4 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={aca}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg text-center">
                Chidinma Queen Alfred, ACA
              </h1>
              <h1 className="font-normal mb-2 text-green text-center">
                Accountant
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-hxafrica lg:px-24 px-10 pt-20 pb-10">
        <div className="content">
          <div className="flex flex-wrap">
            <div className=" w-full lg:w-1/2 mb-10 lg:mb-0">
              <img src={logoWhite} alt="HXafrica" />
              <div className="flex justify-between w-60 pt-4">
                <a
                  href="https://www.facebook.com/housingexchange.ng?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="" target="_blank">
                  <img src={twitter} alt="twitter" />
                </a>
                {/* <img src={whatsapp} alt="whatsapp" /> */}
                <img src={phone} alt="phone" />
                <img src={mail} alt="mail" />
              </div>
            </div>
            <div className=" lg:w-1/2 w-full flex flex-wrap justify-between text-white">
              <div>
                <h1 className="text-lightgreen font-bold text-lg mb-5">
                  Product
                </h1>
                <div>
                  <a href="#products">
                    <h1 className="font-normal mb-2 ">Hx</h1>
                  </a>
                </div>
              </div>
              <div>
                <h1 className="text-lightgreen font-bold text-lg mb-5">
                  Services
                </h1>
                <div className="">
                  <a href="https://realtorsfirst.com" target="_blank">
                    <h1 className="font-normal mb-2 ">Realtors First</h1>{" "}
                  </a>
                  <a href="https://cloverhedera.com.ng " target="_blank">
                    <h1 className="font-normal mb-2 ">Cloverhedera</h1>
                  </a>
                  <a href="https://raynerise.com" target="_blank">
                    <h1 className="font-normal mb-2 ">RayneRise</h1>
                  </a>
                  <a href="https://Imagineering.ng" target="_blank">
                    <h1 className="font-normal mb-2 ">Imagineering</h1>
                  </a>
                </div>
              </div>
              <div className="my-10 lg:my-0">
                <h1 className="text-lightgreen font-bold text-lg mb-5">
                  About Us
                </h1>
                <div className="">
                  <a href="#about">
                    <h1 className="font-normal mb-2 ">About the company</h1>
                  </a>
                  <a href="#management">
                    <h1 className="font-normal mb-2 ">The Management team</h1>{" "}
                  </a>
                  <a href="#board">
                    <h1 className="font-normal mb-2 ">
                      The Board of directors/ advisors <br />
                      With HXafrica
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-copyright py-2.5 mt-16 text-center text-white text-sm lg:text-base">
            <h1>
              © 2022 Housing Exchange - HX Africa. <br className="lg:hidden" />
              All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
