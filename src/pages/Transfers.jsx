import React from "react";
import Toursabout from "../components/Toursabout";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Transfer from "../components/Tours/Transfer";
import Breadcrumb from "../components/Common/Breadcrumb";


const Transfers=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Transfers"
    description="Our Tours"
    />
        <Toursabout />
        <Transfer />
        <Explore />
        <CTA />
        <Footer />
        </>
    )
}

export default Transfers;