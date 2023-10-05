import React from "react";
import LandingCard from "../Project/LandingCard";
import bg from "../../assets/Careers/bg.png";
import model from "../../assets/Careers/model.png";
import Button from "../Button";

const item = {
  bg: bg,
  heading: "Careers",
};

const buttonData = {
  button_color: "bg-[#233C75]",
  border_color: "border-[#233C75]",
  txt_col: "text-white",
  text_size: "text-lg",
  button_width: "w-36",
  button_height: "h-12",
  title: "View Vacancies",
};
const Careers = () => {
  return (
    <div>
      <LandingCard item={item} />
      <div className="flex justify-center py-44 w-screen">
        <div className="w-[80%] bg-generic h-[540px] relative">
          <div className="absolute bottom-0 left-16">
            <div className="flex gap-20">
              <div className="hidden md:block">
                <img src={model} alt="" />
              </div>
              <div className="space-y-6 mt-48">
                <h1 className="text-6xl font-base text-white italic">
                  Join Us
                </h1>
                <div className="text-white md:w-[500px] text-lg font-base font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <div className="pl-1">
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

export default Careers;
