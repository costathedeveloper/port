import React from "react";
import Zimdest from "../components/Zimdest";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Zimsafari from "../components/Zimsafari";
import Zimanimalslider from "../components/Zimanimalslider";
import Zimhero from "../components/Zimhero";
import Safaricard from "../components/Safaricard";

const Zimbabwe=()=>{
    return(
        <div className="bg-[#483C32]">
        <Zimhero />
        <Zimdest />
        <Safaricard 
        backgroundImage="/assets/images/wildlifeback.jpg"
        title="Experience the Safari Wildlife"
        subtitle="It’s wild out there. Go prepared."
        description="Embark on an adventure into the heart of the savannah with our safari wildlife collection. Witness the majestic lions, graceful giraffes, and elusive cheetahs in their natural habitat. Gear up with our safari-inspired apparel and accessories, crafted to withstand the rugged conditions of the wilderness. From sunrise safaris to starlit nights, make memories that will last a lifetime."
        />
        <Zimsafari />
        <Zimanimalslider />
        <Testimonials />
        <CTA />
        <Footer />
        </div>
    );
};

export default Zimbabwe;