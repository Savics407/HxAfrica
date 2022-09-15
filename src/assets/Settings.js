import Header from "./Header";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Protabs from "./Protabs";
import profile from "./images/Frame 17.png";
import { BiLogOut } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import avater from "./images/default_profile.svg";
import { toast } from "react-toastify";
import avater1 from "./images/1.svg";
import avater2 from "./images/2.svg";
import avater3 from "./images/3.svg";
import avater4 from "./images/4.svg";
import avater5 from "./images/5.svg";
import avater6 from "./images/6.svg";
import avater7 from "./images/7.svg";
import avater8 from "./images/8.svg";
import avater9 from "./images/9.svg";
import { useEffect, useState } from "react";

function SelectAvater({ setAvailable }) {
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

  const updateProfile = () => {
    localStorage.setItem("user-profile", userIcon);
    // alert("updating profile");
    setAvailable(false);
  };
  return (
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
      <div className="justify-center lg:p-10 pt-10 rounded-xl flex bg-white lg:w-auto w-full lg:h-auto h-full">
        <div className="w-96">
          <div>
            <h1 className="text-green text-2xl lg:text-4xl font-semibold mb-3 text-center">
              Select Avater
            </h1>
          </div>
          <div className="flex justify-center my-10">
            <img src={userIcon} alt="Users Avater" />
          </div>
          <div className="flex justify-around w-full lg:px-4 px-10 flex-wrap mb-4">
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
          <div
            className=" 
            text-sm
            font-medium
            flex
            flex-wrap
            items-center
            justify-center
            my-10
            px-5
            "
          >
            <button
              className="text-green border border-green rounded-xl w-full lg:w-auto px-12 py-3 lg:mr-3 lg:mb-0 mb-5"
              onClick={() => setAvailable(false)}
            >
              Cancel
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
    </motion.div>
  );
}

function Profile() {
  const [available, setAvailable] = useState(false);

  const navigate = useNavigate();
  const userIcon = localStorage.getItem("user-profile");

  const remove = () => {
    window.localStorage.removeItem("user-profile");
    // alert("updating profile");
    toast.success("Updating Profile Avater", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.location.reload(true);
  };

  const logOut = () => {
    window.localStorage.clear();
    toast.success(`User logged out Successfully`, {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  const [signOut, setSignOut] = useState(false);
  const [posts, setPosts] = useState();
  const [image, setImage] = useState();

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
    // alert(result.data.name);

    setPosts(result?.data);
    // setImage(result?.data.profile_photo_path)
  }

  // const UserPicture = posts?.profile_photo_path

  // const userName = posts.username;
  // const userEmail = localStorage.getItem("user-email");
  // const userPhone = localStorage.getItem("user-phone");
  // const userDob = localStorage.getItem("user-dob");
  // const userCity = localStorage.getItem("user-city");
  // const userState = localStorage.getItem("user-state");
  // const userAddress = localStorage.getItem("user-address");
  useEffect(() => {
    // activities();
    fetchData();
  }, []);

  const [profileData, setProfileData] = useState({
    // email: userEmail,
    userName: posts?.username,
    name: posts?.name,
    phone: posts?.phone,
    password: "",
    state: posts?.investor.state.id,
    bvn: "",
    city: posts?.investor.city,
    address: posts?.investor.address,
    dob: posts?.investor.dob,
  });

  async function update() {
    const payLoad = {
      name: profileData.name,
      username: profileData.userName,
      address: profileData.address,
      city: profileData.city,
      state_id: profileData.state,
      dob: profileData.dob,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/update_profile_info",
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
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //   navigate("/select-avater");
    } else {
      if (result.status === "error") {
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 300,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
  return (
    <div className="font-family bg-mainbg">
      {available && <SelectAvater setAvailable={setAvailable} />}
      {signOut && (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay backdrop-blur-xs flex justify-center items-center z-50">
          <div className="bg-white rounded-xl lg:w-128 w-10/12 p-5 lg:px-10 py-10 text-center">
            <h1 className="font-semibold lg:text-3xl text-2xl mb-2">Logout</h1>
            <p className="mb-5 text-sm lg:text-base">
              Are you sure you want to logout? <br /> we will miss you ...{" "}
            </p>
            <div className="flex items-center justify-between">
              <button
                className="rounded-full lg:px-10 px-8 py-2 border text-sm lg:text-base"
                onClick={() => setSignOut(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red text-white rounded-full px-8 lg:px-10 py-2 text-sm lg:text-base"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      <Header />

      <div className="lg:w-10/12 w-full m-auto lg:mt-20 bg-white rounded-lg pb-10 lg:py-8 lg:px-10">
        <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between">
          <h1 className="capitalize">Profile Details</h1>
          <button
            className="bg-green rounded-full text-dashbg py-1 px-5 text-xs font-bold flex items-center justify-center "
            onClick={() => setSignOut(true)}
          >
            <BiLogOut className="mr-1 text-sm" /> Log Out
          </button>
        </div>
        <div className="bg-white rounded-xl">
          <div className="lg:block hidden py-10 font-semibold flex justify-between items-center text-modal text-2xl">
            <h1>Profile Details</h1>
          </div>
          <Protabs />
          <div className="">
            <div className="flex items-center flex-col pt-5">
              {!!userIcon ? (
                <img
                  src={userIcon}
                  alt="Profile Picture"
                  className="lg:w-28 lg:h-28 w-20 h-20"
                />
              ) : (
                <img
                  src={avater}
                  alt="Profile Picture"
                  className="lg:w-28 lg:h-28 w-20 h-20 "
                />
              )}
              {/* <img src={userIcon} alt="Profile Picture" className="w-28 h-28" /> */}
              <button
                className="text-blue border rounded-full lg:py-1 lg:px-4 py-2 px-6 font-bold text-tiny lg:text-sm my-3"
                onClick={() => setAvailable(true)}
              >
                Change Avater
              </button>
              {/* <h1 className="text-red text-sm cursor-pointer" onClick={remove}>
                Remove Picture
              </h1> */}
            </div>
          </div>
          <div className="my-14 text-footer">
            <h1 className="uppercase lg:capitalize text-footer text-xs px-3 font-medium">
              User Information
            </h1>

            <table className="border w-full border-collapse mt-3 font-inter">
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Full Name
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm ">{userName}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.name}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    // value={profileData.name}
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        name: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Username
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm italic">Not added yet</h1> */}
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    defaultValue={posts?.username}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        userName: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Email Address
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm">{userEmail}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.email}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        email: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Mobile Number
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm">{userPhone}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.phone}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        phone: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Date of Birth
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm">{userDob}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.investor.dob}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        dob: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    State
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm">{userState}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.investor.state.name}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        state: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    City
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm">{userCity}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.investor.city}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        city: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="my-10 text-footer">
            <h1 className="uppercase lg:capitalize text-footer text-xs px-3 font-medium">
              More Information
            </h1>
            <table className="border w-full border-collapse mt-3 font-inter">
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Bank Account Name
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  {/* <h1 className="font-medium text-sm ">{userName}</h1> */}
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Account Number
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                  />
                </td>
              </tr>
              {/* <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Password
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  <div className="flex justify-between items-center">
                    <input
                      type="password"
                      disabled
                      value="12345628"
                      className="bg-transparent"
                    />
                    <Link to="/change-password">
                      <h1 className="font-medium text-xs cursor-pointer text-change hidden lg:block">
                        Change password
                      </h1>
                    </Link>
                  </div>
                </td>
              </tr> */}
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    Address
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  <input
                    type="text"
                    defaultValue={posts?.investor.address}
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        address: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="lg:w-1/3 w-2/5 px-5 py-2">
                  <h1 className="text-footer font-semibold text-xs lg:text-base">
                    BVN
                  </h1>
                </td>
                <td className="lg:w-2/3 w-3/5 border px-5">
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    className="font-medium text-xs lg:text-sm outline-none w-full"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        bvn: event.target.value,
                      })
                    }
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="text-right font-family mb-12 flex justify-between px-4 lg:px-0">
            <div className="hidden lg:block">
              <button
                className="bg-green rounded-full text-dashbg py-3 px-10 text-sm font-bold flex items-center justify-center "
                onClick={() => setSignOut(true)}
              >
                <BiLogOut className="mr-1 text-lg" /> Log Out
              </button>
            </div>
            <button
              className="rounded-full bg-green text-dashbg w-full lg:w-auto font-medium text-sm py-3 px-12 "
              onClick={update}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 hidden lg:block pb-10 text-center">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Profile;
