import React from 'react';
import heroImg from '/assets/images/about.jpg';
import { AiOutlineSearch } from 'react-icons/ai';

const Abouthero = () => {
  return (
    <section className='w-full bg-black py-24 p-4'>
      <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px]'>
        <div className='flex flex-col justify-start gap-4'>
          <p className='py-2 text-4xl text-[#FFA500] font-bold'>DISCOVER THE PAST</p>
          <h1 className='md:leading-[42px] py-2 md:text-3xl text-lg font-semibold'>
            Explore the Cape Archives with our knowledgeable guides
          </h1>
          <p className='py-2 text-lg text-gray-500'>Cape archives tours is a small family run business based in South Africa and with its head operations in Cape town. We have been in the business of conducting and helping curate tours for guest from all over the world since 2015. We believe in giving out authentic experiences and also that long lasting memories are attained in a genuine experience as opposed to “tourist traps”</p>
          
        </div>
        <img src={heroImg} alt="hero" className='md:order-last order-first rounded-lg'/>
      </div>
    </section>
  );
}

export default Abouthero;
