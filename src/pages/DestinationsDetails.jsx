import React from 'react';

const DestinationsDetailSection = () => {
  return (
    <section className="destinations-detail-section">
      <div className="auto-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upper Box */}
          <div className="upper-box">
            <div className="clearfix">
              <div className="pull-left">
                <h4>Aquila Private Game Reserve Capetown</h4>
              </div>
            </div>
          </div>
          {/* Content Column */}
          <div className="content-column">
            <p>
              Situated on a 10 000 hectares big farm and 2 hours north of Cape
              town. Aquila gives visitors the nearest safari experience for
              Cape town visitors. Not to be mistaken for a Safari, Aquila is
              only a game reserve with a mission to re-introduce the big 5 and
              some animals back into this part of South Africa after having
              suffered from extinction from the late 1400s.
            </p>
            <p>
              The climate here is semi-arid and with hot summers and cold
              winter mornings and nights. Day visitors from Cape town can go on
              a the 2 to 3 hours game drive that covers about half the size of
              the entire game reserve. After the game drive, all guest will be
              treated with an inclusive Bufe lunch and may also spend the rest
              of the day enjoying swimming or sunbathing. Aquila also has a
              5-star accommodation for visitors wanting to spend the night.
              Other range of activities includes safari on horseback or quad
              bike. There is also a Rhino foster care facility where guest may
              apply to take part in as volunteers. The application may be made
              directly through the Aquila website.
            </p>
            {/* Map Box */}
            <div className="map-box">
              <h5>Location</h5>
              {/* Map Outer */}
              <div className="map-outer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.200568006408!2d19.93357731791098!3d-33.35184408478599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb2653e042387%3A0x7c3970df74800ca0!2sAquila%20Private%20Game%20Reserve!5e0!3m2!1sen!2sin!4v1660902833342!5m2!1sen!2sin"
                  width="750"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Sidebar Column */}
          <div className="sidebar-column">
            <div className="inner-column">
              <h1></h1>
              {/* Follow Widget */}
              {/* Category Widget */}
              {/* Talk to Expert */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsDetailSection;
