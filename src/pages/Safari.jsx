import React from "react";
import Toursabout from "../components/Toursabout";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Safarii from "../components/Tours/Safari";
import Breadcrumb from "../components/Common/Breadcrumb";


const Safari=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Safari Tours"
    description="Our Tours"
    />
        <Toursabout />
        <Safarii />
        <Explore />
        <CTA />
        <Footer />
        </>
    )
}

export default Safari;