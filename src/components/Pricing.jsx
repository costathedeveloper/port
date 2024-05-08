import React, { useState } from "react";
import Data from "../constants";
import Card from "./Card";
import Buttons from "./ButtonPricing";
import { TitleText } from "./CustomTexts";

const Pricing = () => {
  const popularDestinations = Data.filter((item) => item.category === "Popular Desitantions");
  const [item, setItem] = useState(popularDestinations);
  const menuItems = [...new Set(Data.map((item) => item.category))];
  
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="container-fluid py-8">
        <div className="justify-center mx-auto">
          <div>
            <TitleText
              title={(
                <>Don't Miss Your Chance
                </>
              )}
              textStyles="text-center"
            />
            <h1 className="text-center mb-4 mx-auto flex-wrap lg:text-[20px] font-bold text-white">Our Collection Of Popular Travel Itineraries</h1>
          </div>

          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default Pricing;
