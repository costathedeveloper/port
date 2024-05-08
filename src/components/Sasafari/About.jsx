import React from "react";
import AboutSection from "../AboutSection";
import Imga from "/assets/images/train.jpg";

const About = () => {
    const highlights = [
        "Find Africa's Big Five in Kruger (Elephant, Lion, Rhino, Leopard and Buffalo)",
        "Spot diverse wildlife in Punda Maria Restcamp Waterhole",
        "Spot the white rhinos at the Wolhuter Trail",
        "Camping experience Nyalaland Wilderness Trail",
        "Taste a slice of wildness, remoteness, tranquillity, and eternal peace at Napi Wilderness Trail",
        "Luxurious stay in the deep wood at the Thornybush Game Reserve.",
    ];

    return (
        <AboutSection
            title="Places To Visit"
            subtitle="Kruger National Park"
            description="Nothing is more interesting than a Kruger National Park Safari. Stretching over an impressive 19,485 square kilometres, the Kruger National Park is one of Africa’s largest and most famous safari destinations. Kruger is renowned for its fine diversity of wildlife in South Africa Tours and provides some excellent game viewing in the world."
            seconddescription="Apart from the best Big Five sightings, Kruger National Park Tours also offers world-class accommodations, some of Africa’s best trackers and guides, and enthralling walking safaris."
            highlights={highlights}
            imgSrc={Imga}
        />
    );
};

export default About;
