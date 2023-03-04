import React, { useEffect, useState } from "react";
import Header from "./Admin_header";
import SideBar from "./SideBar";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import reictoken from "../images/Reic_Token.png";

function AdminSettings() {
  const [pullout, setPullout] = useState();
  const [accumulated, setAccumulated] = useState();
  const [investment, setInvestment] = useState();
  const [exchange, setExchange] = useState();
  async function fetchPulloutPercentage() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_pullout_percentage`,
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
    setPullout(result?.data.pullout_percentage);
    setAccumulated(result?.data.cancel_percentage);
    setInvestment(result?.data.investment_percentage);
    setExchange(result?.data.exchange_percentage);
  }

  const [investAwait, setInvestAwait] = useState();
  async function fetchAwait() {
    const token = localStorage.getItem("user-token");
    // e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/fetch_investment_awaiting_time`,
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
    setInvestAwait(result?.data.waiting_time);
  }

  useEffect(() => {
    fetchPulloutPercentage();
    fetchAwait();
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
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
      `${process.env.REACT_APP_MY_API_ENDPOINT}investor/change_password`,
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

  const [disable, setDisable] = useState(true);
  const [disableAcc, setDisableAcc] = useState(true);
  const [disablePull, setDisablePull] = useState(true);
  const [disableExchange, setDisableExchange] = useState(true);
  const [disableInvestment, setDisableInvestment] = useState(true);
  const [updateCanc, setUpdateCanc] = useState();
  async function updateCancel() {
    const payLoad = {
      cancel_percentage: updateCanc,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/update_cancel_percentage`,
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
      setDisableAcc(true);

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

  const [percentage, setPercentage] = useState();
  async function updatePercentage() {
    const payLoad = {
      percentage: percentage,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/update_pullout_percentage`,
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
      setDisablePull(true);

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

  const [cancPercentage, setCancPercentage] = useState();
  async function investmentPercentage() {
    const payLoad = {
      investment_percentage: cancPercentage,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/update_investment_percentage`,
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
      setDisableInvestment(true);

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

  const [updateExchange, setUpdateExchange] = useState();
  async function updateExchangePercentage() {
    const payLoad = {
      exchange_percentage: updateExchange,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/update_exchange_percentage`,
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
      setDisableExchange(true);

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

  const [waiting, setWaiting] = useState();
  async function updateAwait() {
    const payLoad = {
      waiting_time: waiting,
    };

    const token = localStorage.getItem("user-token");
    const response = await fetch(
      `${process.env.REACT_APP_MY_API_ENDPOINT}admin/update_investment_awaiting_time`,
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
      setDisable(true);

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
    <div className="bg-dashbg font-family">
      <Header />
      <div className="flex justify-between">
        <div className="w-1/5 border-r bg-white">
          <SideBar />
        </div>
        <div className=" w-4/5 p-5 mb-20">
          <div className=" bg-white p-5 rounded-lg">
            <h1 className="text-dark  font-black text-3xl mb-3">Settings</h1>
          </div>
          <div className="flex justify-between">
            <div className="w-4/6">
              <div className="rounded-lg bg-white mt-5 py-5 mb-3">
                <div className="border-b pb-3 px-7 text-xl text-modal font-semibold">
                  <h1>Investment Settings </h1>
                </div>
                <div className="p-5">
                  <h1 className="p-5">
                    <span className="text-grayy text-sm capitalize">
                      percent from accumulated interest
                    </span>
                    {/* {updateCanc} */}
                  </h1>
                  <div className="flex items-center">
                    <div
                      className={`flex items-center mx-5 my-3 w-3/5 box ${
                        !disableAcc && "shadow-lg"
                      }`}
                    >
                      <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                        %
                      </span>
                      <input
                        type="number"
                        className="bg-transparent w-full outline-none px-2"
                        defaultValue={accumulated}
                        disabled={disableAcc}
                        // autofocus
                        onChange={(e) => setUpdateCanc(e.target.value)}
                      />
                    </div>
                    <div>
                      {disableAcc ? (
                        <button
                          className="text-links text-xs"
                          onClick={() => setDisableAcc(false)}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          className="text-links text-xs"
                          onClick={updateCancel}
                        >
                          Update
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h1 className="p-5">
                    <span className="text-grayy text-sm capitalize">
                      investment instant pullout
                    </span>
                  </h1>
                  <div className="items-center flex">
                    <div
                      className={`flex items-center mx-5 my-3 w-3/5 box ${
                        !disablePull && "shadow-lg"
                      }`}
                    >
                      <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                        %{" "}
                      </span>
                      <input
                        type="number"
                        className="bg-transparent w-full outline-none px-2"
                        defaultValue={pullout}
                        disabled={disablePull}
                        onChange={(e) => setPercentage(e.target.value)}
                      />
                    </div>
                    <div>
                      {disablePull ? (
                        <button
                          className="text-links text-xs"
                          onClick={() => setDisablePull(false)}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          className="text-links text-xs"
                          onClick={updatePercentage}
                        >
                          Update
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h1 className="p-5">
                    <span className="text-grayy text-sm capitalize">
                      Update Investment percentage
                    </span>
                  </h1>
                  <div className="items-center flex">
                    <div
                      className={`flex items-center mx-5 my-3 w-3/5 box ${
                        !disableInvestment && "shadow-lg"
                      }`}
                    >
                      <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                        %{" "}
                      </span>
                      <input
                        type="number"
                        className="bg-transparent w-full outline-none px-2"
                        defaultValue={investment}
                        disabled={disableInvestment}
                        onChange={(e) => setCancPercentage(e.target.value)}
                      />
                    </div>
                    <div>
                      {disableInvestment ? (
                        <button
                          className="text-links text-xs"
                          onClick={() => setDisableInvestment(false)}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          className="text-links text-xs"
                          onClick={investmentPercentage}
                        >
                          Update
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h1 className="p-5">
                    <span className="text-grayy text-sm capitalize">
                      Update Exchange percentage
                    </span>
                  </h1>
                  <div className="items-center flex">
                    <div
                      className={`flex items-center mx-5 my-3 w-3/5 box ${
                        !disableExchange && "shadow-lg"
                      }`}
                    >
                      <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                        %{" "}
                      </span>
                      <input
                        type="number"
                        className="bg-transparent w-full outline-none px-2"
                        defaultValue={exchange}
                        disabled={disableExchange}
                        onChange={(e) => setUpdateExchange(e.target.value)}
                      />
                    </div>
                    <div>
                      {disableExchange ? (
                        <button
                          className="text-links text-xs"
                          onClick={() => setDisableExchange(false)}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          className="text-links text-xs"
                          onClick={updateExchangePercentage}
                        >
                          Update
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 mb-20">
                  <h1 className=" p-5">
                    <span className="text-grayy text-sm capitalize">
                      duration before an investment would kick off.
                    </span>
                  </h1>
                  <div className="items-center flex">
                    <div
                      className={`flex items-center mx-5 my-3 w-3/5 box ${
                        !disable && "shadow-lg"
                      }`}
                    >
                      <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                        Days
                      </span>
                      <input
                        type="number"
                        className="bg-transparent w-full outline-none px-2"
                        defaultValue={investAwait}
                        disabled={disable}
                        onChange={(e) => setWaiting(e.target.value)}
                      />
                    </div>
                    <div>
                      {disable ? (
                        <button
                          className="text-links text-xs"
                          onClick={() => setDisable(false)}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          className="text-links text-xs"
                          onClick={updateAwait}
                        >
                          Update
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-b pb-3 px-7 text-xl text-modal font-semibold">
                  <h1>Password Settings </h1>
                </div>
                <div className="">
                  <div className="flex justify-between w-full p-5 ">
                    <div className="input w-1/2 relative mb-5">
                      <h1 className="p-5">
                        <span className="text-grayy text-sm capitalize">
                          Old Password
                        </span>{" "}
                      </h1>
                      <input
                        required
                        type="text"
                        placeholder="enter old password"
                        className="border rounded-full lg:rounded-xl border-border mx-5 bg-input p-3 text-sm focus-within:shadow-lg outline-none "
                        id="confirm"
                        //   {...register()}
                        value={oldPassword}
                        onChange={(event) => setOldPassword(event.target.value)}
                      />
                    </div>
                    <div className="input  w-1/2 relative">
                      <h1 className="p-5">
                        <span className="text-grayy text-sm capitalize">
                          New Password
                        </span>{" "}
                      </h1>
                      <input
                        required
                        type="text"
                        placeholder="enter new password"
                        className="border rounded-full lg:rounded-xl mx-5 border-border bg-input p-3 text-sm focus-within:shadow-lg outline-none"
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
                  <div className="w-full px-5 flex items-end justify-between">
                    <div className="input relative w-1/2">
                      <h1 className="p-5">
                        <span className="text-grayy text-sm capitalize">
                          confirm new password
                        </span>{" "}
                      </h1>
                      <input
                        required
                        type="text"
                        placeholder="confirm password"
                        className="border rounded-full lg:rounded-xl border-border mx-5 bg-input p-3 text-sm focus-within:shadow-lg outline-none"
                        id="confirm"
                        value={confirmPassword}
                        {...register("confirmPassword", {
                          required: "confirm Password is required",
                          validate: (value) =>
                            value === password || "The passwords do not match",
                        })}
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                      />
                      {errors.confirmPassword && (
                        <span className="text-red text-xs">
                          {" "}
                          {errors.confirmPassword.message}
                        </span>
                      )}
                    </div>
                    <div className="font-family pb-5 ">
                      <button
                        className="rounded-full bg-green text-dashbg w-full lg:w-auto font-medium text-sm py-3 px-12"
                        onClick={update}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                {/* 
                <div className="text-white flex justify-end items-center w-full mt-20 px-5 font-medium">
                  <input
                    type="submit"
                    className=" cursor-pointer bg-green py-2.5 px-12 outline-none rounded-full"
                    value="Update Settings"
                  />
                </div> */}
              </div>
            </div>
            <div className="w-2/6 pt-5">
              <div className="rounded-xl bg-white border pb-20">
                <div className="border-b pt-5 pb-3 px-7 text-xl text-modal font-semibold">
                  <h1>Token Value </h1>
                </div>
                <div className="py-5 px-7">
                  <div className="pb-4 flex items-center">
                    <img src={reictoken} alt="my-investment" className="w-8" />
                    <div className="ml-4 flex items-center">
                      <span className="text-tokentext text-xl font-extra-bold mr-2">
                        1
                      </span>
                      <span className="text-token uppercase text-sm font-semibold mr-4">
                        {" "}
                        Hx token
                      </span>
                      <span className="text-tokentext text-xl font-semibold">
                        {" "}
                        = N50,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-7">
                  <h1 className="py-5">
                    <span className="text-grayy text-sm capitalize">
                      Change Value
                    </span>{" "}
                  </h1>

                  <div className="flex items-center box">
                    <span className="border-r-2 px-2 py-0 h-4 w-14 flex items-center font-bold text-navbar text-sm">
                      NGN
                    </span>
                    <input
                      type="number"
                      className="bg-transparent w-full outline-none px-2"
                      defaultValue="50000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
