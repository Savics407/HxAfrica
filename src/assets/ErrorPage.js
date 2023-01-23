import React from 'react'
import logo from "./images/HXafrica Logo.svg";
import logoWhite from "./images/HXafrica Logo 1.svg";

import facebook from "./images/fb.svg";
import twitter from "./images/twitter.svg";
import phone from "./images/phone.svg";
import mail from "./images/mail.svg";
import whatsapp from "./images/whatsapp.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';

function ErrorPage() {
    // const error = useRouteError();
    // console.error(error);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >


            <div className="font-family bg-white">
                <div className="bg-green text-white lg:py-2 p-3 text-center ">
                    <h1 className="font-normal mb-2 lg:text-base text-sm ">
                        Be among the first to know when we launch!
                    </h1>
                </div>
                <div className="bg-white py-5 px-5">
                    <div className="content">
                        <div className=" flex justify-between items-center">
                            <Link to="/">
                                <div className="w-[130px] lg:w-auto">
                                    <img src={logo} alt="HXAfrica Logo" />
                                </div>
                            </Link>
                            <div
                                className={`justify-between items-center lg:w-1/2 !block bg-white fixed top-0 -left-full lg:left-auto bottom-0 w-full transition-all duration-1000 lg:!relative lg:!flex ${isOpen && "!left-0 z-30 transform"
                                    }`}
                            >
                                <div className="lg:hidden flex justify-between items-center px-5 py-10">
                                    <div className="w-[130px] lg:w-auto">
                                        <img src={logo} alt="HXAfrica Logo" />
                                    </div>
                                    <div
                                        className="lg:hidden  p-2 text-2xl "
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <CgClose />
                                    </div>
                                </div>

                                <div
                                    className={`flex lg:flex-row h-[200px] lg:h-auto justify-around flex-col ${isOpen && "px-1"
                                        }`}
                                >
                                    <h1 className="px-4">Home</h1>
                                    <a href="#about" onClick={() => setIsOpen(false)}>
                                        <h1 className="px-4">About us</h1>{" "}
                                    </a>
                                    <a href="#products" onClick={() => setIsOpen(false)}>
                                        <h1 className="px-4">Products</h1>{" "}
                                    </a>
                                    <a href="#service" onClick={() => setIsOpen(false)}>
                                        <h1 className="px-4">Service</h1>
                                    </a>
                                </div>
                                <div className={`${isOpen && "p-5"} p-5 lg:p-0`}>
                                    <button className="border border-green font-inter capitalize text-green rounded-lg px-5 py-3 hover:bg-green hover:text-white transition">
                                        Contact us
                                    </button>
                                </div>
                            </div>
                            <div
                                className="lg:hidden p-2 text-2xl"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <CgMenuRight />
                            </div>
                        </div>
                    </div>
                </div>






                <div className="bg-white lg:px-48 px-10 py-20 relative ">
                    <div className="content">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="lg:w-1/2 w-full lg:pr-20 mb-10 lg:mb-0">
                                <h1 className="font-bold text-4xl lg:text-5xl font-roboto text-black mb-4">
                                    {" "}
                                    <h1>Oops!</h1>


                                </h1>

                                <h1 className="font-normal mb-2 text-xl lg:text-2xl text-banner">
                                    <p>Sorry, an unexpected error has occurred.</p>
                                    <p>
                                        {/* <i>{error.statusText || error.message}</i> */}
                                    </p>
                                </h1>
                            </div>
                            <div className="lg:w-1/2 w-full flex items-center justify-center">
                                <div className="rounded-xl  w-[100%] p-5 lg:p-10 lg:w-128 ">
                                    <h1 className="font-bold text-2xl mb-8">You can still Login </h1>
                                    <Link to="/login">

                                        <div className="font-inter font-normal mb-2 flex flex-col">
                                            <button
                                                className="p-3 rounded-lg bg-green text-white"
                                            >

                                                Login Now
                                            </button>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="bg-hxafrica lg:px-24 px-10 pt-20 pb-10">
                    <div className="content">
                        <div className="flex flex-wrap">
                            <div className=" w-full lg:w-1/2 mb-10 lg:mb-0">
                                <img src={logoWhite} alt="HXafrica" />
                                <div className="flex justify-between w-60 pt-4">
                                    <img src={facebook} alt="facebook" />
                                    <img src={twitter} alt="twitter" />
                                    <img src={whatsapp} alt="whatsapp" />
                                    <img src={phone} alt="phone" />
                                    <img src={mail} alt="mail" />
                                </div>
                            </div>
                            <div className=" lg:w-1/2 w-full flex flex-wrap justify-between text-white">
                                <div>
                                    <h1 className="text-lightgreen font-bold text-lg mb-5">
                                        Product
                                    </h1>
                                    <div>
                                        <h1 className="font-normal mb-2 ">REICo</h1>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-lightgreen font-bold text-lg mb-5">
                                        Services
                                    </h1>
                                    <div className="">
                                        <h1 className="font-normal mb-2 ">Realtors First</h1>
                                        <h1 className="font-normal mb-2 ">Cloverhedera</h1>
                                        <h1 className="font-normal mb-2 ">RayneRise</h1>
                                        <h1 className="font-normal mb-2 ">Imagineering</h1>
                                    </div>
                                </div>
                                <div className="my-10 lg:my-0">
                                    <h1 className="text-lightgreen font-bold text-lg mb-5">
                                        About Us
                                    </h1>
                                    <div className="">
                                        <h1 className="font-normal mb-2 ">About the company</h1>
                                        <h1 className="font-normal mb-2 ">The Management team</h1>
                                        <h1 className="font-normal mb-2 ">
                                            The Board of directors/ advisors
                                        </h1>
                                        <h1 className="font-normal mb-2 ">With HXafrica</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-copyright py-2.5 mt-16 text-center text-white text-sm lg:text-base">
                            <h1>
                                © 2022 Housing Exchange - HX Africa. <br className="lg:hidden" />
                                All rights reserved.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ErrorPage