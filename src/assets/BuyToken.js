import { MdClose } from 'react-icons/md'
import reictoken from './images/Reic_Token.png'
import { motion} from "framer-motion"
import { useState } from 'react'
import { PaystackButton } from "react-paystack"
import TokenSuccess from './tokenSuccess'

// import { TbLoader } from 'react-icons/tb'

function Details({closeToken }) {
    // const [authPullOut, setAuthPullOut] = useState(false)
    const [isCardPay, setIsCardPay] = useState(false);
    const publicKey = 'pk_test_5cfe987cedc5bbda3e2982583ad55bd3eeb1af0f'
  const email = 'usersmail@gmail.com'
  const [amount, setAmount] = useState(50000);
  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: "Pay with Card",
    // callback: (response) => {
    //     window.location = "https://reic-frontend.vercel.app/token" + response.reference;
    //     },
    onSuccess(){
        // closeToken(false)
        window.location = "/token"
        // window.location = "/dashboard"
        // tokenOnClose(true)
        // {<Success />}
    },
    //   alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("You are about to close the transaction"),
  }
    

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
                            <h1>Buy Token</h1>
                            <MdClose className='cursor-pointer'
                                onClick={() => {
                                    closeToken  (false)
                                }}
                            />
                    </div>
                    <div className='py-4 px-14'>
                        <div className='pb-4 flex items-center '>
                            <img src={reictoken} alt="my-investment-image" />
                            <div className='ml-4 flex items-center'>
                                <span className='text-tokentext text-2xl font-extra-bold mr-2'>1</span> 
                                <span className='text-token uppercase text-base font-semibold mr-2'> reic token</span> 
                                <span className='text-tokentext text-2xl font-semibold'> = N50,000</span>
                            </div>
                        </div>
                        
                        <div className='pt-5 pb-9'>
                            <p className='text-payment text-base font-normal mb-2.5'>Payment Method</p>
                            <div className='flex justify-between'>
                                <button 
                                    className='border-2 border-border rounded-lg w-72 h-12 mr-5 text-token text-base font-semibold hover:bg-green hover:text-dashbg duration-300' 
                                    onClick=
                                        {() => setIsCardPay(true)}>Card payment</button>
                                <button
                                    className='border-2 border-border rounded-lg w-72 h-12 text-token text-base font-semibold hover:bg-green hover:text-dashbg duration-300'>Bank Transfer</button>
                            </div>
                        </div>

                        <div className='pt-5 pb-9'>
                            <p className='text-payment text-base font-normal mb-2.5'>Amount</p>
                            <div className='text-nuetral font-bold text-lg flex justify-center py-6 rounded-lg bg-mainbg relative'>
                                <input 
                                    type="number" 
                                    placeholder="enter amount" 
                                    className="text-neutral font-bold text-4xl text-center bg-transparent outline-0"
                                    // value="50,000"
                                    onChange={e => setAmount(e.target.value)}
                                    defaultValue="50000"
                                />
                            </div>
                        </div>
                        <div className='text-right pt-5 pb-8 flex justify-between items-center'>
                            <div className=" flex items-center">
                                <input
                                    required
                                    type="checkbox"
                                    className="border mr-2 checked:bg-green"
                                    value="1"
                                />
                                <p className="text-sm text-footer font-medium">
                                    Save method as default
                                </p>
                            </div>
                            {/* <button className='rounded-full w-44 h-12 text-dashbg bg-green'
                                onClick={() => {
                                    // setAuthPullOut(true)
                                    // closeToken  (false)
                                    console.log(amount * 100);
                                    // setIsClick(!isClick)
                                }}>Continue</button> */}
                            {isCardPay ? <PaystackButton className="rounded-full w-44 h-12 text-dashbg bg-green" {...componentProps} /> : <span className='text-red h-22 '>Select Payment Method</span>}

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



// function Processing(){
//     return(
//         <>
//             <motion.div 
//                 initial = {{
//                     opacity: 0
//                 }}
//                 animate = {{
//                     opacity: 1,
//                     transition: {
//                         duration: 0.5
//                     }
//                 }}
//                 exit = {{
//                     opacity: 0,
//                     transition: {
//                         delay: 0.5
//                     }
//                 }}
//                 className="w-128 bg-white rounded-xl absolute border-green p-6 text-center">
//                 <div>
//                     <h1 className='font-bold text-neutral text-3xl'>Processing BVN</h1>
//                 </div>
//                 <div className='font-semibold text-base text-neutral my-8'>
//                     <p>Please wait while we process your BVN. This will take few seconds.</p>
//                 </div>
//                 <div className='flex justify-center'>
//                     <button className='rounded-full w-28 h-12 text-neutral flex justify-around items-center'><TbLoader /> Processing</button>
//                 </div>
//             </motion.div>
//         </>
//     )
// }

export default Details;