import logo from "./images/polygon.png";
// import bg from "./images/build.jpeg";
// import Form from "./UserDetails";
import Verification from "./Verification"
import Setup from "./Setup"
import UserDetails from "./UserDetails";
import { useState } from "react";



function Tab() {
    return (
        <>
            <div className="bg-primary text-center text-green p-4 flex items-center hidden md:flex">
                <img src={logo} alt="logo icon"/>
                <h1 className="text-sm font-bold font-family ml-4">REIC</h1>
            </div>
        </>
    )
}

function Auth() {
    
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        password : "",
        terms: "",
        confirmPassword: "",
        otp: "",
        name: "",
        state: "",
        city: "",
        address: "",
        dob:"",
    })

    async function signup() {
        console.log(formData);
        const payload = {
            email: formData.email,
            password:formData.password,
            phone:formData.phone,
            terms:formData.terms
        }
        const response = await fetch("https://reic.api.simpoo.biz/api/register", {
            method:'POST',
            body:JSON.stringify(payload),
            headers: {
                "Content-type" : "application/json"
            }
        })
        const result = await response.json()
        console.log(result)
        localStorage.setItem("user-info", JSON.stringify(response))
    }

      async function verifyOTP() {
        // console.log(formData);
        const otpLoad = {
            email: formData.email,
            otp:formData.otp,
            }
        const response = await fetch("https://reic.api.simpoo.biz/api/verify-otp", {
            method:'POST',
            body:JSON.stringify(otpLoad),
            headers: {
                "Content-type" : "application/json"
            }
        })
        const result = await response.json()
        console.log(result)
        console.log(otpLoad);
        localStorage.setItem("user-info", JSON.stringify(response))
    }

    async function create() {
        // console.log(formData);
        const setupLoad = {
            name: formData.name,
            phone:formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            dob: formData.dob,
            }
        const response = await fetch("https://reic-app.com/api/investor/setup", {
            method:'POST',
            body:JSON.stringify(setupLoad),
            headers: {
                "Content-type" : "application/json"
            }
        })
        const result = await response.json()
        console.log(result)
        localStorage.setItem("user-info", JSON.stringify(response))
    }

    const FormTitles = ["UserDetails", "Verification", "Setup"];

    const PageView = () => {
        if (step === 0) {
            return <UserDetails formData={formData} setFormData={setFormData} signup={signup} />;
        } else if (step === 1) {
            return <Verification formData={formData} setFormData={setFormData}/>
        } else {
            return <Setup formData={formData} setFormData={setFormData}/>
        }
    }
    return (
        <div className="font-family">
            <Tab />
            <div className="lg:flex justify-between">
                <div className="lg:px-24 md:px-24 px-10 lg:pt-20 pt-14 pb-24 w-full lg:w-1/2">
                    {PageView()}
                    <div className="lg:w-80 mb-16">
                        <button type="submit" className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium"
                        id="button"
                        onClick={() => {
                            if(step === FormTitles.length -1) {
                                create()
                            } else if (step === FormTitles.length -2 ){
                                verifyOTP();
                                console.log('OTP verified');
                                setStep((currentPage) => currentPage + 1)
                            } else {
                                signup();
                                setStep((currentPage) => currentPage + 1)
                            }
                        }}>
                            {step === FormTitles.length -1 ? "Create Account" : "Next"}
                        </button>
                    </div>
                    <div></div>
                </div>
                <div className=" bg-[url('../src/assets/images/build.jpeg')] bg-black lg:w-1/2 relative bg-cover bg-center build hidden lg:block">
                    {/* <img src={bg} className=" w-full h-full object-cover absolute"/>     */}
                </div>
            </div>
        </div>
    );
}

export default Auth;