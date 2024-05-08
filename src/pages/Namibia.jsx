import React from "react";
import { motion } from "framer-motion";
import Gallery from "../components/Destinations/Gallery";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Heroabout from "../components/Heroabout";


const Namibia = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Heroabout />
      <Explore />
      <Gallery />
      <Footer />
    </motion.div>
  );
};

export default Namibia;
