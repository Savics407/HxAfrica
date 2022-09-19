import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import elvis from "../images/Elvis.svg";
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
      "https://reic.api.simpoo.biz/api/exchange/fetch_investment_bids",
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

  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState();
  async function fetchChatList() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/chat/chat_list",
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
  }

  const investOwner = localStorage.getItem("investment-owner");
  const [chat, setChat] = useState();
  const [sent, setSent] = useState(false);
  const [receiver, setReceiver] = useState(investOwner);
  const [name, setName] = useState("Investor ID");
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
      "https://reic.api.simpoo.biz/api/chat/fetch_chat",
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
    }
    if (result?.data.length !== 0) {
      setLoading(false);
      // setAvailable(true);
    }
  }
  useEffect(() => {
    fetchChatList();
    fetchChat(receiver);
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
      "https://reic.api.simpoo.biz/api/chat/send_message",
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
            {lists?.map((list) => (
              <div
                className="border-b flex justify-between px-10 py-5 cursor-pointer"
                onClick={() => {
                  // setReceiver(list.receiver_id);
                  setAvailable(true);
                  setName(list.user.name);
                  fetchChat(list.receiver_id);
                }}
              >
                <div className="lg:w-2/6 w-14 mr-4 lg:mr-auto">
                  <img src={elvis} alt="investor" />
                </div>
                <div className="flex w-full items-center lg:w-2/3 justify-between">
                  <div>
                    <h1 className="text-banner lg:font-semibold">
                      {list.user.name}
                    </h1>
                    <h1 className="text-navbar text-tiny lg:text-sm">
                      New messages (3)
                    </h1>
                  </div>
                  <FaAngleRight className="text-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {available ? (
          <div className="bg-white lg:w-2/3 w-full rounded-xl lg:relative absolute top-0 z-50">
            <div className="border-b flex items-center px-5 lg:px-10 py-5 bg-chatHeader lg:bg-inherit">
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
                <h1 className="text-banner font-semibold text-sm lg:text-xl">
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
                    onClick={() => setAvailable(false)}
                  >
                    Back
                  </button>
                )}
              </div>
            </div>
            <div className="font-inter">
              {loading ? (
                <div className="text-center py-40 bg-white rounded-xl w-full">
                  <ScaleLoader color="#008E10" height={50} width={6} />
                </div>
              ) : (
                <div className="lg:p-10 p-5 h-7x overflow-y-auto scroll">
                  {chat?.map((chat) => (
                    <>
                      {" "}
                      {chat.sender_id == user_id ? (
                        <div className="flex justify-end py-5">
                          <div>
                            {" "}
                            <div className="bg-mine rounded-lg rounded-tl-none lg:w-72 w-52 mr-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:-skew-x-20 before:right-0 before:bg-mine before:-z-10 z-20 before:absolute ">
                              <h1 className="text-you font-semibold text-tiny">
                                You.
                              </h1>
                              <p className="font-normal text-sm text-chat">
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
                                {moment(chat.created_at).format("LT")}
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
                            <div className="bg-border rounded-lg rounded-tl-none w-52 lg:w-72 ml-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:skew-x-20 before:left-0 before:bg-border before:-z-10 z-20 before:absolute ">
                              <p className="font-normal text-sm text-white">
                                {chat.message}
                              </p>
                              <h1 className="font-normal text-time text-tiny">
                                {moment(chat.created_at).format("LT")}
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
                        <div className="bg-mine rounded-lg rounded-tl-none w-52 lg:w-72 mr-2 mb-2 p-3 relative before:content-[''] before:w-5 before:h-5 before:top-0 before:-skew-x-20 before:right-0 before:bg-mine before:-z-10 z-20 before:absolute ">
                          <h1 className="text-you font-semibold text-tiny">
                            You.
                          </h1>
                          <p className="font-normal text-sm text-chat">{now}</p>
                          <h1 className="flex items-center font-normal text-timeStamp text-tiny">
                            <RiCheckDoubleFill /> {moment(Date()).format("LT")}
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
                  <div ref={bottomRef} />
                </div>
              )}
              <div className="lg:p-10 p-5 flex justify-between font-inter">
                <div className="bg-mine flex items-center rounded-full px-4 w-11/12 mr-2 ">
                  <FaRegSmile className="text-smiles" />

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
            <span>
              <svg
                width="360"
                viewBox="0 0 303 172"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                class=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M229.565 160.229c32.647-10.984 57.366-41.988 53.825-86.81-5.381-68.1-71.025-84.993-111.918-64.932C115.998 35.7 108.972 40.16 69.239 40.16c-29.594 0-59.726 14.254-63.492 52.791-2.73 27.933 8.252 52.315 48.89 64.764 73.962 22.657 143.38 13.128 174.928 2.513Z"
                  fill="#DAF7F3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M131.589 68.942h.01c6.261 0 11.336-5.263 11.336-11.756S137.86 45.43 131.599 45.43c-5.081 0-9.381 3.466-10.822 8.242a7.302 7.302 0 0 0-2.404-.405c-4.174 0-7.558 3.51-7.558 7.838s3.384 7.837 7.558 7.837h13.216ZM105.682 128.716c3.504 0 6.344-2.808 6.344-6.27 0-3.463-2.84-6.27-6.344-6.27-1.156 0-2.24.305-3.173.839v-.056c0-6.492-5.326-11.756-11.896-11.756-5.29 0-9.775 3.413-11.32 8.132a8.025 8.025 0 0 0-2.163-.294c-4.38 0-7.93 3.509-7.93 7.837 0 4.329 3.55 7.838 7.93 7.838h28.552Z"
                  fill="#fff"
                ></path>
                <rect
                  x=".445"
                  y=".55"
                  width="50.58"
                  height="100.068"
                  rx="7.5"
                  transform="rotate(6 -391.775 121.507) skewX(.036)"
                  fill="#42CBA5"
                  stroke="#316474"
                ></rect>
                <rect
                  x=".445"
                  y=".55"
                  width="50.403"
                  height="99.722"
                  rx="7.5"
                  transform="rotate(6 -356.664 123.217) skewX(.036)"
                  fill="#fff"
                  stroke="#316474"
                ></rect>
                <path
                  d="m57.16 51.735-8.568 82.024a5.495 5.495 0 0 1-6.042 4.895l-32.97-3.465a5.504 5.504 0 0 1-4.897-6.045l8.569-82.024a5.496 5.496 0 0 1 6.041-4.895l5.259.553 22.452 2.36 5.259.552a5.504 5.504 0 0 1 4.898 6.045Z"
                  fill="#EEFEFA"
                  stroke="#316474"
                ></path>
                <path
                  d="M26.2 102.937c.863.082 1.732.182 2.602.273.238-2.178.469-4.366.69-6.546l-2.61-.274c-.238 2.178-.477 4.365-.681 6.547Zm-2.73-9.608 2.27-1.833 1.837 2.264 1.135-.917-1.838-2.266 2.27-1.833-.92-1.133-2.269 1.834-1.837-2.264-1.136.916 1.839 2.265-2.27 1.835.92 1.132Zm-.816 5.286c-.128 1.3-.265 2.6-.41 3.899.877.109 1.748.183 2.626.284.146-1.31.275-2.614.413-3.925-.878-.092-1.753-.218-2.629-.258Zm16.848-8.837c-.506 4.801-1.019 9.593-1.516 14.396.88.083 1.748.192 2.628.267.496-4.794 1-9.578 1.513-14.37-.864-.143-1.747-.192-2.625-.293Zm-4.264 2.668c-.389 3.772-.803 7.541-1.183 11.314.87.091 1.74.174 2.601.273.447-3.912.826-7.84 1.255-11.755-.855-.15-1.731-.181-2.589-.306-.04.156-.069.314-.084.474Zm-4.132 1.736c-.043.159-.06.329-.077.49-.297 2.896-.617 5.78-.905 8.676l2.61.274c.124-1.02.214-2.035.33-3.055.197-2.036.455-4.075.627-6.115-.863-.08-1.724-.17-2.585-.27Z"
                  fill="#316474"
                ></path>
                <path
                  d="M17.892 48.489a1.652 1.652 0 0 0 1.468 1.803 1.65 1.65 0 0 0 1.82-1.459 1.652 1.652 0 0 0-1.468-1.803 1.65 1.65 0 0 0-1.82 1.459ZM231.807 136.678l-33.863 2.362c-.294.02-.54-.02-.695-.08a.472.472 0 0 1-.089-.042l-.704-10.042a.61.61 0 0 1 .082-.054c.145-.081.383-.154.677-.175l33.863-2.362c.294-.02.54.02.695.08.041.016.069.03.088.042l.705 10.042a.61.61 0 0 1-.082.054 1.678 1.678 0 0 1-.677.175Z"
                  fill="#fff"
                  stroke="#316474"
                ></path>
                <path
                  d="m283.734 125.679-138.87 9.684c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55Z"
                  fill="#fff"
                ></path>
                <path
                  d="M144.864 135.363c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55"
                  stroke="#316474"
                ></path>
                <path
                  d="m278.565 121.405-129.885 9.058c-2.424.169-4.506-1.602-4.668-3.913l-5.669-80.855c-.162-2.31 1.651-4.354 4.076-4.523l129.885-9.058c2.427-.169 4.506 1.603 4.668 3.913l5.669 80.855c.162 2.311-1.649 4.354-4.076 4.523Z"
                  fill="#EEFEFA"
                  stroke="#316474"
                ></path>
                <path
                  d="m230.198 129.97 68.493-4.777.42 5.996c.055.781-.098 1.478-.363 1.972-.27.5-.611.726-.923.748l-165.031 11.509c-.312.022-.681-.155-1.017-.613-.332-.452-.581-1.121-.636-1.902l-.42-5.996 68.494-4.776c.261.79.652 1.483 1.142 1.998.572.6 1.308.986 2.125.929l24.889-1.736c.817-.057 1.491-.54 1.974-1.214.413-.577.705-1.318.853-2.138Z"
                  fill="#42CBA5"
                  stroke="#316474"
                ></path>
                <path
                  d="m230.367 129.051 69.908-4.876.258 3.676a1.51 1.51 0 0 1-1.403 1.61l-168.272 11.735a1.51 1.51 0 0 1-1.613-1.399l-.258-3.676 69.909-4.876a3.323 3.323 0 0 0 3.188 1.806l25.378-1.77a3.32 3.32 0 0 0 2.905-2.23Z"
                  fill="#fff"
                  stroke="#316474"
                ></path>
                <circle
                  transform="rotate(-3.989 1304.861 -2982.552) skewX(.021)"
                  fill="#42CBA5"
                  stroke="#316474"
                  r="15.997"
                ></circle>
                <path
                  d="m208.184 87.11-3.407-2.75-.001-.002a1.952 1.952 0 0 0-2.715.25 1.89 1.89 0 0 0 .249 2.692l.002.001 5.077 4.11v.001a1.95 1.95 0 0 0 2.853-.433l8.041-12.209a1.892 1.892 0 0 0-.573-2.643 1.95 1.95 0 0 0-2.667.567l-6.859 10.415Z"
                  fill="#fff"
                  stroke="#316474"
                ></path>
              </svg>
            </span>
            <h1 className="py-5">Select an Investor to chat with!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default BiddersChat;
