import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Achievement from '../components/Achievement';
import Abouthero from '../components/Abouthero';
import Aboutpage from '../components/Aboutpage';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Breadcrumb from '../components/Common/Breadcrumb';

const bgAnimate = {
  hidden: {
    clipPath: "polygon(21% 26%, 77% 26%, 77% 77%, 21% 77%)",
  },
  show: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      ease: "easeInOut",
      duration: 0.8,
      delay: 1,
    },
  }
};

const textAnimate1 = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
      staggerChildren: 0.4,
      delayChildren: 1,
    }
  }
};

const textAnimate2 = {
  hidden: {
    x: 0,
  },
  show: (i) => ({
    x: i,
    transition: {
      ease: 'easeOut',
      duration: 0.8,
    }
  })
};

const imageAnimate = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 3.6,
      ease: [0.25, 0.4, 0.25, 1],
    }
  }
};

const imageAnimateChild = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut'
    }
  }
};

const navAnimate = {
  hidden: {
    y: "-110%",
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      delay: 2,
    }
  }
};

const textParagraph = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      delay: 2.8,
    }
  }
};

export default function Home() {
  return (
    <>
    <Breadcrumb 
    pageName="About Us"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
    />
      <Aboutpage />
      <Abouthero />
      <Achievement />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
      
    </>
  );
}
