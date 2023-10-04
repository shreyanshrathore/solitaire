import React from "react";
import bg from "../../assets/AllProjects/allprojectsbg.png";

const LandingCard = () => {
  return (
    <div className="relative h-auto overflow-hidden flex justify-center">
      <img className="w-full" src={bg} alt="" />
      <div className="absolute bottom-20 text-4xl md:text-8xl font-base italic text-white">
        Projects
      </div>
    </div>
  );
};



export default LandingCard;
