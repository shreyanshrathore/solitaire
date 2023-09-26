import React from "react";
import img1 from "../../assets/3-ThreeCards/Group 8374.png";
import img2 from "../../assets/3-ThreeCards/Group 8375.png";
import img3 from "../../assets/3-ThreeCards/Group 8376.png";
import Button from "../Button";

const ThreeCards = () => {
  const data = [
    {
      img: img1,
      heading: "Residential Project",
      headingColor: "text-generic",
      content: `We successfully ventured into Real Estate by creating a series of residential spaces at 
            prime locations in Indore. These project offer great opportunities for families looking for budget apartments as well as investors`,
      buttonData: {
        button_color: "bg-generic",
        border_color: "border-generic",
        txt_col: "text-white",
        text_size: "text-lg",
        button_width: "w-32",
        button_height: "h-12",
        title: "View More",
      },
    },
    {
      img: img2,
      heading: "Urban Township",
      headingColor: "text-secondCard",
      content: `Our mission is to engage in issues that are 
        of concern to individuals, families and communities through an uncompromising commitment to create outstanding living, work and leisure environments.`,
      buttonData: {
        button_color: "bg-secondCard",
        border_color: "border-secondCard",
        txt_col: "text-white",
        text_size: "text-lg",
        button_width: "w-32",
        button_height: "h-12",
        title: "View More",
      },
    },
    {
      img: img3,
      heading: "Investor",
      headingColor: "text-thirdCard",
      content: `The best place to invest on Earth is Earth. Solitaire group has firmly established itself as a trustworthy and dependable organization in Real Estate market that consistently delivers handsome returns to its investors`,
      buttonData: {
        button_color: "bg-thirdCard",
        border_color: "border-thirdCard",
        txt_col: "text-white",
        text_size: "text-lg",
        button_width: "w-32",
        button_height: "h-12",
        title: "View More",
      },
    },
  ];

  return (
    <div className="flex justify-between p-20 ">
      {data.map((item, index) => (
        <div key={index}>
          <Card
            img={item.img}
            heading={item.heading}
            headingColor={item.headingColor}
            content={item.content}
            button={item.buttonData}
          />
        </div>
      ))}
    </div>
  );
};

const Card = ({ img, heading, headingColor, content, button }) => {
  return (
    <div>
      <div className="relative w-[400px] h-[490px] p-4 border border-1 border-gray-100 shadow-md space-y-3 flex-col justify-center items-center">
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div className="space-y-3 h-64">
          <h1
            className={`text-center ${headingColor} text-4xl font-base italic font-semibold`}
          >
            {heading}
          </h1>
          <p className="text-center text-gray-500 text-xl">{content}</p>
        </div>
        <div className="flex justify-center">
          <Button props={button} />
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
