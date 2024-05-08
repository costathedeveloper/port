import React from 'react';
import Guidesabout from './Guidesabout';
import Breadcrumb from '../Common/Breadcrumb';
import WeatherTable from './Weathertable';
import Footer from '../Footer';
import FAQ from './FAQ';

const Howtogetthere = () => {
    return (
       <>
       <Breadcrumb
           
                description="GETTING INTO CAPE TOWN"
            />
       <Guidesabout
    title="Explore"
    subTitle="GETTING INTO CAPE TOWN"
    description="The best mode of transportation to find out how to Getting Into Cape Town is via flights. Cape Town is the second most visited city in South Africa when it comes to tourism, right after Johannesburg.

    The Mother City, Cape Town is located on the southern coast of South Africa’s Western Cape Province. The easiest route to get into Cape Town is by air to Cape Town International Airport (CPT). It is located around 18km from the city center.
    
    To provide tourists with the best transportation service, Cape Town Tours offer very well transport connectivity via air with the rest of the World. It has also excellent air travel facilities available with other cities of South Africa as well.
    
    However, in the earlier time, people used to travel via ships carrying cargo and passengers both."
   
    imageSrc="/assets/images/about.jpg"
/>
<Howtogetthere />
<FAQ />
<Footer />


       </>
    );
}

export default Howtogetthere;
