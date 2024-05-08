import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Krugar = () => {
    return (
        <>
            <Breadcrumb
                pageName="Kruger National Park"
                description="Kruger National Park"
            />
            <BlogPost
                title="Kruger National Park"
                imageUrl={blogimg}
                content="his iconic park is one of Africa's largest game reserves, home to a vast array of wildlife, including the Big Five (lion, leopard, elephant, buffalo, and rhinoceros). You can explore the park through guided game drives, walking safaris, or self-drive options."
            />
            <Explore />
            <FAQ />
            <Footer />
        </>
    )
}

export default Krugar;