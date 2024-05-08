
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

import About from '../components/About';
import Aboutpage from '../components/Aboutpage';
import Explore from '../components/Explore';
import Overview from '../components/Overview';
import  Pricing  from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Town from '../components/Town';
import CTA from '../components/CTA';
import Safaricard from '../components/Safaricard';

const Home = () => {
  return (
    <main className="bg-black">
      <Hero />
      <Aboutpage />
      <Pricing />
      <Highlights />
      <Safaricard
      backgroundImage="/assets/images/wildlifeback.jpg"
      title="Experience the Safari Wildlife"
      subtitle="It’s wild out there. Go prepared."
      description="Embark on an adventure into the heart of the savannah with our safari wildlife collection. Witness the majestic lions, graceful giraffes, and elusive cheetahs in their natural habitat. Gear up with our safari-inspired apparel and accessories, crafted to withstand the rugged conditions of the wilderness. From sunrise safaris to starlit nights, make memories that will last a lifetime."
      />
      <Overview />
      <Town />
      <Explore />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home;
