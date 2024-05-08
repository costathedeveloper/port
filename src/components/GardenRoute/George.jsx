import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const George=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="George "
    description="George"
    />
    <BlogPost
        title="George"
        imageUrl={blogimg}
        content="George is considered to be the capital city of the garden route. Sitting below the Outeniqua mountains and measuring 77,4 square kilometers in area, it is the largest town on the garden route. Before the arrival of Europeans, George was inhabited by the native Khoi people. Several landmarks such as the Outeniqua mountains were named after the almost extinct Khoikhoi languages. Upon the arrival of the Europeans here, the town began to function as a timber town due to the high demand in timber for building houses and ships and thus the town grew larger. George has a population of about 177 00 people today. George is today known as a golfing city. Some of the best golf courses in the country are found here. George is also the only town in South Africa where hops can be grown for the production of beer."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default George;