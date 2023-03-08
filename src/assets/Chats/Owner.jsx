import React, { useEffect, useState } from "react";
import Header from "../Header";
import elvis from "../images/Elvis.svg";
import raw from "../images/raw.svg";
import { FaAngleRight, FaRegSmile } from "react-icons/fa";
import { RiCheckDoubleFill } from "react-icons/ri";
import user from "../images/default_profile.svg";
import moment from "moment";
import send from "../images/send.svg";
import { Link } from "react-router-dom";

function Owner() {
  const userIcon = localStorage.getItem("user-profile");

  const [lists, setLists] = useState();
  async function fetchChatList() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}chat/chat_list`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data.name);
    setLists(result?.data);
  }

  const [chat, setChat] = useState();
  const [receiver, setReceiver] = useState();
  const [name, setName] = useState();

  async function fetchChat() {
    const token = localStorage.getItem("user-token");
    const user_id = localStorage.getItem("user-id");
    // e.preventDefault();
    const payLoad = {
      receiver_id: receiver,
      sender_id: user_id,
    };
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}chat/fetch_chat`,
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    // alert(result.data.name);
    setChat(result?.data);
  }
  useEffect(() => {
    fetchChatList();
    fetchChat();
  }, []);

  const [message, setMessage] = useState("");
  async function sendMessage() {
    const payLoad = {
      receiver_id: receiver,
      message: message,
    };
    setMessage("");
    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}chat/send_message`,
      {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    if (result?.status === "success") {
      fetchChat();
    }
  }

  return (
    <div className="font-family bg-mainbg">
      <Header />
      <div className="p-10 flex justify-between">
        <div className="bg-white py-10 w-2/6 rounded-xl">
          <div className="p-10">
            <h1 className="text-xl text-modal">
              Investment Bidders ({lists?.length})
            </h1>
          </div>
          <div className="">
            {lists?.map((list) => (
              <div
                className="border-b flex justify-between px-10 py-5 cursor-pointer"
                onClick={() => {
                  setReceiver(list.receiver_id);
                  setName(list.user.name);
                  fetchChat();
                }}
              >
                <div className="w-2/6">
                  <img src={elvis} alt="investor" />
                </div>
                <div className="flex items-center w-2/3 justify-between">
                  <div>
                    <h1 className="text-banner font-semibold">
                      {list.user.name}
                    </h1>
                    <h1 className="text-navbar text-sm">New messages (3)</h1>
                  </div>
                  <FaAngleRight className="text-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-2/3 rounded-xl">
          <div className="border-b flex px-10 py-5">
            <div className="mr-2 w-16">
              <img src={elvis} alt="investor" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-banner font-semibold text-xl">{name}</h1>
              <Link to="/bids">
                <button className="bg-dark px-8 py-2 test-sm rounded-full text-white">
                  Accept bid
                </button>
              </Link>
            </div>
          </div>
          <div className="font-inter">
            <div className="p-10 h-7x overflow-x-auto scroll">
              {chat?.map((chat) => (
                <>
                  {chat.sender_id == receiver ? (
                    <div className="flex flex-row-reverse justify-end py-10">
                      <div>
                        {" "}
                        <div className="bg-border rounded-lg w-72 ml-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:skew-x-20 before:left-0 before:bg-border before:-z-10 z-20 before:absolute">
                          <p className="font-normal text-sm text-white">
                            {chat.message}
                          </p>
                          <h1 className="flex items-center font-normal text-time text-tiny">
                            <RiCheckDoubleFill />{" "}
                            {moment(chat.created_at).format("LT")}
                          </h1>
                        </div>
                      </div>

                      <div className="w-8">
                        <img src={elvis} alt="investor" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end py-10">
                      <div>
                        <div className="bg-mine rounded-lg rounded-tl-none w-72 mr-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:-skew-x-20 before:right-0 before:bg-mine before:-z-10 z-20 before:absolute ">
                          <h1 className="text-you font-semibold text-tiny">
                            You.
                          </h1>

                          <p className="font-normal text-sm text-chat">
                            {chat.message}
                          </p>
                          <h1 className="font-normal text-timeStamp text-tiny">
                            {moment(chat.created_at).format("LT")}
                          </h1>
                        </div>
                      </div>
                      <div className="w-8">
                        {/* <img src={elvis} alt="investor" /> */}
                        {!!userIcon ? (
                          <img
                            src={userIcon}
                            alt="User-Icon"
                            className="object-fill  "
                          />
                        ) : (
                          <img
                            src={user}
                            alt="User-Icon"
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>
                  )}
                  {/* {message} */}
                </>
              ))}
            </div>

            <div className="p-10 flex justify-between font-inter">
              <div className="bg-mine flex items-center rounded-full px-4 w-11/12 mr-2 ">
                <FaRegSmile className="text-smiles" />

                <textarea
                  placeholder="Type message"
                  className="bg-transparent ml-5 outline-none placeholder:text-dark w-full text-dark placeholder:text-tiny text-sm resize-none pt-3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div
                className="bg-mine rounded-full flex justify-center items-center w-1/12 cursor-pointer"
                onClick={() => {
                  if (message === "") {
                    alert("type a message to send");
                  } else {
                    sendMessage();
                    fetchChat();
                  }
                }}
              // onKeyDown={(e) => {
              //   if (e.keyCode === 13) {
              //     if (message === "") {
              //       alert("type a message to send");
              //     } else {
              //       sendMessage();
              //       fetchChat();
              //       alert("enter key pressed");
              //     }
              //   }
              // }}
              >
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
