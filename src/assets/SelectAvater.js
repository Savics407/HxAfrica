import React, { useState } from "react";
import logo from "./images/polygon.png";
import avater from "./images/default_profile.svg";
import avater1 from "./images/1.svg";
import avater2 from "./images/2.svg";
import avater3 from "./images/3.svg";
import avater4 from "./images/4.svg";
import avater5 from "./images/5.svg";
import avater6 from "./images/6.svg";
import avater7 from "./images/7.svg";
import avater8 from "./images/8.svg";
import avater9 from "./images/9.svg";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

function Tab() {
  return (
    <>
      <div className="bg-primary text-center text-green p-4 flex items-center hidden md:flex">
        <img src={logo} alt="logo icon" />
        <h1 className="text-sm font-bold font-family ml-4">REIC</h1>
      </div>
    </>
  );
}

function Congratulations() {
  const userIcon = localStorage.getItem("user-profile");
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.5,
          },
        }}
        className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay z-50 backdrop-blur-xs"
      // onClick={() => {
      //         closeDetails(false)
      //     }}
      >
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            scale: 0,
            transition: {
              delay: 0.5,
            },
          }}
          className="bg-white lg:rounded-2xl lg:w-1/2 w-full lg:h-auto h-full flex justify-center flex-col py-10 lg:px-10 px-20"
        >
          <div className="flex justify-center mb-5">
            <img src={userIcon} alt="userAvater" className="w-1/2 lg:w-24" />
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-banner text-2xl">
              Congratulations
            </h1>
            <h1 className="text-sm font-normal text-black mt-3 mb-10">
              Your profile avatar has been set <br />
              successfully.
            </h1>
            <button
              className="bg-green lg:px-20 py-3 w-full lg:w-auto text-white rounded-full lg:rounded-lg"
              onClick={() => navigate("/")}
            >
              Continue
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

function SelectAvater() {
  const images = {
    avater: avater,
    avater1: avater1,
    avater2: avater2,
    avater3: avater3,
    avater4: avater4,
    avater5: avater5,
    avater6: avater6,
    avater7: avater7,
    avater8: avater8,
    avater9: avater9,
  };

  const [userIcon, setUserIcon] = useState(avater);
  const [isClick, setIsClick] = useState(false);
  const [available, setAvailable] = useState(false);
  const navigate = useNavigate();

  const updateProfile = () => {
    localStorage.setItem("user-profile", userIcon);
    setAvailable(true);
    // alert("updating profile");
  };
  return (
    <div className="bg-white">
      {available && <Congratulations />}
      <Tab />
      <div className="justify-center lg:py-28 py-10 flex">
        <div className=" w-80 lg:w-96">
          <div>
            <h1 className="text-green text-2xl lg:text-4xl font-semibold mb-3 text-center">
              Set Avater
            </h1>
            <p className="lg:text-base text-sm font-normal text-center">
              Select an avatar for your profile to keep you anonymous from other
              users
            </p>
          </div>
          <div className="flex justify-center my-10">
            <img src={userIcon} alt="Users Avater" />
          </div>
          <div className="flex justify-around w-full px-4 flex-wrap mb-4">
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater1);
                setIsClick(true);
              }}
            >
              <img src={images.avater1} alt="Users Avater" />
            </div>
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater2);
                setIsClick(true);
              }}
            >
              <img src={images.avater2} alt="Users Avater" />
            </div>
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater3);
                setIsClick(true);
              }}
            >
              <img src={images.avater3} alt="Users Avater" />
            </div>
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater4);
                setIsClick(true);
              }}
            >
              <img src={images.avater4} alt="Users Avater" />
            </div>

            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater5);
                setIsClick(true);
              }}
            >
              <img src={images.avater5} alt="Users Avater" />
            </div>
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater6);
                setIsClick(true);
              }}
            >
              <img src={images.avater6} alt="Users Avater" />
            </div>
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater7);
                setIsClick(true);
              }}
            >
              <img src={images.avater7} alt="Users Avater" />
            </div>
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater8);
                setIsClick(true);
              }}
            >
              <img src={images.avater8} alt="Users Avater" />
            </div>
            <div
              className="avater"
              onClick={() => {
                setUserIcon(avater9);
                setIsClick(true);
              }}
            >
              <img src={images.avater9} alt="Users Avater" />
            </div>
          </div>
          <div className=" text-sm font-medium flex flex-wrap items-center justify-center my-10">
            <button
              className="text-green border border-green rounded-xl w-full lg:w-auto px-7 py-3 lg:mr-3 lg:mb-0 mb-5"
              onClick={() => navigate("/")}
            >
              Skip for now
            </button>

            {isClick ? (
              <button
                className="text-white bg-green border-green border hover:opacity-100 w-full lg:w-auto rounded-xl px-7 py-3"
                onClick={updateProfile}
              >
                Set as avater
              </button>
            ) : (
                <button
                  className="text-white bg-green opacity-50 border-green border hover:opacity-100 w-full lg:w-auto rounded-xl px-7 py-3"
                  onClick={() => alert("select an avater")}
                >
                  Set as avater
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectAvater;
