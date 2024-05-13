import React from "react";
import { Helmet } from 'react-helmet';


const Gardenroutetour = () => {
    return (
        <div className="container-fluid mb-8 relative z-50">
            <div className="flex flex-wrap justify-center mx-10 gap-8">
    
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour22.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Garden Route Tour In 3 Nights
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $1472
        </h6>
        <p className="mb-3 font-normal text-gray-400">This private 4 day garden route tour gives you a chance to explore the entire garden route in a short space of time.</p>
        <div className="flex justify-between mx-auto">
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-200 focus:ring-4 focus:outline-none focus:ring-zinc">
                VIEW DETAILS
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </div>
            <Helmet>
  <script src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=e22fa730-5f47-4a57-b871-b816ed72e113" async />
  <style>
    {`
      #bokun_b5841862_b87a_4301_923c_769cc9b610f1 {
        display: inline-block;
        padding: 11px 25px;
        background: #faaf20;
        border-radius: 6px;
        box-shadow: none;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        color: #FFFFFF;
        font-family: sans-serif;
        border:none;
        cursor: pointer;
      }
      #bokun_b5841862_b87a_4301_923c_769cc9b610f1:hover{
        background: #c98505;
      }
      #bokun_b5841862_b87a_4301_923c_769cc9b610f1:active{
        background: #e29605;
      }
    `}
  </style>
</Helmet>

<button 
  className="bokunButton" 
  disabled 
  id="bokun_b5841862_b87a_4301_923c_769cc9b610f1" 
  data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/708960?partialView=1" 
  data-testid="widget-book-button"
>
  Book Now
</button>

        </div>
    </div>
</div>
            </div>
        </div>
    );
}

export default Gardenroutetour;
