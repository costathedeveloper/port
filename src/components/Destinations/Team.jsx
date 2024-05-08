import React from "react";
import team1 from "../../assets/img/gal3.jpg"
import team2 from "../../assets/img/gal3.jpg"
import team3 from "./images/team/team3.jpg";
import team4 from "../../assets/img/gal3.jpg"

const Team = () => {
  const teams = [team1, team2, team4];
  return (
    <section
      className="lg:h-[650px] py-6 lg:py-0 2xl:h-[800px] bg-teamBg bg-cover bg-no-repeat
        lg:mt-[5rem]">
      <div className="w-[90%] lg:w-[85%] mx-auto grid grid-cols-team gap-5">
        {teams.map((team, i) => (
          <div key={i} className="lg:mt-[-7rem] !z-30 w-full">
            <img
              className="w-full h-[23rem] 2xl:h-[30rem] object-cover rounded-lg"
              src={team}
              alt="teamImg"
            />
          </div>
        ))}
      </div>

      <div
        className="w-[90%] lg:w-[60%] mx-auto bg-blue-950/60 text-white mt-[3rem] p-4
        text-center flex flex-col gap-5 rounded-lg">
        <h1 className="text-2xl lg:text-5xl capitalize text-[#120309]">Meet Our Zimbabwean Experts</h1>
        <p className="2xl:text-lg">
          At Cape Archives Tours, our team is comprised of passionate Zimbabwean experts who are dedicated to showcasing the rich history, culture, and natural beauty of Zimbabwe. With their deep knowledge and enthusiasm, they are committed to providing you with unforgettable experiences that capture the essence of this incredible destination.
        </p>
        <p className="text-sm 2xl:text-lg">
          Join us as we embark on adventures across Zimbabwe, from the iconic Victoria Falls to the ancient ruins of Great Zimbabwe. Let our team of experts guide you through the wilderness of Hwange National Park and immerse you in the vibrant culture of Harare. Discover the wonders of Zimbabwe with Cape Archives Tours.
        </p>
      </div>
    </section>
  );
};

export default Team;
