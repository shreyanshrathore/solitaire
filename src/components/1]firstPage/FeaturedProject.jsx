import React from "react";
import Button from "../Button";

import img1 from "../../assets/6-Featued Projects/image 17 (1).png";
import img2 from "../../assets/6-Featued Projects/image 17.png";
import img3 from "../../assets/6-Featued Projects/image 18 (1).png";
import img4 from "../../assets/6-Featued Projects/image 18.png";
import img5 from "../../assets/6-Featued Projects/image 19.png";
import { Link } from "react-router-dom";

const FeaturedProject = ({ setInfo }) => {
  const buttonData = {
    button_color: "bg-white",
    border_color: "border-white",
    txt_col: "text-[#ED6664]",
    text_size: "text-lg",
    button_width: "w-36",
    button_height: "h-12",
    title: "View all projects",
  };

  const topLeftData = {
    img: img2,
    heading: "Sakar Sapphire City",
    address: "Bypass Nipania, Indore",
  };

  const topRightData = {
    img: img4,
    heading: "Sakar Hills & Resorts",
    address: "Ujjain Road, Indore",
  };

  const bottomLeftData = {
    img: img1,
    heading: "Sakar Corridor",
    address: "Super Corridor, Indore",
  };

  const bottomRightData = {
    img: img3,
    heading: "Sakar Real Life",
    address: "Simrol, Indore",
  };

  const centreData = {
    img: img5,
    heading: "Eiffel City",
    address: "Kanadia Road, Indore",
    id: 5,
  };
  return (
    <div className="bg-[#ED6664] py-12">
      <div className="flex flex-wrap justify-between w-full px-2 py-6 space-y-4 md:px-40">
        <h1 className="w-full text-5xl italic font-semibold text-center text-white font-base md:text-6xl md:text-left md:w-auto">
          Featured project
        </h1>
        <div className="flex justify-center w-full md:justify-normal md:w-auto">
          <Link to={"/allprojects"}>
            <Button props={buttonData} />
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-3 mt-12 h-max">
        <div className="flex flex-col justify-between space-y-6 ">
          <Link to={"/project"} onClick={() => setInfo(5)}>
            <Card data={topLeftData} height={"h-auto"} />
          </Link>
          <Link to={"/project"} onClick={() => setInfo(11)}>
            <Card data={bottomLeftData} height={"h-auto"} />
          </Link>
        </div>

        <div>
          <Link to={"/project"} onClick={() => setInfo(3)}>
            <Card data={centreData} height={"h-auto"} />
          </Link>
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <Link to={"/project"} onClick={() => setInfo(17)}>
            <Card data={topRightData} height={"h-auto"} />
          </Link>
          <Link to={"/project"} onClick={() => setInfo(8)}>
            <Card data={bottomRightData} height={"h-auto"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Card = ({ data, height }) => {
  return (
    <div>
      <div
        className={`w-auto lg:w-96 ${
          data.id ? "h-[880px]" : "h-auto"
        } bg-white p-3 `}
      >
        <div className="overflow-hidden">
          <img
            src={data.img}
            alt=""
            className={`${
              height ? height : "h-72"
            } object-cover object-center hover:scale-[1.20] transition-transform transform origin-center duration-300`}
          />
        </div>

        <h1 className="text-3xl italic font-semibold font-base text-generic">
          {data.heading}
        </h1>
        <p className="pb-4 mt-1 text-lg">{data.address}</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
