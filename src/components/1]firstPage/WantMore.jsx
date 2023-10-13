import React, { useState } from "react";
import { Dropdown, Input } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Button from "../Button";
import { DownOutlined } from "@ant-design/icons";
import projects from "../AllProjects/allproject.json";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./style.css";

const buttonData = {
  button_color: "bg-[#233C75]",
  border_color: "border-[#233C75]",
  txt_col: "text-white",
  text_size: "text-lg",
  button_width: "w-36",
  button_height: "h-12",
  title: "Get a Call back",
};

const WantMore = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Removed unused watch

  const [state, setState] = useState("any");
  const items = projects.projects.map((item, index) => ({
    label: item.title,
    key: index,
  }));
  const handleMenuClick = (e) => {
    console.log("click", e);
    setState(items[e.key - 1].label);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const onSubmit = async (data) => {
    // Add your API endpoint for posting data to your Google Sheet here
    const sheetdbApiUrl = "https://sheetdb.io/api/v1/gk5ocikoq99au"; // Replace with your actual API URL

    // Ensure that the structure of 'data' matches your Google Sheet's columns
    const newData = {
      name: data.name,
      email: data.email,
      phone_num: data.phone_num, // Ensure it matches the registered field name
      property: state,
    };
    console.log(newData);
    try {
      const response = await axios.post(sheetdbApiUrl, newData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Request was successful
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      // An error occurred
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex justify-center py-12">
      <div className="w-[90%] md:w-[80%] bg-generic h-auto md:py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-wrap items-center justify-between h-full px-4 py-4 md:grid md:grid-cols-6 xl:grid-cols-7">
            <h1 className="w-full text-3xl italic text-left text-white md:text-5xl md:col-span-2 xl:col-span-2 font-base md:w-72">
              Want more information?
            </h1>
            <div className="flex flex-wrap justify-center w-full gap-8 py-4 md:col-span-3 xl:col-span-4">
              <div className="flex flex-col space-y-8 w-72 md:w-2/5 ">
                <input
                  placeholder="Enter your username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  className="h-12 px-2 rounded-sm"
                  {...register("name")}
                />
                <input
                  placeholder="Enter your Email"
                  prefix={<MessageOutlined className="site-form-item-icon" />}
                  className="h-12 px-2 rounded-sm"
                  {...register("email")}
                />
              </div>

              <div className="flex flex-col space-y-8 w-72 md:w-2/5 md:col-span-1 xl:col-span-1">
                <input
                  placeholder="Enter your Phone number"
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                  className="h-12 px-2 rounded-sm"
                  {...register("phone_num")}
                />
                <Dropdown menu={menuProps}>
                  <button className="flex justify-between h-auto p-3 bg-white rounded-sm">
                    <div className="text-gray-400">{state}</div>
                    <div>
                      <DownOutlined />
                    </div>
                  </button>
                </Dropdown>
              </div>
            </div>
            <button type="submit">
              <div className="flex justify-center w-full lg:w-auto">
                <Button props={buttonData} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WantMore;
