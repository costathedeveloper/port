import React from "react";
import Toursabout from "../components/Toursabout";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Alltour from "../components/Tours/Alltour";
import Breadcrumb from "../components/Common/Breadcrumb";


const Alltours=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="All Tours"
    description="Our Tours"
    />
        <Toursabout />
        <Alltour />
        <Explore />
        <CTA />
        <Footer />
        </>
    )
}

export default Alltours;