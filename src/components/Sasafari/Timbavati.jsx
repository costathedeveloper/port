import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Timbavati=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="THE TIMBAVATI"
    description="THE TIMBAVATI PRIVATE NATURE RESERVE CAPETOWN"
    />
    <BlogPost
        title="THE TIMBAVATI PRIVATE NATURE RESERVE CAPETOWN"
        imageUrl={blogimg}
        content="The Timbavati Private Nature Reserve is situated on the western boundary of the Kruger National Park. It became part of the Greater Kruger National Park after dropping its fences in 1993. The reserve was established in the 1950s, with the intention to preserve the natural integrity of the land. It now protects many endangered species including black and white rhinoceros, pangolins, saddlebilled storks and many more, including the preservation of the fauna and flora of the lowveld.

        The Timbavati has multiple Safari lodges that offer a wide range of accommodation options which cater for both local and international tourists. It is also rich in history and is home to the amazing Graeme Naylor Museum. The Timbavati offers a great safari experience and because there are no fences between the Timbavati private nature reserve and the Kruger national park it means that the animals move around freely and there is a great chance of spotting the Big 5. The reserve has multiple packages that may be customised. To get to the Timbavati private nature reserve one can drive in or you can fly in to the closest airport and have a shuttle transfer."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Timbavati;