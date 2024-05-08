import React from "react";
import AboutSection from "../AboutSection";
import Imga from "/assets/images/train.jpg";

const About = () => {
    const highlights = [
        "Shop and eat in excellent restaurants in V&A Waterfront",
        "Hiking trails and cable car in Table Mountain",
        "See the Atlantic meets the Indian Ocean at the Cape Point",
        "Do scuba diving and experience shark sightings in the Two Ocean Aquarium",
        "Explore Kloof Street’s boutiques and coffee shops in the City Bowl.",
        "GClimb Lions Head at Sunrise and see the best views of Cape Town",
    ];

    return (
        <AboutSection
            title="Places To Visit"
            subtitle="Cape Town Destinations"
            description="Cape Town is one of South Africa’s three capital cities and the second most populous city in the country. Separated from the rest of Africa by a ring of mountains, Cape Town stands as a shimmering metropolis."
            seconddescription="Cape Town Destinations include vibrant landmarks such as Table Mountain and Cape Point. You will also fall in love with its stunning beaches, rich biodiversity, excellent food, and fine wine along with the plethora of Cape Town Tours & experiences."
            highlights={highlights}
            imgSrc={Imga}
        />
    );
};

export default About;
