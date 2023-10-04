// import React, { useState } from "react";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
// import { Dropdown, Space } from "antd";
// const items = [
//   {
//     key: "1",
//     label: <div>Pending</div>,
//   },
//   {
//     key: "2",
//     label: <div>Ongoing</div>,
//     icon: <SmileOutlined />,
//   },
//   {
//     key: "3",
//     label: <div>Completed</div>,
//   },
//   {
//     key: "4",
//     danger: true,
//     label: "a danger item",
//   },
// ];

// const App = () => {
//   const [status, setStatus] = useState("Any");
//   const [type, setType] = useState("Any");
//   const [location, setLocation] = useState("Any");
//   return (
//     <div>
//       <div>
//         <h1 className="text-sm font-semibold">Project Status</h1>
//         <Drop name={status} />
//       </div>
//     </div>
//   );
// };

// const Drop = ({ name }) => {
//   return (
//     <div className="w-52">
//       <Dropdown
//         menu={{
//           items,
//         }}
//       >
//         <a onClick={(e) => e.preventDefault()}>
//           <div className="flex w-52 border-[2px] shadow-sm border-gray-100 p-3 rounded-sm justify-between">
//             <div>{name}</div>
//             <div>
//               <DownOutlined />
//             </div>
//           </div>
//         </a>
//       </Dropdown>
//     </div>
//   );
// };
// export default App;

import React, { useState } from "react";
import Buttons from "../Button";

import { Dropdown, Button, Space } from "antd";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";

const Search = () => {
  const statusList = [
    {
      label: "Pending",
      key: "1",
      //   icon: <UserOutlined />,
    },
    {
      label: "Ongoing",
      key: "2",
    },
    {
      label: "Completed",
      key: "3",
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

  return (
    <div className="flex flex-wrap gap-6 md:gap-12 items-center w-full justify-center  md:py-12 py-6">
      <SearchCard
        items={statusList}
        state={status}
        setState={setStatus}
        heading={"Project Status"}
      />
      <SearchCard
        items={typesList}
        state={types}
        setState={setTypes}
        heading={"Project Types"}
      />
      <SearchCard
        items={locationList}
        state={location}
        setState={setLocation}
        heading={"Project Location"}
      />
      <div className="h-full flex items-center mt-8">
        <Buttons props={buttonData} />
      </div>
    </div> 
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
      <h1 className="text-base font-base font-semibold py-2">{heading}</h1>
      <Dropdown menu={menuProps}>
        <Button className="rounded-sm shadow-md p-4 w-52 flex justify-between h-auto hover:border-none">
          <div className="text-gray-400">{state}</div>
          <div>
            <DownOutlined />
          </div>
        </Button>
      </Dropdown>
    </div>
  );
};
