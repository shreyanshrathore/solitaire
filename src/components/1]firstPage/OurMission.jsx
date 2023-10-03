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
    // <div className="mt-[-22px] relative overflow-hidden ">
    //   <div className="bg-[#9D0A17] h-auto md:h-[700px]">
    //     {/* <img className="md: h-[1100px] mb-20 mr-32" src={bghut} alt="" /> */}
    //     <div className="w-full md:ml-24 top-12">
    //       <div className="flex flex-wrap items-center w-full justify-between">

    //         <div className="w-full md:w-80 flex justify-center ">
    //           <img className="w-80 h-72 object-cover object-center md:h-[600px] md:w-auto" src={ sideImage } alt="" />
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-generic mt-[-50px] md:h-[750px] flex flex-col md:flex-row overflow-hidden relative ">
      <div className="absolute top-[-40px] left-0 z-0">
        <img className="h-[800px]" src={bghut} alt="" />
      </div>
      <div className="md:h-[750px] flex flex-col md:flex-row z-50">
        <div className="w-full md:w-1/2 flex justify-center py-12 md:px-12">
          <img
            className="w-80 h-72 md:w-min md:h-min md:ml-20 object-cover object-center"
            src={sideImage}
            alt=""
          />
        </div>

        <div className="w-full md:w-1/2 md:flex-col md:py-44 md:pl-20">
          <div className="">
            <h1 className="text-5xl md:text-7xl px-4 text-center md:text-left  text-white italic font-base font-bold">
              Our Mission
            </h1>
          </div>
          <div className="">
            <h2 className="text-3xl md:text-6xl md:pr-2 md:py-6 px-4 md:text-left text-white italic font-normal font-base text-center">
              To be the most trusted name in real estate globally
            </h2>
          </div>

          <div className="py-2">
            <p className="text-center md:text-left md:text-3xl text-xl font-thin text-white px-4 md:pr-24 font-base">
              We continuously strive to provide the best living experience.
              Today, better than yesterday. Tomorrow, better than today. By
              developing landmark buildings and expansive residences in record
              time, ensuring the most fulfilling lives to their occupants.
            </p>
          </div>

          <div className="flex justify-center md:justify-start px-4 py-4">
            <Button props={buttonData} />
          </div>

          {/* <div className="font-base text-white space-y-4 mr-48   ">
          <h1 className="text-7xl font-bold">Our Mission</h1>
          <div>
            <h2 className="text-5xl  italic">
              To be most Trusted name in real estate globally
            </h2>

            <p className="text-xl mt-4">
              We continuously strive to provide the best living experience.
              Today, better than yesterday. Tomorrow, better than today. By
              developing landmark buildings and expansive residences in record
              time, ensuring the most fulfilling lives to their occupants.
            </p>
            <div className="mt-12">
              <Button props={buttonData} />
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
