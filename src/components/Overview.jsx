import React, { useRef } from 'react'
import { frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const Overview = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding blackshedsb">
      <div className="screen-max-width">
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                  Embark on thrilling adventures that ignite the soul and awaken the senses.
                   Experience the rush of adrenaline as you conquer rugged landscapes, delve into untamed wilderness,
                    and push the boundaries of exploration. From exhilarating treks through dense jungles to heart-pounding
                     encounters with wildlife, each adventure promises unforgettable moments and the chance to discover the
                      extraordinary in the world around you. Join us and let your spirit of adventure soar.
                  
                  </p>
                </div>
              

                <div className="flex-1 flex justify-center flex-col g_fadeIn">
  <p>Sight View with Cape Archives</p>
  <p className="hiw-text">Discovering Nature's Tapestry</p>
  <p className="hiw-text text-gray-600 italic">By Tendai Gumunyu</p>
</div>

              </div>
            </div>
    </section>
  )
}

export default Overview;