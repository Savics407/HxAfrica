import invest_icon from './images/investment.png'
import crowd from './images/crowd.png'
import vest from './images/vest.png'
import raw from './images/rawland.png'
import land from './images/rawland2.png'
import users1 from './images/Frame 14.png'
import users2 from './images/Frame 18.png'
import users3 from './images/Frame 19.png'
import users4 from './images/Frame 20.png'
import { FaInfoCircle } from 'react-icons/fa'


function Investments() {
    return(
        <>
            <div className='rounded-lg bg-white my-5 pb-4'>
                        <div className='border-b border-stroke px-10 py-5 text-lg font-semibold flex justify-between items-center cursor-pointer'>
                            <h1>Investments</h1>
                            <h1 className='text-links text-xs font-normal'>View all investment</h1>
                        </div>
                        <div className='p-5 flex justify-between'>
                            <div className='p-4 bg-light-purple rounded-2xl w-80 mr-3'>
                                <div className='flex text-dark py-3'>
                                    <div className='mr-3'>
                                        <img src={invest_icon} alt="investment_icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-medium'>Tech Startups</h1>
                                        <h1 className='text-tiny font-medium'>New Investments</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-tiny font-normal'>Startup investors are essentially buying a piece of the company with their investment. Putting down capital, in exchange for equity</p>
                                </div>
                                <div>
                                    <button className='text-links text-sm font-medium pt-4 pb-2 cursor-pointer'>VIEW ALL</button>
                                </div>
                            </div>
                            <div className='p-4 bg-light-blue rounded-2xl w-80 mr-3'>
                                <div className='flex text-dark py-3'>
                                    <div className='mr-3'>
                                        <img src={crowd} alt="investment_icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-medium'>Crowdfunding</h1>
                                        <h1 className='text-tiny font-medium'>Ongoing Investments</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-tiny font-normal'>Startup investors are essentially buying a piece of the company with their investment. Putting down capital, in exchange for equity</p>
                                </div>
                                <div>
                                    <button className='text-links text-sm font-medium pt-4 pb-2 cursor-pointer'>VIEW ALL</button>
                                </div>
                            </div>
                            <div className='p-4 bg-light-orange rounded-2xl w-80'>
                                <div className='flex text-dark py-3'>
                                    <div className='mr-3'>
                                        <img src={vest} alt="investment_icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-medium'>Tech Startups</h1>
                                        <h1 className='text-tiny font-medium'>Completed Investments</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-tiny font-normal'>Startup investors are essentially buying a piece of the company with their investment. Putting down capital, in exchange for equity</p>
                                </div>
                                <div>
                                    <button className='text-links text-sm font-medium pt-4 pb-2 cursor-pointer'>VIEW ALL</button>
                                </div>
                            </div>
                        </div>
                        <div className='px-4 py-6 flex'>
                            <div className='section pr-4'>
                                <h1>Ongoing Investments</h1>
                                <div className='real-estate'>
                                    <div className='mr-1.5 w-1/3 h-full'>
                                        <img src={raw} alt="rawland" />
                                    </div>
                                    <div className='w-2/3'>
                                        <div className='mb-2'>
                                            <h1 className='!mb-0'>Raw Land - Real Estate</h1>
                                            <h2 className='text-pink text-xs'>30% Interest Rate</h2>
                                        </div> 
                                        <div className='text-tiny text-grayy mb-2'>
                                            <p className='!mb-0'>Time Frame: <span className='text-darkgray'>4 months</span></p>
                                            <p className=''>Expires - <span className='text-darkgray'>Dec 23, 2022</span></p>
                                        </div> 
                                        <div className='text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48'>
                                            <p className=''>Property Worth <span className='text-darkgray text-xs font-medium ml-2'>N200,000,000</span></p>
                                        </div>
                                        <div className='flex justify-between w-full'>
                                            <div className='flex items-center'>
                                                <img src={users1} alt="frame" className='z-0'/>
                                                <img src={users2} alt="frame" className='-ml-3 z-10' />
                                                <img src={users3} alt="frame" className='-ml-3 z-10' />
                                                <img src={users4} alt="frame" className='-ml-3 z-10' />
                                                <div className='bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10'>+24</div>
                                            </div>
                                            <div>
                                                <button className='bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl'>Join Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section'>
                                <h1>Completed Investments</h1>
                                <div className='real-estate'>
                                    <div className='mr-1.5 w-1/3'>
                                        <img src={land} alt="rawland" />
                                    </div>
                                    <div className='w-2/3'>
                                        <div className='mb-2'>
                                            <h1 className='!mb-0'>Raw Land - Real Estate</h1>
                                            <h2 className='text-green text-xs'>30% Interest Rate</h2>
                                        </div> 
                                        <div className='text-tiny text-grayy mb-3'>
                                            <p className='!mb-0'>Time Frame: <span className='text-darkgray'>4 months</span></p>
                                            <p className=''>Expires - <span className='text-darkgray'>Dec 23, 2022</span></p>
                                        </div> 
                                        <div className='text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-3 w-48'>
                                            <p className=''>Property Worth <span className='text-darkgray text-xs font-medium ml-2'>N200,000,000</span></p>
                                        </div>
                                        {/* <div className='flex justify-between w-full'>
                                            <div className='flex items-center'>
                                                <img src={users1} alt="frame" className='z-0'/>
                                                <img src={users2} alt="frame" className='-ml-3 z-10' />
                                                <img src={users3} alt="frame" className='-ml-3 z-10' />
                                                <img src={users4} alt="frame" className='-ml-3 z-10' />
                                                <div className='bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10'>+24</div>
                                            </div>
                                            <div>
                                                <button className='bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl'>Join Now</button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center p-4'>
                           <FaInfoCircle className='text-join text-sm mr-1'/> <h1 className='text-join text-sm'>Join the early investors and earn better</h1>
                        </div>
                    </div>
        </>
    )
}

export default Investments