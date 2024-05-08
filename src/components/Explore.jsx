'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from './CustomTexts';
import ExploreCard from './ExploreCard'

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[80%] w-[100%] mx-auto flex flex-col"
      >
        <TypingText title="| Our Experiences" textStyles="text-center" />
        <p className='text-center text-[30px]'>
          Traveling transcends mere sightseeing; it's a journey encompassing people, culture, wildlife, history, 
          and novel experiences. With Cape Archives Tours, you'll traverse on foot, by boat, barge, or even through the skies,
           uncovering a realm of adventures waiting to be explored.
        </p>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
