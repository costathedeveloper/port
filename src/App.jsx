
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Travelguide from "./pages/Travel-guide";
import Header from "./components/Navbar/Header";
import SouthAfrica from "./pages/SouthAfrica";
import Contact from "./pages/Contact";
import Zimbabwe from "./pages/Zimbabwe";
import Alltours from "./pages/Alltours";
import Multipledaytours from "./pages/Multipledaytours";
import Gardenroutetours from "./pages/Gardenroutetours";
import Safari from "./pages/Safari";
import Halfdaytours from "./pages/Halfdaytours";
import Transfers from "./pages/Transfers";
import Fulldaytours from "./pages/Fulldaytours";
import Journeys from "./pages/Journeys";
import Namibia from "./pages/Namibia";
import Bloga from "./pages/Blog1";
import Capetown from "./pages/Capetown";
import DestinationsDetailSection from "./pages/DestinationsDetails";
import Aquila from "./components/CapeTown/Aquila";
import Tablemountain from "./components/CapeTown/Table-mountain";
import Kirstenbosch from "./components/CapeTown/KirstenboschbotanicalGardens";
import Victoriaandalfred from "./components/CapeTown/Victoriaandalfred";
import Capeofgoodhope from "./components/CapeTown/Capeofgoodhope";
import Destinations from "./components/Sasafari/Destinations";
import Pilanesberg from "./components/Sasafari/Pilanesberg";
import Sabisand from "./components/Sasafari/Sabisand";
import Hazyview from "./components/Sasafari/Hazyview";
import Timbavati from "./components/Sasafari/Timbavati";
import Sasafari from "./pages/Sasafari";
import GardenRoute from "./pages/GardenRoute";
import Knysna from "./components/GardenRoute/Knysna";
import Oudtshoorn from "./components/GardenRoute/Oudtshoord";
import George from "./components/GardenRoute/George";
import Tsitsikamma from "./components/GardenRoute/Tsitsikamma";
import Bloukrans from "./components/GardenRoute/Bloukrans";
import Besttime from "./components/TravelGuide/Besttime";
import Howtogetthere from "./components/TravelGuide/Howtogetthere";
import Accomodation from "./components/TravelGuide/Accomodation";
import Blog from "./pages/Blogs/Blog";
import BlogDetailsPage from "./pages/Blogs/Blogdetails";


function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				
				<Route path="/Blogs" element={<Blogs />} />
				<Route path="/travel-guide" element={<Travelguide />} />
				<Route path="/south-africa" element={<SouthAfrica />} />
				<Route path="/SouthAfrica" element={<SouthAfrica />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/full-day-tours" element={<Fulldaytours/>} />
				<Route path="/zimbabwe" element={<Zimbabwe />} />
				<Route path="/all-tours" element={<Alltours />} />
				<Route path="/multiple-day-tours" element={<Multipledaytours />} />
				<Route path="/garden-route-tours" element={<Gardenroutetours />} />
				<Route path="/safari" element={<Safari />} />
				<Route path="/half-day-tours" element={<Halfdaytours />} />
				<Route path="/transfers" element={<Transfers />} />
				<Route path="journeys" element={<Blog />} />
				<Route path="/namibia" element={<Namibia />} />
				<Route path="/blog1" element={<Bloga />} />
				<Route path="/cape-town" element={<Capetown />} />
				<Route path="/destinationsdetails" element={<DestinationsDetailSection />} />
				<Route path="/aquila" element={<Aquila />} />
				<Route path="/table-mountain" element={<Tablemountain />} />
				<Route path="/kirstenbosch-botanical-gardens" element={<Kirstenbosch />} />
				<Route path="/victoria-and-alfred-waterfront" element={<Victoriaandalfred />} />
				<Route path="/cape-of-good-hope" element={<Capeofgoodhope />} />
				<Route path="/destinations" element={<Destinations />} />
				<Route path="/pilanesberg-national-park" element={<Pilanesberg />} />
				<Route path="/sabi-sand-game-reserve" element={<Sabisand />} />
				<Route path="/hazyview" element={<Hazyview />} />
				<Route path="/timbavati-private-nature-reserve" element={<Timbavati />} />
				<Route path="/sa-safari" element={<Sasafari />} />
				<Route path="/garden-route" element={<GardenRoute />} />
				<Route path="/knysna" element={<Knysna />} />
				<Route path="/oudtshoorn" element={<Oudtshoorn />} />
				<Route path="/george" element={<George />} />
				<Route path="/tsitsikamma-national-park" element={<Tsitsikamma />} />
				<Route path="/bloukrans" element={<Bloukrans />} />
				<Route path="/best-time-to-visit" element={<Besttime />} />
				<Route path="/how-to-get-there" element={<Howtogetthere />} />
				<Route path="/accommodation" element={<Accomodation />} />
				<Route path="/blogdetails" element={<BlogDetailsPage />} />

			</Routes>
		</Router>
	);
}

export default App;

