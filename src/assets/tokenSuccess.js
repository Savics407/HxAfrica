import { motion} from "framer-motion"
import React from 'react'

function tokenSuccess({tokenOnClose}) {
  return (
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
                        className='w-128 bg-white fixed inset-x-1/3 bottom-1/3 rounded-xl border-green p-12 text-center z-50'>
                        <div>
                            <h1 className='font-bold text-neutral text-3xl'>Success!</h1>
                        </div>
                        <div className='font-medium text-base text-neutral my-8'>
                            <p>You successfully made a payment of <span className='text-green'>N50,000</span> to purchase REIC Token</p>
                        </div>
                        <div className='text-neutral text-xs text-center'>
                            <span>Redirecting...</span>
                        </div>
                    </motion.div>
 
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
                className=' fixed top-0 right-0 bottom-0 left-0 bg-overlay z-30 cursor-pointer' onClick={() => {
                                    tokenOnClose  (false)
                                }}>
                    
        </motion.div>
    </>
  )
}

export default tokenSuccess