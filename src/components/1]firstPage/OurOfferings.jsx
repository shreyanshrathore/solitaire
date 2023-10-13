import React from "react";
import img1 from "../../assets/5-Our Offerings/icon1.svg";
import img2 from "../../assets/5-Our Offerings/icon2.svg";
import img3 from "../../assets/5-Our Offerings/icon3.svg";
import img4 from "../../assets/5-Our Offerings/icon4.svg";
import img5 from "../../assets/5-Our Offerings/icon5.svg";
import img6 from "../../assets/5-Our Offerings/icon6.svg";

import background from "../../assets/5-Our Offerings/Group 1000001786.png";

const data = [
  {
    img: img1,
    heading: "High ROI",
    content:
      "Investments in our projects have proven to be super fruitful for our investors providing up to 20x returns*",
  },

  {
    img: img2,
    heading: "High quality projects",
    content:
      "The luxurious and exquisite design harmonious with the surrounding architecture provide the best living conditions for every family.",
  },

  {
    img: img3,
    heading: "Convenient",
    content:
      "We provide ideal plot sizes which have amenities like club house, play area, worship area, with ensuring sustainable development that lasts through ages.",
  },

  {
    img: img4,
    heading: "Absolute Security",
    content:
      "Advanced security system with modern equipment's, professional 24/7 security staff.",
  },

  {
    img: img5,
    heading: "Green and clean Environment",
    content:
      "Each urban area of Solitaire is built on the basis of A place that living is in harmony with nature.",
  },

  {
    img: img6,
    heading: "Professional services",
    content:
      "Absolutely hassle free service whether you want to consult where to reside or where to invest your money to grow it multiple folds.",
  },
];

const OurOfferings = () => {
  return (
    <div className="relative h-auto overflow-hidden">
      <div className="absolute z-0">
        <img className="top-0 w-full " src={background} alt="" />
      </div>
      <div className="relative z-40">
        <h1 className="z-40 p-[70px] mt-20 text-5xl italic font-semibold md:text-6xl font-base text-generic md:ml-16">
          Our Offerings
        </h1>
        <div className="flex items-center justify-center ">
          <div className="flex flex-wrap justify-center gap-12">
            {data.map((item, index) => (
              <div key={index}>
                <Card props={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ props }) => {
  return (
    <div className="w-auto md:w-[400px]  h-80 p-4 space-y-4 ">
      <div>
        <div className="flex justify-center md:justify-normal">
          <img src={props.img} alt="" />
        </div>
        <h1 className="text-3xl italic font-semibold text-center font-base text-generic md:text-left">
          {props.heading}
        </h1>
      </div>
      <p className="text-xl text-center text-gray-600 font-base w-80 md:text-left">{props.content}</p>
    </div>
  );
};

export default OurOfferings;
