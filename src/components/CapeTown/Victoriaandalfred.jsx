import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Victoriaandalfred=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="VICTORIA AND ALFRED"
    description="VICTORIA AND ALFRED WATERFRONT"
    />
    <BlogPost
        title="VICTORIA AND ALFRED WATERFRONT"
        imageUrl={blogimg}
        content="The Victoria and Alfred Waterfront is a mixed development 10 mins North west of the Cape town city center consisting of Shopping areas, hotels, an operational harbor and Aquarium. Distinctively known by the Ferris wheel dominating the skyline, visitors can buy a ticket to take the ride and enjoy the beautiful views of the city. If seeing the city from up top is not enough, visitors can also take a boat ride and have another beautiful view of the city from the sea side. For those on a trip to Roben Island, the ferry departs from East of the Ferris wheel at Nelson Mandela gateway. Roben Island visitors have to be at the Nelson Mandela gate way 30 minutes before departure. The watershed is also one of the most visited places at the waterfront. Lying just 7 minutes south of the Ferris wheel. Here different vendors sell different types of handmade souvenirs, local clothing brands and other south African bric-a-bracs. Guest may have to bargain to get a good price as it is at any informal market place. For food lovers, the V&A waterfront offers a range of casual to fine dining. Another god food stop is the popular V&A food shop where many different vendors sell different types of food under one roof."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Victoriaandalfred;