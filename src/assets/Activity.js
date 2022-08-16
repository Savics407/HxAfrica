import Header from './Header'
import { motion } from "framer-motion"
import Protabs from './Protabs';
import opps from './images/Artwork.png'


function Activity() {
    return (
        <div className='font-family bg-mainbg'>
            <Header />

            <div className='w-10/12 m-auto mt-20 bg-white rounded-lg py-8 px-10'>

                <div
                    className='bg-white rounded-xl'>
                    <div className='py-10 font-semibold flex justify-between items-center text-modal text-2xl'>
                        <h1>Profile Details</h1>
                    </div>
                    <Protabs />
                    <div className='my-16 flex items-center justify-center '>
                        <div className='text-center my-10'>
                            <img src={opps} alt="Opps Nothing new here" />
                            <h1 className='font-semibold text-lg text-footer'>Opps Nothing new here</h1>
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

export default Activity;