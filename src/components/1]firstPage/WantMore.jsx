import React from "react";
import { Input } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Button from "../Button";

const buttonData = {
  button_color: "bg-white",
  border_color: "border-white",
  txt_col: "text-[#ED6664]",
  text_size: "text-lg",
  button_width: "w-36",
  button_height: "h-12",
  title: "Get a Call back",
};
const WantMore = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="w-[90%] md:w-[80%] bg-generic h-auto">
        <div className="flex flex-wrap items-center h-full  py-4 justify-between px-4">
          <h1 className="text-3xl md:text-5xl font-base text-white text-center italic w-full md:w-72">
            Want more information?
          </h1>

          <div className="flex gap-8 flex-wrap justify-center py-4">
            <div className="w-72 flex flex-col space-y-8 ">
              <Input
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                className="h-12"
              />
              <Input
                placeholder="Enter your Email"
                prefix={<MessageOutlined className="site-form-item-icon" />}
                className="h-12"
              />
            </div>

            <div className="w-72 flex flex-col space-y-8">
              <Input
                placeholder="Enter your Phone number"
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                className="h-12"
              />
              <Input
                placeholder="Properties"
                prefix={<HomeOutlined className="site-form-item-icon" />}
                className="h-12"
              />
            </div>
          </div>

          <div className="flex justify-center w-full lg:w-auto">
            <Button props = {buttonData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantMore;
