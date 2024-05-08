import React from 'react'
import cta from '/assets/images/tour16.jpg'

const CTA = () => {
  return (
    <section className='w-full text-yellow-200  py-24 p-4 items-center'>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[400px]'>
            <img src={cta} alt="hero" className='w-[500px] mx-auto rounded-lg'/>
            <div className='flex flex-col justify-start gap-4'>
                <div>
                <h1 className='md:leading-[42px] py-8 md:text-3xl text-lg text-white font-semibold'>
                    Explore the World with <span className='text-[#FFFAFA]'>Our Exclusive Travel</span> Packages
                </h1>
                <p className='py-2 text-lg text-white'>Discover amazing destinations and create unforgettable memories</p>
                <button className='max-[780px]:w-full px-8 text-white py-3 bg-[#FFA500]'>Get a Quote</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA
