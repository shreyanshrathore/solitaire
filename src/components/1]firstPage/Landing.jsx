import React, { useRef } from "react";
import { Button } from "antd";
import mainImage from "../../assets/1-landing/Group 1000001778.png";
import secondImage from "../../assets/1-landing/Group 1000001785.png";
// import sign from "../../assets/1-landing/Group 8837.png";
import sign from '../../assets/1-landing/_Sanjay Dasot.png'
import { Carousel } from "antd";
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
      <div className="hidden lg:block">
        <Carousel dotPosition="bottom" dots={"red"} ref={ref} autoplay={true} autoplaySpeed={3000} pauseOnHover={false}>
          <div>
            <Slide1 />
          </div>
          {/* <div>
            <Slide2 />
          </div> */}
          {/* <div>
          <Slide2 />
          </div>
          <div>
          <Slide2 />
          </div>
          <div>
          <Slide2 />
        </div> */}
        </Carousel>
      </div>
      <div className="block lg:hidden">
        <Slide1 />
      </div>
      <div className="w-44 justify-between absolute bottom-[-220px] right-[44%] hidden md:flex">
        <button onClick={() => ref.current.prev()}>
          <div className="text-generic">{left}</div>
        </button>
        <button onClick={() => ref.current.next()}>
          <div className="text-generic">{right}</div>
        </button>
      </div>
    </div>
  );
};

const Slide1 = () => {
  return (
    <div className="flex flex-wrap md:flex-auto justify-between items-center">
      <div className="space-y-6 md:ml-20 mb-12 flex-col  justify-center w-full md:w-auto md:mb-40">
        <div className="font-base font-medium text-3xl lg:text-6xl text-center md:text-left w-full">
          For Us
        </div>
        <div className="text-5xl md:text-5xl lg:text-[90px] font-base text-generic font-medium text-center">
          Work is worship
        </div>
        <div className="flex justify-center md:justify-normal">
          <img src={sign} alt="" />
        </div>
      </div>

      <div>
        <img src={mainImage} alt="" />
      </div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="">
      <div>
        <img
          className="w-full object-cover object-center"
          src={secondImage}
          alt=""
        />
      </div>

      <div className="absolute top-0 justify-center items-center">
        <div className="ml-44 mt-72">
          <div className="font-medium w-[500px] font-base text-white text-[65px] leading-[1] ">
            The first major international smart city coming
          </div>
          <div className="relative cursor-pointer mt-12">
            <button className="bg-generic text-white text-xl font-base w-36 h-12 hover:scale-95 transition-transform">
              View Project
            </button>
            <div className="w-36 h-12 border-2 border-generic absolute top-1 left-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
