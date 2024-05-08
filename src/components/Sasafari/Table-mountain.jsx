import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogPost from "../Common/Blogdetails";
import blogimg from '/assets/images/about.jpg';
import Footer from "../Footer";
import FAQ from "../TravelGuide/FAQ";
import Explore from "../Explore";

const Tablemountain=()=>{
    return(
        <>
        <Breadcrumb 
    pageName="TABLE MOUNTAIN"
    description="TABLE MOUNTAIN NATIONAL PARK"
    />
    <BlogPost
        title="TABLE MOUNTAIN NATIONAL PARK"
        imageUrl={blogimg}
        content="Named Table Mountain because of its flat surface area resembling a table. Table Mountain is one of the oldest mountains in the world and also one of the most iconic features of Cape town. Standing at 1087 meters above sea level and creating a natural amphitheater of the city of Cape town, it is also one of the most visited places in South Africa. A cable car takes day visitors from the lower cable station to the summit of the flat table top mountain where a 360-degree view of the entire Cape town area can be seen. There are also a range of different hiking trails around Table Mountain and with the Plattekloof gorge being the most popular one. The smuts track or Skeleton gorge begins from the world-famous Kirstenbosch botanical garden and the Indian Venster which is rather more adventurous is recommended to be taken with a hiking tour guide who knows the route. Table Mountain is also home to wildlife and the richest floral kingdom in the world known as the Cape floral Kingdom. Animals that can be seen here especially by hikers includes antelopes, caracals, servals, bird life and lizards that calls this place home."
      />
      <Explore />
      <FAQ />
      <Footer />
        </>
    )
}

export default Tablemountain;