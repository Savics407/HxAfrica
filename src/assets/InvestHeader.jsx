import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import messenger from "./images/Line.svg";

function InvestHeader() {
  const [lists, setLists] = useState(false);
  const [length, setLength] = useState();
  localStorage.setItem("available", false);

  async function fetchChatList() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}chat/chat_list`,
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
    setLength(result?.data.length);
    if (result?.data.length !== 0) {
      //  setLoading(false);
      setLists(true);
    }
  }

  useEffect(() => {
    // activities();
    fetchChatList();
    // fetchData();
  }, []);

  return (
    <div>
      <div className="mb-10 flex justify-between items-center hidden lg:flex">
        <h1 className="text-modal text-2xl font-semibold">Investments</h1>
        {lists && (
          <Link to="/investment-chat">
            <button className="flex items-center bg-green rounded px-4 py-2 text-white text-sm">
              <img src={messenger} alt="messenger" />{" "}
              <span className="ml-3">Messages({length})</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default InvestHeader;
