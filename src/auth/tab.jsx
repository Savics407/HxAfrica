import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/HXafrica Logo.svg";

function Tab() {
  return (
      <div>
          <>
              <div className="bg-primary text-center text-green p-5 hidden md:flex">
                  {/* <div className="w-40 h-20 border"> */}
                  <Link to="/">
                      <img src={logo} alt="logo icon" className="w-36" />
                  </Link>
                  {/* </div> */}
                  {/* <h1 className="text-sm font-bold font-family ml-4">Hx</h1> */}
              </div>
          </>

</div>
  )
}

export default Tab