import React from "react";

const About = () => {
  return (
    <section className="py-12 about1 animate__animated animate__fadeIn">
      <div className="text-center">
        <span className="text-3xl 2xl:text-5xl">
          About South Africa
        </span>
      </div>

      <div className="w-11/12 lg:w-85 mx-auto flex flex-col md:flex-row gap-5 mt-10 text-center md:text-left text-sm 2xl:text-xl">
        <div className="flex-1 flex flex-col gap-2">
          <p>
            South Africa, a land of diverse landscapes and rich cultures, is a destination like no other. Situated at the southern tip of Africa, South Africa offers a myriad of experiences waiting to be discovered.
          </p>
          <p>
            From the majestic Table Mountain overlooking Cape Town to the expansive savannas of Kruger National Park, the country boasts a blend of natural wonders and cultural heritage that enthralls visitors from around the world.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <p>
            At Rainbow Adventures Tours, we are dedicated to showcasing the best of South Africa to our guests. Whether you're seeking adrenaline-pumping activities along the Garden Route, indulging in the flavors of South African cuisine in Johannesburg, or embarking on a safari adventure in the wild, we are here to ensure your South African journey is unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
