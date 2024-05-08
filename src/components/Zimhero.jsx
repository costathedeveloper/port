import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Zimhero = () => {
    return (
        <div className="relative">
            <div className="w-full md:w-1/4 bg-[#7D6E64] h-screen"></div>
            <nav className="absolute w-full top-0">
                <div className="w-11/12 md:w-4/5 mx-auto flex justify-between items-center p-5">
                    {/* Add your navigation content here */}
                </div>
            </nav>
            <div className="absolute top-0 w-full md:h-full flex justify-center items-center">
                <div className="w-full md:w-4/5 mt-20 md:m-auto flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        animate={{ y: [-500, 0] }}
                        transition={{ ease: "easeOut", duration: 2.5 }}
                        className="md:w-1/2 md:p-5 p-0 drop-shadow-2xl rounded-lg">
                        <img src="/assets/images/explore2.jpg" alt=""
                            className="w-full h-auto md:h-full object-cover rounded" />
                    </motion.div>
                    <motion.div
                        animate={{ x: [600, 0] }}
                        transition={{ ease: "easeOut", duration: 2.5 }}
                        className="md:w-1/3 p-4 text-black md:text-yellow-200 space-y-2">
                        <h1 className="text-6xl md:text-6xl font-bold">Zimbabwe Destinations</h1>
                        <p className="text-sm md:text-white text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis esse ab impedit, corrupti veritatis harum.</p>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-5 right-5 p-2 bg-black bg-opacity-50 rounded">
                <div className="flex items-center space-x-5 text-white">
                    <AiFillYoutube size={"2rem"} />
                    <AiFillInstagram size={"2rem"} />
                    <AiFillFacebook size={"2rem"} />
                </div>
            </div>
        </div>
    );
};

export default Zimhero;
