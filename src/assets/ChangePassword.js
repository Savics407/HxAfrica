import Header from './Header'
import { motion} from "framer-motion"
import Protabs from './Protabs';


function ChangePassword() {
    return (
        <div className='font-family bg-mainbg'>
            <Header />
            
            <div className='w-10/12 m-auto mt-20 bg-white rounded-lg py-8 px-10'>
                
               <motion.div 
                    initial = {{
                        scale: 0
                    }}
                    animate = {{
                        scale: 1,
                        transition: {
                           duration: 0.5
                        }
                    }}
                    exit = {{
                        scale: 0,
                        transition: {
                        delay: 0.5
                       }
                    }}
                    className='bg-white rounded-xl'>
                    <div className='py-10 font-semibold flex justify-between items-center text-modal text-2xl'>
                        <h1>Profile Details</h1> 
                    </div>
                    <Protabs />
                    <div className='my-16 flex items-end'>
                        <div className='w-1/2 pr-10'>
                            <div className="input relative mb-5">
                                <label>OLD PASSWORD</label>
                                <input
                                    required
                                    type="password"
                                    placeholder="enter old password"
                                    className="box"
                                    id="confirm"
                                />
                            </div>
                            <div className="input relative">
                                <label>NEW PASSWORD</label>
                                <input
                                    required
                                    type="password"
                                    placeholder="enter new password"
                                    className="box"
                                    id="confirm"
                                />
                            </div>
                        </div>
                        <div className='w-1/2 pl-10'>
                            <div className="input relative">
                                <label>CONFIRM NEW PASSWORD</label>
                                <input
                                    required
                                    type="password"
                                    placeholder="confirm password"
                                    className="box"
                                    id="confirm"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='font-family mb-12'>
                        <button className='rounded-full bg-green text-dashbg font-medium text-sm py-3 px-12'>Update</button>
                    </div>
                    
                </motion.div>
                
            </div>
            <div className='mt-6 pb-10 text-center'>
                <h1 className='text-base font-semibold text-footer'>© 2022 REIC. All rights reserved.</h1>
            </div>
        </div>
    )
}

export default ChangePassword;