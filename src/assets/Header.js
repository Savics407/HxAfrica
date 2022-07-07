import user from "./images/user_icon.png"
import { FaAngleDown } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { useState } from "react"


function Tab() {

    const [isClick, setIsClick] = useState(false)
    return (
        <>
            <div className="bg-green text-center text-white py-4 ">
                <div className='w-10/12 m-auto flex items-center justify-between hidden md:flex'>
                    <div className="bg-media w-48 h-12"></div>
                    <div className=" border-white flex items-center">
                        <div 
                            className="bg-primary text-dark rounded-full px-3 py-2.5 relative cursor-pointer"
                            onClick={() => setIsClick(!isClick)}>
                            <FaBell className='w-4 h-5'/>
                            <div className='notify'></div>
                        </div>
                        <div className='flex items flex items-center text-sm ml-6 mr-7'>
                            <h1 className="font-semibold mr-1">John Doe</h1>
                            <FaAngleDown />
                        </div>
                        <div className='relative'>
                            <img src={user} alt="User-Icon" />  
                            <div className='online'></div>
                            <div className={`notification ${isClick ? 'show-note' : 'remove-note'}`}>
                                <div className="arrow relative">
                                    <h1 className="text-2xl font-semibold">Notifications</h1>
                                </div>
                                <div className="text-sm  my-4">
                                    <h1>Login attempted from new IP</h1>
                                    <p className="text-footer text-xs mt-1">2021-03-10 20:19:15</p>   
                                </div>
                                <div className="text-sm  my-4">
                                    <h1>Login attempted from new IP</h1>
                                    <p className="text-footer text-xs mt-1">2021-03-10 20:19:15</p>   
                                </div>
                                <div className="text-sm  my-4">
                                    <h1>Request to reset security</h1>
                                    <p className="text-footer text-xs mt-1">2021-03-10 20:19:15</p>   
                                </div>
                                <div className="text-sm  my-4">
                                    <h1>Login attempted from new IP</h1>
                                    <p className="text-footer text-xs mt-1">2021-03-10 20:19:15</p>   
                                </div>
                                <div className="text-sm  my-4">
                                    <h1>Request to reset security</h1>
                                    <p className="text-footer text-xs mt-1">2021-03-10 20:19:15</p>   
                                </div>
                                <div className="text-sm  my-4">
                                    <h1>Login attempted from new IP</h1>
                                    <p className="text-footer text-xs mt-1">2021-03-10 20:19:15</p>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="">
                                        <button className="bg-green rounded-full text-dashbg w-48 h-10 text-sm">View all</button>
                                    </div>
                                    <div>
                                        <button className="border rounded-full text-neutral w-48 h-10 text-sm">Clear all</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab;