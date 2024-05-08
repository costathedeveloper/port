import React from "react";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

function Partners() {
  return (
    <section className="relative py-8 px-8 lg:py-20">
      <div className="absolute inset-0 bg-blue-900/80 z-0" />
      <div className="container mx-auto text-center relative z-10">
      <Typography variant="h3" className="text-center" color="white">
        Our Valued Partners
      </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-8 mx-auto md:px-20 mt-4">
        In the vibrant realm of tourism, our cherished partnerships form an essential tapestry, woven with the threads of collaboration and shared purpose. Among our esteemed allies in this journey are prominent entities such as Coinbase, Spotify, Pinterest, Google, Amazon, and Netflix, each contributing their unique strengths to enrich and elevate the experiences we offer to travelers worldwide.
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <img
              key={key}
              src={`/logos/logo-${logo}.svg`}
              alt={logo}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
