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
            <div className="bg-primary text-center text-green p-4 flex items-center">
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
        phoneNumber: "",
        password : "",
        confirmPassword: "",
        OTPCode: "0",
        FullName: " ",
        state: " ",
        city: " ",
        address: " ",
        dateOfBirth: "",
        annualIncome: "",
    })

    const FormTitles = ["User Details", "Verification", "Setup"];

    const PageView = () => {
        if (step === 0) {
            return <UserDetails formData={formData} setFormData={setFormData} />;
        } else if (step === 1) {
            return <Verification formData={formData} setFormData={setFormData}/>
        } else {
            return <Setup formData={formData} setFormData={setFormData}/>
        }
    }
    return (
        <div className="font-family">
            <Tab />
            <div className="flex justify-between">
                <div className="px-24 pt-20 pb-5 w-1/2">
                    {/* <h1>{FormTitles[step]}</h1> */}
                    {/* <UserDetails /> */}
                    {/* <Verification />     */}
                    {/* <Setup /> */}
                    {PageView()}
                    {/* <button disabled={step == 0 } 
                    onClick={() => {
                        setStep((currentPage) => currentPage - 1)
                    }} className="border ml-2 p-1 bg-blue-400">Prev</button> */}
                <div className="w-80">
                    <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium"
                    onClick={() => {
                        if(step === FormTitles.length -1) {
                            alert("Form Submitted");
                            console.log(formData);
                        } else {
                            setStep((currentPage) => currentPage + 1)
                        }
                    }}>
                        {step=== FormTitles.length -1 ? "Create Account" : "Next"}
                    </button>
                </div>
                    
                </div>
                <div className=" bg-[url('../src/assets/images/build.jpeg')] bg-black w-1/2 relative bg-cover bg-center build">
                    {/* <img src={bg} className=" w-full h-full object-cover absolute"/>     */}
                </div>
            </div>
        </div>
    );
}

export default Auth;