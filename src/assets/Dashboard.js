// import logo from "./images/polygon.png";
import { FaBell } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import user from "./images/user_icon.png"


function Tab() {
    return (
        <>
            <div className="bg-green text-center text-white px-36 py-4 flex items-center justify-between hidden md:flex">
                {/* <img src={logo} alt="logo icon"/> */}
                <div className="bg-white w-48 h-12"></div>
                <div className=" border-white flex items-center">
                    <div className="bg-white text-dark rounded-full px-3 py-2.5 relative" >
                        <FaBell className='w-4 h-5'/>
                        <div className='notify'></div>
                    </div>
                    <div className='flex items flex items-center  text-sm ml-6 mr-7'>
                        <h1 className="font-semibold mr-1">John Doe</h1>
                        <FaAngleDown />
                    </div>
                    <div className='relative'>
                       <img src={user} />  
                        <div className='online'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Dashboard () {
    return (
        <div className='font-family bg-mainbg'>
            <Tab />
            <div >
                Let's do some coding thingy
            </div>
        </div>
    )
}

export default Dashboard;