import React, { useRef } from "react";
import { Button } from "antd";
import mainImage from "../../assets/1-landing/Group 1000001778.png";
import secondImage from "../../assets/1-landing/Group 1000001785.png";
// import sign from "../../assets/1-landing/Group 8837.png";
import sign from "../../assets/1-landing/_Sanjay Dasot.png";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

const left = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const right = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const Landing = () => {
  const ref = useRef();

  return (
    <div className="h-auto">
      <div className="relative hidden sm:block">
        <Carousel
          className="h-auto"
          dotPosition="bottom"
          dots={"red"}
          ref={ref}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={false}
        >
          <div>
            <Slide1 />
          </div>
          <div>
            <Slide2 />
          </div>
        </Carousel>
        <div className="hidden md:absolute justify-between bottom-12 right-[44%] w-44 md:flex">
          <button onClick={() => ref.current.prev()}>
            <div className="text-generic">{left}</div>
          </button>
          <button onClick={() => ref.current.next()}>
            <div className="text-generic">{right}</div>
          </button>
        </div>
      </div>

      <div className="block sm:hidden">
        <Slide1 />
      </div>
    </div>
  );
};

const Slide1 = () => {
  return (
    <div className="flex flex-wrap items-center justify-between sm:flex-nowrap ">
      <div className="flex-col justify-center w-full mb-12 space-y-6 md:ml-20 md:w-auto md:mb-40">
        <div className="w-full text-3xl font-medium text-center font-base lg:text-3xl xl:text-6xl md:text-left">
          For Us
        </div>
        <div className="text-4xl font-medium text-center md:text-4xl lg:text-6xl font-base text-generic">
          Work is worship
        </div>
        <div className="flex justify-center md:justify-normal">
          <img src={sign} alt="" />
        </div>
      </div>

      <div className="">
        <img
          className="object-cover object-center h-[500px] md:h-[600px] lg:h-[700px] xl:h-auto"
          src={mainImage}
          alt=""
        />
      </div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="h-full">
      <div className="h-full">
        <img
          className="object-cover object-center w-full h-full"
          src={secondImage}
          alt=""
        />
      </div>

      <div className="absolute top-0 items-center justify-center">
        <div className="ml-44 mt-72">
          <div className="font-medium w-[500px] font-base text-white text-[65px] leading-[1] ">
            The first major international smart city coming
          </div>
          <Link to={"/allprojects"}>
            <div className="relative mt-12 cursor-pointer">
              <button className="h-12 text-xl text-white transition-transform bg-generic font-base w-36 hover:scale-95">
                View Projects
              </button>
              <div className="absolute h-12 border-2 w-36 border-generic top-1 left-1"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
