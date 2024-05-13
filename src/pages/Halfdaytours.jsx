import React from "react";
import Toursabout from "../components/Toursabout";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Breadcrumb from "../components/Common/Breadcrumb";
import Halfdaytour from "../components/Tours/Halfdaytour";


const Halfdaytours=()=>{
    return(
        <>
         <Breadcrumb 
    pageName="Half Day Tours"
    description="Our Tours"
    />
        <Toursabout />
        <Halfdaytour />
        <Explore />
        <CTA />
        <Footer />
        </>
    )
}

export default Halfdaytours;