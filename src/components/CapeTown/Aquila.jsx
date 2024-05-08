import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Aquila=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="Aquila"
    description="AQUILA PRIVATE GAME RESERVE CAPETOWN"
    />
    <BlogPost
        title="AQUILA PRIVATE GAME RESERVE CAPETOWN"
        imageUrl={blogimg}
        content="Situated on a 10 000 hectares big farm and 2 hours north of Cape town. Aquila gives visitors the nearest safari experience for Cape town visitors. Not to be mistaken for a Safari, Aquila is only a game reserve with a mission to re-introduce the big 5 and some animals back into this part of South Africa after having suffered from extinction from the late 1400s.

        The climate here is semi-arid and with hot summers and cold winter mornings and nights. Day visitors from Cape town can go on a the 2 to 3 hours game drive that covers about half the size of the entire game reserve. After the game drive, all guest will be treated with an inclusive Bufe lunch and may also spend the rest of the day enjoying swimming or sunbathing. Aquila also has a 5-star accommodation for visitors wanting to spend the night. Other range of activities includes safari on horseback or quad bike. There is also a Rhino foster care facility where guest may apply to take part in as volunteers. The application may be made directly through the"
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Aquila;