import React from "react";
import Button from "../Button";

import img1 from "../../assets/6-Featued Projects/image 17 (1).png";
import img2 from "../../assets/6-Featued Projects/image 17.png";
import img3 from "../../assets/6-Featued Projects/image 18 (1).png";
import img4 from "../../assets/6-Featued Projects/image 18.png";
import img5 from "../../assets/6-Featued Projects/image 19.png";

const FeaturedProject = () => {
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
    img: img1,
    heading: "Sakar Sapphire City",
    address: "Bypass Nipania, Indore",
  };

  const topRightData = {
    img: img2,
    heading: "Sakar Hills & Resorts",
    address: "Ujjain Road, Indore",
  };

  const bottomLeftData = {
    img: img3,
    heading: "Sakar Corridor",
    address: "Super Corridor, Indore",
  };

  const bottomRightData = {
    img: img4,
    heading: "Sakar Real Life",
    address: "Simrol, Indore",
  };

  const centreData = {
    img: img5,
    heading: "Eiffel City",
    address: "Kanadia Road, Indore",
    id:5
  };
  return (
    <div className="bg-[#ED6664] py-12">
      <div className="flex w-full  px-40 justify-between py-6">
        <h1 className="font-base text-6xl text-white font-semibold italic">
          Featured project
        </h1>
        <Button props={buttonData} />
      </div>

      <div className="flex h-max justify-center gap-8 mt-12">
        <div className="flex flex-col  justify-between">
          <Card data={topLeftData} />
          <Card data={topRightData} />
        </div>

        <div className="h-[]">
          <Card data={centreData} />
        </div>

        <div className="flex flex-col justify-between">
          <Card data={bottomLeftData} />
          <Card data={bottomRightData} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div>
      <div className={`w-96 ${data.id? "h-[880px]":"h-[420px]"} bg-white p-3`}>
        <img src={data.img} alt="" />
        <h1 className="font-base text-3xl text-generic font-semibold italic">
          {data.heading}
        </h1>
        <p className="text-lg mt-1 pb-4">{data.address}</p>
      </div>
    </div>
  );
};

export default FeaturedProject;