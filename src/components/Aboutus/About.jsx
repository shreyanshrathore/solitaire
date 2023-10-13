import React from "react";
import LandingCard from "../Project/LandingCard";
import bg from "../../assets/Aboutus/bg.png";
import decor from "../../assets/Aboutus/decor.png";
import decorLower from "../../assets/Aboutus/decor lower.png";
import Example from "./HorizontalScroll";

import upperleft from "../../assets/Aboutus/upperleft.png";
import upperright from "../../assets/Aboutus/upperright.png";
import lowerleft from "../../assets/Aboutus/lowerleft.png";
import lowerright from "../../assets/Aboutus/lowerright.png";

import card1 from "../../assets/Aboutus/card1.svg";
import card2 from "../../assets/Aboutus/card2.svg";
import Button from "../Button";

const item = {
  bg: bg,
  heading: "About Us",
};
const About = () => {
  return (
    <div>
      <LandingCard item={item} />
      <Info />
      <Example />
      {/* <TwoCard/> */}
      {/* <Fix /> */}
    </div>
  );
};

const Info = () => {
  const data = {
    heading: "Over 21+ years of experience",
    content: `With 21+ years of successful real estate development, We have succeeded in carving out a niche for ourself which is parellel 
        to none in the city. Every one of our project delivers the highest level of design and craftsmanship, uncompromising quality,
         and customer priority services – putting Solitaire Realty in the league of the finest.`,
  };
  return (
    <div className="space-y-12 text-white bg-generic font-base">
      <div className="flex justify-end">
        <img src={decor} alt="" />
      </div>
      <div className="px-8 space-y-8 md:px-32 lg:px-56">
        <h1 className="text-5xl italic text-center">{data.heading}</h1>
        <div className="text-xl text-center">{data.content}</div>
      </div>
      <div>
        <img src={decorLower} alt="" />
      </div>
    </div>
  );
};

export const Happiness = () => {
  return (
    <div className="py-4 space-y-4 lg:px-36">
      <h1 className="text-3xl italic font-semibold text-center font-base lg:text-left md:text-3xl lg:text-4xl text-generic">
        Where happiness lives
      </h1>

      <div className="text-lg text-gray-500 md:w-[900px] font-base text-center">
        Solitaire Realty stands for improving quality of life through enhancing
        living experience or money invested in our residential and commercial
        properties. Experience the fruitfulness through our projects.
      </div>
    </div>
  );
};

export const TwoCard = () => {

  const buttonData = {
    button_color: "bg-generic",
    border_color: "border-generic",
    txt_col: "text-white",
    text_size: "text-lg",
    button_width: "w-36",
    button_height: "h-12",
    title: "Explore More",
  };
  return (
    <div className="flex flex-wrap gap-12 py-12 md:flex-nowrap md:px-32 md:flex-row">
      <div className="bg-[#233C75] w-full h-96 relative">
        <img className="absolute top-0 left-0" src={upperleft} alt="" />
        <img className="absolute bottom-0 right-0" src={lowerright} alt="" />

        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <img src={card1} alt="" />
          <h1 className="text-4xl italic font-semibold text-white font-base">
            Invest in our project
          </h1>
          <p className="text-center text-white w-96">
            Investments in our projects have proven to be super fruitful for our
            inverstors providing upto 20x returns*
          </p>
          <div>
            <Button props = {buttonData}/>
          </div>
        </div>
      </div>
      <div className="bg-[#233C75] w-full h-96 relative">
        <img className="absolute top-0 right-0" src={upperright} alt="" />
        <img className="absolute bottom-0 left-0" src={lowerleft} alt="" />

        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <img src={card2} alt="" />
          <h1 className="text-4xl italic font-semibold text-white font-base">
            Invest in our project
          </h1>
          <p className="text-center text-white w-96">
            Investments in our projects have proven to be super fruitful for our
            inverstors providing upto 20x returns*
          </p>
          <div>
            <Button props = {buttonData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
