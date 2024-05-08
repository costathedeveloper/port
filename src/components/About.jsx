'use client';

import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts';

import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 blackshedsb">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex-col flex justify-center items-center"
    >
      <TypingText title="| Cape Archives tours" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Traveling</span> opens up a world of experiences, 
        offering opportunities to immerse oneself in diverse cultures, cuisines, landscapes, and
         perspectives. It transcends boundaries, fostering personal growth, empathy, and understanding.
          Whether it's exploring ancient ruins, trekking through rugged mountains, or lounging on pristine beaches,
           each journey presents a chance for adventure and self-discovery. From bustling metropolises to remote villages, 
           every destination has its own story to tell, enriching travelers with memories that last a lifetime and shaping 
           their worldview in profound ways.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
