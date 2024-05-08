import React from "react";
import  {teamData} from "../constants";
import PageTitle from "./Pagetitle";
import TeamCard from "./Teamcard";
import {
  IconButton,
  
} from "@material-tailwind/react";

const Team = () => {
  return (
    <section className="px-8 pt-20 pb-48">
    <div className="container mx-auto">
      <PageTitle section="Our Team" heading="Here are our heroes">
        According to the National Oceanic and Atmospheric Administration,
        Ted, Scambos, NSIDClead scentist, puts the potentially record
        maximum.
      </PageTitle>
      <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
        {teamData.map(({ img, name, position, socials }) => (
          <TeamCard
            key={name}
            img={img}
            name={name}
            position={position}
            socials={
              <div className="flex items-center gap-2">
                {socials.map(({ color, name }) => (
                  <IconButton key={name} color={color} variant="text">
                    <i className={`fa-brands text-xl fa-${name}`} />
                  </IconButton>
                ))}
              </div>
            }
          />
        ))}
      </div>
    </div>
  </section>
  );
};
export default Team;
