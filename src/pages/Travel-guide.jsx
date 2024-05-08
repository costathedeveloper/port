import React from "react";
import FAQ from "../components/TravelGuide/FAQ";
import Footer from "../components/Footer";
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Explore from "../components/Explore";
import Hero from "../components/TravelGuide/Hero";
import Partners from "../components/Common/Partners";
import About from "../components/TravelGuide/About";
import Guides from "../components/TravelGuide/Guides";
import Breadcrumb from "../components/Common/Breadcrumb";

const Travelguide=()=>{
    return(
        <>
        <div className="travelback">
       
        <About />
        <Guides />
        <FAQ />
        <Explore />
        <Testimonials />
      <CTA />
      <Partners />
      <Footer />
      </div>
        </>
    );
};

export default Travelguide;

