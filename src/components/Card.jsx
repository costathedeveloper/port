import React, { useState } from "react";
import { useTrail, useTransition, animated, config } from "react-spring";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const trail = useTrail(item.length, {
        from: { opacity: 0, transform: "scale(0.8)" },
        to: { opacity: 1, transform: "scale(1)" },
        config: config.wobbly,
        delay: 200,
    });

    const transitions = useTransition(showModal && selectedItem, {
        from: { opacity: 0, transform: "translateY(-50%)" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0, transform: "translateY(-50%)" },
        config: config.stiff,
    });

    const openModal = (index) => {
        setShowModal(true);
        setSelectedItem(item[index]);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    return (
        <div className="container-fluid mb-8 relative z-50">
            <div className="flex flex-wrap justify-center mx-10 gap-8">
                {trail.map((props, index) => (
                    <animated.div
                        style={props}
                        className="max-w-sm bg-zinc rounded-lg shadow relative"
                        key={item[index].id}
                    >
                        <div className="text-center">
                            <animated.img
                                src={item[index].img}
                                alt={item[index].title}
                                className="rounded-t-lg"
                                style={{
                                    transform: props.transform,
                                    opacity: props.opacity,
                                }}
                            />
                        </div>
                        <div className="p-5">
                            <Link to={`/details/${item[index].id}`} className="block">
                                <animated.h5
                                    className="mb-2 text-2xl font-bold tracking-tight text-white"
                                    style={{
                                        transform: props.transform,
                                        opacity: props.opacity,
                                    }}
                                >
                                    {item[index].title}
                                </animated.h5>
                            </Link>
                            <animated.h6
                                className="text-xl font-bold tracking-tight text-yellow-200"
                                style={{
                                    transform: props.transform,
                                    opacity: props.opacity,
                                }}
                            >
                                {item[index].price}
                            </animated.h6>
                            <animated.p
                                className="mb-3 font-normal text-gray-400"
                                style={{
                                    transform: props.transform,
                                    opacity: props.opacity,
                                }}
                            >
                                {item[index].desc}
                            </animated.p>
                            <animated.p
                                className="mb-3 font-normal text-white"
                                style={{
                                    transform: props.transform,
                                    opacity: props.opacity,
                                }}
                            >
                                {item[index].duration}
                            </animated.p>
                            <div className="flex justify-between mx-auto">
                                <Link
                                    to={`/details/${item[index].id}`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-200 focus:ring-4 focus:outline-none focus:ring-zinc"
                                >
                                    VIEW DETAILS
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </Link>
                                <button
                                    onClick={() => openModal(index)}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-200 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-zinc"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </animated.div>
                ))}
            </div>
            {transitions((style, item) =>
                item ? (
                    <animated.div
                        style={style}
                        className="fixed inset-0 myindex flex items-center justify-center bg-opacity-75"
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-lg w-full h-full overflow-y-auto">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <iframe
                                src={selectedItem.bookingWidgetURL}
                                title="Booking Widget"
                                className="w-full h-full"
                            />
                        </div>
                    </animated.div>
                ) : null
            )}
        </div>
    );
};

export default Card;
