import React from "react";

import bg from "../../assets/Contact/bg.png";
import LandingCard from "../Project/LandingCard";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidEnvelope } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { Input } from "antd";
import Button from "../Button";

const item = {
  bg: bg,
  heading: "Contact",
};
const Contact = () => {
  return (
    <div>
      <LandingCard item={item} />
      <ContactForm />
    </div>
  );
};

const data = [
  {
    heading: "+844 123 456 78",
    icon: PiPhoneCallFill,
  },
  {
    heading: "contact@example.com",
    icon: BiSolidEnvelope,
  },
  {
    heading: "13/1, Sita Bagh Colony Behind Regal Cinema Indore-452003",
    icon: MdLocationOn,
  },
];

const buttonData = {
  button_color: "bg-[#FFB547]",
  border_color: "border-[#FFB547]",
  txt_col: "text-white",
  text_size: "text-lg",
  button_width: "w-36",
  button_height: "h-12",
  title: "Submit",
};
const ContactForm = () => {
  return (
    <div className="flex justify-center bg-gray-50 py-20 ">
      <div className="w-[80%] bg-white h-auto p-4 flex shadow-sm md:flex-row flex-col">
        <div className="md:w-[40%] bg-generic h-full py-20 px-8">
          <h1 className="text-4xl text-white font-base italic font-semibold">
            Contact Information
          </h1>
          <div className="space-y-8 py-12">
            {data.map((item, index) => (
              <Card item={item} />
            ))}
          </div>
        </div>

        <div className="md:w-[60%] p-0 md:p-4 lg:p-8">
          <form className="space-y-4">
            <div>
              <h1 className="text-lg font-semibold text-gray-600 font-base">
                Name
              </h1>
              <Input
                placeholder="Enter your Name"
                className="h-12 w-64 rounded-sm shadow-md border-none"
              />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-600 font-base">
                Phone Number
              </h1>
              <Input
                placeholder="Enter your Phone Number"
                className="h-12 w-64 rounded-sm shadow-md border-none"
              />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-600 font-base">
                Email
              </h1>
              <Input
                placeholder="Enter your Email"
                className="h-12 w-64 rounded-sm shadow-md border-none"
              />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-600 font-base">
                Message
              </h1>
              <Input.TextArea
                rows={3}
                className="h-32 w-full rounded-sm shadow-md border-none"
              />
            </div>

            <div className="w-full flex justify-center p-4 md:justify-start md:pl-1">
              <Button props={buttonData} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  const Comp = item.icon;
  return (
    <div>
      <div className="flex gap-4 text-white text-lg font-base items-center">
        <div className="flex gap-4 md:gap-8">
          <div className="text-2xl font-thin">
            <Comp />
          </div>
          <div className="text-justify text-md md:text-lg">{item.heading}</div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
