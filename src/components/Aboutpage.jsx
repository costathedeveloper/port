import React from "react";
import img from "/assets/images/tour8.jpg";
import pic1 from "../assets/img/service.png";
import pic2 from "../assets/img/user.png";
import pic3 from "../assets/img/wallet.png";
import { motion } from 'framer-motion';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const Aboutpage = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
     className=" min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14 mb-10">
      
      <div 
         className=" w-full lg:w-2/4">
        <div className=" space-y-4">
          <h1 className=" text-4xl font-medium text-center md:text-start leading-tight">
          The Premier South African-Based Travel Agency!
          </h1>
          <p>
          Experience means authenticity – We have 7 years of it! And we ensure that our clients reap those benefits. Our primary goal is to offer the topmost services professionally and safely.
          </p>
        </div>

        <div
        className="w-full lg:w-5/5 mt-10">
          <img
  className="rounded-xl shadow-[0_20px_50px_rgba(255, 255, 255, 0.7)]"
  src={img}
  alt="img"
/>
</div>
      </div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" w-full lg:w-2/4 space-y-10">
        <div className=" flex flex-row gap-5">
          <div className=" flex flex-row items-center w-24">
            <img src={pic1} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Friendly Service</h1>
            <p className=" text-[#898888]">
              We will provide excellent and friendly service for the sake of our
              customers.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className=" flex flex-row items-center w-28">
            <img src={pic2} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Unforgettable experience</h1>
            <p className=" text-[#898888]">
              We will provide excellent and Unforgettable experience for the
              sake of our customers.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className="flex flex-row items-center w-24">
            <img src={pic3} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Affordable prices</h1>
            <p className=" text-[#898888]">
              We will provide excellent and Affordable prices for the sake of
              our customers.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className="flex flex-row items-center w-24">
            <img src={pic3} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Expert Team for Support</h1>
            <p className=" text-[#898888]">
              We will provide excellent and Affordable prices for the sake of
              our customers.
            </p>
          </div>
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default Aboutpage;
