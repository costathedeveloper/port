import React from "react";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('/assets/images/tour4.jpg')`}}>
      <div className="absolute inset-0 h-full w-full bg-blue-900/80" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            Discover Cape Archives Tours
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl text-shadow-lg">
            Explore the Untold Stories of Africa
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-shadow-sm"
          >
            Embark on an unforgettable journey through the rich history and cultural heritage of Africa with Cape Archives Tours. Join us and unlock the secrets of the past!
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
