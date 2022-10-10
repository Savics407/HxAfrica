import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function Banuser({ setBan, userID, fetchInvestors }) {
  const [comment, setComment] = useState();
  async function banUser() {
    const token = localStorage.getItem("user-token");

    const payLoad = {
      user_id: userID,
      comment: comment,
    };
    const response = await fetch(
      "https://reic.api.simpoo.biz/api/admin/ban_user",
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
    if (result?.status === "success") {
      setBan(false);
      fetchInvestors();
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (result?.status === "error") {
        toast.error(`${result.message}`, {
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
  }
  return (
    <div>
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
        className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay  backdrop-blur-sm z-10"
      ></motion.div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10">
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
          className="bg-white rounded-xl border w-2/5 m-auto z-10"
        >
          <div className="border-b border-stroke capitalize font-inter px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal">
            <h1>Ban Investor</h1>
            <MdClose
              className="cursor-pointer"
              onClick={() => {
                setBan(false);
              }}
            />
          </div>
          <div className="input relative p-10">
            <label className="font-normal text-footer ">Reason for Ban</label>
            <textarea
              className="box resize-none"
              rows="7"
              placeholder="Enter Message"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="p-10 text-right">
            <button
              className="border rounded-full px-10 py-2.5 mr-2"
              onClick={() => setBan(false)}
            >
              No, Cancel{" "}
            </button>
            <button
              className="bg-red text-white px-10 py-2.5 border border-red rounded-full"
              onClick={banUser}
            >
              Confirm ban{" "}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Banuser;
