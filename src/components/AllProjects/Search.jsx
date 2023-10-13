
import React, { useState } from "react";
import Buttons from "../Button";
import { useForm } from "react-hook-form"

import { Dropdown, Button, Space } from "antd";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";

const Search = ({query, setQuery}) => {
  const statusList = [
    {
      label: "On Going",
      key: "1",
    },
    {
      label: "Completed",
      key: "2",
    },
  ];
  const typesList = [
    {
      label: "Urban Township",
      key: "1",
    },
    {
      label: "Residential Projects",
      key: "2",
    },
  ];

  const locationList = [
    {
      label: "Scheme No. 140, Indore",
      key: "1",
    },
    {
      label: "Ujjain Rode, Indore",
      key: "2",
    },
    {
      label: "Kanadia Road, Indore",
      key: "3",
    },
    {
      label: "Super Corridor, Indore",
      key: "4",
    },
  ];

  const [status, setStatus] = useState("any");
  const [types, setTypes] = useState("any");
  const [location, setLocation] = useState("any");

  const buttonData = {
    button_color: "bg-[#C31424]",
    border_color: "border-[#C31424]",
    txt_col: "text-white",
    text_size: "text-lg",
    button_width: "w-36",
    button_height: "h-12",
    title: "Search",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => setQuery({status, types, location})
  return (
    <form className="flex flex-wrap items-center justify-center w-full gap-6 py-6 md:gap-12 md:py-12" onSubmit={handleSubmit(onSubmit)}>
      <SearchCard
        items={statusList}
        state={status}
        setState={setStatus}
        heading={"Project Status"}
        {...register("status")}
      />
      <SearchCard
        items={typesList}
        state={types}
        setState={setTypes}
        heading={"Project Types"}
        {...register("type")}
      />
      <SearchCard
        items={locationList}
        state={location}
        setState={setLocation}
        heading={"Project Location"}
        {...register("location")}
      />
      <div className="flex items-center h-full mt-8">
        <button type="submit">
          <Buttons props={buttonData} />
        </button>
      </div>
    </form>
  );
};

export default Search;

const SearchCard = ({ items, state, setState, heading }) => {
  const handleMenuClick = (e) => {
    console.log("click", e);
    setState(items[e.key - 1].label);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      <h1 className="py-2 text-base font-semibold font-base">{heading}</h1>
      <Dropdown menu={menuProps}>
        <Button className="flex justify-between h-auto p-4 rounded-sm shadow-md w-52 hover:border-none">
          <div className="text-gray-400">{state}</div>
          <div>
            <DownOutlined />
          </div>
        </Button>
      </Dropdown>
    </div>
  );
};
