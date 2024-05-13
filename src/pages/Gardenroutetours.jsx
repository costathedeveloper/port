import React from "react";
import Toursabout from "../components/Toursabout";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Gardenroutetour from "../components/Tours/Gardenroutetour";
import Breadcrumb from "../components/Common/Breadcrumb";



const Gardenroutetours=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Garden Route Tours"
    description="Our Tours"
    />
        <Toursabout />
        <Gardenroutetour />
        <Explore />
        <CTA />
        <Footer />
        </>
    )
}

export default Gardenroutetours;