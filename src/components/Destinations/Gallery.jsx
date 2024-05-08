import React from "react";
import mountain1 from "/assets/images/tour4.jpg";
import mountain2 from "/assets/images/tour20.jpg";
import mountain3 from "/assets/images/tour8.jpg";
import mountain4 from "/assets/images/explore5.jpg";

const Gallery = () => {
  const images = [mountain1, mountain2, mountain3, mountain4];
  return (
    <div className="grid grid-cols-team bg-blue-950">
      {images.map((img, i) => (
        <div key={i} className="cursor-pointer hover:opacity-50">
          <img
            className="w-full h-[16rem] 2xl:h-[22rem] object-cover"
            src={img}
            alt="galleryImg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
