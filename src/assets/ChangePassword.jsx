import Header from "./Header";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Protabs from "./Protabs";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

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
    navigate("/login");
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const password = watch("password");

  async function update() {
    const payLoad = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${import.meta.env.REACT_APP_MY_API_ENDPOINT}investor/change_password`,
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
      //   setChangePassword.new_password = "";
      setNewPassword("");
      setConfirmPassword("");
      setOldPassword("");
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
      if (result.status === "error") {
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
    <div className="font-family bg-mainbg">
      <Header />
      <div className="lg:w-10/12 w-full m-auto lg:mt-20 bg-white rounded-lg pb-10 lg:py-8 lg:px-10">
        <div className="lg:hidden py-8 px-4 bg-welcome text-dark text-lg font-semibold flex justify-between">
          <h1 className="capitalize">Profile Details</h1>
          <button
            className="bg-green rounded-full text-dashbg py-1 px-5 text-xs font-bold flex items-center justify-center "
            onClick={logOut}
          >
            <BiLogOut className="mr-1 text-sm" /> Log Out
          </button>
        </div>
        <div className="bg-white rounded-xl">
          <div className="lg:block hidden py-10 font-semibold flex justify-between items-center text-modal text-2xl">
            <h1>Profile Details</h1>
          </div>

          <Protabs />
          <div className="my-16 flex flex-wrap items-end w-full">
            <div className="lg:w-1/2 w-full px-5 lg:pr-10">
              <div className="input relative mb-5">
                <label className="lg:font-semibold font-medium text-tiny lg:text-sm mb-2">
                  OLD PASSWORD
                </label>
                <input
                  required
                  type="text"
                  placeholder="enter old password"
                  className="border rounded-full lg:rounded-xl border-border bg-input p-3 text-sm focus-within:shadow-lg outline-none "
                  id="confirm"
                  //   {...register()}
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                />
              </div>
              <div className="input relative">
                <label className="lg:font-semibold font-medium text-tiny lg:text-sm mb-2">
                  NEW PASSWORD
                </label>
                <input
                  required
                  type="text"
                  placeholder="enter new password"
                  className="border rounded-full lg:rounded-xl border-border bg-input p-3 text-sm focus-within:shadow-lg outline-none"
                  id="confirm"
                  value={newPassword}
                  {...register("password", {
                    required: "Password is required",

                    minLength: {
                      value: 8,
                      message: "Minimum Required length is 8",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum Required length is 20",
                    },
                  })}
                  onChange={(event) => setNewPassword(event.target.value)}
                />
                {errors.password && (
                  <span className="text-red text-xs">
                    {" "}
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div className=" lg:pl-10 lg:w-1/2 w-full px-5 ">
              <div className="input relative">
                <label className="lg:font-semibold font-medium text-tiny lg:text-sm mb-2">
                  CONFIRM NEW PASSWORD
                </label>
                <input
                  required
                  type="text"
                  placeholder="confirm password"
                  className="border rounded-full lg:rounded-xl border-border bg-input p-3 text-sm focus-within:shadow-lg outline-none"
                  id="confirm"
                  value={confirmPassword}
                  {...register("confirmPassword", {
                    required: "confirm Password is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
                {errors.confirmPassword && (
                  <span className="text-red text-xs">
                    {" "}
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="font-family mb-12 w-full px-4 lg:px-0 ">
            <button
              className="rounded-full bg-green text-dashbg w-full lg:w-auto font-medium text-sm py-3 px-12"
              onClick={update}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 pb-10 text-center hidden lg:block">
        <h1 className="text-base font-semibold text-footer">
          © 2022 HxAfrica. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default ChangePassword;
