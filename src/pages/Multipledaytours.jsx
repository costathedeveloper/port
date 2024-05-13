import React from "react";
import Toursabout from "../components/Toursabout";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Breadcrumb from "../components/Common/Breadcrumb";
import Multipledaytour from "../components/Tours/Multipledaytour";


const Multipledaytours=()=>{
    return(
        <>
         <Breadcrumb 
    pageName="Multiple Day Tours"
    description="Our Tours"
    />
        <Toursabout />
        <Multipledaytour />
        <Explore />
        <CTA />
        <Footer />
        </>
    )
}

export default Multipledaytours;