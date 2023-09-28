import React from "react";
import { Input } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const WantMore = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="w-[80%] bg-generic h-72">
        <div className="flex items-center h-full ml-16">
          <h1 className="text-5xl font-base text-white italic w-96">
            Want more information?
          </h1>

          <div className="flex space-x-8">
            <div className="w-72 flex flex-col space-y-8">
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
        </div>
      </div>
    </div>
  );
};

export default WantMore;
