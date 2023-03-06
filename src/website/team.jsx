import React, { useState } from 'react'
import Footer from './footer'
import Header from './header'
import longArrow from "./../assets/images/longArrowWhite.svg";
import Rotate from './rotate'
import vector from "./../assets/images/Vector.svg";
import ceo from "./../assets/images/boards/Ugo Peters.png";
import gov from "./../assets/images/boards/Justice Emmanuel.png";
import prof from "./../assets/images/boards/Prof Ndubuisi Ekekwe.png";
import pascal from "./../assets/images/boards/paschal Okwundu.png";
import francis from "./../assets/images/boards/Mr. Francis Okumagba.png";
import sufian from "./../assets/images/boards/owolabi.jpeg";
import alhaji from "./../assets/images/boards/Alhaji Ibraheem Yelwa.png";
import amby from "./../assets/images/boards/Amby Uche.png";
import aca from "./../assets/images/boards/Chidinma Queen Alfred.png";
import linus from "./../assets/images/boards/Linus Caleb.png";
import Akinjide from "./../assets/images/boards/Akinjide Fagbemi.png";
import tayo from "./../assets/images/boards/Temitayo Gbadebo..png";
import Austin from "./../assets/images/boards/Austin Igwe.png";
import Adiukwu from "./../assets/images/boards/Chris Adiukwu.jpeg";


function Team() {
    const [color, setColor] = useState("#fff")

    return (
        <div className="font-family bg-white">
            <Header />

            <div className='bg-[#111920] text-white py-20'>
                <div className='content flex justify-between items-center'>
                    <div className='w-[60%] font-medium text-4xl leading-[60px]'>
                        <h1>HXAFRICA is managed by an amazing group of professionals.</h1>
                    </div>
                    <div className='w-[40%] justify-center items-center flex'>
                        <div className="flex justify-center items-center">

                            <img src={longArrow} alt="arrow" className="absolute" />
                            <div className=" turn text-white">
                                <Rotate color={color} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white py-16 px-5 lg:px-32" id="board">
                    <div className="content">
                        <div className="flex flex-col items-center font-roboto">
                            <h1 className=" font-normal text-[#111920] text-4xl mb-3 text-center">
                                Meet Our Board Of <br /> Directors/Advisors
                            </h1>
                            
                        </div>
                        <div className="py-10 flex flex-wrap justify-around">
                            
                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={gov}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">
                                    Justice Emmanuel Fagbenle (rtd)
                                </h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Chairman - Corporate Governance/Legal Advisory
                                </h1>
                            </div>
                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={sufian}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg">Mr Sufian Owolabi Abdulkarim</h1>
                                <h1 className="font-normal mb-2 text-green">SEC Advisor</h1>
                            </div>

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={prof}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Prof Ndubuisi Ekekwe</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Technical & Entrepreneurship Advisory
                                </h1>
                            </div>

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={pascal}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Paschal Okwundu</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Growth-Hacking Advisory
                                </h1>
                            </div>

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={alhaji}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Alhaji Ibraheem Yelwa</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Finance (Microfinance & Compliance)
                                </h1>
                            </div>

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={francis}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Mr. Francis Okumagba</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Finance (SEC & Banking) and Business Development Advisory
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-16 lg:px-32 px-5" id="management">
                    <div className="content">
                        <div className="flex flex-col items-center font-roboto">
                            <h1 className=" font-normal text-[#111920] text-4xl mb-3 text-center">
                                Meet Our <br /> Management Team 
                            </h1>
                        </div>
                        <div className="py-10 flex flex-wrap justify-around">
                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={ceo}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Ugo Peters</h1>
                                <h1 className="font-normal mb-2 text-green text-center">CEO</h1>
                            </div>
                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={Austin}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Austin Igwe</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Go-to-Market Advisory
                                </h1>
                            </div>
                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={Akinjide}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Akinjide Fagbemi</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Real Estate Operations
                                </h1>
                            </div>
                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={Adiukwu}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Chris Adiukwu</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    GM Hx Cooperative
                                </h1>
                            </div>

                            

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={amby}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Amby Uche</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Admin & Project Management
                                </h1>
                            </div>

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={linus}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Linus Caleb</h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Brand & Web Consultant
                                </h1>
                            </div>

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={tayo}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">Temitayo Gbadebo</h1>
                                <h1 className="font-normal mb-2 text-green text-center">CTO</h1>
                            </div>

                            <div className="flex flex-col items-center w-full border lg:w-2/6 rounded-3xl p-7 mb-10">
                                <div className="border-5 mb-3 w-44 h-44 rounded-full bg-white">
                                    <img
                                        src={aca}
                                        alt="Board of Directors"
                                        className="w-full h-full object-cover rounded-full bg-white"
                                    />
                                </div>
                                <h1 className="text-lg text-center mb-3">
                                    Chidinma Queen Alfred, ACA
                                </h1>
                                <h1 className="font-normal mb-2 text-green text-center">
                                    Accountant
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Team