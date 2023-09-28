import React from "react";
import sideImage from "../../assets/2-Ourmission/image 24.png";
import Button from "../Button";
import bghut from "../../assets/1-landing/bg-hut.svg";

const OurMission = () => {
  const buttonData = {
    button_color: "bg-white",
    border_color: "border-white",
    txt_col: "text-generic",
    text_size: "text-lg",
    button_width: "w-32",
    button_height: "h-12",
    title: "View More",
  };

  return (
    <div className="mt-[-22px] relative overflow-hidden ">
      <div className="bg-[#9D0A17] h-[700px]">
        <img className="h-[1100px] mb-20 mr-32" src={bghut} alt="" />
        <div className=" absolute w-full ml-24 top-12">
          <div className="flex items-center w-full  justify-between">
            <div>
              <img className="h-[600px]" src={sideImage} alt="" />
            </div>

            <div className="font-base text-white w-[500px] space-y-4 mr-48">
              <h1 className="text-7xl font-bold">Our Mission</h1>
              <div>
                <h2 className="text-5xl  italic">
                  To be most Trusted name in real estate globally
                </h2>

                <p className="text-xl mt-4">
                  We continuously strive to provide the best living experience.
                  Today, better than yesterday. Tomorrow, better than today. By
                  developing landmark buildings and expansive residences in
                  record time, ensuring the most fulfilling lives to their
                  occupants.
                </p>
                <div className="mt-12">
                  <Button props={buttonData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
