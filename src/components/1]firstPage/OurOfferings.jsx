import React from "react";
import img1 from "../../assets/5-Our Offerings/Group (1).png";
import img2 from "../../assets/5-Our Offerings/Group (2).png";
import img3 from "../../assets/5-Our Offerings/Group 8762.png";
import img4 from "../../assets/5-Our Offerings/Group.png";
import img5 from "../../assets/5-Our Offerings/XMLID_1_ (1).png";
import img6 from "../../assets/5-Our Offerings/XMLID_1_.png";

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
    <div className="relative">
      <div className="z-0">
        <img className=" w-full top-0" src={background} alt="" />
      </div>
      <div className="absolute top-0">
        <h1 className="z-50 text-6xl font-base text-generic italic font-semibold p-12 ml-16 mt-20">
          Our Offerings
        </h1>
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap gap-12  justify-center">
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
    <div className="w-[400px]  h-80 p-4 space-y-4 ">
      <img src={props.img} alt="" />
      <h1 className="font-base text-generic italic font-semibold text-3xl">
        {props.heading}
      </h1>
      <p className="font-base text-xl text-gray-600 w-80">{props.content}</p>
    </div>
  );
};

export default OurOfferings;
