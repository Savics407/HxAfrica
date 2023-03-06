import React from 'react'
import Footer from './footer'
import Header from './header'
import { AiOutlineArrowRight } from "react-icons/ai";
import services from "./../assets/images/services.svg";
import realtors from './../assets/images/realtors first.png'
import RayneRise from './../assets/images/RayneRise.png'
import imagineering from './../assets/images/imagineering.png'
import cloverhedera from './../assets/images/cloverhedera.png'
// import




function Services() {
    return (
        <div className='font-family bg-white'>
            <Header />

            <div className="py-10 lg:px-36 px-5 " id="service">
                <div className="content">
                    <div className='flex items-center'>
                        <img src={services} alt='serviceIcon' />
                        <h1 className="text-[#343C44] text-2xl font-medium ml-3">
                            Our Services{" "}
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-between py-10 text-white">
                        <div className="rounded-2xl w-full lg:w-[24%] mb-5">
                            <div className='h-[153px]'>
                                <img src={realtors} alt="realtors" className='w-full h-full object-cover' />
                            </div>
                            <div className="text-[#1E1E1E]">
                                <h1 className="font-bold font-roboto text-xl lg:text-4xl my-3">
                                    Realtors First
                                </h1>
                                <h1 className="font-normal text-xs lg:text-xl mb-4">
                                    Connecting Real Estate Buyers with Sellers
                                </h1>
                                
                            </div>
                            <a href="https://realtorsfirst.com" target="_blank">
                                <button className="flex px-3 lg:px-7 my-7 py-3 font-inter bg-[#1E1E1E] items-center rounded-full text-xs lg:text-base">
                                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                                </button>
                            </a>
                        </div>
                        <div className="rounded-2xl w-full lg:w-[24%] mb-5">
                            <div className='h-[153px]'>
                                <img src={cloverhedera} alt="cloverhedera" className='w-full h-full object-cover' />
                            </div>
                            <div className="text-[#1E1E1E]">
                                <h1 className="font-bold font-roboto text-xl lg:text-4xl my-3">
                                    Cloverhedera
                                </h1>
                                <h1 className="font-normal text-xs lg:text-xl mb-4">
                                    Real Estate Consultancy Company
                                </h1>

                            </div>
                            <a href="https://cloverhedera.com.ng" target="_blank">
                                <button className="flex px-3 lg:px-7 my-7 py-3 font-inter bg-[#1E1E1E] items-center rounded-full text-xs lg:text-base">
                                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                                </button>
                            </a>
                        </div>
                        <div className="rounded-2xl w-full lg:w-[24%] mb-5">
                            <div className='h-[153px]'>
                                <img src={RayneRise} alt="RayneRise" className='w-full h-full object-cover' />
                            </div>
                            <div className="text-[#1E1E1E]">
                                <h1 className="font-bold font-roboto text-xl lg:text-4xl my-3">
                                    RayneRise
                                </h1>
                                <h1 className="font-normal text-xs lg:text-xl mb-4">
                                    Unmatched Advertisng Services
                                </h1>

                            </div>
                            <a href="https://raynerise.com" target="_blank">
                                <button className="flex px-3 lg:px-7 my-7 py-3 font-inter bg-[#1E1E1E] items-center rounded-full text-xs lg:text-base">
                                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                                </button>
                            </a>
                        </div>
                        <div className="rounded-2xl w-full lg:w-[24%] mb-5">
                            <div className='h-[153px]'>
                                <img src={imagineering} alt="imagineering" className='w-full h-full object-cover' />
                            </div>
                            <div className="text-[#1E1E1E]">
                                <h1 className="font-bold font-roboto text-xl lg:text-4xl my-3">
                                    Imagineering
                                </h1>
                                <h1 className="font-normal text-xs lg:text-xl mb-4">
                                    Engineering Imaginations
                                </h1>

                            </div>
                            <a href="https://Imagineering.ng" target="_blank">
                                <button className="flex px-3 lg:px-7 my-7 py-3 font-inter bg-[#1E1E1E] items-center rounded-full text-xs lg:text-base">
                                    Visit Website <AiOutlineArrowRight className="ml-2" />{" "}
                                </button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services