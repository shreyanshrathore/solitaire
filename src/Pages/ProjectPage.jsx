import React from "react";
import Nav from "../components/Nav";
import LandingCard, {
  Amenities,
  Gallery,
  Transport,
  VideoTour,
} from "../components/Project/LandingCard";
import { Status } from "../components/Project/LandingCard";
import { Overview } from "../components/Project/LandingCard";
import WantMore from "../components/1]firstPage/WantMore";
import Footer from "../components/1]firstPage/Footer";

const ProjectPage = () => {
  return (
    <div className="pt-[118px]">
      <LandingCard />
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[83%]">
          <Status />
          <Overview />
          <Gallery />
          <VideoTour />
          <Transport/>
          <Amenities/>
        </div>
      </div>
          <WantMore/>
          {/* <Footer/> */}
    </div>
  );
};

export default ProjectPage;
