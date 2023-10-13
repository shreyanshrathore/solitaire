import React from "react";
import sideImage from "../../assets/2-Ourmission/image 24.png";
import Button from "../Button";
import bghut from "../../assets/1-landing/bg-hut.svg";
import { Link } from "react-router-dom";

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
    //       <div className="flex flex-wrap items-center justify-between w-full">

    //         <div className="flex justify-center w-full md:w-80 ">
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
      <div className="md:h-[750px] flex flex-col md:flex-row z-40">
        <div className="flex justify-center w-full py-12 md:w-1/2 md:px-12">
          <img
            className="object-cover object-center w-80 h-72 md:w-min md:h-min md:ml-20"
            src={sideImage}
            alt=""
          />
        </div>

        <div className="w-full md:w-1/2 md:flex-col md:py-44 md:pl-20">
          <div className="">
            <h1 className="px-4 text-5xl italic font-bold text-center text-white md:text-7xl md:text-left font-base">
              Our Mission
            </h1>
          </div>
          <div className="">
            <h2 className="px-4 text-3xl italic font-normal text-center text-white md:text-6xl md:pr-2 md:py-6 md:text-left font-base">
              To be the most trusted name in real estate globally
            </h2>
          </div>

          <div className="py-2">
            <p className="px-4 text-xl font-thin text-center text-white md:text-left md:text-3xl md:pr-24 font-base">
              We continuously strive to provide the best living experience.
              Today, better than yesterday. Tomorrow, better than today. By
              developing landmark buildings and expansive residences in record
              time, ensuring the most fulfilling lives to their occupants.
            </p>
          </div>

          <div className="flex justify-center px-4 py-4 md:justify-start">
            <Link to={"/aboutus"}>
              <Button props={buttonData} />
            </Link>
          </div>

          {/* <div className="mr-48 space-y-4 text-white font-base ">
          <h1 className="font-bold text-7xl">Our Mission</h1>
          <div>
            <h2 className="text-5xl italic">
              To be most Trusted name in real estate globally
            </h2>

            <p className="mt-4 text-xl">
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
