import React from 'react'
        // import logo from "./images/polygon.png";
import { FaAngleDown } from 'react-icons/fa'
import reictoken from './images/Reic_Token.png'
import Header from './Header'
import dollar from './images/Vector.png'
import coin from './images/coin.png'



function Token() {
  return (
    <div className='font-family'>
            <Header />
            
            <div className='w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4'>
                <div className='border'>
                    <div className='p-10 bg-white rounded-lg mb-5 flex'>
                        <div className='w-2/5'>
                            <div className='flex items-center'> 
                                <img src={reictoken} alt="REIC TOKEN" />
                                <h1 className='text-base text-token font-semibold ml-2'>REIC TOKEN</h1>
                            </div>
                            <div className='flex items-center mt-8 justify-between'> 
                                <div className='flex items-center justify-between '>
                                    <h1 className='font-medium mr-4 text-dark text-4xl'>20 REIC</h1>
                                    <div className='flex items-center border rounded-full py-2.5 px-5'>
                                        <span className='mr-1'>REIC Coin</span>
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='px-8 flex items-center justify-between w-3/5'>
                            <div className='w-1/2 px-4 border-l border-light-blue '>
                                <img src={dollar} alt="dollar-icon" className='mb-4 h-6 w-6'/>
                                <p className='text-earnings font-medium text-xs mb-1'>Total Earnings Reic</p>
                                <h1 className='text-dark text-2xl font-medium'>$200,000</h1>    
                            </div>
                            <div className='w-1/2 px-4'>
                                <img src={coin} alt="dollar-icon" className='mb-4 h-6 w-6'/>
                                <p className='text-earnings font-medium text-xs mb-1'>Total Earnings Reic</p>
                                <h1 className='text-dark text-2xl font-medium'>$200,000</h1>    
                            </div>
                            <div className='w-1/2 px-4'>
                                <img src={coin} alt="dollar-icon" className='mb-4 h-6 w-6'/>
                                <p className='text-earnings font-medium text-xs mb-1'>Total Earnings Reic</p>
                                <h1 className='text-dark text-2xl font-medium'>$200,000</h1>    
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className='mt-6 pb-10 text-center'>
                <h1 className='text-base font-semibold text-footer'>© 2022 REIC. All rights reserved.</h1>
            </div>
        </div>
  )
}

export default Token