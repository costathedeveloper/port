import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import KeyFeatures from "../components/Common/KeyFeatures";
import About from "../components/Sasafari/About";
import Breadcrumb from "../components/Common/Breadcrumb";
import Destinations from "../components/Sasafari/Destinations";


const Sasafari=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Cape Town"
    description="Cape Town Destinations"
    />
        <About />
        <Destinations />
        <Explore />
        <KeyFeatures />
        <CTA />
        <Footer />
        </>
    )
}

export default Sasafari;