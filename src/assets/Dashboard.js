// import logo from "./images/polygon.png";
import { FaBell } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import user from "./images/user_icon.png"
import { BsGrid } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { TbClipboardList } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'
import { TbCoin } from 'react-icons/tb'
import { FiSettings } from 'react-icons/fi'
import dollar from './images/Vector.png'
import coin from './images/coin.png'
import reictoken from './images/Reic_Token.png'
import media from './images/media.png'
import invest_icon from './images/investment.png'




function Tab() {
    return (
        <>
            <div className="bg-green text-center text-white py-4 ">
                <div className='w-4/5 m-auto flex items-center justify-between hidden md:flex'>
                    <div className="bg-white w-48 h-12"></div>
                    <div className=" border-white flex items-center">
                        <div className="bg-white text-dark rounded-full px-3 py-2.5 relative" >
                            <FaBell className='w-4 h-5'/>
                            <div className='notify'></div>
                        </div>
                        <div className='flex items flex items-center  text-sm ml-6 mr-7'>
                            <h1 className="font-semibold mr-1">John Doe</h1>
                            <FaAngleDown />
                        </div>
                        <div className='relative'>
                        <img src={user} alt="User-Icon" />  
                            <div className='online'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Dashboard () {
    return (
        <div className='font-family bg-mainbg'>
            <Tab />
            <div className='bg-white px-64 border flex justify-between items-center text-navbar text-base font-semibold'>
                <div className='nav-items active'>
                    <BsGrid className='ds-icons'/>
                    <h1>Dashboard</h1>
                </div>
                <div className='nav-items'>
                    <BiTransfer className='ds-icons' />
                    <h1>Transaction</h1>
                </div>
                <div className='nav-items'>
                    <TbClipboardList className='ds-icons' />
                    <h1>KYC List</h1>
                </div>
                <div className='nav-items'>
                    <AiOutlineUser className='ds-icons' />
                    <h1>Investment</h1>
                </div>
                <div className='nav-items'>
                    <TbCoin className='ds-icons' />
                    <h1>Presales Stages & Prices</h1>
                </div>
                <div className='nav-items'>
                    <FiSettings className='ds-icons' />
                    <h1>Settings</h1>
                </div>
            </div>
            <div className='w-4/5 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4 flex'>
                <div className='w-4/6 pr-4'>
                    <div className='welcome bg-welcome p-10 rounded-lg border'>
                        <h1 className='text-green font-black text-2xl mb-3'>Hi, <span className='text-dark ml-2'>Philip Chris</span></h1>
                        <p className='font-normal text-lg text-dark'>You are welcome</p>
                    </div>
                    <div className='p-10 bg-white rounded-lg my-5'>
                        <div className='flex items-center'> 
                            <img src={reictoken} alt="REIC TOKEN" />
                            <h1 className='text-base text-token font-semibold ml-2'>REIC TOKEN</h1>
                        </div>
                        <div className='flex items-center mt-8 justify-between'> 
                            <div className='flex items-center justify-between '>
                                <h1 className='text-base font-medium mr-4 text-dark text-4xl'>20 REIC</h1>
                                <div className='flex items-center border rounded-full py-2.5 px-5'>
                                    <span className='mr-1'>REIC Coin</span>
                                    <FaAngleDown />
                                </div>
                            </div>
                            <div>
                                <button className='bg-green font-medium text-bases text-white rounded-full px-8 py-4'>Buy Token</button>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg bg-white'>
                        <div className='border-b border-stroke px-10 py-5 text-lg font-semibold'>
                            <h1>Incoming ROI</h1>
                        </div>
                        <div className='px-10 py-5 flex justify-between'>
                            <div className='w-3/5 py-10'>
                                <div className='flex justify-between '>
                                    <div className='income'>
                                        <h1>Return Duration</h1>
                                        <p>31 Days</p>
                                    </div>
                                    <div className='income'>
                                        <h1>Expected Date</h1>
                                        <p>Jul 23, 2022</p>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='income'>
                                        <h1>Expected Returns</h1>
                                        <p>53,000,000</p>
                                    </div>
                                    <div className='income'>
                                        <h1>Amount in Reic Token</h1>
                                        <p>10,600,000 REIC</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='w-2/5 p-4'>
                                <div className='bg-mainbg rounded-full w-48 h-48 m-auto flex items-center justify-around relative'>
                                    <div className='bg-white w-36 h-36 rounded-full flex items-center justify-center'>
                                        <h1 className='text-center text-sm font-semibold'>18 Day's left</h1>
                                    </div>   
                                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="192px" height="192px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#008E10"/>
                                            <stop offset="100%" stop-color="#008E10" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="95" cy="95" r="83" stroke-linecap="round" />
                                     </svg>                                 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg bg-white my-5'>
                        <div className='border-b border-stroke px-10 py-5 text-lg font-semibold flex justify-between items-center cursor-pointer'>
                            <h1>Investments</h1>
                            <h1 className='text-links text-xs font-normal'>View all investment</h1>
                        </div>
                        <div className='p-10 flex justify-between'>
                            <div className='p-4 bg-light-purple rounded-lg w-80'>
                                <div className='flex text-dark py-3'>
                                    <div className='mr-3'>
                                        <img src={invest_icon} alt="investment_icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-medium'>Tech Startups</h1>
                                        <h1 className='text-xs font-medium'>New Investments</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xs'>Startup investors are essentially buying a piece of the company with their investment. Putting down capital, in exchange for equity</p>
                                </div>
                                <div>
                                    <button className='text-links text-sm font-medium pt-4 pb-2 cursor-pointer'>VIEW ALL</button>
                                </div>
                            </div>
                            <div className=' p-4 border w-1/3'>
                                
                            </div>
                            <div className='p-4 border w-1/3'>
                                
                            </div>
                        </div>
                    </div>
                     {/* Let's do some coding thingy */}
                </div>
                {/* side panel */}
                <div className='w-4/12 px-2'>
                    <div className='bg-white p-8 rounded-lg flex'>
                        <div className='w-1/2 px-4 border-r border-light-blue '>
                            <img src={dollar} alt="dollar-icon" className='mb-4'/>
                            <p className='text-earnings font-medium text-xs mb-1'>Total Earnings Reic</p>
                            <h1 className='text-dark text-2xl font-semibold'>$200,000</h1>    
                        </div>
                        <div className='w-1/2 px-4'>
                            <img src={coin} alt="dollar-icon" className='mb-4'/>
                            <p className='text-earnings font-medium text-xs mb-1'>Total Earnings Reic</p>
                            <h1 className='text-dark text-2xl font-semibold'>$200,000</h1>    
                        </div>
                        
                    </div>
                    <div className='my-5 bg-white rounded-lg pt-4 pb-20 px-4'>
                        <img src={media} alt="media" className='w-full' />
                        <h1 className='bg-media p-1.5 rounded text-xs my-5 text-white w-fit text-center'>NEW INVESTMENTS</h1>
                        <p className='text-sm text-dark font-semibold'>Submit your watchlist and win USDT</p>
                    </div>
                </div>
               
            </div>
            <div>Another session</div>
        </div>
    )
}

export default Dashboard;