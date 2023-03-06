import Header from "./Header";
import { motion } from "framer-motion";
import { TiFlashOutline } from "react-icons/ti";
import { TbLoader } from "react-icons/tb";
import noNote from "./images/notifications.svg";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Notification() {
  const [notify, setNoti] = useState();
  const [available, setAvailable] = useState(true);

  async function fetchNotifications() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}investor/fetch_notifications`,
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
    setNoti(result?.data);
    // localStorage.setItem("user-name", userName);
    if (result?.data.length === 0) {
      setAvailable(false);
    }
  }
  const history = useNavigate();

  async function clearNotifications() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}investor/clear_notifications`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    // console.log(result.data);
    // setNoti(result?.data);
    fetchNotifications();
    if (result?.status === "success") {
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  useEffect(() => {
    //   fetchData();
    fetchNotifications();
  }, []);
  return (
    <div className="font-family bg-mainbg">
      <Header />
      <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between items-center">
        <h1 className="">Notification</h1>
        <button
          className="text-green text-sm font-inter"
          onClick={() => {
            history(-1);
          }}
        >
          Back
        </button>
      </div>
      <div className="lg:w-10/12 m-auto lg:mt-20 bg-white rounded-lg py-8 px-5 lg:px-10">
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
          <div className="lg:border-b border-stroke lg:py-10 font-medium flex justify-between items-center text-dark text-4l">
            <h1 className="hidden lg:block">Notifications</h1>
            {available && (
              <div className="flex justify-end w-full lg:w-auto text-payment lg:text-neutral">
                <button className="font-medium text-tiny lg:text-sm border rounded-full py-1 px-4 mr-3">
                  Mark all as read
                </button>
                <button
                  className="font-medium text-tiny lg:text-sm border rounded-full py-1 px-4"
                  onClick={clearNotifications}
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
          {available ? (
            <div className="h-screen overflow-auto scroll">
              {notify?.map((notification) => (
                <div
                  className="border-b border-stroke py-6 font-medium flex items-center text-dark text-4l"
                  key={notification.id}
                >
                  <div className="">
                    <div className="border-2 rounded-full p-1.5 mr-3 border-more">
                      <TiFlashOutline className=" text-footer" />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1 className="lg:text-base text-sm font-medium text-neutral">
                        {notification.title}
                      </h1>
                      <h1 className="text-footer font-normal lg:text-sm text-xxm">
                        {moment(notification.created_at).calendar()}
                      </h1>
                    </div>
                    <div>
                      <p className="text-footer lg:text-sm text-tiny font-normal">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-28 mb-20">
              <div className="flex justify-center flex-col items-center">
                <img src={noNote} alt="No new notification" className="w-60" />
                <h1 className="text-center font-semibold text-statustext text-xs lg:text-lg">
                  You have no new notification
                </h1>
              </div>
            </div>
          )}

          {/* <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-dark text-4l">
            <div className="">
              <div className="border-2 rounded-full p-2 mr-3">
                <RiWallet3Line className=" text-footer border-more text-xl" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium text-neutral">
                  New Payment
                </h1>
                <h1 className="text-footer font-normal text-sm">
                  2021-03-10 20:19:15
                </h1>
              </div>
              <div>
                <p className="text-footer text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-red text-4l">
            <div className="">
              <div className="border-2 border-red rounded-full p-1.5 mr-3">
                <AiOutlineDollarCircle className="text-2xl" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium">
                  Pulled out of Investment
                </h1>
                <h1 className="font-normal text-sm">2021-03-10 20:19:15</h1>
              </div>
              <div>
                <p className="text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-green text-4l">
            <div className="">
              <div className="border-2 rounded-full p-1.5 mr-3">
                <TiFlashOutline className="border-more" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium">ROI Reached</h1>
                <h1 className="font-normal text-sm">2021-03-10 20:19:15</h1>
              </div>
              <div>
                <p className="text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-dark text-4l">
            <div className="">
              <div className="border-2 rounded-full p-1.5 mr-3">
                <TiFlashOutline className=" text-footer border-more" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium text-neutral">
                  Withdrawal Successful
                </h1>
                <h1 className="text-footer font-normal text-sm">
                  2021-03-10 20:19:15
                </h1>
              </div>
              <div>
                <p className="text-footer text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-dark text-4l">
            <div className="">
              <div className="border-2 rounded-full p-1.5 mr-3">
                <TiFlashOutline className=" text-footer border-more" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium text-neutral">
                  Withdrawal Successful
                </h1>
                <h1 className="text-footer font-normal text-sm">
                  2021-03-10 20:19:15
                </h1>
              </div>
              <div>
                <p className="text-footer text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-dark text-4l">
            <div className="">
              <div className="border-2 rounded-full p-1.5 mr-3">
                <TiFlashOutline className=" text-footer border-more" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium text-neutral">
                  Withdrawal Successful
                </h1>
                <h1 className="text-footer font-normal text-sm">
                  2021-03-10 20:19:15
                </h1>
              </div>
              <div>
                <p className="text-footer text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-dark text-4l">
            <div className="">
              <div className="border-2 rounded-full p-1.5 mr-3">
                <TiFlashOutline className=" text-footer border-more" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium text-neutral">
                  Withdrawal Successful
                </h1>
                <h1 className="text-footer font-normal text-sm">
                  2021-03-10 20:19:15
                </h1>
              </div>
              <div>
                <p className="text-footer text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-stroke py-6 font-medium flex justify-between items-center text-dark text-4l">
            <div className="">
              <div className="border-2 rounded-full p-1.5 mr-3">
                <TiFlashOutline className=" text-footer border-more" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-base font-medium text-neutral">
                  Withdrawal Successful
                </h1>
                <h1 className="text-footer font-normal text-sm">
                  2021-03-10 20:19:15
                </h1>
              </div>
              <div>
                <p className="text-footer text-sm font-normal">
                  Hello, you've reset the Google Authentication on your account
                  successfully. Your old security items have expired and new
                  security items have now been enabled.
                </p>
              </div>
            </div>
          </div> */}
        </motion.div>
        {/* <div className="flex justify-center p-10">
          <button className="border border-more font-medium rounded-full w-40 h-10 text-neutral flex justify-center items-center">
            <TbLoader className="mr-3" /> Load more
          </button>
        </div> */}
      </div>
      <div className="mt-6 pb-10 text-center hidden lg:block">
        <h1 className="text-base font-semibold text-footer">
          © 2022 HxAfrica. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Notification;
