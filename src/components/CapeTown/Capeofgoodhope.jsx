import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Capeofgoodhope=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="CAPE OF GOOD HOPE"
    description="CAPE OF GOOD HOPE"
    />
    <BlogPost
        title="CAPE OF GOOD HOPE"
        imageUrl={blogimg}
        content="One’s visit to Cape town is almost incomplete if you do not take a journey down south to witness the majestic and historic Cape of good hope. Famed the corner of Africa by the earliest sailors, the Cape of good hope is only the most South western point of Africa. Situated just 60km south of the sprawling city of Cape town, it is a beehive of activities such as hiking, fishing, birdwatching and sightseeing. Many white sandy beaches and tidal pools also make for nice hang out and swimming spots. There are also braai (barbecue) areas which are very popular with the locals during the summer holidays."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Capeofgoodhope;