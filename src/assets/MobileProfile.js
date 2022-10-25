import React, { useEffect, useState } from "react";
import user from "./images/userIcon.svg";
import mail from "./images/sms-notification.svg";
import call from "./images/call.svg";
import cake from "./images/cake.svg";
import location from "./images/location.svg";
import address from "./images/gps.svg";
// import { ca } from "date-fns/locale";

function MobileProfile() {
  // const [signOut, setSignOut] = useState(false);
  const [posts, setPosts] = useState();
  // const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [state, setState] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");

  async function fetchData() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/fetch_user_profile",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result.data);
    //   alert(result.data.name);

    setPosts(result.data);
    setName(result.data.name);
    setPhone(result.data.phone);
    setAddress(result.data.investor.address);
    setDob(result.data.investor.dob);
    setCity(result.data.investor.city);
    setUserName(result.data.username);
    setStateName(result.data.investor.state.name);
    setState(result.data.investor.state.id);
  }

  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  return (
    <div className="lg:hidden font-family px-5">
      <div className="text-center">
        <h1 className="font-semibold text-xs text-vestabs uppercase p-2">
          {userName === null ? "No UserName" : userName}
        </h1>
        <button className="text-change font-semibold text-xs ">
          Edit Profile
        </button>
      </div>
      <div className="py-10">
        <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
          <img src={user} alt="User Icon" className="mr-5" />
          <div className="text-footer">
            <h1 className="font-semibold text-xs mb-1">Full Name</h1>
            <h1 className="font-normal text-xs">{name}</h1>
          </div>
        </div>

        <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
          <img src={mail} alt="User Icon" className="mr-5" />
          <div className="text-footer">
            <h1 className="font-semibold text-xs mb-1">Email Address</h1>
            <h1 className="font-normal text-xs">{posts?.email}</h1>
          </div>
        </div>

        <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
          <img src={call} alt="User Icon" className="mr-5" />
          <div className="text-footer">
            <h1 className="font-semibold text-xs mb-1">Mobile Number</h1>
            <h1 className="font-normal text-xs">{phone}</h1>
          </div>
        </div>

        <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
          <img src={cake} alt="User Icon" className="mr-5" />
          <div className="text-footer">
            <h1 className="font-semibold text-xs mb-1">Date of Birth</h1>
            <h1 className="font-normal text-xs">{dob}</h1>
          </div>
        </div>

        <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
          <img src={location} alt="User Icon" className="mr-5" />
          <div className="text-footer">
            <h1 className="font-semibold text-xs mb-1">Location</h1>
            <h1 className="font-normal text-xs">
              {city}, {stateName}, Nigeria
            </h1>
          </div>
        </div>

        <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
          <img src={address} alt="User Icon" className="mr-5" />
          <div className="text-footer">
            <h1 className="font-semibold text-xs mb-1">Address</h1>
            <h1 className="font-normal text-xs">{address}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileProfile;
