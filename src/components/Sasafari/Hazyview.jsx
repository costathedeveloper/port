import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Hazyview=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Hazyview"
    description="Hazyview"
    />
    <BlogPost
        title="Hazyview"
        imageUrl={blogimg}
        content="Hazyview is a small town just 10 km from Kruger national park and on a crossroads where several major roads that lead to different tourist attractions, converge. The town was founded by a builder named Perry in the early 1900’s. The town was later promulgated in the late 1950’s and now has over 300 shops and 80 accommodations establishments. The town is a tourism hub and a thriving farming community, from coffee to mangoes and avocados to citrus fruits, to name a few and not forgetting it’s famous bananas.

        Depending on traffic it will take about 45 minutes to an hours ride to get from Kruger Mpumalanga airport. And daily flights from Johannesburg, Durban and Cape Town into Kruger Mpumalanga airport, making access easy and of course there’s always the option to travel by road."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Hazyview;