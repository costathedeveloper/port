import React from 'react';

function Hero() {
  return (
    <div className="md:px-16 relative z-10 overflow-hidden pt-28 lg:pt-[150px] px-10">
      <div className="my-4">
        <main className="grid grid-cols-4">
          <div className="pr-6 py-8 md:py-16 col-span-4 md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-wide leading-normal text-primary">Email Marketing for Big Ideas</h2>
            <p className="py-6 text-xl leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laboriosam magnam fuga, libero at, ipsam possimus beatae quo aliquam, doloribus explicabo! Rem eaque dolorem perferendis maxime, nulla hic? Magni, mollitia.</p>
            <div className="py-4 lg:py-0">
              <a href="#" className="bg-primary text-white rounded-md px-9 py-4 font-semibold flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Watch Video
              </a>
            </div>
          </div>
          <div className="px-3 col-span-4 order-first md:col-span-2 md:order-1 lg:col-span-1">
            <img src="/assets/images/tour1.jpg" alt="Tour image 1" className="h-112 mt-5 w-full object-cover rounded-tl-big rounded-br-big" />
          </div>
          <div className="pl-3 hidden order-2 lg:block">
            <img src="/assets/images/tour2.jpg" alt="Tour image 2" className="h-60 w-full mb-3 object-cover rounded-tl-big rounded-br-big" />
            <img src="/assets/images/tour3.jpg" alt="Tour image 3" className="h-60 w-full mt-3 object-cover rounded-tl-big rounded-br-big" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
