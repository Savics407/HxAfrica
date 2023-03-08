// import { useState } from "react";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

function Verification({ formData, setFormData, nextPage }) {
  // const [errorMessage, setError] = useState([]);
  async function verifyOTP(e) {
    // console.log(formData);
    e.preventDefault();
    const otpLoad = {
      email: formData.email,
      otp: formData.otp,
    };
    const response = await fetch(`${process.env.REACT_APP_MY_API_ENDPOINT}verify-otp`, {
      method: "POST",
      body: JSON.stringify(otpLoad),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if (result?.status === "success") {
      // alert(result.message);
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      nextPage();
    } else {
      if (result.status === "error") {
        // setError(result.data);
        console.log(result.data);
        // alert(result.message);
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  async function resendOTP() {
    const token = localStorage.getItem("user-token");
    const id = localStorage.getItem("user-id");
    const resendLoad = {
      email: formData.email,
      user_id: id,
    };
    const response = await fetch(`${process.env.REACT_APP_MY_API_ENDPOINT}resend-otp`, {
      method: "POST",
      body: JSON.stringify(resendLoad),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    if (result?.status === "success") {
      // alert(result.message);
      // alert(result.message);
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // nextPage();
    } else {
      if (result.status === "error") {
        // setError(result.data);
        console.log(result.data);
        // alert(result.message);
        toast.error(`${result.message}`, {
          position: "top-left",
          autoClose: 500,
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
    <>
      <div className="flex items-center justify-between mb-12 rule relative create text-base">
        <div className="tabs">
          <span className="indicator border-green OTP pl-2.5 !pt-2 text-green">
            <FaCheck />
          </span>
          <p>Create Account</p>
        </div>
        <div className="tabs">
          <span className="indicator">2</span>
          <p className="">OTP Verification</p>
        </div>
        <div className="tabs">
          <span className="indicator">3</span>
          <p className="text-grey">Account Setup</p>
        </div>
      </div>
      <form className="form" onSubmit={verifyOTP}>
        <div>
          <h1 className="page-text">OTP Verification</h1>
          <p className="description">
            Enter the 5digit code sent to <b>{formData.email}</b> for
            verification
          </p>
        </div>
        <div className="input">
          <label className="">Enter Code </label>
          <input
            required
            type="number"
            placeholder="5 digit code"
            className="box"
            value={formData.otp}
            onChange={(event) =>
              setFormData({ ...formData, otp: event.target.value })
            }
          />
        </div>

        <div className=" flex items-start mb-7">
          {/* <input required type="checkbox"  className="border mr-2"/> */}
          <p className="text-xs tracking-wide">
            Didn’t get an code?{" "}
            <span
              className="text-green font-semibold cursor-pointer"
              onClick={resendOTP}
            >
              Resend{" "}
            </span>{" "}
          </p>
        </div>
        {/* <div>
                    <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium">Next</button>
                </div> */}
        <div>
          <input
            className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium cursor-pointer"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </>
  );
}

export default Verification;
