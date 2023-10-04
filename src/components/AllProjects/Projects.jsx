import React from "react";
import { Card } from "../1]firstPage/FeaturedProject";
import img1 from "../../assets/6-Featued Projects/image 17.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const topLeftData = {
    img: img1,
    heading: "Sakar Sapphire City",
    address: "Bypass Nipania, Indore",
  };
  const data = [1, 2, 3];
  return (
    <div>
      <div className="flex flex-wrap bg-generic p-12 gap-8 justify-center">
        {data.map((item, index) => (
          <Link to={"/project"}>
            <div>
              <Card data={topLeftData} />
            </div>
          </Link>
        ))}
      </div>
      {/* hello */}
    </div>
  );
};

export default Projects;
