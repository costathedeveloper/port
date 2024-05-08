import React from 'react';

const Gridpics = ({ title, subtitle, headings, images }) => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1 className='text-yellow-200 text-6xl md:text-6xl font-bold'>{title}</h1>
      <p className='py-4 text-white'>{subtitle}</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <div className='relative'>
          <h2 className='absolute top-0 left-0 bg-black text-white p-2 opacity-80 z-10'>{headings[0]}</h2>
          <img
            className='w-full h-full object-cover rounded-lg col-span-2 md:col-span-3 row-span-2'
            src={images[0]}
            alt={headings[0]}
          />
        </div>
        <div className='relative'>
          <h2 className='absolute top-0 left-0 bg-black text-white p-2 opacity-80 z-10'>{headings[1]}</h2>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={images[1]}
            alt={headings[1]}
          />
        </div>
        <div className='relative'>
          <h2 className='absolute top-0 left-0 bg-black text-white p-2 opacity-80 z-10'>{headings[2]}</h2>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={images[2]}
            alt={headings[2]}
          />
        </div>
        <div className='relative'>
          <h2 className='absolute top-0 left-0 bg-black text-white p-2 opacity-80 z-10'>{headings[3]}</h2>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={images[3]}
            alt={headings[3]}
          />
        </div>
        <div className='relative'>
          <h2 className='absolute top-0 left-0 bg-black text-white p-2 opacity-80 z-10'>{headings[4]}</h2>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={images[4]}
            alt={headings[4]}
          />
        </div>
      </div>
    </div>
  );
};

export default Gridpics;
