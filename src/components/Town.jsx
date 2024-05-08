import React from "react";

const Town = () => {
  return (
    <div className="relative h-screen w-screen top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 transform hover:scale-110" style={{ backgroundImage: "url('/assets/images/back.jpg')", backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
      {/* Background */}

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
        <h1 className="text-[#714423] text-4xl font-bold mb-8">Experience the Safari Wildlife</h1>
        <h2 className="text-[#714423]  text-2xl font-semibold mb-4">It’s wild out there. Go prepared.</h2>
        <p className="text-[#714423]  text-lg max-w-md text-center">Embark on an adventure into the heart of the savannah with our safari wildlife collection. Witness the majestic lions, graceful giraffes, and elusive cheetahs in their natural habitat. Gear up with our safari-inspired apparel and accessories, crafted to withstand the rugged conditions of the wilderness. From sunrise safaris to starlit nights, make memories that will last a lifetime.</p>
      </div>
    </div>
  );
};

export default Town;
