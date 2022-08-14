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
        className="justify-center lg:p-10 rounded-xl flex bg-white border-4 lg:w-auto w-full lg:h-auto h-full"
      >
        <div className="w-96">
          <div>
            <h1 className="text-green text-2xl lg:text-4xl font-semibold mb-3 text-center">
              Select Avater
            </h1>
          </div>
          <div className="flex justify-center mb-5">
            <img src={userIcon} alt="userAvater" />
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
          </div>
          <div className="flex justify-around w-full px-4 flex-wrap">
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
              className="mt-4 avater"
              onClick={() => {
                setUserIcon(avater9);
                setIsClick(true);
              }}
            >
              <img src={images.avater9} alt="Users Avater" />
            </div>
          </div>
          <div className=" text-sm font-medium flex justify-center my-10">
            <button
              className="text-green border border-green rounded-xl px-12 py-3 mr-3"
              onClick={() => setAvailable(false)}
            >
              Cancel
            </button>

            {isClick ? (
              <button
                className="text-white bg-green hover:opacity-100 rounded-xl px-7 py-3"
                onClick={updateProfile}
              >
                Set as avater
              </button>
            ) : (
                <button
                  className="text-white bg-green opacity-50 hover:opacity-100 rounded-xl px-7 py-3"
                  onClick={() => alert("select an avater")}
                >
                  Set as avater
                </button>
              )}
          </div>
        </div>
      </motion.div>
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

  const [posts, setPosts] = useState();
  const [image, setImage] = useState()

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

      <Header />

      <div className="w-10/12 m-auto mt-20 bg-white rounded-lg py-8 px-10">
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
          className="bg-white rounded-xl"
        >
          <div className="py-10 font-semibold flex justify-between items-center text-modal text-2xl">
            <h1>Profile Details</h1>
          </div>
          <Protabs />
          <div className="">
            <div className="flex items-center flex-col pt-5">
              {!!userIcon ? (
                <img
                  src={userIcon}
                  alt="Profile Picture"
                  className="w-28 h-28"
                />
              ) : (
                  <img src={avater} alt="Profile Picture" className="w-28 h-28" />
                )}
              {/* <img src={userIcon} alt="Profile Picture" className="w-28 h-28" /> */}
              <button
                className="text-blue border rounded-full py-1 px-4 font-bold text-sm my-3"
                onClick={() => setAvailable(true)}
              >
                Change Profile Picture
              </button>
              <h1 className="text-red text-sm cursor-pointer" onClick={remove}>
                Remove Picture
              </h1>
            </div>
          </div>
          <div className="my-14 text-footer">
            <h1 className="text-footer text-xs font-medium">
              User Information
            </h1>

            <table className="border w-full border-collapse mt-3 " >
              <tr>
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Full Name
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm ">{userName}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.name}
                    className="font-medium text-sm outline-none w-full"
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
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Username
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm italic">Not added yet</h1> */}
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    defaultValue={posts?.username}
                    className="font-medium text-sm outline-none w-full"
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
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Email Address
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm">{userEmail}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.email}
                    className="font-medium text-sm outline-none w-full"
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
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Mobile Number
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm">{userPhone}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.phone}
                    className="font-medium text-sm outline-none w-full"
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
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Date of Birth
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm">{userDob}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.investor.dob}
                    className="font-medium text-sm outline-none w-full"
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
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">State</h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm">{userState}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.investor.state.name}
                    className="font-medium text-sm outline-none w-full"
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
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">City</h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm">{userCity}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.investor.city}
                    className="font-medium text-sm outline-none w-full"
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
            <h1 className="text-footer text-xs font-medium">
              More Information
            </h1>
            <table className="border w-full border-collapse mt-3 ">
              <tr>
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Bank Account Name
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    className="font-medium text-sm outline-none w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Account Number
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    className="font-medium text-sm outline-none w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Password
                  </h1>
                </td>
                <td className="w-2/3 border px-5 py-2">
                  <div className="flex justify-between items-center">
                    <input
                      type="password"
                      disabled
                      value="12345628"
                      className="bg-transparent"
                    />
                    <Link to="/change-password">
                      <h1 className="font-medium text-xs cursor-pointer text-change">
                        Change password
                      </h1>
                    </Link>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">
                    Address
                  </h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-medium text-sm">{userAddress}</h1> */}
                  <input
                    type="text"
                    defaultValue={posts?.investor.address}
                    className="font-medium text-sm outline-none w-full"
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
                <td className="w-1/3 px-5 py-2">
                  <h1 className="text-footer font-semibold text-base">BVN</h1>
                </td>
                <td className="w-2/3 border px-5">
                  {/* <h1 className="font-normal text-head italic text-sm ">
                    Not Added yet
                  </h1> */}
                  <input
                    type="text"
                    placeholder="Not Added yet"
                    className="font-medium text-sm outline-none w-full"
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
          <div className="text-right font-family mb-12 flex justify-between ">
            <div className="">
              <button
                className="bg-green rounded-full text-dashbg py-3 px-10 text-sm font-bold flex items-center justify-center"
                onClick={logOut}
              >
                <BiLogOut className="mr-1 text-lg" /> Log Out
              </button>
            </div>
            <button
              className="rounded-full bg-green text-dashbg font-medium text-sm py-3 px-12 "
              onClick={update}
            >
              Update
            </button>
          </div>
        </motion.div>
      </div>
      <div className="mt-6 pb-10 text-center">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Profile;
