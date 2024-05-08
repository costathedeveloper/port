import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Destinations2 from "../components/CapeTown/Destinations2";
import KeyFeatures from "../components/Common/KeyFeatures";
import About from "../components/CapeTown/About";
import Breadcrumb from "../components/Common/Breadcrumb";


const Capetown=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Cape Town"
    description="Cape Town Destinations"
    />
        <About />
        <Destinations2 />
        <Explore />
        <KeyFeatures />
        <CTA />
        <Footer />
        </>
    )
}

export default Capetown;