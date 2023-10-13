import React, { useEffect, useState } from "react";
import { Card } from "../1]firstPage/FeaturedProject";
import img1 from "../../assets/6-Featued Projects/image 17.png";
import { Link } from "react-router-dom";

const Projects = ({ projects, setInfo, query }) => {
  const [data, setData] = useState(projects.projects);

  useEffect(() => {
    // Filter the data when query changes
    console.log(query);
    console.log(data)
    if (query !== null) {
      const filteredData = projects.projects.filter((item) => {
        return (
          (query.status == "any" || query.status === item.state) &&
          (query.location == "any" || query.location === item.location)
        );
      });
  
      setData(filteredData);
    }
  }, [query, projects.projects]);
  
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 p-12 bg-generic">
        {data &&
          data.map((item, index) => (
            <Link to={"/project"} onClick={() => setInfo(item.id)}>
              <div>
                <Card
                  data={{
                    img: item.thumbnailImage,
                    heading: item.title,
                    address: item.location,
                  }}
                />
              </div>
            </Link>
          ))}
      </div>
      {/* hello */}
    </div>
  );
};

export default Projects;
