import logo from "./images/polygon.png";
// import bg from "./images/build.jpeg";
// import Form from "./UserDetails";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { TbLoader } from "react-icons/tb";
import axios from "axios";

function Tab() {
  return (
    <>
      <div className="bg-primary text-center text-green p-4 flex items-center hidden md:flex">
        <img src={logo} alt="logo icon" />
        <h1 className="text-sm font-bold font-family ml-4">REIC</h1>
      </div>
    </>
  );
}

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // mode: "onTouched",
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const [process, setProcess] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  async function login(e) {
    // console.log(formData);
    // e.preventDefault();
    setProcess(true);

    const loginLoad = {
      email: loginData.email,
      password: loginData.password,
    };
    const response = await fetch("https://reic.api.simpoo.biz/api/login", {
      method: "POST",
      body: JSON.stringify(loginLoad),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result?.status);
    if (result?.status === "success") {
      localStorage.setItem("user-token", result?.data.api_token);
      localStorage.setItem("user-email", result?.data.email);
      localStorage.setItem("name", result?.data.name);
      localStorage.setItem("user-name", result?.data.username);
      localStorage.setItem("user-phone", result?.data.phone);
      localStorage.setItem("user-dob", result?.data.dob);
      localStorage.setItem("user-city", result?.data.city);
      localStorage.setItem("user-state", result?.data.state);
      localStorage.setItem("user-address", result?.data.address);
      localStorage.setItem("user-id", result?.data.id);
      // Route to Dashbaord
      toast.success(`${result.message}`, {
        position: "top-left",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashboard");
    } else {
      if (result.status === "error") {
        // setError(result.data);
        console.log(result);
        setProcess(false);
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
    <div className="font-family bg-white">
      <Tab />
      <div className="lg:flex justify-between">
        <div className="lg:px-24 md:px-24 px-10 lg:pt-20 pt-14 pb-5 w-full lg:w-1/2">
          <form className="form" onSubmit={handleSubmit(login)}>
            <div>
              <h1 className="page-text">Welcome Back</h1>
              <p className="description">Login to your account</p>
            </div>
            <div className="input">
              <label className="">Email Address</label>
              <input
                // required
                type="email"
                placeholder="enter email address"
                className={`box ${errors.password &&
                  "focus:border-red focus:ring-red border-red"
                  }`}
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Please enter a valid email.",
                  },
                })}
                value={loginData.email}
                onChange={(event) =>
                  setLoginData({ ...loginData, email: event.target.value })
                }
              />
              {errors.email && (
                <span className="text-red text-xs">
                  {" "}
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="input relative">
              <label>Password</label>
              <input
                // required
                type="password"
                placeholder="enter password"
                className={`box ${errors.password &&
                  "focus:border-red focus:ring-red border-red"
                  }`}
                {...register("password", {
                  required: "Password is required",
                })}
                id="pass"
                value={loginData.password}
                onChange={(event) =>
                  setLoginData({ ...loginData, password: event.target.value })
                }
              />
              {errors.password && (
                <span className="text-red text-xs">
                  {" "}
                  {errors.password.message}
                </span>
              )}
              <FaRegEyeSlash
                className="text-grey absolute top-11 right-4 cursor-pointer"
                onClick={() => {
                  let x = document.getElementById("pass");
                  if (x.type === "password") {
                    x.type = "text";
                  } else {
                    x.type = "password";
                  }
                }}
              />
            </div>

            <div className=" flex items-start">
              <p className="text-xs tracking-wide">Forgot Password?</p>
            </div>

            <div
              className="lg:w-80 bg-green text-white flex justify-center items-center w-full p-3 rounded-xl mt-6 font-medium cursor-pointer"
              onClick={handleSubmit(login)}
            >
              {process && <TbLoader className="animate-spin" />}
              <input
                type="submit"
                className="  ml-2 cursor-pointer"
                value="Log in"
              />
            </div>
          </form>
          <p className="text-sm font-medium text-sec mt-8 mb-48 text-center md:text-left">
            You are new ?{" "}
            <Link to="/sign-up">
              <span className="text-green">sign up</span>
            </Link>
          </p>
        </div>
        <div className=" bg-[url('../src/assets/images/authImage.svg')] bg-welcome lg:w-1/2 relative bg-cover bg-center hidden lg:block">
          {/* <img src={bg} className=" w-full h-full object-cover absolute"/>     */}
        </div>
      </div>
    </div>
  );
}

export default Login;
