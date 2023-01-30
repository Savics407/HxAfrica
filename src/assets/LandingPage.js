import React, { useState } from "react";
import logo from "./images/HXafrica Logo.svg";
import logoWhite from "./images/HXafrica Logo 1.svg";
import barrier from "./images/barrier.svg";
import headerPic from "./images/Home image.png";
import vector from "./images/Vector.svg";
import ceo from "./images/boards/Ugo Peters.png";
import gov from "./images/boards/Justice Emmanuel.png";
import prof from "./images/boards/Prof Ndubuisi Ekekwe.png";
import pascal from "./images/boards/paschal Okwundu.png";
import francis from "./images/boards/Mr. Francis Okumagba.png";
import alhaji from "./images/boards/Alhaji Ibraheem Yelwa.png";
import amby from "./images/boards/Amby Uche.png";
import aca from "./images/boards/Chidinma Queen Alfred.png";
import linus from "./images/boards/Linus Caleb.png";
import Akinjide from "./images/boards/Akinjide Fagbemi.png";
import tayo from "./images/boards/Temitayo Gbadebo..png";
import Austin from "./images/boards/Austin Igwe.png";

import liquidity from "./images/liquidity.svg";
import access from "./images/access.svg";
import shot from "./images/mobileDash.png";
import rent from "./images/Rent.svg";
import check from "./images/money-check.svg";
import bag from "./images/moneybag.svg";
import Drew from "./images/Drew.svg";
import Candice from "./images/Candice.svg";
import Natali from "./images/Natali.svg";
import Demi from "./images/Demi.svg";
import Lana from "./images/Lana.svg";
import Phoenix from "./images/phoenix.svg";
import facebook from "./images/fb.svg";
import twitter from "./images/twitter.svg";
import phone from "./images/phone.svg";
import mail from "./images/mail.svg";
import whatsapp from "./images/whatsapp.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-family bg-white">
      <div className="bg-green text-white lg:py-2 p-3 text-center ">
        <h1 className="font-normal mb-2 lg:text-base text-sm ">
          Be among the first to know when we launch!
        </h1>
      </div>
      <div className="bg-white py-5 px-5">
        <div className="content">
          <div className=" flex justify-between items-center">
            <div className="w-[130px] lg:w-auto">
              <img src={logo} alt="HXAfrica Logo" />
            </div>
            <div
              className={`justify-between items-center lg:w-1/2 !block bg-white fixed top-0 -left-full lg:left-auto bottom-0 w-full transition-all duration-1000 lg:!relative lg:!flex ${
                isOpen && "!left-0 z-30 transform"
              }`}
            >
              <div className="lg:hidden flex justify-between items-center px-5 py-10">
                <div className="w-[130px] lg:w-auto">
                  <img src={logo} alt="HXAfrica Logo" />
                </div>
                <div
                  className="lg:hidden  p-2 text-2xl "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CgClose />
                </div>
              </div>

              <div
                className={`flex lg:flex-row h-[200px] lg:h-auto justify-around flex-col ${
                  isOpen && "px-1"
                }`}
              >
                <h1 className="px-4">Home</h1>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  <h1 className="px-4">About us</h1>{" "}
                </a>
                <a href="#products" onClick={() => setIsOpen(false)}>
                  <h1 className="px-4">Products</h1>{" "}
                </a>
                <a href="#service" onClick={() => setIsOpen(false)}>
                  <h1 className="px-4">Service</h1>
                </a>
              </div>
              <div className={`${isOpen && "p-5"} p-5 lg:p-0`}>
                <button className="border border-green font-inter capitalize text-green rounded-lg px-5 py-3 hover:bg-green hover:text-white transition">
                  Contact us
                </button>
              </div>
            </div>
            <div
              className="lg:hidden p-2 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CgMenuRight />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-two">
        <div className="content block lg:flex items-center">
          <div className="lg:w-1/2 lg:pl-28 px-5 lg:px-auto py-10 lg:py-auto z-20 lg:hidden bg-one">
            <h1 className="font-bold lg:text-4xl text-[34px] font-Merriweather">
              Real Estate Investment meets you where you are! <br />{" "}
              <span className="text-green lg:text-3xl text-[26px]">
                {" "}
                It’s now a thing of Choice with HXAFRICA
              </span>
            </h1>
            <h1 className="font-normal lg:text-2xl text-xl my-6">
              {" "}
              Start with as low as 50k, get cash back from your investment
              anytime.
            </h1>
            <Link to="/sign-up">
              <button className="bg-green py-3 px-8 font-inter rounded-lg text-white cursor-pointer w-full lg:w-auto">
                Start Now
              </button>
            </Link>
          </div>

          <div className="lg:w-1/2 lg:pl-28 px-5 lg:px-auto py-10 lg:py-auto z-20 hidden lg:block">
            <h1 className="font-bold lg:text-4xl text-[34px] font-Merriweather">
              Real Estate Investment meets you where you are! <br />{" "}
              <span className="text-green lg:text-3xl text-[26px]">
                {" "}
                It’s now a thing of Choice with HXAFRICA
              </span>
            </h1>
            <h1 className="font-normal lg:text-2xl text-xl my-6">
              {" "}
              Start with as low as 50k, get cash back from your investment
              anytime.
            </h1>
            <Link to="/sign-up">
              <button className="bg-green py-3 px-8 font-inter rounded-lg text-white cursor-pointer w-full lg:w-auto">
                Start Now
              </button>
            </Link>
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
                Join Nigeria's First Real Estate Cooperative (REICo),
              </h1>

              <h1 className="text-banner text-xl lg:text-2xl font-normal mb-2 ">
                With REICo
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
              <img src={shot} alt="Reico Mobile UI" />
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
      <div className="bg-white py-16 px-5 lg:px-32">
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
            <div className="flex flex-col items-center w-full lg:w-1/3 py-5 font-inter">
              <div className="border-5 mb-3 w-24 h-24 shadow-xl rounded-full bg-white">
                <img
                  src={ceo}
                  alt="Board of Directors"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h1 className="text-lg">Ugo Peters</h1>
              <h1 className="font-normal mb-2 text-green">CEO</h1>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/3 py-5 font-inter">
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

            <div className="flex flex-col items-center w-full lg:w-1/3 py-5 font-inter">
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

            <div className="flex flex-col items-center w-full lg:w-1/3 py-5 font-inter">
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

            <div className="flex flex-col items-center w-full lg:w-1/3 py-5 font-inter">
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

            <div className="flex flex-col items-center w-full lg:w-1/3 py-5 font-inter">
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
      <div className="bg-white py-16 lg:px-32 px-5">
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
              <h1 className="text-lg text-center">Temitope Gbadebo</h1>
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
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={whatsapp} alt="whatsapp" />
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
                  <h1 className="font-normal mb-2 ">REICo</h1>
                </div>
              </div>
              <div>
                <h1 className="text-lightgreen font-bold text-lg mb-5">
                  Services
                </h1>
                <div className="">
                  <h1 className="font-normal mb-2 ">Realtors First</h1>
                  <h1 className="font-normal mb-2 ">Cloverhedera</h1>
                  <h1 className="font-normal mb-2 ">RayneRise</h1>
                  <h1 className="font-normal mb-2 ">Imagineering</h1>
                </div>
              </div>
              <div className="my-10 lg:my-0">
                <h1 className="text-lightgreen font-bold text-lg mb-5">
                  About Us
                </h1>
                <div className="">
                  <h1 className="font-normal mb-2 ">About the company</h1>
                  <h1 className="font-normal mb-2 ">The Management team</h1>
                  <h1 className="font-normal mb-2 ">
                    The Board of directors/ advisors
                  </h1>
                  <h1 className="font-normal mb-2 ">With HXafrica</h1>
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
