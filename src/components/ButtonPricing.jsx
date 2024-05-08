import React from "react";
import Data from "../constants";
import { FaFilter } from "react-icons/fa";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <div className="flex flex-wrap justify-center mb-4">
      {menuItems.map((Val, id) => {
        return (
          <button
            className="button-style bg-yellow-200 hover:bg-[#5B7553] focus:outline-none text-gray-800 font-semibold py-2 px-4 rounded-full mr-2 mb-2 transition-all duration-200 ease-in-out"
            onClick={() => filterItem(Val)}
            key={id}
          >
            <FaFilter className="inline mr-1" />
            {Val}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
