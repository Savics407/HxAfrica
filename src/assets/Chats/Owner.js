import React from "react";
import Header from "../Header";
import elvis from "../images/Elvis.svg";
import raw from "../images/raw.svg";
import { FaAngleRight, FaRegSmile } from "react-icons/fa";
import { RiCheckDoubleFill } from "react-icons/ri";
import send from "../images/send.svg";

function Owner() {
  return (
    <div className="font-family bg-mainbg">
      <Header />
      <div className="p-10 flex justify-between">
        <div className="bg-white py-10 w-2/6 rounded-xl">
          <div className="p-10">
            <h1 className="text-xl text-modal">Investment Bidders (3)</h1>
          </div>
          <div>
            <div className="border-b flex justify-between px-10 py-5 cursor-pointer">
              <div className="w-2/6">
                <img src={elvis} alt="investor" />
              </div>
              <div className="flex items-center w-2/3 justify-between">
                <div>
                  <h1 className="text-banner font-semibold">Investor ID</h1>
                  <h1 className="text-navbar text-sm">New messages (3)</h1>
                </div>
                <FaAngleRight className="text-xl" />
              </div>
            </div>
            <div className=" flex justify-between px-10 py-5 cursor-pointer">
              <div className="w-2/6">
                <img src={raw} alt="investor" />
              </div>
              <div className="flex items-center w-2/3 justify-between">
                <div>
                  <h1 className="text-banner font-semibold">Investor ID</h1>
                  <h1 className="text-navbar text-sm">New messages (3)</h1>
                </div>
                <FaAngleRight className="text-xl" />
              </div>
            </div>
            <div className=" flex justify-between px-10 py-5 cursor-pointer">
              <div className="w-2/6">
                <img src={raw} alt="investor" />
              </div>
              <div className="flex items-center w-2/3 justify-between">
                <div>
                  <h1 className="text-banner font-semibold">Investor ID</h1>
                  <h1 className="text-navbar text-sm">New messages (3)</h1>
                </div>
                <FaAngleRight className="text-xl" />
              </div>
            </div>
            <div className=" flex justify-between px-10 py-5 cursor-pointer">
              <div className="w-2/6">
                <img src={raw} alt="investor" />
              </div>
              <div className="flex items-center w-2/3 justify-between">
                <div>
                  <h1 className="text-banner font-semibold">Investor ID</h1>
                  <h1 className="text-navbar text-sm">New messages (3)</h1>
                </div>
                <FaAngleRight className="text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-2/3 rounded-xl flex flex-col justify-between">
          <div className="border-b flex px-10 py-5">
            <div className="mr-2 w-16">
              <img src={elvis} alt="investor" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-banner font-semibold text-xl">Investor ID</h1>
              <button className="bg-dark px-8 py-2 test-sm rounded-full text-white">
                Accept bid
              </button>
            </div>
          </div>
          <div className="font-inter">
            <div className=" p-10">
              <div className="flex flex-row-reverse justify-end py-10">
                <div>
                  {" "}
                  <div className="bg-border rounded-lg w-72 ml-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:skew-x-20 before:left-0 before:bg-border before:-z-10 z-20 before:absolute">
                    <p className="font-normal text-sm text-white">
                      Hi! i’m John and would love to negotiate with you.
                    </p>
                    <h1 className="flex items-center font-normal text-time text-tiny">
                      <RiCheckDoubleFill /> 2:37pm
                    </h1>
                  </div>
                </div>

                <div className="w-8">
                  <img src={elvis} alt="investor" />
                </div>
              </div>
              <div className="flex justify-end py-10">
                <div>
                  <div className="bg-mine rounded-lg rounded-tl-none w-72 mr-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:-skew-x-20 before:right-0 before:bg-mine before:-z-10 z-20 before:absolute ">
                    <h1 className="text-you font-semibold text-tiny">You.</h1>

                    <p className="font-normal text-sm text-chat">
                      Hi! Nice to meet you , i hope we come to an agreement with
                      a good deal at the end
                    </p>
                    <h1 className="font-normal text-time text-tiny">2:37pm</h1>
                  </div>
                  <div className="flex flex-row-reverse justify-end">
                    <div className="bg-mine rounded-lg w-72 mr-2 mb-2  p-3 ">
                      <p className="font-normal text-sm before:left-0 before:bg-border before:-z-10 z-10 text-chat">
                        what would you be offering???.
                      </p>
                      <h1 className="font-normal text-timeStamp text-tiny">
                        2:37pm
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-8">
                  <img src={elvis} alt="investor" />
                </div>
              </div>
            </div>
            <div className="p-10 flex justify-between font-inter">
              <div className="bg-mine flex items-center rounded-full px-4 w-11/12 mr-2 ">
                <FaRegSmile className="text-smiles" />
                {/* <input
                  type="text"
                  placeholder="type message"
                  className="bg-transparent ml-5 outline-none placeholder:text-dark w-full border text-dark text-tiny"
                /> */}
                <textarea
                  placeholder="Type message"
                  className="bg-transparent ml-5 outline-none placeholder:text-dark w-full text-dark placeholder:text-tiny text-sm resize-none pt-3"
                ></textarea>
              </div>
              <div className="bg-mine rounded-full flex justify-center items-center w-1/12">
                <img src={send} alt="send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
