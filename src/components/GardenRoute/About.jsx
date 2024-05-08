import React from "react";
import AboutSection from "../AboutSection";
import Imga from "/assets/images/train.jpg";

const About = () => {
    const highlights = [
        "Shop and eat in excellent restaurants in V&A Waterfront",
        "Hiking trails and cable car in Table Mountain",
        "Spot the herds of rehabilitated elephants in Knysna Elephant Park",
        "Beautiful 4WD trip to Featherbed Nature Reserve",
        "See the stunning rock formation and magnificent views in Swartberg Pass",
        "Take an adventure tour to Congo Caves",
    ];

    return (
        <AboutSection
            title="Places To Visit"
            subtitle="Cape Town Destinations"
            description="Stretching around 200 kilometres of coast connecting Mossel Bay to the Storms River Mouth is generally considered the Garden Route. It is located just a few hours’ drive from Cape Town."
            seconddescription="Stretching around 200 kilometres of coast connecting Mossel Bay to the Storms River Mouth is generally considered the Garden Route. It is located just a few hours’ drive from Cape Town.
            Within our extensive Garden Route Destinations, you’ll find everything you need to know to make the most of your visit to one of the most stunning destinations on earth. Let’s explore Garden Route Tours today!"
            highlights={highlights}
            imgSrc={Imga}
        />
    );
};

export default About;
