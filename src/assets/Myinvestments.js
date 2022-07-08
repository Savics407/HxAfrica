import invest from './images/invests.png'
import invest1 from './images/invest1.png'
import invest2 from './images/invest2.png'
import { useState } from 'react'
import Details from './Investment_Details'




function Myinvests() {
    const [openDetails, setOpenDetails] = useState(false)

    return(
        <>
            {openDetails && <Details className="z-10" closeDetails={setOpenDetails}/>}

            <div className='rounded-lg bg-white my-5 pb-4'>
                        <div className='border-b border-stroke px-10 py-5 text-lg font-medium flex justify-between items-center cursor-pointer'>
                            <h1>My Investments</h1>
                            <h1 className='text-dark text-xs font-normal'>View all</h1>
                        </div>
                        <div className='pt-8 px-2'>
                            <div className='p-2 bg-welcome flex items-center justify-between rounded-lg mb-4'>
                                <div className='flex items-center'>
                                    <div className='mr-5'>
                                        <img src={invest}  alt="investment-icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-dark font-medium text-base'>Investment 1</h1>
                                        <p className='text-xs text-green'>Software</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-links text-xs font-normal'>See details</h1>
                                </div>
                            </div>

                            <div className='p-2 bg-welcome flex items-center justify-between rounded-lg mb-4'>
                                <div className='flex items-center'>
                                    <div className='mr-5'>
                                        <img src={invest1}  alt="investment-icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-dark font-medium text-base'>Crowdfunding</h1>
                                        <p className='text-xs text-green'>Software</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-links text-xs font-normal cursor-pointer' 
                                        onClick={() => {
                                            setOpenDetails(true)
                                        }}>
                                            See details
                                    </h1>
                                </div>
                            </div>

                            <div className='p-2 bg-welcome flex items-center justify-between rounded-lg mb-4'>
                                <div className='flex items-center'>
                                    <div className='mr-5'>
                                        <img src={invest}  alt="investment-icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-dark font-medium text-base'>Investment 1</h1>
                                        <p className='text-xs text-green'>Software</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-links text-xs font-normal'>See details</h1>
                                </div>
                            </div>

                            <div className='p-2 bg-welcome flex items-center justify-between rounded-lg mb-4'>
                                <div className='flex items-center'>
                                    <div className='mr-5'>
                                        <img src={invest1}  alt="investment-icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-dark font-medium text-base'>Raw Land</h1>
                                        <p className='text-xs text-green'>Software</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-links text-xs font-normal'>See details</h1>
                                </div>
                            </div>

                            <div className='p-2 bg-welcome flex items-center justify-between rounded-lg'>
                                <div className='flex items-center'>
                                    <div className='mr-5'>
                                        <img src={invest2}  alt="investment-icon" />
                                    </div>
                                    <div>
                                        <h1 className='text-dark font-medium text-base'>Investment 1</h1>
                                        <p className='text-xs text-green'>Software</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-links text-xs font-normal'>See details</h1>
                                </div>
                            </div>
                        </div>
             </div>
        </>
    )
}

export default Myinvests