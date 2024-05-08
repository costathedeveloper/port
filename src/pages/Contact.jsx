import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Explore from "../components/Explore";
import Breadcrumb from "../components/Common/Breadcrumb";

const Contact = () => {
  return (
    <>
      <div>
       <Breadcrumb 
       pageName="Contact"
       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
       />
        <ContactForm />
        <Explore />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
