import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Destinations/Banner";
import About from "../components/Destinations/About";
import Expedition from "../components/Destinations/Expedition";
import Team from "../components/Destinations/Team";
import Gallery from "../components/Destinations/Gallery";
import Explore from "../components/Explore";
import Footer from "../components/Footer";

const SouthAfrica = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#120309]"
    >
      <Banner />
      <About />
      <Expedition />
      <Team />
      <Explore />
      <Gallery />
      <Footer />
    </motion.div>
  );
};

export default SouthAfrica;
