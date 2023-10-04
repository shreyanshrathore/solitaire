import React from "react";
import { Input } from "antd";
import Button from "../Button";
import logo from "../../assets/1-landing/Group 8366.svg";

import icon1 from "../../assets/9-social media icons/facebook (1).svg";
import icon2 from "../../assets/9-social media icons/instagram (1).svg";
import icon3 from "../../assets/9-social media icons/twitter.svg";
import icon4 from "../../assets/9-social media icons/youtube.svg";

const icons = [icon1, icon2, icon3, icon4];
const buttonData = {
  button_color: "bg-generic",
  border_color: "border-generic",
  txt_col: "text-white",
  text_size: "text-lg",
  button_width: "w-60",
  button_height: "h-12",
  title: "Subcribe for properties update",
};

let address = "13/1, Sita Bagh Colony Behind Reegal Cinema Indore-452003";
let rights = "© 2022 – The Solitaire Group. All rights reserved.";

const Footer = () => {
  return (
    <div className="bg-[#FFF9F9] py-12">
      <div className="flex justify-center items-center">
        <div className="w-[80%] flex md:justify-between justify-center space-y-8 flex-wrap">
          <div className="hidden md:block">
            <Miss />
          </div>

          <div className="flex items-center">
            <img className="h-20" src={logo} alt="" />
          </div>

          <div className="md:hidden">
            <Miss/>
          </div>

          <div className="flex-col ">
            <div className="flex space-x-4 text-right justify-center md:justify-end">
              {icons.map((item, index) => (
                <div>
                  <img className="h-8 text-generic" src={item} alt="" />
                </div>
              ))}
            </div>
            <div className="flex md:justify-end py-4">
              <div className="w-64 font-base text-xl italic text-center md:text-right">
                {address}
              </div>
            </div>

            <div className="font-base text-sm font-semibold mt-6">{rights}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Miss = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-base font-semibold text-3xl">DON'T MISS OUT!</h1>
      <Input placeholder="Email Address" className="h-12 w-60 rounded-sm" />
      <Button props={buttonData} />
    </div>
  );
};

export default Footer;
