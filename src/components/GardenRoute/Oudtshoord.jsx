import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Oudtshoorn=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="OUDTSHOORN"
    description="OUDTSHOORN"
    />
    <BlogPost
        title="OUDTSHOORN"
        imageUrl={blogimg}
        content="Oudtshoorn lies 1 hour north of what is loosely described as the “Garden route”. A trip there is considered to be a slight deviation from the popular Garden but one would not want to miss the different experiences and climate just a stone throws away from one of the most famous travel routes in the country. The Oudtshoorn Climate is semi-arid and vegetation is very sparse. Summers are hot and winters are cold which is a such a stark contrast compared to George Town that is only an hour South along the garden route. Oudtshoorn was establish as an Ostrich farming town. In the late 1800s, women of higher status are known to have spent more money on Ostrich feathers than gold and because of this, the town of Oudtshoorn became an important town and grew large. Today Oudtshoorn is very popular with visitors that comes in from the nearby Garden route. The Ostrich farms are one of the main attractions but also are the finest caves in the country known as the Cango Caves. The 20 million years old caves consist of many discovered and undiscovered chambers. Visitors get to take part in either one of the two offered activities, the heritage tour of the more difficult adventurous tour which ventures into smaller hidden chambers.

        Oudtshoorn also has great places to have a Karoo country style menu. Dishes at various restaurants includes Ostrich meat, local soups and malva pudding."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Oudtshoorn;