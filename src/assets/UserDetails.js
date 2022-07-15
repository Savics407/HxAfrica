// import { useState } from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import axios from "axios";

function UserDetails({ formData, setFormData, nextPage, signup }) {
  // const [step, setStep] = useState(0);
  const [passwordEye, setPasswordEye] = useState(false);
  const [errorMessage, setError] = useState([]);
  const handlePasswordClick = () => setPasswordEye(!passwordEye);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  const handleConfirmPasswordClick = () =>
    setConfirmPasswordEye(!confirmPasswordEye);
  // Handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  //handle submit
  const onSubmit = async (data) => {
    // console.log(formData, "DATA2");
    // console.log(data, "DATA1");

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        terms: formData.terms,
      };
      const response = await fetch("https://reic.api.simpoo.biz/api/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();

      console.log(result?.status);
      if (result?.status === "success") {
        localStorage.setItem("user-token", result.api_token);
        console.log(result.api_token);
        nextPage();
      } else {
        if (result.status === "error") {
          setError(result.data);
          console.log(result.data);
          alert(result.data);
        }
      }

      // result?.data && nextPage();
    } catch (error) {
      return;
      // console.log(error?.response, "DAta-INfo");
      // if (error.response.status === 422) {
      //   setError(error.response.data.data);
      //   console.log(error.response.data.data);
      // }
    }
  };

  //    check password event
  const password = watch("password");

  return (
    <>
      <div className="flex items-center justify-between mb-12 rule relative lg:text-base">
        <div className="tabs">
          <span className="indicator">1</span>
          <p>Create Account</p>
        </div>
        <div className="tabs">
          <span className="indicator">2</span>
          <p className="text-grey">OTP Verification</p>
        </div>
        <div className="tabs">
          <span className="indicator">3</span>
          <p className="text-grey">Account Setup</p>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="page-text">Create Account</h1>
          <p className="description">
            Create an account with REIC, this would only take few minutes.
          </p>
        </div>
        <div className="input">
          <label className="">Email Address </label>
          <input
            // required
            type="email"
            placeholder="enter email address"
            className={`box ${
              errors.password && "focus:border-red focus:ring-red border-red"
            }`}
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter a valid email.",
              },
            })}
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          {errors.email && (
            <span className="text-red text-xs"> {errors.email.message}</span>
          )}
        </div>
        <div className="input">
          <label>Phone Number</label>
          <input
            // required
            type="tel"
            placeholder="enter phone number"
            className={`box ${
              errors.code && "focus:border-red focus:ring-red border-red"
            }`}
            {...register("phone", {
              required: {
                value: true,
                message: "Phone is required",
              },
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Please enter a valid phone number",
              },
            })}
            value={formData.phone}
            onChange={(event) =>
              setFormData({ ...formData, phone: event.target.value })
            }
          />
          {errors.phone && (
            <span className="text-red text-xs"> {errors.phone.message}</span>
          )}
        </div>
        <div className="input relative">
          <label>Password</label>
          <input
            // required
            type={!passwordEye ? "password" : "text"}
            placeholder="enter password"
            className={`box ${
              errors.password && "focus:border-red focus:ring-red border-red"
            }`}
            id="pass"
            {...register("password", {
              required: "Password is required",
              //   pattern: {
              //     value:
              //       /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[\]|\\":;"'<>,.?/_₹`])[a-zA-Z0-9~`!@#$%^&*()--+={}[\]|:;"'<>,.?/_₹']{10, 16}$/,
              //     message:
              //       "Password should include at least one uppercase, one numeric value and one special character",
              //   },
              minLength: {
                value: 8,
                message: "Minimum Required length is 8",
              },
              maxLength: {
                value: 20,
                message: "Maximum Required length is 20",
              },
            })}
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          {errors.password && (
            <span className="text-red text-xs"> {errors.password.message}</span>
          )}

          {!passwordEye ? (
            <FaRegEye
              className="text-grey absolute top-11 right-4 cursor-pointer"
              onClick={handlePasswordClick}
            />
          ) : (
            <FaRegEyeSlash
              className="text-grey absolute top-11 right-4 cursor-pointer"
              onClick={handlePasswordClick}
            />
          )}
        </div>
        <div className="input relative">
          <label>Confirm Password</label>
          <input
            // required
            type={!confirmPasswordEye ? "password" : "text"}
            placeholder="confirm password"
            onPaste={(e) => {
              e.preventDefault();
              return alert("sorry... copy and paste not supported");
            }}
            className="box"
            id="confirm"
            {...register("confirmPassword", {
              required: "confirm Password is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            value={formData.confirmPassword}
            onChange={(event) =>
              setFormData({ ...formData, confirmPassword: event.target.value })
            }
          />
          {errors.confirmPassword && (
            <span className="text-red text-xs">
              {" "}
              {errors.confirmPassword.message}
            </span>
          )}

          {!confirmPasswordEye ? (
            <FaRegEye
              className="text-grey absolute top-11 right-4 cursor-pointer"
              onClick={handleConfirmPasswordClick}
            />
          ) : (
            <FaRegEyeSlash
              className="text-grey absolute top-11 right-4 cursor-pointer"
              onClick={handleConfirmPasswordClick}
            />
          )}
        </div>
        <div className=" flex items-start">
          <input
            // required
            type="checkbox"
            className="border mr-2"
            value="1"
            {...register("checkbox", {
              required: "check the box to proceed",
            })}
            onChange={(event) =>
              setFormData({ ...formData, terms: event.target.value })
            }
          />
          <p className="text-xs tracking-wide">
            I agree with REIC{" "}
            <span className="text-blue-500">Terms & Conditions </span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>
          </p>
        </div>
        {errors.checkbox && (
          <span className="text-red text-xs"> {errors.checkbox.message}</span>
        )}
        <div>
          <input
            className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium cursor-pointer"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
}

export default UserDetails;
