import logo from "./images/HXafrica Logo.svg";

// import logo from "./images/reic_with_tagline.png";
// import bg from "./images/build.jpeg";
// import Form from "./UserDetails";
import Verification from "./Verification";
import Setup from "./Setup";
import UserDetails from "./UserDetails";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

function Tab() {
  return (
    <>
      <div className="bg-primary text-center text-green p-5 hidden md:flex">
        {/* <div className="w-40 h-20 border"> */}
        <img src={logo} alt="logo icon" className="w-36" />
        {/* </div> */}
        {/* <h1 className="text-sm font-bold font-family ml-4">Hx</h1> */}
      </div>
    </>
  );
}

function Auth() {
  // console.log(process.env.REACT_APP_MY_API_ENDPOINT);

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    terms: "",
    confirmPassword: "",
    otp: "",
    name: "",
    state: "",
    city: "",
    address: "",
    dob: "",
  });

  //   async function signup() {
  //     console.log(formData);
  //     const payload = {
  //       email: formData.email,
  //       password: formData.password,
  //       phone: formData.phone,
  //       terms: formData.terms,
  //     };
  //     try {
  //       const response = await fetch(`${process.env.REACT_APP_MY_API_ENDPOINT}register", {
  //         method: "POST",
  //         body: JSON.stringify(payload),
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //       });
  //       const result = await response.json();
  //       console.log(result);
  //       //   nextPage();
  //       localStorage.setItem("user-info", JSON.stringify(response));
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   }

  //   async function verifyOTP() {
  //     // console.log(formData);
  //     const otpLoad = {
  //       email: formData.email,
  //       otp: formData.otp,
  //     };
  //     const response = await fetch(`${process.env.REACT_APP_MY_API_ENDPOINT}verify-otp", {
  //       method: "POST",
  //       body: JSON.stringify(otpLoad),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //     console.log(otpLoad);
  //     nextPage();
  //     localStorage.setItem("user-info", JSON.stringify(response));
  //   }

  const FormTitles = ["UserDetails", "Verification", "Setup"];

  const PageView = () => {
    if (step === 0) {
      return (
        <UserDetails
          formData={formData}
          nextPage={nextPage}
          setFormData={setFormData}
          //   signup={signup}
        />
      );
    } else if (step === 1) {
      return (
        <Verification
          formData={formData}
          nextPage={nextPage}
          setFormData={setFormData}
        />
      );
    } else {
      return (
        <Setup
          formData={formData}
          nextPage={nextPage}
          setFormData={setFormData}
        />
      );
    }
  };

  const nextPage = () => {
    setStep((currentPage) => currentPage + 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-family">
      <Helmet>
        <title>Hx</title>
      </Helmet>
      <Tab />
      <div className="lg:flex justify-between bg-white">
        <div className="lg:px-24 md:px-24 px-10 lg:pt-20 pt-14 pb-24 w-full lg:w-1/2">
          {PageView()}
          <div className="lg:w-80 mb-16">
            {/* <button
              type="submit"
              className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium"
              id="button"
              onClick={() => {
                if (step === FormTitles.length - 1) {
                  create();
                } else if (step === FormTitles.length - 2) {
                  verifyOTP();
                  console.log("OTP verified");
                  nextPage();
                } else {
                  signup();
                  nextPage();
                }
              }}
            >
              {step === FormTitles.length - 1 ? "Create Account" : "Next"}
            </button> */}
          </div>
          <div></div>
        </div>
        <div className=" bg-[url('../src/assets/images/authImage.svg')] bg-welcome lg:w-1/2 relative bg-cover bg-center hidden lg:block">
          {/* <img src={bg} className=" w-full h-full object-cover absolute"/>     */}
        </div>
      </div>
    </div>
  );
}

export default Auth;
