import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const AboutSection = ({ title, subtitle, description, highlights, imgSrc,seconddescription }) => {
    return (
        <section className="about-three py-24 px-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/2 md:w-full">
                        <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                            <div className="text-white font-bold text-yellow-200 ">{title}</div>
                            <h2 className="text-4xl font-bold mb-4"><span>{subtitle}</span></h2>
                            <p className="text-lg mb-8">{description}</p>
                            <p className="text-lg mb-8">{seconddescription}</p>
                            <div>
                                <h2 className="text-4xl font-bold mb-4">HIGHLIGHTS</h2>
                            </div>
                            <div className="flex flex-wrap">
                                {highlights.map((highlight, index) => (
                                    <div className="w-full md:w-1/2 mb-2" key={index}>
                                        <ul className="feature-list list-none">
                                            <li><i className="fas fa-check-circle text-yellow-200 mr-2"></i>{highlight}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-full p-4">
                        <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                            <div className="image-box">
                                <img src={imgSrc} alt="" className="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
