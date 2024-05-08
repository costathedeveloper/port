import React from 'react';

const Zimsafari = () => {
  return (
    <>
    <h1 className='text-yellow-200 text-6xl md:text-6xl font-bold mt-4 text-center '>Join the adventure</h1>
    <div className='max-w-[1400px] h-[500px] bg-[#483C32] bg-opacity-50 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 rounded-lg shadow-lg'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold text-yellow-200'>Best Zim Zimsafari</h3>
        <p className='pt-4 text-black'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='/assets/images/explore2.jpg'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='/assets/images/explore2.jpg'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='/assets/images/explore2.jpg'
          alt='/'
        />
      </div>
    </div>
    </>
  );
};

export default Zimsafari;