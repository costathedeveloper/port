import React from 'react';
import './keyfeatures.css';

const KeyFeatures = () => {
    return (
        <div className="features container mx-auto mt-8 py-8">
            <div className="container mx-auto">
                <div className="session-title">
                    <h2>Our Strongpoints Of Travel!</h2>
                </div>
                <div className="ker-featur-row flex flex-wrap">
                    <div data-aos="fade-right" data-aos-duration="1500" className="col-md-4 featurecol feature-left w-full md:w-1/3">
                        <div className="single-feature">
                            <div className="detail">
                                <h6 className="text-xl font-bold">Experienced Guides</h6>
                                <p>Expect the best standard of services from our knowledgeable guides who’ll be alongside your tour – ready to share their experiences and guide you to the best spots in South Africa!</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-user-tie"></i>
                            </div>
                        </div>
                        <div className="single-feature">
                            <div className="detail">
                                <h6 className="text-xl font-bold">Value for Money</h6>
                                <p>Our itineraries are made with a focus on offering the best experience at a reasonable price.Our itineraries are made with a focus on offering the best experience at a reasonable price.</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                        </div>
                        <div className="single-feature">
                            <div className="detail">
                                <h6 className="text-xl font-bold">Lovely South African Destinations</h6>
                                <p>Discover gorgeous sceneries, colourful streets and picturesque orange sunsets!</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 featur-image w-full md:w-1/3">
                        <img src="/assets/images/features.png" alt="" className='rounded-lg'/>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="col-md-4 featurecol feature-right w-full md:w-1/3">
                        <div className="single-feature">
                            <div className="icon">
                                <i className="fas fa-camera"></i>
                            </div>
                            <div className="detail">
                                <h6 className="text-xl font-bold">The Perfect Guided Tours Experience!</h6>
                                <p>Everything is packed in a guided tour – cultural programmes, sightseeing, and city tours!</p>
                            </div>
                        </div>
                        <div className="single-feature">
                            <div className="icon">
                                <i className="fas fa-headset"></i>
                            </div>
                            <div className="detail">
                                <h6 className="text-xl font-bold">Support Team</h6>
                                <p>Dealing with any issues or facing some difficulties? – Don’t worry, our support team are ready to assist you regarding any aspect of your travel!</p>
                            </div>
                        </div>
                        <div className="single-feature">
                            <div className="icon">
                                <i className="fas fa-compass"></i>
                            </div>
                            <div className="detail">
                                <h6 className="text-xl font-bold">Passionate Travel</h6>
                                <p>Passionate about travelling? This is what we’re specifically looking for – travellers who have an enthusiasm for travel. This way we can make sure to offer you the best South African experience that you hope for.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;
