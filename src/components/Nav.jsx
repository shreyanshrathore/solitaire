import React from "react";
import logo from "../assets/1-landing/Group 8366.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Nav = () => {
  const links = [
    { title: "HOME", send: "home" },
    { title: "ABOUT US", send: "about-us" },
    { title: "PROJECTS", send: "portfolio" },
    { title: "CAREERS", send: "careers" },
    { title: "CONTACT US", send: "contact-us" },
  ];

  // mobile
  const list = () => (
    <div className="bg-white h-full">
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <div className="space-y-8 py-12">
            {links.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Link
                    to={text.send}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <div className="text-2xl italic font-semibold text-gray-600 font-base">
                      {text.title}
                    </div>
                  </Link>
                  <Divider />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        </List>
      </Box>
    </div>
  );

  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ right: open });
  };

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
  const [droptwo, setDroptwo] = useState(0);
  let timeoutId;
  const handleMouseEnter = () => {
    setDrop(1);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDrop(0);
    }, 1000);
  };

  return (
    <div className="">
      <div className="py-4 px-8 md:px-28 border-b-2 border-gray-100 flex items-center justify-between">
        <img className="h-20" src={logo} alt="" />

        <div className=" text-xl flex space-x-10  flex-row-reverse">
          <div className="hidden md:flex space-x-10 text-xl">
            <Link to="/">
              <div
                className={`${navbasic} ${navColor(0)}`}
                onClick={() => setCurrentNav(0)}
              >
                Home
              </div>
            </Link>
            <Link to="/about-us">
              <div
                className={`${navbasic} ${navColor(1)}`}
                onClick={() => setCurrentNav(1)}
              >
                About us
              </div>
            </Link>
            <div
              className={`${navbasic} flex ${navColor(2)} z-50`}
              onClick={() => navFunc()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={'/allprojects'}>Projects</Link>
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
          {/* For mobile Drawer */}
          <div
            className="text-black md:hidden cursor-pointer mr-[-30px] h-min ml-32"
            onClick={toggleDrawer(true)}
          >
            <DragHandleIcon />
          </div>
          <div>
            <SwipeableDrawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {list()}
            </SwipeableDrawer>
          </div>
        </div>

        {/* For Mobile Drawer */}

        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

const Drop = () => {
  return (
    <div className="w-full p-6 text-gray-800 space-y-5">
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
