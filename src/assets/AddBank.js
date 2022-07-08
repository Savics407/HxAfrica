import { MdClose } from 'react-icons/md'
import reictoken from './images/Reic_Token.png'
import { motion} from "framer-motion"
import { useState } from 'react'
// import { TbLoader } from 'react-icons/tb'

function AddBank({ closeToken }) {
    // const [authPullOut, setAuthPullOut] = useState(false)
    const [isClick, setIsClick] = useState(0);
    // // const [details, setDetails] = useState(true)
    

    return(
        <>
            <motion.div 
                initial = {{
                    opacity: 0
                }}
                animate = {{
                    opacity: 1,
                    transition: {
                        duration: 0.5
                    }
                }}
                exit = {{
                    opacity: 0,
                    transition: {
                        delay: 0.5
                    }
                }}
                className='flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay z-50'
                // onClick={() => {
                //         closeDetails(false)
                //     }}
                >
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
                    className='bg-white rounded-xl border w-1/2'>
                    <div className='border-b border-stroke uppercase px-10 py-5 text-2xl font-semibold flex justify-between items-center text-modal'>
                            <h1 className='font-iter'>Add Bank</h1>
                            <MdClose className='cursor-pointer'
                                onClick={() => {
                                    closeToken  (false)
                                }}
                            />
                    </div>
                   
                    <div className='py-4 px-10'>
                        <div className="input mb-4">
                            <label className="text-footer text-base font-normal">Account Name</label>
                            <input
                                required
                                type="email"
                                placeholder="enter account name"
                                className="box"
                            />
                        </div>
                        <div className="input">
                            <label className="text-footer text-base font-normal">Account Number</label>
                            <input
                                required
                                type="number"
                                placeholder="enter account number"
                                className="box"
                            />
                        </div>
                       
                        <div className='pt-5 pb-9'>
                            <p className='text-payment text-base font-normal mb-2.5 flex justify-between'>
                                <span>Amount</span> <span className='text-green font-medium'>Available Amount: N500,000</span></p>
                            <div className='text-nuetral font-bold text-lg flex justify-center py-6 rounded-lg bg-mainbg relative'>
                                <input 
                                    type="number" 
                                    placeholder="enter amount" 
                                    className="text-neutral font-bold text-4xl text-center bg-transparent outline-0"
                                    // value="50,000"
                                />
                            </div>
                            <div className='flex justify-center mt-6'>
                                <button className='py-2 rounded-full text-sm font-bold text-dashbg bg-neutral px-6'>N50,000</button>
                                <button className='border-2 border-more py-2 rounded-full text-sm font-bold text-footer px-6 mx-5 hover:bg-neutral hover:text-dashbg hover:border-neutral duration-300'>N100,000</button>
                                <button className='border-2 border-more py-2 rounded-full text-sm font-bold text-footer px-6 hover:bg-neutral hover:text-dashbg hover:border-neutral duration-300'>N200,000</button>
                            </div>
                        </div>
                        
                        <div className='text-right pb-3 flex justify-between items-center'>
                            <div className=" flex items-center">
                                <input
                                    required
                                    type="checkbox"
                                    className="border mr-2 checked:bg-green"
                                    value="1"
                                />
                                <p className="text-sm text-footer font-medium">
                                    Save as default bank
                                </p>
                            </div>
                            <button className='rounded-full w-44 h-12 text-dashbg bg-green'
                                onClick={() => {
                                    // setAuthPullOut(true)
                                    // setIsClick(!isClick)
                                }}>Continue</button>
                        </div>
                    </div>

                </motion.div>
                {/* {authPullOut && <Warning closeWarning={setIsClick} />} */}
                {/* <Success /> */}
            </motion.div>
            {/* <div className="fixed top-0 right-0 bottom-0 left-0 bg-overlay -z-10"></div> */}

        </>
    )
}

export default AddBank;