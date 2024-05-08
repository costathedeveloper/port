import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Knysna=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="KNYSNA"
    description="Knysna"
    />
    <BlogPost
        title="Knysna PRIVATE GAME RESERVE CAPETOWN"
        imageUrl={blogimg}
        content="Knysna meaning ferns is a beautiful coastal town in the heart of the famous garden route, situated on a warm water estuary that is fed from the Knysna river. The estuary opens up to the Indian ocean after passing two large headlands that are known as the Knysna heads. The heads are frequented by visitors as they give you a beautiful view of the Knysna town. There are also long gold sandy beaches that runs along the Western head and are popular with surfers, swimmers and beach walkers. Knysna has a typical moderate garden route climate. Temperatures usually stays between 25- and 10-degree Celsius throughout the year. There are many activities that you can enjoy while in Knysna, from boat-based activities such as whale watching and the featherbed eco tour. Knysna is also well known for golfing. A few golf courses such as Pezula golf course, Simola golf course and Knysna golf course are known to be some of the best golf courses in the country.

        Knysna also hosts a number of annual events and you might need to plan your trip around them as they are a specialty. These events include the Knysna oyster festival, The Rastafarian earth festival and the Pink Lorie Mardi grass and arts festival."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Knysna;