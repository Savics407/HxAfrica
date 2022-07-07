import { FaAngleDown } from 'react-icons/fa'
import status from "./images/status.png"
import { MdDashboard } from 'react-icons/md'
import { MdInsertChart } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'
import { RiSettings3Fill } from 'react-icons/ri'
import dollar from './images/Vector.png'
import coin from './images/coin.png'
import reictoken from './images/Reic_Token.png'
import media from './images/media.png'
import Investments from './Investments'
import Myinvests from './Myinvestments'
import diamond from './images/diamond.png'
import Tab from './Header'
import BuyToken from './BuyToken'
import { useState } from 'react'


function Investment () {
    const [buyToken, setBuyToken] = useState(false)

    return (
        <div className='font-family bg-mainbg'>
            {buyToken && <BuyToken className="z-10" closeToken={setBuyToken}/>}

            <Tab />
            <div className='bg-white px-80 border flex justify-between items-center text-navbar text-base font-semibold'>
                <div className='nav-items active'>
                    <MdDashboard className='ds-icons'/>
                    <h1>Dashboard</h1>
                </div>
                {/* <div className='nav-items'>
                    <BiTransfer className='ds-icons' />
                    <h1>Transaction</h1>
                </div>
                <div className='nav-items'>
                    <TbClipboardList className='ds-icons' />
                    <h1>KYC List</h1>
                </div> */}
                <div className='nav-items'>
                    <MdInsertChart className='ds-icons' />
                    <h1>Investment</h1>
                </div>
                <div className='nav-items'>
                    <AiFillDollarCircle className='ds-icons' />
                    <h1>Token</h1>
                </div>
                <div className='nav-items'>
                    <RiSettings3Fill className='ds-icons' />
                    <h1>Settings</h1>
                </div>
            </div>
        </div>
    )
}

export default Investment