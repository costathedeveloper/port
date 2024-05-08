import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Video from "./Video";
import Breadcrumb from "../components/Common/Breadcrumb";
import BlogDetailsPage from "./PageDetails";
import Blogabout from "../components/Blogabout";
import Blogb from "./Blogb";


const Bloga=()=>{
    return(
        <>
       <Breadcrumb
        pageName="  7 reasons to visit misty Cape Town during winter"
        description="Explore Cape Town's winter charm amidst misty Table Mountain. Swap crowds for adventure and culture. Find seven reasons to love rainy Cape Town."
      />
      
      <Video />
      <BlogDetailsPage />
        <Explore />
        <CTA />
        <Footer />    
        </>
    )
}

export default Bloga;