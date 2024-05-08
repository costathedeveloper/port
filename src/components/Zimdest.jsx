import React from 'react'

import BoraBora from '/assets/images/explore2.jpg';
import BoraBora2 from '/assets/images/tour9.jpg';
import Maldives from '/assets/images/wildlifeback.jpg';
import Maldives2 from '/assets/images/explore1.jpg';
import KeyWest from '/assets/images/tour19.jpg';

const Zimdest = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='text-yellow-200 text-6xl md:text-6xl font-bold'>All-Inclusive Resorts</h1>
        <p className='py-4 text-white'>On the Zimbabwean Best land</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover rounded-lg col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
            <img className='w-full h-full object-cover rounded-lg' src={BoraBora2} alt="/" />
            <img className='w-full h-full object-cover rounded-lg' src={Maldives} alt="/" />
            <img className='w-full h-full object-cover rounded-lg' src={Maldives2} alt="/" />
            <img className='w-full h-full object-cover rounded-lg' src={KeyWest} alt="/" />
        </div>
    </div>
  )
} 

export default Zimdest;