import React from "react";
import Nav from "../components/Nav";
import LandingCard, {
  Gallery,
  Transport,
  VideoTour,
} from "../components/Project/LandingCard";
import { Status } from "../components/Project/LandingCard";
import { Overview } from "../components/Project/LandingCard";

const ProjectPage = () => {
  return (
    <div>
      <LandingCard />
      <div className="flex justify-center">
        <div className="w-[83%]">
          <Status />
          <Overview />
          <Gallery />
          <VideoTour />
          <Transport/>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
