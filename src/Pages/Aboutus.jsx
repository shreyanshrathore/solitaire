import React from "react";
import About, { Happiness, TwoCard } from "../components/Aboutus/About";
import OurMission from "../components/1]firstPage/OurMission";
import OurOfferings from "../components/1]firstPage/OurOfferings";


const Aboutus = () => {
  return (
    <div className="pt-28">
      <About />
      <OurMission/>
      <Happiness/>
      <OurOfferings/>
      <TwoCard/>
    </div>
  );
};



export default Aboutus;
