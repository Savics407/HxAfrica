import Header from './Header'
import { motion} from "framer-motion"
import { NavLink } from "react-router-dom";
import Protabs from './Protabs';


function Profile() {
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
                    <div className='my-14'>
                        <h1 className='text-footer text-xs font-medium'>User Information</h1>
                        <table className='border w-full border-collapse mt-3 '>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Full Name</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-medium text-sm'>John Doe</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Email Address</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-medium text-sm'>john.doe@gmail.com</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Mobile Number</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-medium text-sm'>07068847662</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Date of Birth</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-medium text-sm'>12 March 1987</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>State</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-medium text-sm'>Abuja</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>City</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-medium text-sm'>Wuse</h1>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='my-10'>
                        <h1 className='text-footer text-xs font-medium'>More Information</h1>
                        <table className='border w-full border-collapse mt-3 '>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Bank Account Name</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-normal text-head italic text-sm '>Not Added yet</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Account Number</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-normal text-head italic text-sm '>Not Added yet</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Password</h1>
                                </td>
                                <td className='w-2/3 border px-5 py-2'>
                                    <div className='flex justify-between items-center'>
                                        <input type="password" disabled value="12345628" className='bg-transparent'/>
                                        <h1 className='font-medium text-xs cursor-pointer text-change'>Change password</h1>
                                    </div>
                                    
                                </td>
                            </tr>
                            
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>Address</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-medium text-sm'>No 2 wuse II, Abuja , Nigeria</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-1/3 px-5 py-2'>
                                    <h1 className='text-footer font-semibold text-base'>BVN</h1>
                                </td>
                                <td className='w-2/3 border px-5'>
                                    <h1 className='font-normal text-head italic text-sm '>Not Added yet</h1>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='text-right font-family mb-12'>
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

export default Profile;