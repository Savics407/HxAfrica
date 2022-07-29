import invest_icon from "./images/investment.png";
import crowd from "./images/crowd.png";
import renovate from "./images/renovate.svg";
import sales from "./images/sales.svg";
import raw from "./images/rawland.png";
import land from "./images/rawland2.png";
import users1 from "./images/Frame 14.png";
import users2 from "./images/Frame 18.png";
import users3 from "./images/Frame 19.png";
import users4 from "./images/Frame 20.png";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Investments() {
  return (
    <>
      <div className="rounded-lg bg-white w-full lg:my-5 my-3 pb-4">
        <div className="lg:border-b border-stroke lg:px-10 lg:py-5 px-6 py-5 lg:text-lg text-xs font-semibold flex justify-between items-center cursor-pointer">
          <h1 className="text-dark">Investments</h1>
          <Link to="/investment">
            <h1 className="text-links lg:text-xs text-tiny font-normal">
              View all investment
            </h1>
          </Link>
        </div>
        <div className="overflow-hidden mt-5 flex">
          <div className="cat">
            <div className="categories bg-light-orange ">
              <div className="cate-block">
                <div className="flex text-dark py-3">
                  <div className="mr-3">
                    <img src={renovate} alt="investment_icon" />
                  </div>
                  <div>
                    <h1 className="text-sm font-medium text-dark">Renovate</h1>
                    <h1 className="text-tiny font-medium text-dark">
                      34 Investments Ongoing
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-blue categories">
              <div className="cate-block">
                <div className="flex text-dark py-3">
                  <div className="mr-3">
                    <img src={crowd} alt="investment_icon" />
                  </div>
                  <div>
                    <h1 className="text-sm font-medium text-dark">Morgage</h1>
                    <h1 className="text-tiny font-medium text-dark">
                      12 Investments ongoing
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cat">
            <div className="categories bg-light-purple ">
              <div className="cate-block">
                <div className="flex text-dark py-3">
                  <div className="mr-3">
                    <img src={invest_icon} alt="investment_icon" />
                  </div>
                  <div>
                    <h1 className="text-sm font-medium text-dark">
                      Rent Financing
                    </h1>
                    <h1 className="text-tiny font-medium text-dark">
                      12 new Investments
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-blue categories">
              <div className="cate-block">
                <div className="flex text-dark py-3">
                  <div className="mr-3">
                    <img src={sales} alt="investment_icon" />
                  </div>
                  <div>
                    <h1 className="text-sm font-medium text-dark">Sales</h1>
                    <h1 className="text-tiny font-medium text-dark">
                      6 Investments ongoing
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 flex flex-col lg:flex-row">
          <div className="section pr-4">
            <h1>New Investments</h1>
            <div className="real-estate">
              <div className="mr-1.5 w-1/3 h-full">
                <img src={raw} alt="rawland" />
              </div>
              <div className="w-2/3">
                <div className="mb-2">
                  <h1 className="!mb-0">Raw Land - Real Estate</h1>
                  <h2 className="text-pink text-xs">30% Interest Rate</h2>
                </div>
                <div className="text-tiny text-grayy mb-2">
                  <p className="!mb-0">
                    Time Frame: <span className="text-darkgray">4 months</span>
                  </p>
                  <p className="">
                    Expires -{" "}
                    <span className="text-darkgray">Dec 23, 2022</span>
                  </p>
                </div>
                <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-2 w-48">
                  <p className="">
                    Property Worth{" "}
                    <span className="text-darkgray text-xs font-medium ml-2">
                      N200,000,000
                    </span>
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex items-center">
                    <img src={users1} alt="frame" className="z-0" />
                    <img src={users2} alt="frame" className="-ml-3 z-10" />
                    <img src={users3} alt="frame" className="-ml-3 z-10" />
                    <img src={users4} alt="frame" className="-ml-3 z-10" />
                    <div className="bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10">
                      +24
                    </div>
                  </div>
                  <div>
                    <button className="bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h1>Ongoing Investments</h1>
            <div className="real-estate">
              <div className="mr-1.5 w-1/3">
                <img src={land} alt="rawland" />
              </div>
              <div className="w-2/3">
                <div className="mb-2">
                  <h1 className="!mb-0">Raw Land - Real Estate</h1>
                  <h2 className="text-green text-xs">30% Interest Rate</h2>
                </div>
                <div className="text-tiny text-grayy mb-3">
                  <p className="!mb-0">
                    Time Frame: <span className="text-darkgray">4 months</span>
                  </p>
                  <p className="">
                    Expires -{" "}
                    <span className="text-darkgray">Dec 23, 2022</span>
                  </p>
                </div>
                <div className="text-grayy text-tiny bg-mainsec p-2 rounded-lg mb-3 w-48">
                  <p className="">
                    Property Worth{" "}
                    <span className="text-darkgray text-xs font-medium ml-2">
                      N200,000,000
                    </span>
                  </p>
                </div>
                {/* <div className='flex justify-between w-full'>
                                            <div className='flex items-center'>
                                                <img src={users1} alt="frame" className='z-0'/>
                                                <img src={users2} alt="frame" className='-ml-3 z-10' />
                                                <img src={users3} alt="frame" className='-ml-3 z-10' />
                                                <img src={users4} alt="frame" className='-ml-3 z-10' />
                                                <div className='bg-green rounded-full w-6 h-6 text-xxm text-white flex items-center justify-center -ml-3 z-10'>+24</div>
                                            </div>
                                            <div>
                                                <button className='bg-white text-green text-tiny font-normal w-24 h-7 rounded-2xl'>Join Now</button>
                                            </div>
                                        </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center p-4 hidden lg:flex">
          <FaInfoCircle className="text-join text-sm mr-1" />{" "}
          <h1 className="text-join text-sm">
            Join the early investors and earn better
          </h1>
        </div>
      </div>
    </>
  );
}

export default Investments;
