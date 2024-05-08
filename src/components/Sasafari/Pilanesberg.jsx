import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Pilanesberg=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Pilanesberg"
    description="PILANESBERG NATIONAL PARK IN KRUGER"
    />
    <BlogPost
        title="PILANESBERG NATIONAL PARK IN KRUGER"
        imageUrl={blogimg}
        content="Pilanesberg National Park also known as Pilanesberg Game Reserve is the fourth largest Park in South Africa. The park is located in the North West province and just 3 hours’ drive from the city of Johannesburg. The park was formed in 1979 as a wildlife park and was named after the Tswana chief Pilane.

        The park offers an amazing view of the African landscape and is known for the interesting volcanic landscape as remnants of a volcanic explosion and lava flow can still bee se been to date. You can easily spot the Big 5 run freely. The park has a great variety of accommodation options and certainly has something for everyone, from luxury lodging to camping and caravan renting sites.
        
        Access to the park is easy as there are several entrance gates depending on the route you select to journey to the park. The drive from O.R Tambo international airport is about 2 hours into the park. Charter flights can also be arranged with your lodge for pick up from Johannesburg to Pilanesberg International airport."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Pilanesberg;