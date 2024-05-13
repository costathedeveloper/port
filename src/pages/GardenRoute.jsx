import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Destinations1 from "../components/GardenRoute/Destinations1";
import KeyFeatures from "../components/Common/KeyFeatures";
import About from "../components/GardenRoute/About";
import Breadcrumb from "../components/Common/Breadcrumb";


const GardenRoute=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Garden Route"
    description="Garden Route Destinations"
    />
        <About />
        
        <Destinations1 />
        <Explore />
        <KeyFeatures />
        <CTA />
        <Footer />
        </>
    )
}

export default GardenRoute;