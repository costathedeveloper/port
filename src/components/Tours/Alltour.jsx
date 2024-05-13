import React from "react";
import { Helmet } from 'react-helmet';


const Alltour = () => {
    return (
        <div className="container-fluid mb-8 relative z-50">
            <div className="flex flex-wrap justify-center mx-10 gap-8">
                {/* First tour card */}
                <div className="max-w-sm bg-zinc rounded-lg shadow relative">
                    <div className="text-center">
                        <img src="/assets/images/tours/tour1.jpg" className="rounded-t-lg" />
                    </div>
                    <div className="p-5">
                        <div className="block">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            6 Days Cape Town, Victoria Falls and Chobe
                            </h5>
                        </div>
                        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
                            From $1720
                        </h6>
                        <p className="mb-3 font-normal text-gray-400">Join a small group and encounter the best towns and activities that Cape town and Victoria falls have to offer.</p>
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
          <style>{`
            #bokun_c8be5175_b9a3_4b1b_941b_992f5cf0c4d4 {
              display: inline-block;
              padding: 10px 20px;
              background: #e29605; /* Updated background color */
              border-radius: 5px;
              box-shadow: none;
              font-weight: 600;
              font-size: 16px;
              text-decoration: none;
              text-align: center;
              color: #FFFFFF;
              border: none;
              cursor: pointer;
              transition: background .2s ease;
            }
            #bokun_c8be5175_b9a3_4b1b_941b_992f5cf0c4d4:hover {
              background: #e29605;
            }
            #bokun_c8be5175_b9a3_4b1b_941b_992f5cf0c4d4:active {
              background: #e29605;
            }
          `}</style>
        </Helmet>
        <button className="bokunButton" disabled id="bokun_c8be5175_b9a3_4b1b_941b_992f5cf0c4d4" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/857699?partialView=1" data-testid="widget-book-button">Book now</button>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm bg-zinc rounded-lg shadow relative">
                    <div className="text-center">
                        <img src="/assets/images/tours/tour2.JPG" className="rounded-t-lg" />
                    </div>
                    <div className="p-5">
                        <div className="block">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                Helicopter Flight Over The Victoria Falls
                            </h5>
                        </div>
                        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
                            From $229
                        </h6>
                        <p className="mb-3 font-normal text-gray-400">Join us on this helicopter tour and witness not only the Victoria falls but, wildlife in the Zambezi national park</p>
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
          <style>{`
            #bokun_a313ee4e_ffd6_4038_bbeb_e834096005db {
                display: inline-block;
                padding: 10px 20px;
                background: #e29605; /* Changed background color */
                border-radius: 5px;
                box-shadow: none;
                font-weight: 600;
                font-size: 16px;
                text-decoration: none;
                text-align: center;
                color: #FFFFFF;
                border: none;
                cursor: pointer;
                transition: background .2s ease;
            }
            #bokun_a313ee4e_ffd6_4038_bbeb_e834096005db:hover {
                background: #e29605;
            }
            #bokun_a313ee4e_ffd6_4038_bbeb_e834096005db:active {
                background: #e29605;
            }
          `}</style>
        </Helmet>
        <button className="bokunButton" disabled id="bokun_a313ee4e_ffd6_4038_bbeb_e834096005db" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/852208?partialView=1" data-testid="widget-book-button">Book now</button>
     
                        </div>
                    </div>
                </div>

                {/* Repeat this structure for other tour cards */}
                {/* Second tour card */}
                <div className="max-w-sm bg-zinc rounded-lg shadow relative">
                    <div className="text-center">
                        <img src="/assets/images/tours/tour3.jpg" className="rounded-t-lg" />
                    </div>
                    <div className="p-5">
                        <div className="block">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                Full Day Chobe Safari Tour With Return Transfers
                            </h5>
                        </div>
                        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
                            From $189
                        </h6>
                        <p className="mb-3 font-normal text-gray-400">Discover the world-Famous Chobe where beast of different sizes freely roams the African savanna.</p>
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
  <style>{`
    #bokun_30328d6a_737f_4ae3_bf05_b52bed519469 {
        display: inline-block;
        padding: 10px 20px;
        background: #e29605;
        border-radius: 5px;
        box-shadow: none;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        color: #FFFFFF;
        border:none;
        cursor: pointer;
        transition: background .2s ease;
    }
    #bokun_30328d6a_737f_4ae3_bf05_b52bed519469:hover {
        background: #e29605;
    }
    #bokun_30328d6a_737f_4ae3_bf05_b52bed519469:active {
        background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_30328d6a_737f_4ae3_bf05_b52bed519469" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/854523?partialView=1" data-testid="widget-book-button">Book now</button>

                        </div>
                    </div>
                </div>

<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour4.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Cape Town Airport Transfer
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $15
        </h6>
        <p className="mb-3 font-normal text-gray-400">We offer a full airport pick up and drop off service sparring you the hassle of finding the basement car park.</p>
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
  <style>{`
    #bokun_2e34fc05_0f5d_49be_a90e_7519474602d7 {
      display: inline-block;
      padding: 11px 25px;
      background: #faaf20;
      border-radius: 6px;
      box-shadow: 0 8px 12px rgba(0,0,0,0.19);
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      text-align: center;
      color: #FFFFFF;
      font-family: sans-serif;
      border:none;
      cursor: pointer;
    }
    #bokun_2e34fc05_0f5d_49be_a90e_7519474602d7:hover {
      background: #c98505;
    }
    #bokun_2e34fc05_0f5d_49be_a90e_7519474602d7:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_2e34fc05_0f5d_49be_a90e_7519474602d7" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/223988?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Fifth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour5.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Cape Of Good Hope and Penguins Full Day Tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $40
        </h6>
        <p className="mb-3 font-normal text-gray-400">Traverse the Cape peninsular in a small group and discover the most dramatic coast in the world. Take pictures.</p>
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
  <style>{`
    #bokun_d5081fad_2354_45f8_9478_b8f92436b870 {
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
    #bokun_d5081fad_2354_45f8_9478_b8f92436b870:hover {
      background: #c98505;
    }
    #bokun_d5081fad_2354_45f8_9478_b8f92436b870:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_d5081fad_2354_45f8_9478_b8f92436b870" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/223985?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Sixth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour6.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Boulders Beach Penguins Half Day Tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $35
        </h6>
        <p className="mb-3 font-normal text-gray-400">Have 5 hours in Cape town and are desperate to see the African Penguins at Boulders beach?</p>
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
  <style>{`
    #bokun_1f07c6e1_f7e9_4110_88d8_c9c9ab5e8800 {
      display: inline-block;
      padding: 11px 25px;
      background: #faaf20;
      border-radius: 6px;
      box-shadow: 0 8px 12px rgba(0,0,0,0.19);
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      text-align: center;
      color: #FFFFFF;
      font-family: sans-serif;
      border:none;
      cursor: pointer;
    }
    #bokun_1f07c6e1_f7e9_4110_88d8_c9c9ab5e8800:hover {
      background: #c98505;
    }
    #bokun_1f07c6e1_f7e9_4110_88d8_c9c9ab5e8800:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_1f07c6e1_f7e9_4110_88d8_c9c9ab5e8800" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/301566?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Seventh tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour7.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Hot Air Balloon And Wine Tasting Private Guided Tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $500
        </h6>
        <p className="mb-3 font-normal text-gray-400">Defy gravity and hover over the Stellenbosch winelands in a hot air balloon. Depending on the wind</p>
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
  <style>{`
    #bokun_5017b3ea_ff25_4845_a6e2_eb106c394680 {
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
    #bokun_5017b3ea_ff25_4845_a6e2_eb106c394680:hover {
      background: #c98505;
    }
    #bokun_5017b3ea_ff25_4845_a6e2_eb106c394680:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_5017b3ea_ff25_4845_a6e2_eb106c394680" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/719208?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour8.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Cape town Tandem Skydiving
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $376
        </h6>
        <p className="mb-3 font-normal text-gray-400">Pump up your adrenaline, grab your fears by the neck and jump out of an airplane 10,000 feet</p>
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
  <style>{`
    #bokun_edab82b5_d703_4b64_baf0_b3ba9496f9a0 {
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
    #bokun_edab82b5_d703_4b64_baf0_b3ba9496f9a0:hover {
      background: #c98505;
    }
    #bokun_edab82b5_d703_4b64_baf0_b3ba9496f9a0:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_edab82b5_d703_4b64_baf0_b3ba9496f9a0" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/722313?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>
{/* Eleventh tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour9.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Family Fun Day out
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $133
        </h6>
        <p className="mb-3 font-normal text-gray-400">Your first stop will be at the famous Two Oceans Aquarium where you will be mesmerized by the huge.</p>
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
  <style>{`
    #bokun_0ca7e5d3_3508_4647_82df_d935d7550ad7 {
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
    #bokun_0ca7e5d3_3508_4647_82df_d935d7550ad7:hover {
      background: #c98505;
    }
    #bokun_0ca7e5d3_3508_4647_82df_d935d7550ad7:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_0ca7e5d3_3508_4647_82df_d935d7550ad7" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/720634?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Twelfth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour10.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Full-Day Horseback Safari and Wine Tasting Private Guided Tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $388
        </h6>
        <p className="mb-3 font-normal text-gray-400">The horses know their routine and thus making it possible for first time horse riders</p>
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
  <style>{`
    #bokun_c4ed9f5e_c766_4add_a551_9f07f5c0c943 {
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
    #bokun_c4ed9f5e_c766_4add_a551_9f07f5c0c943:hover {
      background: #c98505;
    }
    #bokun_c4ed9f5e_c766_4add_a551_9f07f5c0c943:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_c4ed9f5e_c766_4add_a551_9f07f5c0c943" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/718350?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Thirteenth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour11.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Table Mountain & Cape Town City Half Day Private Guided Tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $69
        </h6>
        <p className="mb-3 font-normal text-gray-400">Cape town is the oldest City in South Africa and as such, it is filled with history, culture and an interesting</p>
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
  <style>{`
    #bokun_065b081e_e988_4c66_94cc_f6977ddc0e6d {
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
    #bokun_065b081e_e988_4c66_94cc_f6977ddc0e6d:hover {
      background: #c98505;
    }
    #bokun_065b081e_e988_4c66_94cc_f6977ddc0e6d:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_065b081e_e988_4c66_94cc_f6977ddc0e6d" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/238631?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Fourteenth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour12.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Cape Canopy Zip Line
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $160
        </h6>
        <p className="mb-3 font-normal text-gray-400">Glide in the soaring hills of Elgin apple country! Pick up by a private vehicle and qualified tour guide.</p>
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
  <style>{`
    #bokun_46e20588_5f9b_4565_9a67_06bb9422a80a {
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
    #bokun_46e20588_5f9b_4565_9a67_06bb9422a80a:hover {
      background: #c98505;
    }
    #bokun_46e20588_5f9b_4565_9a67_06bb9422a80a:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_46e20588_5f9b_4565_9a67_06bb9422a80a" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/431070?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Fifteenth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour13.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Franschhoek wine tram and Stellenbosch town tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $60
        </h6>
        <p className="mb-3 font-normal text-gray-400">Join our small group tour and discover the Mountainous, best wine growing regions of South Africa</p>
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
  <style>{`
    #bokun_fa274889_76ce_4948_a982_666f7441d8f9 {
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
    #bokun_fa274889_76ce_4948_a982_666f7441d8f9:hover {
      background: #c98505;
    }
    #bokun_fa274889_76ce_4948_a982_666f7441d8f9:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_fa274889_76ce_4948_a982_666f7441d8f9" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/223984?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Sixteenth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour14.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Private Sightseeing Trip To The Cape Of Good Hope & Boulders Penguin Colony
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $105
        </h6>
        <p className="mb-3 font-normal text-gray-400">Discover the famed corner of Africa in the best comfort of a private vehicle and a well spoken guide.</p>
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
  <style>{`
    #bokun_c5d2fa33_8a60_4cff_a480_1d97cb3f4a45 {
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
    #bokun_c5d2fa33_8a60_4cff_a480_1d97cb3f4a45:hover {
      background: #c98505;
    }
    #bokun_c5d2fa33_8a60_4cff_a480_1d97cb3f4a45:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
        </div>
    </div>
</div>

{/* Seventeenth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour15.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Township Tour And Cultural Experience
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $105
        </h6>
        <p className="mb-3 font-normal text-gray-400">This cultural experience affords us to share our African stories with the visitors from around the globe.</p>
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
  <style>{`
    #bokun_7ae25e16_06a9_4128_8475_baeac979789c {
      display: inline-block;
      padding: 11px 25px;
      background: #faaf20;
      border-radius: 6px;
      box-shadow: 0 8px 12px rgba(0,0,0,0.19);
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      text-align: center;
      color: #FFFFFF;
      font-family: sans-serif;
      border:none;
      cursor: pointer;
    }
    #bokun_7ae25e16_06a9_4128_8475_baeac979789c:hover {
      background: #c98505;
    }
    #bokun_7ae25e16_06a9_4128_8475_baeac979789c:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_7ae25e16_06a9_4128_8475_baeac979789c" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/223987?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour16.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Chauffeur Service
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $210
        </h6>
        <p className="mb-3 font-normal text-gray-400">Escape the stress of having to look for an e-hailing taxi and comfortably ride with a prompt and professional driver</p>
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
  <style>{`
    #bokun_7aca291f_905d_4d6c_99fa_868bb9b200bd {
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
    #bokun_7aca291f_905d_4d6c_99fa_868bb9b200bd:hover {
      background: #c98505;
    }
    #bokun_7aca291f_905d_4d6c_99fa_868bb9b200bd:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_7aca291f_905d_4d6c_99fa_868bb9b200bd" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/425092?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour17.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            All The Cape Town Highlights
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $120
        </h6>
        <p className="mb-3 font-normal text-gray-400">See the best of Cape Town's highlights in this one-day private tour. Our expert guides are efficient time managers.</p>
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
  <style>{`
    #bokun_f7519f91_c3f7_48fe_aebc_f5607e8853bd {
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
    #bokun_f7519f91_c3f7_48fe_aebc_f5607e8853bd:hover {
      background: #c98505;
    }
    #bokun_f7519f91_c3f7_48fe_aebc_f5607e8853bd:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_f7519f91_c3f7_48fe_aebc_f5607e8853bd" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/261306?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Twentieth tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour18.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Cape Agulhas Full Day Tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $170
        </h6>
        <p className="mb-3 font-normal text-gray-400">Embark on an unforgettable tour to the true tip of the African continent where the 2 oceans officially meet.</p>
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
  <style>{`
    #bokun_ac58d840_e795_4a8a_bb80_b5b585a5deca {
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
    #bokun_ac58d840_e795_4a8a_bb80_b5b585a5deca:hover {
      background: #c98505;
    }
    #bokun_ac58d840_e795_4a8a_bb80_b5b585a5deca:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_ac58d840_e795_4a8a_bb80_b5b585a5deca" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/425093?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Twenty-first tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour19.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Table Mountain, Cape Of Good Hope And Boulders Penguins Full Day Tour
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $115
        </h6>
        <p className="mb-3 font-normal text-gray-400">This tour is best suitable for those wanting to experience the top 3 attractions of Cape town and more in a day tour.</p>
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
  <style>{`
    #bokun_9fe3f9b4_f2e0_407f_952a_12c3f2fa4d52 {
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
    #bokun_9fe3f9b4_f2e0_407f_952a_12c3f2fa4d52:hover {
      background: #c98505;
    }
    #bokun_9fe3f9b4_f2e0_407f_952a_12c3f2fa4d52:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_9fe3f9b4_f2e0_407f_952a_12c3f2fa4d52" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/417377?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>

{/* Twenty-second tour card */}
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour20.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Whale Watching Tour In Hermanus
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $180
        </h6>
        <p className="mb-3 font-normal text-gray-400">Witness the largest mammal on earth from point blank range. Whales in Hermanus can be viewed from land.</p>
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
  <style>{`
    #bokun_d991d70d_6506_40a1_b908_64eba14f4f37 {
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
      border: none;
      cursor: pointer;
    }
    #bokun_d991d70d_6506_40a1_b908_64eba14f4f37:hover {
      background: #c98505;
    }
    #bokun_d991d70d_6506_40a1_b908_64eba14f4f37:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_d991d70d_6506_40a1_b908_64eba14f4f37" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/417376?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour21.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            4 Day Cape Town Combo
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            From $819
        </h6>
        <p className="mb-3 font-normal text-gray-400">Explore Cape town's most popular sites in this 4 day combo tour and Discover the Cape of good hope.</p>
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
  <style>{`
    #bokun_92ed0989_2f1a_4572_b2f6_7c68d32a8661 {
      display: inline-block;
      padding: 11px 25px;
      background: #faaf20;
      border-radius: 6px;
      box-shadow: 0 8px 12px rgba(0,0,0,0.19);
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      text-align: center;
      color: #FFFFFF;
      font-family: sans-serif;
      border:none;
      cursor: pointer;
    }
    #bokun_92ed0989_2f1a_4572_b2f6_7c68d32a8661:hover {
      background: #c98505;
    }
    #bokun_92ed0989_2f1a_4572_b2f6_7c68d32a8661:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_92ed0989_2f1a_4572_b2f6_7c68d32a8661" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/261307?partialView=1" data-testid="widget-book-button">Book Now</button>

        </div>
    </div>
</div>
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
<div className="max-w-sm bg-zinc rounded-lg shadow relative">
    <div className="text-center">
        <img src="/assets/images/tours/tour23.jpg" className="rounded-t-lg" />
    </div>
    <div className="p-5">
        <div className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            6 Days Private Tour in Cape Town and Kruger National Park
            </h5>
        </div>
        <h6 className="text-xl font-bold tracking-tight text-yellow-200">
            On Request
        </h6>
        <p className="mb-3 font-normal text-gray-400">Experience the ultimate City and safari in private and comfort. While Cape town</p>
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
  <style>{`
    #bokun_e0c1a3b2_3ac8_47c6_9edd_36de2cf3a4e3 {
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
      border: none;
      cursor: pointer;
      transition: background .2s ease;
    }
    #bokun_e0c1a3b2_3ac8_47c6_9edd_36de2cf3a4e3:hover {
      background: #c98505;
    }
    #bokun_e0c1a3b2_3ac8_47c6_9edd_36de2cf3a4e3:active {
      background: #e29605;
    }
  `}</style>
</Helmet>
<button class="bokunButton" disabled id="bokun_e0c1a3b2_3ac8_47c6_9edd_36de2cf3a4e3" data-src="https://widgets.bokun.io/online-sales/e22fa730-5f47-4a57-b871-b816ed72e113/experience/764686?partialView=1" data-testid="widget-book-button">Book now</button>

        </div>
    </div>
</div>


            </div>
        </div>
    );
}

export default Alltour;
