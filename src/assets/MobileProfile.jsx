import React, { useEffect, useState } from "react";
import user from "./images/userIcon.svg";
import mail from "./images/sms-notification.svg";
import call from "./images/call.svg";
import cake from "./images/cake.svg";
import location from "./images/location.svg";
import { toast } from "react-toastify";
import gps from "./images/gps.svg";
import { BeatLoader } from "react-spinners";
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
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}investor/fetch_user_profile`,
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
  const [edit, setEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  async function update() {
    setLoader(true);
    const payLoad = {
      name: name,
      username: userName,
      address: address,
      city: city,
      state_id: state,
      dob: dob,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}investor/update_profile_info`,
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

    console.log(result?.status);
    if (result?.status === "success") {
      //   navigate("/select-avater");
      setSuccess(true);
      fetchData();
      setTimeout(() => {
        setEdit(false);
        setSuccess(false);
        setLoader(false);
        window.scrollTo(0, 0);
      }, 3000);
    } else {
      if (result.errors) {
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 300,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoader(false);
      }
    }
  }
  return (
    <div className="lg:hidden font-family px-5">
      <div className={`${edit && "hidden"}`}>
        <div className="text-center">
          <h1 className="font-semibold text-xs text-vestabs uppercase p-2">
            {userName === null ? "No UserName" : userName}
          </h1>
          <button
            className="text-change font-semibold text-xs "
            onClick={() => setEdit(true)}
          >
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
            <img src={mail} alt="Mail Icon" className="mr-5" />
            <div className="text-footer">
              <h1 className="font-semibold text-xs mb-1">Email Address</h1>
              <h1 className="font-normal text-xs">{posts?.email}</h1>
            </div>
          </div>

          <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
            <img src={call} alt="Phone" className="mr-5" />
            <div className="text-footer">
              <h1 className="font-semibold text-xs mb-1">Mobile Number</h1>
              <h1 className="font-normal text-xs">{phone}</h1>
            </div>
          </div>

          <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
            <img src={cake} alt="Birthday Icon" className="mr-5" />
            <div className="text-footer">
              <h1 className="font-semibold text-xs mb-1">Date of Birth</h1>
              <h1 className="font-normal text-xs">{dob}</h1>
            </div>
          </div>

          <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
            <img src={location} alt="Location" className="mr-5" />
            <div className="text-footer">
              <h1 className="font-semibold text-xs mb-1">Location</h1>
              <h1 className="font-normal text-xs">
                {city}, {stateName}, Nigeria
              </h1>
            </div>
          </div>

          <div className="bg-profile flex items-center p-6 rounded-lg  my-3">
            <img src={gps} alt="Address" className="mr-5" />
            <div className="text-footer">
              <h1 className="font-semibold text-xs mb-1">Address</h1>
              <h1 className="font-normal text-xs">{address}</h1>
            </div>
          </div>
        </div>
      </div>
      {edit && (
        <div>
          <div className="text-center pt-5">
            <button
              className="text-change font-semibold text-xs "
              onClick={() => setEdit(false)}
            >
              Back
            </button>
          </div>
          <div className="py-10">
            <div className=" py-3">
              <input
                // required
                placeholder="Full Name"
                type="text"
                defaultValue={name}
                className="border rounded-full lg:rounded-xl border-border bg-input p-4 text-tiny font-normal focus-within:shadow-lg outline-none w-full "
                // className="font-medium text-xs lg:text-sm outline-none w-full"
                // value={posts?.name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="py-3">
              <input
                // required
                placeholder="Username"
                type="text"
                defaultValue={userName}
                className="border rounded-full lg:rounded-xl border-border bg-input p-4 text-tiny font-normal focus-within:shadow-lg outline-none w-full "
                // className="font-medium text-xs lg:text-sm outline-none w-full"
                // value={posts?.name}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="py-3">
              <input
                // required
                placeholder="Date of Birth"
                type="date"
                defaultValue={dob}
                className="border rounded-full lg:rounded-xl border-border bg-input p-4 text-tiny font-normal focus-within:shadow-lg outline-none w-full "
                // className="font-medium text-xs lg:text-sm outline-none w-full"
                // value={posts?.name}
                onChange={(event) => setDob(event.target.value)}
              />
            </div>
            <div className="py-3">
              <select
                className="border rounded-full lg:rounded-xl border-border bg-input p-4 text-tiny font-normal focus-within:shadow-lg outline-none w-full "
                //   className="font-medium text-xs lg:text-sm outline-none w-full"
                // value={stateName}
                onChange={(event) => {
                  setState(event.target.value);
                  //   setStateName(event.target.value);
                }}
              >
                <option selected disabled>
                  {stateName}
                </option>

                <option value="303">Abia</option>
                <option value="320">Adamawa</option>
                <option value="304">Akwa Ibom</option>
                <option value="315">Anambra</option>
                <option value="312">Bauchi</option>
                <option value="305">Bayelsa</option>
                <option value="291">Benue</option>
                <option value="307">Borno</option>
                <option value="314">Cross River</option>
                <option value="316">Delta</option>
                <option value="311">Ebonyi</option>
                <option value="318">Edo</option>
                <option value="309">Ekiti</option>
                <option value="289">Enugu</option>
                <option value="293">Federal Capital Territory</option>
                <option value="310">Gombe</option>
                <option value="308">Imo</option>
                <option value="288">Jigawa</option>
                <option value="294">Kaduna</option>
                <option value="300">Kano</option>
                <option value="313">Katsina</option>
                <option value="290">Kebbi</option>
                <option value="298">Kogi</option>
                <option value="295">Kwara</option>
                <option value="306">Lagos</option>
                <option value="301">Nasarawa</option>
                <option value="317">Niger</option>
                <option value="323">Ogun</option>
                <option value="321">Ondo</option>
                <option value="322">Osun</option>
                <option value="296">Oyo</option>
                <option value="302">Plateau</option>
                <option value="100">Rivers</option>
                <option value="292">Sokoto</option>
                <option value="319">Taraba</option>
                <option value="297">Yobe</option>
                <option value="299">Zamfara</option>
              </select>
            </div>
            <div className="py-3">
              <input
                // required
                placeholder="City"
                type="text"
                defaultValue={city}
                className="border rounded-full lg:rounded-xl border-border bg-input p-4 text-tiny font-normal focus-within:shadow-lg outline-none w-full "
                // className="font-medium text-xs lg:text-sm outline-none w-full"
                // value={posts?.name}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="py-3">
              <input
                // required
                placeholder="Address"
                type="text"
                defaultValue={address}
                className="border rounded-full lg:rounded-xl border-border bg-input p-4 text-tiny font-normal focus-within:shadow-lg outline-none w-full "
                // className="font-medium text-xs lg:text-sm outline-none w-full"
                // value={posts?.name}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="rounded-full bg-green text-dashbg w-full lg:w-auto font-medium text-sm py-3 px-12 "
              onClick={update}
            >
              {success ? (
                "Success..."
              ) : (
                <>{loader ? <BeatLoader color="#fff" size={10} /> : "Update"}</>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileProfile;
