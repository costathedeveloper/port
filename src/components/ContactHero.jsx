import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className='mb-40 mt-16 md:mt-20'> {/* Added margin-top for space below sticky navbar */}
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[url('https://tecdn.b-cdn.net/img/new/textures/full/142.jpg')] bg-center h-500px">
      </div>

      <div className="w-full mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
        <div className="text-center">
          <motion.div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0 2px 15px -3px rgba(0,0,0,0.07),0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-170px] backdrop-blur-[30px]">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              The best offer on the market <br /><span className="text-primary">for your business</span>
            </h1>
            <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0 4px 9px -4px #3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] dark:shadow-[0 4px 9px -4px rgba(59,113,202,0.5)] dark:hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] dark:focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] dark:active:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
            <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
