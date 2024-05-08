import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blog from "./Blog";

const Expedition = () => {
  const contentRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const animate = gsap.timeline({
      scrollTrigger: {
        trigger: ".about1",
        start: "top top",
        endTrigger: contentRef.current,
        end: "bottom center",
        toggleClass: { targets: ".about1", className: "active" },
      },
    });
    animate.from(contentRef.current, { opacity: 0, duration: 1 });
  }, []);

  return (
    <section className="overflow-hidden flex flex-col items-center justify-center">
      <div
        className="bg-mountain w-full h-[550px] 2xl:h-[900px] bg-no-repeat bg-cover bg-center
        lg:mt-28 flex items-end justify-center relative overflow-hidden md:overflow-visible"
      >
        <div className="text-white pb-2 text-center absolute bottom-6 md:bottom-0 !z-50 py-[7rem]">
          <h1 className="text-3xl 2xl:text-6xl font-bold capitalize py-4">
          Explore South Africa with Us
          </h1>
          <p className="px-6 lg:w-[60rem] 2xl:w-[85rem] mx-auto text-sm md:text-base 2xl:text-2xl">
          South Africa, a land of diverse landscapes and rich cultures, is a destination like no other. Nestled in the southern tip of Africa, South Africa offers a tapestry of experiences waiting to be explored.
          </p>
        </div>
      </div>
      <div>
        <Blog />
      </div>
    </section>
  );
};

export default Expedition;
