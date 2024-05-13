import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

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
                {item.map((item, index) => (
                    <div className="max-w-sm bg-zinc rounded-lg shadow relative" key={item.id}>
                        <div className="text-center">
                            <img src={item.img} alt={item.title} className="rounded-t-lg" />
                        </div>
                        <div className="p-5">
                            <Link to={`/details/${item.id}`} className="block">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    {item.title}
                                </h5>
                            </Link>
                            <h6 className="text-xl font-bold tracking-tight text-yellow-200">
                                {item.price}
                            </h6>
                            <p className="mb-3 font-normal text-gray-400">{item.desc}</p>
                            <p className="mb-3 font-normal text-white">{item.duration}</p>
                            <div className="flex justify-between mx-auto">
                                <Link
                                    to={`/details/${item.id}`}
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
                    </div>
                ))}
            </div>
            {showModal && selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full h-full overflow-y-auto relative">
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={closeModal}
                                className="text-gray-600 hover:text-gray-800"
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
                        
                        </div>
                        {/* Cart content goes here */}
                        <iframe
                            src={selectedItem.bookingWidgetURL}
                            title="Booking Widget"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
