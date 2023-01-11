import React, { useState } from "react";
import logo from "./images/HXafrica Logo.svg";
import logoWhite from "./images/HXafrica Logo 1.svg";
import barrier from "./images/barrier.svg";
import headerPic from "./images/header picture.svg";
import vector from "./images/Vector.svg";
import ceo from "./images/CEO.svg";
import liquidity from "./images/liquidity.svg";
import access from "./images/access.svg";
import shot from "./images/Appshot.svg";
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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="font-family bg-white">
      <div className="bg-green text-white p-2 text-center">
        <h1 className="font-normal mb-2 ">
          Be among the first to know when we launch!
        </h1>
      </div>
      <div className="bg-white px-24 py-5 flex justify-between items-center">
        <div>
          <img src={logo} alt="HXAfrica Logo" />
        </div>
        <div className=" flex justify-between items-center w-1/2 ">
          <div className="flex">
            <h1 className="px-4">Home</h1>
            <h1 className="px-4">About us</h1>
            <h1 className="px-4">Products</h1>
            <h1 className="px-4">Service</h1>
          </div>
          <div>
            <button className="border border-green font-inter capitalize text-green rounded-lg px-5 py-3 hover:bg-green hover:text-white transition">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center">
        <div className=" w-1/2 pl-36">
          <h1 className="font-bold text-4xl font-roboto">
            Real Estate Investment meets you where you are! <br />{" "}
            <span className="text-green">
              {" "}
              It’s now a thing of Choice with HXAFRICA
            </span>
          </h1>
          <h1 className="font-normal mb-2 text-2xl my-6">
            {" "}
            Start with as little as 50k
          </h1>
          <Link to="/sign-up">
            <button className="bg-green py-3 px-8 font-inter rounded-lg text-white cursor-pointer">
              Start Now
            </button>
          </Link>
        </div>
        <div className="bg-landing pt-20 pr-36 w-1/2">
          <img src={headerPic} alt="header-picture" />
        </div>
      </div>

      <div className="p-20 bg-white">
        <div className="border px-20 py-12 gradient flex justify-between items-center font-roboto text-white text-2xl">
          <div>
            <h1 className="font-normal mb-2">
              Save or Fund Wallet Directly, select an Investment, Invest. <br />{" "}
              Get Returns. Trade Investment for Cash anytime
            </h1>
            <h1 className="font-semibold mt-6">It's that simple!</h1>
          </div>
          <div>
            <button className="bg-white rounded-lg font-inter text-appText flex px-4 py-2 items-center text-base">
              Learn More <img src={vector} alt="angle-arrow" className="ml-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center p-20 bg-white">
        <div>
          <h1 className="text-green font-roboto font-bold text-4xl">
            About our Company{" "}
          </h1>
          <h1 className="text-banner font-normal mb-2 text-2xl">
            Get to know who we are{" "}
          </h1>
        </div>
        <div className="text-banner font-normal mb-2 text-2xl px-48 py-14">
          <h1>
            We have positioned to solve the perennial problems that plagues the
            real estate industry; With our block-chain powered technology, we
            are presenting lasting solutions to;
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="border border-features pb-20 pt-10 rounded-3xl w-72 flex flex-col items-center">
            <img src={barrier} alt="High Entry Barrier" className="mb-2" />

            <h1>High Entry Barrier</h1>
          </div>
          <div className="border border-features pb-20 pt-10 rounded-3xl w-72 flex flex-col items-center mx-3">
            <img src={liquidity} alt="Liquidity" className="mb-2" />

            <h1>Liquidity</h1>
          </div>
          <div className="border border-features pb-20 pt-10 rounded-3xl w-72 flex flex-col items-center">
            <img src={access} alt="Liquidity" className="mb-2" />

            <h1>Access to Finance</h1>
          </div>
        </div>
        <div className="text-banner font-normal mb-2 text-2xl px-44 py-14 ">
          <h1>
            Our approach opens up the industry for the low-to-middle income
            earners to participate in the real estate industry
          </h1>
          <h1 className="mt-6">
            What we have built is a real estate community.
          </h1>
        </div>
      </div>

      <div className="bg-product flex flex-wrap px-48 items-center justify-between py-20 relative ">
        <div className="absolute top-0 bottom-0 right-0 left-0 waitMob lg:hidden"></div>
        <div className="absolute top-0 bottom-0 right-0 left-0 wait hidden lg:block z-10"></div>
        {/* <div className="w-full lg:w-auto text-center lg:text-left mb-20 lg:mb-auto border"> */}
        <div className="text-left w-2/5 z-20 ">
          <h1 className="font-bold text-3xl font-roboto mb-2">
            Join Nigeria's First Real Estate Cooperative (REICo),
          </h1>

          <h1 className="text-banner text-2xl font-normal mb-2 ">With REICo</h1>

          <div className="font normal text-lg text-black my-8 pr-5">
            <div className="my-4">
              <img src={rent} alt="house-building" />
              <h1>
                Your rent gets paid in bulk, you pay back in instalments with
                our Rent-Gap-Financing (RGF) offer
              </h1>
            </div>
            <div className="my-4">
              <img src={check} alt="house-building" />
              <h1>
                You sell off your apartments with ease, and get your cash with
                our Direct Property Acquisition (DPA) offer
              </h1>
            </div>
            <div className="my-4">
              <img src={bag} alt="house-building" />
              <h1>
                Your contributory down-payment for mortgage loan gets paid, and
                you access your loan with our Mortgage Pre-Financing (MPF) offer
              </h1>
            </div>
          </div>
          <div>
            <Link to="/sign-up">
              <button className="bg-green text-white rounded-lg px-11 items-center py-3 flex font-inter cursor-pointer">
                Register Now <AiOutlineArrowRight className="ml-3" />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 pr-5 lg:pr-auto z-20">
          <img src={shot} alt="Reico Mobile UI" />
        </div>
      </div>

      <div className="bg-white flex flex-wrap px-48 items-center justify-between py-20 relative ">
        <div className="w-1/2 pr-20">
          <h1 className="font-bold text-5xl font-roboto text-black mb-4">
            {" "}
            Get registered with us{" "}
          </h1>
          <h1 className="font-normal mb-2 text-2xl text-banner">
            You can send us a direct email on{" "}
            <span className="text-green">hello@hxafrica.com</span>
          </h1>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="rounded-xl shadow-2xl p-10 w-128 ">
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
      <div className="py-20 px-36">
        <div>
          <h1 className="text-green font-roboto text-4xl font-bold mb-3">
            Our Services{" "}
          </h1>
          <h1 className="font-normal mb-2 text-2xl w-96">
            Our specialized service delivery entities
          </h1>
        </div>
        <div className="flex flex-wrap justify-between py-10 text-white">
          <div className="flex items-end border rounded-2xl w-49 h-482 bg-banner p-10 mb-5">
            <div className="">
              <h1 className="font-bold text-4xl mb-3">Realtors First</h1>
              <h1 className="font-normal mb-2 text-xl mb-4">
                Connecting Real Estate Buyers with Sellers
              </h1>
              <button className="flex px-5 py-3 bg-pendingtext items-center rounded-lg">
                Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
              </button>
            </div>
          </div>
          <div className="flex items-end border rounded-2xl w-49 h-482 bg-banner p-10 mb-5">
            <div className="">
              <h1 className="font-bold text-4xl mb-3">Cloverhedera</h1>
              <h1 className="font-normal mb-2 text-xl mb-4">
                Real Estate Consultancy Company
              </h1>
              <button className="flex px-5 py-3 bg-pendingtext items-center rounded-lg">
                Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
              </button>
            </div>
          </div>
          <div className="flex items-end border rounded-2xl w-49 h-482 bg-banner p-10">
            <div className="">
              <h1 className="font-bold text-4xl mb-3">RayneRise</h1>
              <h1 className="font-normal mb-2 text-xl mb-4">
                Unmatched Advertisng Services
              </h1>
              <button className="flex px-5 py-3 bg-pendingtext items-center rounded-lg">
                Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
              </button>
            </div>
          </div>
          <div className="flex items-end border rounded-2xl w-49 h-482 bg-banner p-10">
            <div className="">
              <h1 className="font-bold text-4xl mb-3">Imagineering</h1>
              <h1 className="font-normal mb-2 text-xl mb-4">
                Engineering Imaginations
              </h1>
              <button className="flex px-5 py-3 bg-pendingtext items-center rounded-lg">
                Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ash py-14 flex flex-col items-center">
        <h1 className="font-inter font-semibold text-deep text-3xl mb-5">
          With HXafrica
        </h1>
        <h1 className="font-normal mb-2 text-banner text-2xl w-9/12 text-center">
          With HXafrica as we say; “Investing in real estate is now a thing of
          choice and not social class”, anyone regardless of income level can
          own and get the full benefits of real estate investments We are full
          blown end-to-end real estate service, as we take you from acquisition
          all the way to exit and everything in between. <br />
          Think Real Estate, Think HXafrica.
        </h1>
      </div>
      <div className="bg-white py-16 px-32">
        <div className="flex flex-col items-center font-roboto">
          <h1 className=" font-semibold text-deep text-3xl mb-3">
            Board Of Directors/Advisors
          </h1>
          <h1 className="font-normal mb-2 text-statustext text-xl w-3/5 text-center ">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </h1>
        </div>
        <div className="py-10 flex flex-wrap justify-around">
          <div className="flex flex-col items-center w-1/4 py-5 font-inter">
            <img src={ceo} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Olivia Rhye</h1>
            <h1 className="font-normal mb-2 text-green">Founder & CEO</h1>
          </div>

          <div className="flex flex-col items-center w-1/4 py-5 font-inter">
            <img src={Phoenix} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Phoenix Baker</h1>
            <h1 className="font-normal mb-2 text-green">Engineering Manager</h1>
          </div>

          <div className="flex flex-col items-center w-1/4 py-5 font-inter">
            <img src={Lana} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Lana Steiner</h1>
            <h1 className="font-normal mb-2 text-green">Product Manager</h1>
          </div>

          <div className="flex flex-col items-center w-1/4 py-5 font-inter">
            <img src={Demi} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Demi Wilkinson</h1>
            <h1 className="font-normal mb-2 text-green">Frontend Developer</h1>
          </div>

          <div className="flex flex-col items-center w-1/4 py-5 font-inter">
            <img src={Candice} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Candice Wu</h1>
            <h1 className="font-normal mb-2 text-green">Backend Developer</h1>
          </div>

          <div className="flex flex-col items-center w-1/4 py-5 font-inter">
            <img src={Natali} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Natali Craig</h1>
            <h1 className="font-normal mb-2 text-green">Product Designer</h1>
          </div>

          <div className="flex flex-col items-center w-1/4 py-5 font-inter">
            <img src={Drew} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Drew Cano</h1>
            <h1 className="font-normal mb-2 text-green">UX Researcher</h1>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-32">
        <div className="flex flex-col items-center font-roboto">
          <h1 className=" font-semibold text-deep text-3xl mb-3">
            Meet Our Management Team
          </h1>
          <h1 className="font-normal mb-2 text-statustext text-xl w-3/5 text-center ">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </h1>
        </div>
        <div className="py-10 flex flex-wrap justify-around">
          <div className="flex flex-col items-center w-1/3 py-5 font-inter">
            <img src={ceo} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Olivia Rhye</h1>
            <h1 className="font-normal mb-2 text-green">Founder & CEO</h1>
          </div>

          <div className="flex flex-col items-center w-1/3 py-5 font-inter">
            <img src={Phoenix} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Phoenix Baker</h1>
            <h1 className="font-normal mb-2 text-green">Engineering Manager</h1>
          </div>

          <div className="flex flex-col items-center w-1/3 py-5 font-inter">
            <img src={Lana} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Lana Steiner</h1>
            <h1 className="font-normal mb-2 text-green">Product Manager</h1>
          </div>

          <div className="flex flex-col items-center w-1/3 py-5 font-inter">
            <img src={Demi} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Demi Wilkinson</h1>
            <h1 className="font-normal mb-2 text-green">Frontend Developer</h1>
          </div>

          <div className="flex flex-col items-center w-1/3 py-5 font-inter">
            <img src={Candice} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Candice Wu</h1>
            <h1 className="font-normal mb-2 text-green">Backend Developer</h1>
          </div>

          <div className="flex flex-col items-center w-1/3 py-5 font-inter">
            <img src={Natali} alt="Board of Directors" className="mb-3" />
            <h1 className="text-lg">Natali Craig</h1>
            <h1 className="font-normal mb-2 text-green">Product Designer</h1>
          </div>
        </div>
      </div>

      <div className="bg-hxafrica px-24 pt-20 pb-10">
        <div className="flex ">
          <div className=" w-1/2">
            <img src={logoWhite} alt="HXafrica" />
            <div className="flex justify-between w-60 pt-4">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={whatsapp} alt="whatsapp" />
              <img src={phone} alt="phone" />
              <img src={mail} alt="mail" />
            </div>
          </div>
          <div className=" w-1/2 flex justify-between text-white">
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
            <div>
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
        <div className="bg-copyright py-2.5 mt-16 text-center text-white">
          <h1>© 2022 Housing Exchange - HX Africa. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
