import React from 'react';
import Achieve from '/assets/images/about1.jpg';
import { FaGraduationCap } from 'react-icons/fa';
import { AiFillVideoCamera } from 'react-icons/ai';
import { FaPeopleCarry } from 'react-icons/fa';

const Achievement = () => {
  return (
    <section className='w-full h-full bg-[#121723] p-5 md:py-20'>
      <div className='md:max-w-[1100px] m-auto grid md:grid-cols-2 max-w-[400px]'>
        <div className='flex flex-col justify-start gap-4'>
          <h1 className='md:leading-[42px] py-2 text-3xl font-semibold text-yellow-200'>
            About Cape Archives
          </h1>
          <p className='text-white text-2x1'>
          Our guides are all qualified and have professional driving licenses. They are also friends, brothers, sisters and colleagues we have worked with during the beginning of our careers before we became a registered business. It is through the efforts of these guides that we have been able to grow exponentially beyond our expectations since 2018.

Our vehicles are all permitted and insured to transport tourists from one place to another. We also do outsource permitted vehicles from our sister companies whenever there is a need for more. We do not brand our vehicles as we lean more towards an authentic experience that has as much less a touristy feeling as possible.
          </p>
          <h1 className='md:leading-[42px] py-2 text-3xl font-semibold text-yellow-200'>
            Our Goal
          </h1>
          <p className='text-white text-2x1'>
          Our goal is to always keep on providing the most authentic tours in the safest manner possible and at the same time provide a much-needed boost in the 3rd class economy of Southern Africa. We also hope for a self-sustainable living at a larger scale and plan on preparing a safer environment for children by taking part in sponsoring early childhood development schools in the townships of Southern Africa.
          </p>
        </div>
        <div className="justify-center items-center py-8">
  <img src={Achieve} alt="hero" className='md:order-last m-auto order-first rounded-lg mt-4' style={{ maxHeight: '500px' }} />
</div>

      </div>
    </section>
  );
}

export default Achievement;
