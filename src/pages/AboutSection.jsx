import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const AboutSection = ({ highlights }) => {
    return (
        <section className="bg-black py-8 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2">
                        <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                            <ul className="w-full">
                                {highlights.map((highlight, index) => (
                                    <li className="flex items-center py-2" key={index}>
                                        <i className="fas fa-check-circle text-yellow-200 mr-2"></i>
                                        <span className="text-white">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
