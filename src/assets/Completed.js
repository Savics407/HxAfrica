    import React from 'react'
    import Header from './Header'
    import InvestTabs from './InvestTabs'
    import banner from './images/banner.png'

    function Completed() {
    return (
        <div className='font-family bg-mainbg'>
            <Header />
                <div className='w-10/12 m-auto mt-20 bg-dashbg rounded-lg py-8 px-4'>
                    <div className='bg-white p-10 w-full rounded-lg'>
                        <div className='mb-10'>
                            <h1 className='text-modal text-2xl font-semibold'>Investments</h1>
                        </div>
                        <div>
                            <img src={banner} alt="Buy_REIC_Token" className='w-full'/>
                        </div>
                        <InvestTabs />
                        <div className='mb-8'>
                            <div className='bg-dashbg w-full px-5 py-1 flex justify-between my-8'>
                                <div className='text-head font-semibold text-sm table'><h1>Investments</h1></div>
                                <div className='text-head font-semibold text-sm table'><h1>Duration</h1></div>
                                <div className='text-head font-semibold text-sm table'><h1>Property Worth</h1></div>
                                <div className='text-head font-semibold text-sm table'><h1>Amount Invested</h1></div>
                                <div className='text-head font-semibold text-sm table'><h1>Amount Gained</h1></div>
                                <div className='text-head font-semibold text-sm table text-center'><h1>Status</h1></div>
                            </div>
                            <div className='w-full flex justify-between px-5 border-b py-8 border-statusborder'>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>Investments</h1><h2 className='font-medium font-xs'>Real-Estate</h2>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>4 Months</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N200,000,000</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1><h2 className='font-medium font-xs'>100% Interest</h2>
                                </div>
                                <div className='table text-right'>
                                    <button className='bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium'>Claimed</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between px-5 border-b py-8 border-statusborder'>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>Investments</h1><h2 className='font-medium font-xs'>Real-Estate</h2>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>4 Months</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N200,000,000</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1><h2 className='font-medium font-xs'>100% Interest</h2>
                                </div>
                                <div className='table text-right'>
                                    <button className='bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium'>Claimed</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between px-5 border-b py-8 border-statusborder'>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>Investments</h1><h2 className='font-medium font-xs'>Real-Estate</h2>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>4 Months</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N200,000,000</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1><h2 className='font-medium font-xs'>100% Interest</h2>
                                </div>
                                <div className='table text-right'>
                                    <button className='bg-pending text-xs text-pendingtext w-28 h-9 rounded-full font-medium'>Not Claimed</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between px-5 border-b py-8 border-statusborder'>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>Investments</h1><h2 className='font-medium font-xs'>Real-Estate</h2>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>4 Months</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N200,000,000</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1><h2 className='font-medium font-xs'>100% Interest</h2>
                                </div>
                                <div className='table text-right'>
                                    <button className='bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium'>Claimed</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between px-5 border-b py-8 border-statusborder'>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>Investments</h1><h2 className='font-medium font-xs'>Real-Estate</h2>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>4 Months</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N200,000,000</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1><h2 className='font-medium font-xs'>100% Interest</h2>
                                </div>
                                <div className='table text-right'>
                                    <button className='bg-pending text-xs text-pendingtext w-28 h-9 rounded-full font-medium'>Not Claimed</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between px-5 border-b py-8 border-statusborder'>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>Investments</h1><h2 className='font-medium font-xs'>Real-Estate</h2>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>4 Months</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N200,000,000</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1><h2 className='font-medium font-xs'>100% Interest</h2>
                                </div>
                                <div className='table text-right'>
                                    <button className='bg-status text-xs text-statustext w-28 h-9 rounded-full font-medium'>Claimed</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between px-5 border-b py-8 border-statusborder'>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>Investments</h1><h2 className='font-medium font-xs'>Real-Estate</h2>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>4 Months</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N200,000,000</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1>
                                </div>
                                <div className='text-footer font-bold text-sm table'>
                                    <h1>N40,000.00</h1><h2 className='font-medium font-xs'>100% Interest</h2>
                                </div>
                                <div className='table text-right'>
                                    <button className='bg-pending text-xs text-pendingtext w-28 h-9 rounded-full font-medium'>Not Claimed</button>
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

    export default Completed