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
import projects from '../components/AllProjects/allproject.json'

const ProjectPage = ({info}) => {
  info = projects.projects[info-1];
  projects && console.log(projects.projects[0])
  return (
    <div className="pt-[118px]">
      <LandingCard info = {info}/>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[83%]">
          <Status info = {info} />
          <Overview info = {info} />
          <Gallery info = {info}/>
          <VideoTour info = {info}/>
          <Transport info = {info}/>
          <Amenities info = {info}/>
        </div>
      </div>
          <WantMore/>
          {/* <Footer/> */}
    </div>
  );
};

export default ProjectPage;
