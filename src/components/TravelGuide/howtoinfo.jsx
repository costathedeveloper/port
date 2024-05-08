import React from 'react';

const FlightTimeTable = () => {
  return (
    <table className="border border-black w-full mb-8">
      <thead>
        <tr className="border-b border-black">
          <th className="text-center border-r border-black">Destinations</th>
          <th className="text-center border-r border-black">Time Duration</th>
          <th className="text-center">Flight Costs</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-black">
          <td className="text-center border-r border-black">London to Cape Town</td>
          <td className="text-center border-r border-black">11 hrs. 35 min, direct flight</td>
          <td className="text-center">$1.080</td>
        </tr>
        <tr className="border-b border-black">
          <td className="text-center border-r border-black">Paris to Cape Town</td>
          <td className="text-center border-r border-black">13 hrs. 45 min, connecting flight</td>
          <td className="text-center">$896</td>
        </tr>
        <tr className="border-b border-black">
          <td className="text-center border-r border-black">New York to Cape Town</td>
          <td className="text-center border-r border-black">18 hrs. 5 min, connecting flight</td>
          <td className="text-center">$1.400</td>
        </tr>
        <tr className="border-b border-black">
          <td className="text-center border-r border-black">Los Angeles to Cape Town</td>
          <td className="text-center border-r border-black">21 hrs. 15 min, connecting flight</td>
          <td className="text-center">$1.480</td>
        </tr>
        <tr className="border-b border-black">
          <td className="text-center border-r border-black">San Francisco to Cape Town</td>
          <td className="text-center border-r border-black">19 hrs. 47 min, connecting flight</td>
          <td className="text-center">$1,481</td>
        </tr>
        <tr className="border-b border-black">
          <td className="text-center border-r border-black">Toronto to Cape Town</td>
          <td className="text-center border-r border-black">18 hrs. 20 min, connecting flight</td>
          <td className="text-center">$832</td>
        </tr>
        <tr className="border-b border-black">
          <td className="text-center border-r border-black">Sydney to Cape Town</td>
          <td className="text-center border-r border-black">18 hrs. 15 min, connecting flight</td>
          <td className="text-center">$1,620</td>
        </tr>
      </tbody>
    </table>
  );
};

const ByAirSection = () => {
  return (
    <div>
      <h3 className="mb-4">By Air- Cape Town International Airport (CPT)</h3>
      <p>
        <strong>Cape Town International Airport</strong> (CPT) is located around 12 miles away from Mother City. It
        is the second busiest airport in <strong>South Africa</strong> and 4<sup>th</sup> busiest in Africa. From the
        airport, you can take a metered taxi to the city centre costs around R300 and R400.
      </p>
      <p>
        But if you want to <a href="https://capearchivestours.com/all-tours">Travel In Cape Town</a> at less price,
        the most cost-friendly way is to travel by MyCiti bus. It runs in a gap of every 20-30 minutes from the early
        morning until night.
      </p>
      <h4 className="mb-4">Flight times to Cape Town</h4>
      <FlightTimeTable />
    </div>
  );
};

const ByTrainSection = () => {
  return (
    <div>
      <h4 className="mb-4">By Train</h4>
      <p>
        The main station of Cape Town is connected with Johannesburg and Pretoria with daily trains. At the same time,
        it connected with Durban, Bloemfontein and East London with weekly trains.
      </p>
      <p>
        One of the most luxurious rails, the famous Blue Train runs between Pretoria and Cape Town on a long journey of
        around 27 hours.
      </p>
    </div>
  );
};

const ByRoadSection = () => {
  return (
    <div>
      <h4 className="mb-4">By Road</h4>
      <p>Cape Town is connected by three national roads-</p>
      <ul className="list-disc ml-8 mb-4">
        <li>N1- It connects the Mother City with Johannesburg, Bloemfontein, Pretoria and Zimbabwe.</li>
        <li>N2- It connects Cape Town with Port Elizabeth, Durban and East London.</li>
        <li>N7- it connects the city with Northern Cape Province and Namibia.</li>
      </ul>
      <p>
        There are multiple bus routes available for <a href="https://capearchivestours.com/all-tours">Cape Town
        Tour</a> along the above highways. So, one can easily run by operators like Greyhound, Translux, intercept
        Mainliner, and SA Roadlink.
      </p>
    </div>
  );
};

const PublicTransportSection = () => {
  return (
    <div>
      <h3 className="mb-4">Public Transport in Cape Town</h3>
      <h4 className="mb-4">Buses</h4>
      <p>
        Though there are many local buses and minibuses available to travel in Cape Town, the best option for visitors
        are the MyCiti buses.
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>MyCiti Bus links the city centre with Cape Town International Airport. Buses depart every 30 minutes
        between 5.00 am (early morning) and 9.00 pm (night). The cost of the bus is around R100.</li>
        <li>Another option to <strong>Travel In Cape Town</strong> is the City Sighting Bus. They also maintain scheduled stops at popular tourist destinations.</li>
        <li>The Red line covers the Northern part of Cape Town while the Blue Line covers all the way to Hout Bay in the South part of Cape Town.</li>
      </ul>
      <h4 className="mb-4">Taxi</h4>
      <p>You will find taxis easily outside of the airport. Your journey to central Cape Town from the airport takes
        around 20 minutes and the taxi fee is around R300.</p>
      <ul className="list-disc ml-8 mb-4">
        <li>Ubers are everywhere available in Cape Town. The best thing is that they are extremely safe and affordable. They also service the airport.</li>
        <li>If you don't have Uber while travelling, you can use some verified traditional taxi services. For example; Touch-Down Taxis is the authorized airport taxi service. So, while going on <strong>Cape Town Trip, </strong>travellers are suggested to use these authorized taxis to travel safely.</li>
      </ul>
    </div>
  );
};

const EntryExitRequirements = () => {
  return (
    <div>
      <h4 className="mb-4">Entry & Exit Requirements</h4>
      <ul className="list-disc ml-8 mb-4">
        <li>S. travellers need a valid passport with at least one blank visa page. However, there are two unstamped
          pages required indeed, one is for the South African temporary residence permit sticker and the other is for
          entry and exit stamps. So, without these blank pages, you may be refused entry to the country.</li>
        <li>Travellers who want to spend fewer than 90 days in South Africa do not need any visa.</li>
        <li>If you are travelling to South Africa via a yellow fever-based country, you need to present a valid Yellow Fever vaccination certificate approved by the World Health Organization.</li>
      </ul>
    </div>
  );
};

const Howtoinfo = () => {
  return (
    <div className="cp-time-new xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
      <ByAirSection />
      <ByTrainSection />
      <ByRoadSection />
      <PublicTransportSection />
      <EntryExitRequirements />
    </div>
  );
};

export default Howtoinfo;
