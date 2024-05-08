import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Tsitsikamma=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="TSITSIKAMMA"
    description="TSITSIKAMMA NATIONAL PARK"
    />
    <BlogPost
        title="TSITSIKAMMA NATIONAL PARK"
        imageUrl={blogimg}
        content="Tsitsikamma national parks rest in the Tsitsikamma forest area, an indigenous forest that separates the 2 provinces of the Eastern Cape and the Western Cape. The national park is a big attraction to travelers along the garden route. A range of activities can be enjoyed here, from Hiking to the famous suspension bridge to kayaking up the Storm’s River gorge. Tsitsikamma also makes a great spot for birdlife watching, both coastal and land-based birds. From Tsitsikamma national park, you can also take a 15 minutes' drive to Tsitsikamma village where you could also enjoy another range of activities such as Zipline, tubing, Ezzi Scooter tours etc."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Tsitsikamma;