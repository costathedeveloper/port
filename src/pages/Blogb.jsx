import React from 'react'

import BoraBora from '/assets/images/explore2.jpg';
import BoraBora2 from '/assets/images/tour9.jpg';
import Maldives from '/assets/images/wildlifeback.jpg';
import Maldives2 from '/assets/images/explore1.jpg';
import KeyWest from '/assets/images/tour19.jpg';

const Blogb = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='text-white text-6xl md:text-6xl font-bold'>7 reasons to visit misty Cape Town during winter</h1>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
            <img className='w-full h-full object-cover' src={BoraBora2} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
            <img className='w-full h-full object-cover' src={KeyWest} alt="/" />
        </div>
    </div>
  )
} 

export default Blogb;