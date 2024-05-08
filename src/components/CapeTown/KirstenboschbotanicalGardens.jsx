import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Kirstenbosch=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="KIRSTENBOSCH BOTANICAL"
    description="KIRSTENBOSCH BOTANICAL GARDEN"
    />
    <BlogPost
        title="KIRSTENBOSCH BOTANICAL GARDEN"
        imageUrl={blogimg}
        content="Kirstenbosch botanical garden is a beautiful 70% cultivated and 30% natural garden designed to protect South Africa’s floral kingdom. It is the only garden in the world designed for such a purpose. There are About 8000 different plant species that can be found here of which most of them are endemic to South Africa and are listed among the world’s heritage site. The garden is easily accessible to visitors of all age either by hourly golf cart tours or on foot at your own pace. Many beautifully laid out pathways take visitors in different routes where they may have a close encounter with different types of plants. Kirstenbosch also has guides on site for visitors that wish to get an in-depth tour about the flora. If you decide to go alone without a guide and at your own pace, be sure not to miss out on the tree canopy walk way, the fragrance garden, the protea garden and the sculpture garden. Kirstenbosch botanical garden is also one of the best places to have picnics or an African inspired cuisine at Moyo restaurant. Should you be around Cape town in summer time, you might also want to attend the summer concerts that are held here every Sundays."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Kirstenbosch;