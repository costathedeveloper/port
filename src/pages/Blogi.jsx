import React from "react";
import AboutSection from "./AboutSection";

const Toursabout = () => {
    const highlights = [
        "Honest Chocolate Cafe is an artisanal chocolate cafe located on Wale Street, open from Monday to Sunday. Indulge your sweet tooth with their delicious selections of hot chocolates, including Peanut Butter Bomb, Almond Chocolate Spread, and Biscoff.Patrons have the option of being seated in the outside courtyard or cosy inner cafe.",
        "Moro Gelato’s extra-thick hot chocolate is so decadent, that it’s served with a spoon and topped with homemade whipped cream. What could be more Italian than that? If you’re feeling adventurous, you could also sample one of their many flavours of gelato ice cream. Pop into one of their stores at Greenpoint, Sea Point, and Long Street.",
        "Coco Safar has become a Cape Town institution. Loved by tourists and locals alike, theSea Point restaurant offers experiences, from high tea to an all-day cafe to a patisserie. Their hot chocolate is made from scratch, using dark, milk, and white premium French Valrhona chocolate",
    ];

    return (
        <AboutSection
            highlights={highlights}
        />
    );
};

export default Toursabout;
