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
import { Link, NavLink } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Nav = () => {
  const links = [
    { title: "HOME", send: "/" },
    { title: "ABOUT US", send: "aboutus" },
    { title: "PROJECTS", send: "/allprojects" },
    { title: "CAREERS", send: "careers" },
    { title: "CONTACT US", send: "contact-us" },
  ];

  // mobile
  const list = () => (
    <div className="h-full bg-white">
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <div className="py-12 space-y-8">
            {links.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <NavLink
                    to={text.send}
                    key={index}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isPending ? "bold" : "",
                        color: isActive ? "#794AFF" : "#6F6F6F",
                      };
                    }}
                  >
                    {/* <div className="text-2xl italic font-semibold text-gray-600 font-base"> */}
                    {text.title}
                    {/* </div> */}
                  </NavLink>

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
    <div
      className="fixed z-50 w-full bg-white"
      style={{
        // border: '0.2px solid #AAA',
        background: "rgba(255, 255, 255, 0.70)",
        backdropFilter: "blur(70.5px)",
      }}
    >
      <div className="flex items-center justify-between px-8 py-4 md:px-28">
        <img className="h-20" src={logo} alt="" />

        <div className="flex flex-row-reverse space-x-10 text-xl ">
          <div className="hidden space-x-10 text-xl md:flex">
            <NavLink
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#9D0A17" : "#6F6F6F",
                };
              }}
            >
              <div className={`${navbasic}`} onClick={() => setCurrentNav(0)}>
                Home
              </div>
            </NavLink>

            <NavLink
              to="/aboutus"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#9D0A17" : "#6F6F6F",
                };
              }}
            >
              <div className={`${navbasic} `} onClick={() => setCurrentNav(1)}>
                About us
              </div>
            </NavLink>
            <div
              className={`${navbasic} flex ${navColor(2)} z-50`}
              onClick={() => navFunc()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/allprojects"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isPending ? "bold" : "",
                    color: isActive ? "#9D0A17" : "#6F6F6F",
                  };
                }}
              >
                <div
                  // className={`${navbasic} ${navColor(0)}`}
                  onClick={() => setCurrentNav(2)}
                >
                  Projects
                </div>
              </NavLink>
              <div className="text-[#6F6F6F]">
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
                    className="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg top-full w-max ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <Drop />
                  </div>
                )}
              </Transition>
            </div>
            <NavLink
              to="/careers"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#9D0A17" : "#6F6F6F",
                };
              }}
            >
              <div className={`${navbasic}`} onClick={() => setCurrentNav(0)}>
                Careers
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#9D0A17" : "#6F6F6F",
                };
              }}
            >
              <div className={`${navbasic}`} onClick={() => setCurrentNav(4)}>
                Contact
              </div>
            </NavLink>
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
    <div className="w-full p-6 space-y-5 text-gray-800">
      <Link to={'/allprojects'}>
        <div>All Project</div>
      </Link>
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
