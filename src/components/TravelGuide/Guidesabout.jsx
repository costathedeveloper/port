import React from 'react';

const Guidesabout = ({ title, subTitle, description, experience, destinations, phoneNumber, imageSrc }) => {
    return (
        <section className="w-full flex justify-center bg-color5 h-auto">
            <div className="w-full container flex justify-between flex-wrap px-0 2xl:px-36 h-auto py-16 ">
                <div className="w-full lg:w-[50%]  bg-color px-5 ">
                    <p className="text-color4 uppercase">{title}</p>
                    <p className="text-color3 text-5xl font-bold uppercase font-secondary my-4" >{subTitle}</p>
                    <p className="text-color6">{description}</p>
                </div>
                <div className=" w-full lg:w-[50%]   flex flex-col justify-center items-center bg-color5 h-auto pb-8 lg:pb-0 mt-10 lg:mt-0 ">
                    <figure className="w-[70%] h-[500px] relative">
                        <div className="w-[100%] h-[100%] bg-zinc absolute left-8 top-8"></div>
                        <img src={imageSrc} alt="" className="w-[100%] h-[100%] absolute z-10 object-cover hover:scale-[.95] transition-all duration-500 rounded-lg"/>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Guidesabout;
