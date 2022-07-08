
import React from 'react'
import { NavLink } from "react-router-dom";

function Protabs() {
  return (
    <div>
        <div className='flex border-b tab my-4 border-vestabsborder text-vestabs text-base font-semibold'>
                            <div className='tabs mr-8'>
                                <NavLink to="/settings">
                                    <div className='vestabs'>
                                        <h1>My Profile</h1>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='tabs mr-8'>
                                <NavLink to="/change-password">
                                    <div className='vestabs'>
                                        <h1>Change Password</h1>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='tabs mr-8'>
                                <NavLink to="/activities">
                                    <div className='vestabs'>
                                        <h1>activity</h1>
                                    </div>
                                </NavLink>
                            </div>
        </div>
    </div>
  )
}

export default Protabs