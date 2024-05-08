import React, { useState } from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. What are the top attractions to visit in South Africa?",
    desc: "South Africa offers a diverse range of attractions, including Table Mountain, Kruger National Park, Cape Winelands, Robben Island, and the Garden Route."
  },
  {
    title: "2. How do I get a visa to visit South Africa?",
    desc: "Visa requirements vary depending on your nationality. You can check with the nearest South African embassy or consulate for specific visa requirements."
  },
  {
    title: "3. What is the best time of year to visit South Africa?",
    desc: "The best time to visit South Africa depends on your interests and activities. Generally, the summer months (November to February) are popular for beach holidays and wildlife viewing, while the winter months (June to August) are ideal for safari experiences due to fewer crowds and better wildlife sightings."
  },
  {
    title: "4. Are there any safety concerns for tourists in South Africa?",
    desc: "While South Africa is a popular tourist destination, it's essential to exercise caution and be aware of your surroundings, especially in urban areas. Take common-sense precautions such as avoiding displaying valuables in public, staying in well-lit areas at night, and following local advice regarding safety."
  },
  {
    title: "5. What are some must-try South African dishes?",
    desc: "South Africa boasts a rich culinary heritage influenced by various cultures. Some must-try dishes include braai (barbecue), bobotie (minced meat baked with an egg-based topping), biltong (dried and seasoned meat), and pap (maize porridge)."
  },
  {
    title: "6. What are the best safari experiences in South Africa?",
    desc: "South Africa is home to numerous world-class safari destinations, including Kruger National Park, Madikwe Game Reserve, and Hluhluwe-iMfolozi Park. Visitors can enjoy game drives, guided walks, and luxury accommodations while experiencing the incredible diversity of wildlife."
  },
  {
    title: "7. Can I visit Robben Island, and how do I book a tour?",
    desc: "Yes, you can visit Robben Island, a UNESCO World Heritage Site famous for its history as a political prison during apartheid. To book a tour, you can visit the official Robben Island Museum website or book through authorized tour operators in Cape Town."
  },
  {
    title: "8. Are there any cultural festivals or events worth attending in South Africa?",
    desc: "South Africa hosts a variety of vibrant cultural festivals and events throughout the year. Some popular ones include the Cape Town International Jazz Festival, the Knysna Oyster Festival, the Durban July horse race, and the Soweto Wine & Lifestyle Festival."
  },
  {
    title: "9. What are the options for transportation within South Africa?",
    desc: "Travelers in South Africa can choose from various transportation options, including domestic flights, intercity buses, trains, and rental cars. Additionally, ride-hailing services such as Uber and Bolt are available in major cities."
  },
  {
    title: "10. Can I hike Table Mountain, and are there guided tours available?",
    desc: "Yes, Table Mountain offers several hiking trails catering to different fitness levels and preferences. While it's possible to hike independently, guided tours are available and recommended for safety and local insights. Be sure to check weather conditions and trail status before embarking on your hike."
  },
  // FAQs for Zimbabwe
  {
    title: "11. What are the visa requirements for visiting Zimbabwe?",
    desc: "Visa requirements for Zimbabwe vary depending on your nationality. Many nationalities can obtain a visa upon arrival at the airport or border, while others may need to apply in advance. It's advisable to check with the nearest Zimbabwean embassy or consulate for the most up-to-date information."
  },
  {
    title: "12. Is it safe to visit Victoria Falls, and what activities are available there?",
    desc: "Victoria Falls is a popular tourist destination known for its stunning natural beauty. While it's generally safe to visit, travelers should be cautious of petty theft and follow local safety guidelines. There are various activities available at Victoria Falls, including guided tours, bungee jumping, helicopter flights, and sunset cruises."
  },
  {
    title: "13. How can I experience a traditional Zimbabwean village?",
    desc: "Several tour operators in Zimbabwe offer cultural experiences that allow visitors to interact with local communities and experience traditional village life. These experiences often include guided tours, demonstrations of traditional crafts, and opportunities to participate in cultural activities and ceremonies."
  },
  {
    title: "14. What are the top national parks to explore in Zimbabwe?",
    desc: "Zimbabwe is home to several spectacular national parks, each offering unique wildlife experiences. Some of the top parks to explore include Hwange National Park, Mana Pools National Park, Matobo National Park, and Gonarezhou National Park."
  },
  {
    title: "15. Are there any UNESCO World Heritage Sites in Zimbabwe?",
    desc: "Yes, Zimbabwe boasts several UNESCO World Heritage Sites, including Victoria Falls, Great Zimbabwe National Monument, and the Matobo Hills. These sites are recognized for their cultural and historical significance and are must-visit destinations for travelers interested in history and heritage."
  },
  // FAQs for Botswana
  {
    title: "16. What are the best game reserves and national parks to visit in Botswana?",
    desc: "Botswana is renowned for its pristine wilderness areas. Some of the best game reserves and national parks to visit include Chobe National Park, Moremi Game Reserve, Okavango Delta, and Central Kalahari Game Reserve."
  },
  {
    title: "17. How do I arrange a safari tour in the Okavango Delta?",
    desc: "You can arrange a safari tour in the Okavango Delta through various tour operators and lodges. They offer a range of safari packages, including game drives, mokoro (traditional canoe) excursions, and walking safaris."
  },
  {
    title: "18. What is the weather like in Botswana throughout the year?",
    desc: "Botswana experiences a semi-arid climate characterized by hot, dry summers and mild winters. The best time to visit depends on your interests, with the dry winter months (May to October) being popular for wildlife viewing, and the wet summer months (November to April) offering excellent birdwatching and lush landscapes."
  },
  {
    title: "19. Are there any cultural or tribal experiences available for tourists in Botswana?",
    desc: "Yes, Botswana offers cultural experiences that allow visitors to interact with local communities and learn about traditional customs and lifestyles. Some options include visiting traditional villages, participating in cultural ceremonies and dances, and learning about indigenous crafts and skills."
  },
  {
    title: "20. Can I visit the Makgadikgadi Salt Pans, and what activities are available there?",
    desc: "Yes, the Makgadikgadi Salt Pans are a unique natural attraction in Botswana, offering otherworldly landscapes and opportunities for adventure. Visitors can enjoy activities such as quad biking, guided walks, meerkat encounters, and cultural experiences with the indigenous San people."
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" className="mb-4 text-yellow-200">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 text-white"
          >
            Welcome to the AI Conference 2023 FAQ section. We're here to
            address your most common queries and provide you with the
            information you need to make the most of your conference experience.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-white">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-white"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
