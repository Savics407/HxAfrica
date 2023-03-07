import React from 'react'
import logoWhite from "./../assets/images/HXafrica Logo 1.svg";
import facebook from "./../assets/images/fb.svg";
import linkedIn from "./../assets/images/linkedIn.svg";
import instagram from "./../assets/images/instagram.svg";
import HxToken from "./../assets/images/HxToken.svg";
import Community from './community';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <Community />
            <div className="py-5 px-5 bg-[#9CFF6D] border-y border-[#111920]">
                <div className="content text-[#111920] text-center text-sm lg:text-lg ">

                    <h1>Looking to get notified on all our program?  <span className="font-semibold font-segoe underline">Click here</span></h1>
                </div>
            </div>
            <div className="bg-hxafrica lg:px-24 px-5 pt-20 pb-10">
                <div className="content">
                    <div className="flex flex-wrap">
                        <div className=" flex lg:block items-center justify-between w-full lg:w-1/2 mb-20 lg:mb-0 ">
                            <img src={logoWhite} alt="HXafrica" />
                            <div className="flex justify-between items-center lg:w-36 lg:pt-4">
                                <a
                                    href="https://www.facebook.com/housingexchange.ng?mibextid=ZbWKwL"
                                    target="_blank"
                                >
                                    <img src={facebook} alt="facebook" className='px-1.5' />
                                </a>
                                <img src={linkedIn} alt="LinkedIn" className='px-1.5' />
                                {/* <img src={whatsapp} alt="whatsapp" /> */}
                                <img src={instagram} alt="instagram" className='px-1.5' />
                            </div>
                        </div>
                        <div className=" lg:w-1/2 w-full flex flex-wrap lg:justify-between text-white">
                            <div className='mr-10 lg:mr-0'>
                                <h1 className="text-lightgreen font-bold text-lg mb-5">
                                    Product
                                </h1>
                                <div>
                                    <Link to="/login">
                                        <h1 className="font-normal mb-2 ">Hx</h1>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lightgreen font-bold text-lg mb-5">
                                    Services
                                </h1>
                                <div className="">
                                    <a href="https://realtorsfirst.com" target="_blank">
                                        <h1 className="font-normal mb-2 ">Realtors First</h1>{" "}
                                    </a>
                                    <a href="https://cloverhedera.com.ng " target="_blank">
                                        <h1 className="font-normal mb-2 ">Cloverhedera</h1>
                                    </a>
                                    <a href="https://raynerise.com" target="_blank">
                                        <h1 className="font-normal mb-2 ">RayneRise</h1>
                                    </a>
                                    <a href="https://Imagineering.ng" target="_blank">
                                        <h1 className="font-normal mb-2 ">Imagineering</h1>
                                    </a>
                                </div>
                            </div>
                            <div className="my-10 lg:my-0">
                                <h1 className="text-lightgreen font-bold text-lg mb-5">
                                    About Us
                                </h1>
                                <div className="">
                                    <Link to="/about">
                                        <h1 className="font-normal mb-2 ">About the company</h1>
                                    </Link>
                                    <Link to="/team">
                                        <h1 className="font-normal mb-2 ">The Management team</h1>{" "}
                                    </Link>
                                    <Link to="/team">
                                        <h1 className="font-normal mb-2 ">
                                            The Board of directors/ advisors <br />
                                            With HXafrica
                                        </h1>
                                    </Link>
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
    )
}

export default Footer