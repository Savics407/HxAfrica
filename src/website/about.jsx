import React, { useState } from 'react'
import Footer from './footer'
import Header from './header'
import longArrow from "./../assets/images/longArrowWhite.svg";
import highEntry from "./../assets/images/highEntry.svg";
import illiquidity from "./../assets/images/illiquidity.svg";
import group from "./../assets/images/groupPic.svg";
import access from "./../assets/images/accessTo.svg";
import Rotate from './rotate'

function About() {
    const [color, setColor] = useState("#fff")

    return (
        <div className='font-family bg-white'>
            <Header />
            <div className='bg-[#111920] text-white overflow-hidden px-5 lg:px-0 py-20'>
                <div className='content flex justify-between relative items-center'>
                    <div className='lg:w-[60%] font-medium lg:text-4xl text-2xl lg:leading-[60px] mb-2'>
                        <h1>About Our Company</h1>
                        <h1 className='font-normal lg:text-2xl text-sm'>Get to know who we are</h1>
                    </div>
                    <div className='lg:w-[40%] w-[20%] absolute lg:relative -right-8 justify-center items-center flex'>
                        <div className="flex justify-center items-center">

                            <img src={longArrow} alt="arrow" className="absolute" />
                            <div className=" turn text-white">
                                <Rotate color={color} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#FDFDFD] lg:py-24 py-10'>
                <div className='content text-center px-5 lg:px-40'>
                    <h1 className='lg:text-6xl text-3xl font-normal mb-5 lg:mb-10'>About HXAFRICA</h1>
                    <h1 className='lg:text-2xl text-sm font-normal'>We have positioned to solve the perennial problems that plagues the real estate industry; With our block-chain powered technology, we are presenting lasting solutions to;</h1>
                </div>
            </div>

            <div>
                <div className="content lg:p-24 p-10">
                    <div className='flex flex-wrap justify-between'>
                        <div className='bg-[#373737] rounded-[60px] vector1 w-full lg:w-[293px] mb-5 h-[287px] py-7 px-9 flex flex-col justify-between'>
                            <div>
                                <img src={highEntry} alt="High Entry Barrier" />

                            </div>
                            <h1 className='text-white font-normal text-2xl'>High Entry Barrier</h1>

                        </div>

                        <div className='bg-[#B5E2C9] rounded-[60px] vector2 w-full lg:w-[293px] mb-5 h-[287px] py-7 px-9 flex flex-col justify-between'>
                            <div>
                                <img src={illiquidity} alt="Illiquidity" />

                            </div>
                            <h1 className=' font-normal text-2xl'>Illiquidity</h1>

                        </div>

                        <div className='bg-[#F7C0B5] rounded-[60px] vector3 w-full lg:w-[293px] mb-5 h-[287px] py-7 px-9 flex flex-col justify-between'>
                            <div>
                                <img src={access} alt="Access to Finance" />

                            </div>
                            <h1 className=' font-normal text-2xl'>Access to Finance</h1>

                        </div>
                    </div>
                    <div className='text-[#1E1E1E] font-normal lg:text-2xl text-sm py-10 text-center'>
                        <h1 className='lg:mb-10 mb-5'>Our approach opens up the industry for the low-to-middle income earners to participate in the real estate industry</h1>
                        <h1>What we have built is a real estate community.</h1>
                    </div>
                </div>
               
            </div>
            <div className="bg-[#6060D8] py-20 relative apple">
                <div className="content xl:pl-10 px-5">
                    <div className="flex flex-wrap items-center justify-between">
                        <h1 className="font-normal text-[#F8FFF9] text-4xl mb-14 lg:hidden">It is more exciting with you</h1>
                        <div className="lg:w-1/2 w-full lg:pr-20 mb-10 lg:mb-0">
                            <img src={group} alt="group" />
                        </div>
                        <div className="lg:w-1/2 w-full flex items-center justify-center">
                            <div className="rounded-xl lg:p-5">
                                <h1 className="font-normal text-[#F8FFF9] leading-[70px] text-6xl mb-14 hidden lg:block">It is more exciting with you</h1>
                                <div className="font-inter font-normal mb-2 flex flex-col">

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="p-5 rounded-lg font-normal text-sm mb-4 outline-none"
                                    />
                                    <input
                                        type="submit"
                                        value="Register Now"
                                        className="p-3 rounded-full text-lg font-normal bg-green text-white"
                                    />
                                    <h1 className="text-white font-normal text-[10px] font-segoe text-center py-5">By using this website you agree to our <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default About