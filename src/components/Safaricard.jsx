import React from "react";
import { motion } from "framer-motion";

const Safaricard = ({ backgroundImage, title, subtitle, description }) => {
  return (
    <motion.div
      className="relative h-screen w-screen top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      whileHover={{ scale: 1.1, rotateY: 5 }} // Add rotateY on hover
      transition={{ type: "spring", stiffness: 200 }}
    >
      {/* Background */}

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
        <motion.h1
          className="text-[#714423] text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        >
          {title}
        </motion.h1>
        <motion.h2
          className="text-[#714423] text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 100 }}
        >
          {subtitle}
        </motion.h2>
        <motion.p
          className="text-white text-lg max-w-md text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, type: "spring", stiffness: 100 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Safaricard;
