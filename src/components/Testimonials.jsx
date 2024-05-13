import { motion } from 'framer-motion';
import { useState } from 'react';
import TestimonialImage01 from '/assets/images/testimonial-01.jpg';
import TestimonialImage02 from '/assets/images/testimonial-01.jpg';
import TestimonialImage03 from '/assets/images/testimonial-01.jpg';

export default function Testimonials() {
  // State to manage the selected testimonial
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      image: TestimonialImage01,
      text: "This tour was incredible!! Candy and Mabee made this amazing! The amount of history and cultural knowledge shared during the all day tour was fascinating and I fell in love with the Western Cape area and can’t wait to return!",
      author: "example",
      position: "Cape Town"
    },
    {
      id: 2,
      image: TestimonialImage02,
      text: "Fantastic tour!!Candice was a wonderful and knwoledgeable tourist guide, you can basically ask her anything!",
      author: "Example",
      position: "Cape Town"
    },
    {
      id: 3,
      image: TestimonialImage03,
      text: "Fantastic tour!!Candice was a wonderful and knwoledgeable tourist guide, you can basically ask her anything!",
      author: "Example",
      position: "Cape Town"
    },
    {
      id: 3,
      image: TestimonialImage03,
      text: "Fantastic tour!!Candice was a wonderful and knwoledgeable tourist guide, you can basically ask her anything!",
      author: "Example",
      position: "Cape Town"
    },
    {
      id: 3,
      image: TestimonialImage03,
      text: "Fantastic tour!!Candice was a wonderful and knwoledgeable tourist guide, you can basically ask her anything!",
      author: "Example",
      position: "Cape Town"
    },
    {
      id: 3,
      image: TestimonialImage03,
      text: "Fantastic tour!!Candice was a wonderful and knwoledgeable tourist guide, you can basically ask her anything!",
      author: "Example",
      position: "Cape Town"
    },
  ];

  // Function to handle testimonial selection style={{backgroundImage: "url('/assets/images/explore1.jpg')"}}
  const handleTestimonialSelect = (testimonial) => {
    setSelectedTestimonial(testimonial.id === selectedTestimonial ? null : testimonial.id);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="bg-cover bg-center bg-fixed bg-opacity-50 relative py-12 md:py-20 bg-zinc"
     
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4 text-white font-bold text-2xl">What Do Travellers Say About Us</h2>
          <p className="text-xl text-white">Travelers rave about their experiences with us, praising our knowledgeable guides and personalized attention. From passionate storytelling to meticulous planning, our tours exceed expectations at every turn. Join us and discover why our tours leave a lasting impression, as we elevate your travel experience with unforgettable adventures tailored just for you</p>
        </div>

        {/* Testimonials */}
        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="flex flex-col h-full p-6 bg-zinc rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleTestimonialSelect(testimonial)}
            >
              <div className="relative inline-flex flex-col mb-4">
                <img className="rounded-full" src={testimonial.image} width={48} height={48} alt={`Testimonial ${testimonial.id}`} />
                {testimonial.id === selectedTestimonial && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-full">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19 12a7 7 0 11-14 0 7 7 0 0114 0zM5.5 12a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm7-7a1 1 0 00-2 0v6a1 1 0 102 0V5zm-.5 11a.5.5 0 00-.5.5c0 .306.194.438.472.875.278.436.528.985.776 1.625.248.64.472 1.392.678 2.25H11a.5.5 0 100 1h1.222c-.018.85-.13 1.66-.336 2.375a29.81 29.81 0 00-.54 2.625H13a.5.5 0 100-1h-.556c-.206-.815-.417-1.66-.585-2.5-.17-.84-.337-1.65-.372-2.5H13a.5.5 0 100-1h-.34c.204-.862.443-1.734.706-2.625.263-.89.563-1.754.853-2.625.29-.87.57-1.73.81-2.375.24-.644.436-1.112.436-1.625a.5.5 0 00-.5-.5z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
              </div>
              <blockquote className="text-lg text-gray-400">{testimonial.text}</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">{testimonial.author}</cite> - <span className="text-purple-600">{testimonial.position}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
