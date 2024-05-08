import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {  watchImg } from "../utils"

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding blackshedsb">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <div>
          <h1 id="title" className="section-heading">Get the highlights.</h1>
          <p className="mt-2">Join our Big 5 Safari for exciting encounters with Africa's iconic wildlife:
           the majestic lion, graceful elephant, elusive leopard, imposing rhinoceros, and steadfast buffalo.
            Immerse yourself in the breathtaking beauty of the African wilderness as you embark on this unforgettable
             adventure with us.<span className="link">Wacth Our Channel  <img src={watchImg} alt="watch" className="ml-2" /></span></p>
          </div>
         
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights