import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Video from "../components/Video";
import Breadcrumb from "../components/Common/Breadcrumb";
import BlogDetailsPage from "./PageDetails";
import Blogabout from "../components/Blogabout";


const Journeys=()=>{
    return(
        <>
       <Breadcrumb
        pageName="  Our Journey"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      
      <Video />
       <Blogabout />
      <BlogDetailsPage />
        <Explore />
        <CTA />
        <Footer />    
        </>
    )
}

export default Journeys;