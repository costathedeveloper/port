import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

function About() {
  return (
    <motion.section
      className="relative overflow-hidden pt-28 container mx-auto flex flex-col items-center px-4 md:px-12"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}on
    >
      <Typography variant="h6" className="text-center mb-2" color="orange">
        Cape Town Guide
      </Typography>
      <Typography variant="h3" className="text-center" color="white">
        Cape Town Travel Guide
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal text-white"
      >
        Planning is the key factor in your holiday trip! Timing is everything!
        Plan to Visit Cape Town according to your time and choice by following
        our Cape Town Travel Guide. These are based on our experts’ insights
        and on-the-ground knowledge of South Africa’s travel seasons.Cape Town is South Africa’s beautiful playground where time slows and
        life is savoured. Catch the action today during your Cape Town Tours.
        Whether you are dreaming of a Cape Winelands tour or tracking the
        African Penguins or simply relaxing on a pristine beach, our Cape Town
        Travel Guide will help you with how and where to do it.
      </Typography>
    </motion.section>
  );
}

export default About;
