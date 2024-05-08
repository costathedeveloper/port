import React from "react";
import { motion as m } from "framer-motion";
import HeadAnimation from "./Animation/HeadAnimation";
import ThreeDBanner from "./ThreeDbanner";

const Banner = () => {
  return (
    <div id="south-africa" className="relative w-full h-screen bg-banner bg-no-repeat bg-center bg-cover clip flex flex-col justify-center items-center text-center text-white">
      <ThreeDBanner /> {/* Add the 3D scene */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
        <div className="content">
          <h1 className="text-3xl md:text-6xl 2xl:text-8xl capitalize font-bold md:w-[44rem] 2xl:w-[73rem] px-4 mx-auto textShadow">
            <HeadAnimation text={"Discover The Wonders Of Africa With Cape Archives Tours"} />
          </h1>
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="md:w-[30rem] 2xl:w-[40rem] 2xl:text-2xl mx-auto mt-4 textShadow px-3 font-medium"
          >
            Explore Enchanting Destinations, Create Unforgettable Memories
          </m.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
