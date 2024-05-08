import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Sabisand=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="THE SABI SANDS"
    description="THE SABI SANDS PRIVATE GAME RESERVE"
    />
    <BlogPost
        title="THE SABI SANDS PRIVATE GAME RESERVE"
        imageUrl={blogimg}
        content="The Sabi Sand Game Private was formed in 1934. It is located right next to the Kruger National park became part of the Greater Kruger National Park in 1993 when the fences were removed to encourage the free roaming of wildlife between the two parks again.

        The reserve offers a great variety of luxury and some affordable lodges to choose from plenty opportunity of game viewing of many different wildlife. The most frequently spotted animal being the leopard. The best advantage is that when on safari with a ranger they may drive off route to follow the leopards into the bush, which is not allowed on most reserves.
        
        The Sabi Sands Game reserve has three access gates and can be accessed by flight or by road. Shuttle or transfer flights are available from surrounding airports."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Sabisand;