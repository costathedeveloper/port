import React from "react";
import Toursabout from "../components/Toursabout";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Breadcrumb from "../components/Common/Breadcrumb";
import FullDaytour from "../components/Tours/Fulldaytour";


const Fulldaytours=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Full Day Tours"
    description="Our Tours"
    />
        <Toursabout />
        <FullDaytour />
        <Explore />
        <CTA />
        <Footer />
        </>
    )
}

export default Fulldaytours;