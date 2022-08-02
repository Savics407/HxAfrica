import Header from "./Header";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Protabs from "./Protabs";
import { useState } from "react";
import { toast } from "react-toastify";

function ChangePassword() {
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
      "https://reic.api.simpoo.biz/api/investor/change_password",
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

      <div className="w-10/12 m-auto mt-20 bg-white rounded-lg py-8 px-10">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.5,
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
          <div className="my-16 flex items-end">
            <div className="w-1/2 pr-10">
              <div className="input relative mb-5">
                <label>OLD PASSWORD</label>
                <input
                  required
                  type="text"
                  placeholder="enter old password"
                  className="box"
                  id="confirm"
                  //   {...register()}
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                />
              </div>
              <div className="input relative">
                <label>NEW PASSWORD</label>
                <input
                  required
                  type="text"
                  placeholder="enter new password"
                  className="box"
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
            <div className="w-1/2 pl-10">
              <div className="input relative">
                <label>CONFIRM NEW PASSWORD</label>
                <input
                  required
                  type="text"
                  placeholder="confirm password"
                  className="box"
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

          <div className="font-family mb-12">
            <button
              className="rounded-full bg-green text-dashbg font-medium text-sm py-3 px-12"
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

export default ChangePassword;
