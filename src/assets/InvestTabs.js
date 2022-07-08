
import React from 'react'
import { NavLink } from "react-router-dom";

function InvestTabs() {
  return (
    <div>
        <div className='flex border-b tab my-4 border-vestabsborder text-vestabs text-base font-semibold'>
                            <div className='tabs mr-8'>
                                <NavLink to="/investment">
                                    <div className='vestabs'>
                                        <h1>new investments</h1>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='tabs mr-8'>
                                <NavLink to="/investments/ongoing">
                                    <div className='vestabs'>
                                        <h1>Ongoing</h1>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='tabs mr-8'>
                                <NavLink to="/investments/completed">
                                    <div className='vestabs'>
                                        <h1>completed</h1>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='tabs mr-8'>
                                <NavLink to="/investments/my-investment">
                                    <div className='vestabs'>
                                        <h1>My investments</h1>
                                    </div>
                                </NavLink>
                            </div>
                            <div className='tabs mr-8'>
                                <NavLink to="/investments/relisted-investment">
                                    <div className='vestabs'>
                                        <h1>Relisted investments</h1>
                                    </div>
                                </NavLink>
                            </div>
                            
                        </div>
    </div>
  )
}

export default InvestTabs