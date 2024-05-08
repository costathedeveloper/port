import React from "react";
import AboutSection from "./AboutSection";
import Imga from "/assets/images/train.jpg";

const Toursabout = () => {
    const highlights = [
        "Visit the Cape of Good Hope and see penguins on a full-day tour",
        "Go on Stellenbosch and Franschhoek Winelands tour",
        "Visit Cape Agulhas, the meeting place of 2 oceans",
        "Go on Whale Watching Tour In Hermanus",
        "Private Sightseeing Trip to the Cape Of Good Hope & Boulders Penguin Colony",
        "Go on a Hal-Day Township tour and cultural experience",
        "Visit the entire Cape Town with a 4-Day combo tour",
        "Take a 3 night entire Garden Route Tour"
    ];

    return (
        <AboutSection
            title="Places To Visit"
            subtitle="South Africa Tours"
            description="The entire country’s worth of greatness is concentrated in our gorgeous South Africa Tours & packages. South Africa bowls its visitors over with its plentiful natural splendour, fascinating wildlife, cosmopolitan cities and stunning beaches."
            seconddescription="Cape Town Destinations include vibrant landmarks such as Table Mountain and Cape Point. You will also fall in love with its stunning beaches, rich biodiversity, excellent food, and fine wine along with the plethora of Cape Town Tours & experiences."
            highlights={highlights}
            imgSrc={Imga}
        />
    );
};

export default Toursabout;
