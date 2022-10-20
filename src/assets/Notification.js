import Header from "./Header";
import { motion } from "framer-motion";
import { TiFlashOutline } from "react-icons/ti";
import { TbLoader } from "react-icons/tb";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import moment from "moment";
import { useEffect, useState } from "react";

function Notification() {
  const [notify, setNoti] = useState();
  async function fetchNotifications() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/investor/fetch_notifications",
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
  }

  useEffect(() => {
    //   fetchData();
    fetchNotifications();
  }, []);
  return (
    <div className="font-family bg-mainbg">
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
          <div className="border-b border-stroke py-10 font-medium flex justify-between items-center text-dark text-4l">
            <h1>Notifications</h1>
            <div className="flex">
              <button className="font-medium text-sm border rounded-full py-1 px-4 mr-3">
                Mark all as read
              </button>
              <button className="font-medium text-sm border rounded-full py-1 px-4">
                Clear All
              </button>
            </div>
          </div>
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
                  <h1 className="text-base font-medium text-neutral">
                    {notification.title}
                  </h1>
                  <h1 className="text-footer font-normal text-sm">
                    {moment(notification.created_at).calendar()}
                  </h1>
                </div>
                <div>
                  <p className="text-footer text-sm font-normal">
                    {notification.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
        <div className="flex justify-center p-10">
          <button className="border border-more font-medium rounded-full w-40 h-10 text-neutral flex justify-center items-center">
            <TbLoader className="mr-3" /> Load more
          </button>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center">
        <h1 className="text-base font-semibold text-footer">
          © 2022 REIC. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Notification;
