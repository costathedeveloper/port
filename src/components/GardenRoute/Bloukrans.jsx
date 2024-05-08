import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Bloukrans=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="BLOUKRANS BUNGEE BRIDGE"
    description="Bloukrans Bungee Bridge"
    />
    <BlogPost
        title="Bloukrans Bungee Bridge"
        imageUrl={blogimg}
        content="Suspended at a height of 216m, it is the highest commercial bungee jumping bridge in the world. The bungee jumping activity is conducted by the renown Face adrenaline and at Bloukrans is the perfect place for anyone to face their fears. The jump from the free fall is about 60m deep and followed by 6 swings once the rope is finished. There is also an optional zipline from the entrance to the bridge to the bungee platform. There is also a restaurant at Bloukrans should one require to grab a bite."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Bloukrans;