import React from "react";
import logo from "../assets/1-landing/Group 8366.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Nav = () => {
  const navbasic = `font-base cursor-pointer font-med `;
  const navColor = (prop) => {
    return currentNav === prop ? "text-generic font-semibold" : "text-black";
  };

  const navFunc = () => {
    setCurrentNav(2);
    // setDrop(drop?0:1)
  };
  const [currentNav, setCurrentNav] = useState(0);
  const [drop, setDrop] = useState(0);
  return (
    <div className="">
      <div className="py-4 px-28 border-b-2 border-gray-100 flex items-center justify-between">
        <img className="h-20" src={logo} alt="" />

        <div className="flex space-x-10 text-xl">
          <div
            className={`${navbasic} ${navColor(0)}`}
            onClick={() => setCurrentNav(0)}
          >
            Home
          </div>
          <div
            className={`${navbasic} ${navColor(1)}`}
            onClick={() => setCurrentNav(1)}
          >
            About us
          </div>
          <div
            className={`${navbasic} flex ${navColor(2)} z-50`}
            onClick={() => navFunc()}
            onMouseEnter={() => setDrop(1)}
            onMouseLeave={() => setDrop(0)}
          >
            Projects
            <div>
              <KeyboardArrowDownIcon />
            </div>
            <Transition
              show={drop === 1}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  ref={ref}
                  className=" absolute top-full right-0 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Drop />
                </div>
              )}
            </Transition>
          </div>
          <div
            className={`${navbasic} ${navColor(3)}`}
            onClick={() => setCurrentNav(3)}
          >
            Careers
          </div>
          <div
            className={`${navbasic} ${navColor(4)}`}
            onClick={() => setCurrentNav(4)}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

const Drop = () => {
  return (
    <div className="w-full p-6 text-gray-800">
      <div>All Project</div>
      <div className="flex">
        <div>Urban TownShips</div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="flex">
        <div>Residential Townships</div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Nav;
