// import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import axios from "axios";

function UserDetails({ formData, setFormData, nextPage, signup }) {
  // const [step, setStep] = useState(0);
  const [passwordEye, setPasswordEye] = useState(false);
  // const [errorMessage, setError] = useState([]);
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
      const response = await fetch(
        `${process.env.REACT_APP_MY_API_ENDPOINT}register`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result.data.api_token);

      if (result?.status === "success") {
        localStorage.setItem("user-token", result?.data.api_token);
        localStorage.setItem("user-id", result?.data.id);
        // localStorage.setItem("user-info", JSON.stringify(response));
        // console.log(result.api_token);

        nextPage();
      } else {
        if (result.status === "error") {
          // setError(result.data);
          console.log(result.data);
          // alert(result.data);
          // toast.error(`${result.data}`);
          toast.error(`${result.data}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            // toastId: "customId",
          });
          toast.error(`${result.message}`, {
            position: "bottom-left",
            autoClose: 300,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
  const [terms, setTerms] = useState(false);
  const [check, setCheck] = useState(false);

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
            Create an account with HxAfrica, this would only take few minutes.
          </p>
        </div>
        <div className="input">
          <label className="">Email Address </label>
          <input
            // required
            type="email"
            placeholder="enter email address"
            className={`box ${errors.password && "focus:border-red focus:ring-red border-red"
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
            className={`box ${errors.code && "focus:border-red focus:ring-red border-red"
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
            className={`box ${errors.password && "focus:border-red focus:ring-red border-red"
              }`}
            id="pass"
            {...register("password", {
              required: "Password is required",
              //   pattern: {
              //     value:
              //       /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[\]|\\":;"'<>,.?/_???`])[a-zA-Z0-9~`!@#$%^&*()--+={}[\]|:;"'<>,.?/_???']{10, 16}$/,
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
            // onPaste={(e) => {
            //   e.preventDefault();
            //   return alert("sorry... copy and paste not supported");
            // }}
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
            onChange={(event) => {
              setFormData({ ...formData, terms: event.target.value });
              setCheck(!check);
            }}
          // checked
          />
          <p className="text-xs tracking-wide">
            I agree with HxAfrica
            <span
              className="text-green cursor-pointer"
              onClick={() => setTerms(true)}
            >
              Terms & Conditions{" "}
            </span>{" "}
            and <br />
            <span
              className="text-green cursor-pointer"
              onClick={() => setTerms(true)}
            >
              Privacy Policy
            </span>
          </p>
        </div>
        <div>
          <h1
            className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium cursor-pointer text-center"
            onClick={() => setTerms(true)}
          >
            Next
          </h1>
          <p className="text-sm font-medium text-sec mt-5 mb-48 text-center md:text-left">
            Existing user ?{" "}
            <Link to="/login">
              <span className="text-green">Login</span>
            </Link>
          </p>
        </div>
        {terms && (
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
            className="flex items-center justify-center fixed bg-overlay backdrop-blur-xs right-0 left-0 bottom-0 top-0 z-50"
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
              className="bg-white rounded-xl w-11/12 lg:w-1/2 "
            >
              <div className="border-b border-stroke lg:px-10 px-5 py-5 text-sm lg:text-2xl font-semibold flex justify-between items-center text-modal">
                <h1>Terms & Conditions</h1>

                <MdClose
                  className="cursor-pointer"
                  onClick={() => {
                    setTerms(false);
                  }}
                />
              </div>
              <div className="lg:px-10 px-5 py-5 text-sm font-normal lg:h-auto h-80 overflow-auto scroll">
                <p>
                  Every website needs a Terms and Conditions. Even if your
                  website is not for your business or any commercial structure,
                  you will be better off with a Terms and Conditions agreemnent.{" "}
                  All websites are advised to have their own agreements for
                  their own protection. <br />
                  <br />
                  Every website needs a Terms and Conditions. Even if your
                  website is not for your business or any commercial structure,
                  you will be better off with a Terms and Conditions agreemnent.
                  All websites are advised to have their own agreements for
                  their own protection.
                  <br /> <br />
                  We will help you by providing this FREE terms and conditions
                  generator. Fill in the blank fields below, and we will email
                  you your personalized terms and conditions just for you and
                  your business. The accuracy of the generated document on this
                  website is not legally binding. Use at your own risk.
                </p>
              </div>
              <div className="lg:pt-7 pt-5 lg:px-10 px-5">
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
                    checked={check}
                  />
                  <p className="text-xs tracking-wide">
                    I agree with Hx{" "}
                    <span className="text-green">Terms & Conditions </span> and{" "}
                    <br />
                    <span className="text-green">Privacy Policy</span>
                  </p>
                </div>
                {errors.checkbox && (
                  <span className="text-red text-xs">
                    {" "}
                    {errors.checkbox.message}
                  </span>
                )}
              </div>
              <div className=" px-5 lg:pb-10 pb-5 text-center">
                <input
                  className="bg-green text-white py-3 w-full lg:w-auto lg:px-28 text-sm rounded-xl mt-6 font-medium cursor-pointer"
                  type="submit"
                  value="Continue"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </form>
    </>
  );
}

export default UserDetails;
