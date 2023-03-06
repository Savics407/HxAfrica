import React from 'react'
import commune1 from "./../assets/images/commune1.svg";
import commune2 from "./../assets/images/commune2.svg";
import commune3 from "./../assets/images/commune3.svg";
import commune4 from "./../assets/images/commune4.svg";
import commune5 from "./../assets/images/commune5.svg";

function Community() {
  return (
    <div>
          <div className="bg-black py-36">
              <div className="content px-20">
                  <div className="px-52 text-center mb-20">
                      <h1 className="font-semibold text-xs text-[#F8FFF9] text-center mb-4">Join Our community</h1>
                      <h1 className="font-normal text-4xl text-white text-center mb-8">From the Everyday man to the wealthy, with us anyone can invest in Real Estate.</h1>
                      <button className="bg-white text-[#191919] font-bold text-xs rounded-full px-8 py-3">Sign up today</button>
                  </div>
                  <div className="flex justify-between">
                      <img src={commune1} alt="community" />
                      <img src={commune2} alt="community" />
                      <img src={commune3} alt="community" />
                      <img src={commune4} alt="community" />
                      <img src={commune5} alt="community" />
                  </div>
              </div>

          </div>
    </div>
  )
}

export default Community