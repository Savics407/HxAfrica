import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import elvis from "../images/Elvis.svg";
import noMessage from "../images/noMessage.svg";
import raw from "../images/raw.svg";
import { FaAngleLeft, FaAngleRight, FaRegSmile } from "react-icons/fa";
import { RiCheckDoubleFill } from "react-icons/ri";
import user from "../images/default_profile.svg";
import moment from "moment";
import ScaleLoader from "react-spinners/ScaleLoader";
import send from "../images/send.svg";
import { Link, useNavigate } from "react-router-dom";

function BiddersChat() {
  const navigate = useNavigate();
  const [bids, setBids] = useState(false);
  async function fetchInvestment() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}exchange/fetch_investment_bids`,
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
    setBids(result?.data);
    if (result?.data.length === 0) {
      setBids(false);
    } else {
      setBids(true);
    }
    // if (result?.status === "success" && result?.data.length > 0) {
    //   setLoading(false);
    // }
  }

  useEffect(() => {
    fetchInvestment();
  }, []);

  const userIcon = localStorage.getItem("user-profile");
  const bottomRef = useRef(null);
  const avail = localStorage.getItem("available");
  // alert(avail);
  const [available, setAvailable] = useState(avail === "true" ? true : false);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);
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
    if (result?.data.length === 0) {
      //  setLoading(false);
      setAvailable(true);
    }
    if (result?.status === "success") {
      setLoad(false);
      // setAvailable(true);
    }
  }

  const investOwner = localStorage.getItem("investment-owner");
  const [chat, setChat] = useState();
  const [sent, setSent] = useState(false);
  const [none, setNone] = useState(false);
  const [receiver, setReceiver] = useState(investOwner);
  const [name, setName] = useState(`Investors ID - ${investOwner}`);
  const user_id = localStorage.getItem("user-id");
  // alert(receiver);
  async function fetchChat(id) {
    const token = localStorage.getItem("user-token");
    // const user_id = localStorage.getItem("user-id");
    // e.preventDefault();
    setReceiver(id);
    const payLoad = {
      receiver_id: id,
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
    if (result?.status === "success") {
      setSent(false);
      setLoading(false);
    }
    if (result?.data.length === 0) {
      setAvailable(true);
      setNone(true);
    } else {
      setNone(false);
    }
    if (receiver === null) {
      setAvailable(false);
    }
  }

  // function remove() {
  //   localStorage.removeItem("investment-owner")
  // }
  useEffect(() => {
    fetchChatList();
    fetchChat(receiver);
    // setAvailable(true);
  }, []);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const [message, setMessage] = useState("");
  const [now, setNow] = useState("");

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
    if (result.status === "success") {
      // alert("message was sent successfully");
      fetchChat(receiver);
      setNone(false);
      fetchChatList();
      // if (receiver === lists?.user.id) {
      //   setName(lists?.user.name);
      // }
    }
  }
  return (
    <div className="font-family bg-mainbg">
      <Header />
      <div className="lg:hidden py-8 px-4 bg-chatHeader text-dark text-lg flex justify-between items-center">
        <h1 className="">Investors List</h1>
        <button
          className="text-goback text-sm font-inter"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
      <div className="lg:p-10 flex justify-between flex-wrap">
        <div className="bg-white py-10 lg:w-2/6 w-full lg:rounded-xl">
          <div className="p-10 hidden lg:block">
            <h1 className="text-xl text-modal">Investors list</h1>
          </div>

          <div className="h-7x overflow-y-auto scroll">
            {load ? (
              <div className="text-center py-20 lg:py-40 h-full bg-white rounded-xl w-full">
                <ScaleLoader color="#008E10" height={30} width={4} />
              </div>
            ) : (
              <>
                {lists?.map((list) => (
                  <div
                    className="border-b flex justify-between px-10 py-5 cursor-pointer hover:bg-mine"
                    onClick={() => {
                      // setReceiver(list.receiver_id);
                      setAvailable(true);
                      setName(
                        list.sender_id == user_id
                          ? list.receiver.name
                          : list.sender.name
                      );
                      fetchChat(
                        list.sender_id == user_id
                          ? list.receiver_id
                          : list.sender_id
                      );
                    }}
                  >
                    <div className="lg:w-2/6 w-14 mr-4 lg:mr-auto">
                      <img src={elvis} alt="investor" />
                    </div>
                    <div className="flex w-full items-center lg:w-2/3 justify-between">
                      <div>
                        <h1 className="text-banner lg:font-semibold">
                          {list.sender_id == user_id
                            ? list.receiver.name
                            : list.sender.name}{" "}
                          {""}
                          {/* {list.sender_id} and {user_id} */}
                        </h1>
                        <h1 className="text-navbar text-tiny lg:text-sm">
                          Messages...
                        </h1>
                      </div>
                      <FaAngleRight className="text-xl" />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {available ? (
          <div className="bg-white lg:w-2/3 w-full rounded-xl lg:relative absolute top-0 lg:z-auto z-50">
            <div className="border-b fixed lg:relative w-full flex items-center px-5 lg:px-10 py-5 bg-chatHeader lg:bg-inherit lg:z-auto z-50">
              {bids && (
                <FaAngleLeft
                  className="text-xl lg:hidden mr-3"
                  onClick={() => setAvailable(false)}
                />
              )}

              <div className="mr-2 w-12 lg:w-16">
                <img src={elvis} alt="investor" />
              </div>
              {/* <div className="flex items-center">
                <h1 className="text-banner font-semibold text-xl">{name}</h1>
              </div> */}
              <div className="flex items-center justify-between w-full">
                <h1 className="text-banner font-semibold text-sm lg:text-xl truncate">
                  {name}
                </h1>
                {bids ? (
                  <Link to="/bids">
                    <button className="bg-dark px-5 lg:px-8 py-2 text-sm rounded-full text-white">
                      Accept bids
                    </button>
                  </Link>
                ) : (
                  <button
                    className="text-goback text-sm font-inter lg:hidden"
                    onClick={() => {
                      setAvailable(false);
                      // fetchChatList();
                    }}
                  >
                    Back
                  </button>
                )}
              </div>
            </div>
            <div className="font-inter">
              {loading ? (
                <div className="text-center py-48 lg:py-40 h-full bg-white rounded-xl w-full">
                  <ScaleLoader color="#008E10" height={50} width={6} />
                </div>
              ) : (
                <div className="lg:p-10 pt-20 pb-20 lg:pb-auto lg:pt-auto p-5 h-screen lg:h-7x overflow-y-auto scroll">
                  {chat?.map((chat) => (
                    <>
                      {" "}
                      {chat.sender_id == user_id ? (
                        <div className="flex justify-end py-5">
                          <div>
                            {" "}
                            <div className="bg-mine rounded-lg rounded-tl-none lg:w-72 w-52 mr-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:-skew-x-20 before:right-0 before:bg-mine before:-z-10 z-10 before:absolute ">
                              <h1 className="text-you font-semibold text-tiny">
                                You.
                              </h1>
                              <p className="font-normal lg:text-sm text-xs text-chat">
                                {chat.message}
                              </p>
                              <h1 className="flex items-center font-normal text-timeStamp text-tiny">
                                <RiCheckDoubleFill
                                  className={`${
                                    chat.status === "unread"
                                      ? "text-timeStamp"
                                      : "text-border"
                                  }`}
                                />{" "}
                                {/* {moment(chat.created_at).format("LT")} */}
                                {moment(chat.created_at).calendar()}
                              </h1>
                            </div>
                          </div>

                          <div className="w-8 hidden lg:block">
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
                      ) : (
                        <div className="flex flex-row-reverse justify-end py-5">
                          <div>
                            <div className="bg-border rounded-lg rounded-tl-none w-52 lg:w-72 ml-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:skew-x-20 before:left-0 before:bg-border before:-z-10 z-10 before:absolute ">
                              <p className="font-normal lg:text-sm text-xs text-white">
                                {chat.message}
                              </p>
                              <h1 className="font-normal text-time text-tiny">
                                {moment(chat.created_at).calendar()}
                              </h1>
                            </div>
                          </div>
                          <div className="w-8">
                            <img src={elvis} alt="investor" />
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                  {sent && (
                    <div className="flex justify-end py-5">
                      <div>
                        <div className="bg-mine rounded-lg rounded-tl-none w-52 lg:w-72 mr-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:-skew-x-20 before:right-0 before:bg-mine before:-z-10 z-10 before:absolute ">
                          <h1 className="text-you font-semibold text-tiny">
                            You.
                          </h1>
                          <p className="font-normal text-xs lg:text-sm text-chat">
                            {now}
                          </p>
                          <h1 className="flex items-center font-normal text-timeStamp text-tiny">
                            <RiCheckDoubleFill /> {moment(Date()).calendar()}
                          </h1>
                        </div>
                      </div>

                      <div className="w-8 hidden lg:block">
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

                  {none && (
                    <div className="bg-white justify-center items-center lg:mt-10 mt-40 flex flex-col rounded-xl relative ">
                      <img src={noMessage} alt="no Message" />
                      <h1 className="py-5 text-tokentext text-sm">
                        Type a message to send
                      </h1>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              )}
              <div className="lg:p-10 p-5 fixed lg:relative bottom-0 lg:bottom-auto flex justify-between font-inter z-50 w-full bg-white">
                <div className="bg-mine flex items-center rounded-full px-4 w-11/12 mr-2 ">
                  <FaRegSmile className="text-smile s" />

                  <textarea
                    placeholder="Type message"
                    className="bg-transparent ml-5 outline-none placeholder:text-dark w-full text-dark placeholder:text-tiny text-sm resize-none pt-3"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setNow(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div
                  className="bg-mine rounded-full flex justify-center items-center w-14 lg:w-1/12 cursor-pointer"
                  onClick={() => {
                    if (message === "") {
                      alert("type a message to send");
                    } else {
                      sendMessage();
                      // fetchChat();
                      setSent(true);
                    }
                  }}
                >
                  <img src={send} alt="send" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white w-2/3 h-screen justify-center items-center flex flex-col rounded-xl lg:relative hidden lg:flex">
            <img src={noMessage} alt="no Message" />
            <h1 className="py-5">Select an Investor to chat with!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default BiddersChat;
