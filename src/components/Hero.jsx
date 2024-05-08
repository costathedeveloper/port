import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import HeadAnimation from "./Destinations/Animation/HeadAnimation";
import heroVideo from "/assets/videos/hero2.mp4"; // Path to your video file
import { FaMapMarkerAlt } from "react-icons/fa";


const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          key="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
        >
          <video autoPlay loop muted className="absolute inset-0 z-0 object-cover w-full h-full">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
          <div className="relative z-20">
            <div className="content">
              <h1 className="font-serif text-3xl md:text-4xl 2xl:text-5xl font-bold leading-tight text-white md:w-[44rem] 2xl:w-[73rem] px-4 mx-auto">
                <HeadAnimation text={"Plan Your Journey to Africa"} />
              </h1>
              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
                className="text-base md:text-lg 2xl:text-xl text-white mt-4"
              >
                <span className="mr-1">Explore the beauty of Africa with</span> Cape Archives Tours{" "}
                <FaMapMarkerAlt className="inline-block text-xl text-yellow-400" />
              </m.p>
              <m.p className="text-sm text-yellow-200 mt-2">Discover amazing destinations, cultural experiences, and more!</m.p>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;
