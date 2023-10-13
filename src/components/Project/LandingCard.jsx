import React, { useState } from "react";
import bg from "../../assets/AllProjects/allprojectsbg.png";
import image from "../../assets/6-Featued Projects/image 17.png";
import FsLightbox from "fslightbox-react";
import OurCustomer from "../1]firstPage/OurCustomer";

import icon1 from "../../assets/Project/TransportIcons/1.svg";
import icon2 from "../../assets/Project/TransportIcons/2.svg";
import icon3 from "../../assets/Project/TransportIcons/3.svg";
import icon4 from "../../assets/Project/TransportIcons/4.svg";
import icon5 from "../../assets/Project/TransportIcons/5.svg";
import icon6 from "../../assets/Project/TransportIcons/6.svg";
import icon7 from "../../assets/Project/TransportIcons/7.svg";
import icon8 from "../../assets/Project/TransportIcons/8.svg";

import amenSecurity from "../../assets/Project/Ameneties/1.svg";
import amenKidsPlayArea from "../../assets/Project/Ameneties/2.svg";
import amenSwimmingPool from "../../assets/Project/Ameneties/3.svg";

const url =
  "https://s3-alpha-sig.figma.com/img/0aef/932c/7f4a25fcc64f70c5efdd8856948f2875?Expires=1697414400&Signature=Rll9c9RWOFIf~kfJ6MW5v2NXM3n9AWfiL0hX1LMQuVvmbkXV2KWWNgeamKJJ8SImTp2U7ozXGDD7vSsJL8kzC1JQPdkSwtUPI2r9czfqcJ~FFRBwMe~TmanDuJ5yvzD00OsTdR0gRJ8ylKFqpCJDGQsmGF~2KfC-8-h2mXuiza3I2QDQhA3LM9WQsYQuB2Y-KrTyEXyqAIR5cq5LaXq-wwgcd1qdJdRNekURy5CwZF9dS9HWikS1HIMMTRIuaz9ao4pMliIIFd2BuPWqoAQ1jESd2d3X2k1GXphd3puqhDTYueQAb2vYabSMNNvwnq9ysQ4qQiOvXRWxUo7GmpR6dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const url2 =
  "https://s3-alpha-sig.figma.com/img/fcfa/4809/28e0199d0c0de22341c5a8bb958d1327?Expires=1697414400&Signature=ookWxB4FY7YOX~L8O3PKOVHIaQcdyF59OswxLH4QHRqQ5Ti7PvhRiO~cW~lzoxrtGgD8GQNsaSW-VA3MnQlGVtQ0llFTTe1abeibtANd9e~OV6512OqcOHZ-V3LAlDEsoA-ISzPIJaPCuXZmfzaNxpsoC0KhaPT6m-r-LYDAdWcazuzd~M~EzMDBT8kM-jjuoBb8~C5qV9v~BJv2qHpXXtKFb1D-Grl9OhhV-mqiNuseQXkYrnMXhMTV5X5~hJflX4RR5tWObhqpMCAMiaGppUfna5-N1XukoQedgAHKToQRBP2bMRgE5ebJgHRiDgWUK5k6s6A618AAaPQac6m3Sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const gallery = [url, url2, url, url, url, url, url];
const LandingCard = ({ item, info }) => {
  return (
    <div className="relative flex justify-center h-auto overflow-hidden">
      <img
        className="w-full min-h-[400px] md:min-h-[600px] object-cover object-center"
        src={item && item.bg ? item.bg : info.landingImage}
        alt=""
      />
      <div
        className="absolute top-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(13, 13, 13, 0.88) 100%)",
        }}
      ></div>
      <div className="absolute text-6xl italic text-white bottom-20 md:text-8xl font-base">
        {item && item.heading ? item.heading : info.title}
      </div>
    </div>
  );
};

export const Heading = ({ text }) => {
  return (
    <h1 className="flex justify-center text-5xl italic font-semibold font-base text-non md:block">
      {text}
    </h1>
  );
};

export const DoubleHeading = ({ text }) => {
  return (
    <div className="w-full h-auto lg:flex lg:items-center lg:justify-between">
      <Heading text={text} />
      <div className="font-base italic font-light text-gray-100 text-[160px] hidden xl:block px-12">
        {text}
      </div>
    </div>
  );
};

export const Card = ({ item }) => {
  return (
    <div>
      <div className="w-36 md:w-[15%] ">
        <div className="flex justify-center">
          <img className="h-12" src={item.icon} alt="" />
        </div>
        <div className="flex justify-center p-2 italic font-semibold font-base text-md md:text-xl">
          <div>{item.heading}</div>
          <div>{item.value}</div>
        </div>
      </div>
    </div>
  );
};
export const Status = ({ info }) => {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex justify-between md:w-[85%] px-2 py-6">
        <State heading={"State"} content={info.state} />
        <State heading={"Location"} content={info.location} />
        <State heading={"RERA"} content={info.rera} />
      </div>
    </div>
  );
};

const State = ({ heading, content }) => {
  return (
    <div>
      <div className="flex flex-col w-32 pl-3 text-lg lg:flex-row font-base lg:gap-2 lg:text-xl md:w-full">
        <p className="font-semibold "> {heading}: </p>
        <p className="text-gray-400"> {content} </p>
      </div>
    </div>
  );
};

export const Overview = ({ info }) => {
  return (
    <div>
      <div>
        <Heading text="Overview" />
        <div className="flex flex-wrap justify-between md:gap-12">
          <div className="py-8">
            <img className="w-[600px] h-[480px] object-cover object-center" src={info.thumbnailImage} alt="" />
          </div>
          <div className="w-[600px]">
            <div className="font-base italic font-light text-gray-100 text-[160px] hidden xl:block ">
              Overview
            </div>
            <div className="p-6 text-lg italic text-center text-gray-500 md:text-xl lg:text-2xl font-base md:text-left">
              {info.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Gallery = ({info}) => {
  const [toggler, setToggler] = useState(false);
  const [num, setNum] = useState(0);
  const handleImage = (index) => {
    setToggler(!toggler ? true : false);
    setNum(index);
  };
  return (
    <div>
      <DoubleHeading text="Gallery" />

      <div className="flex justify-center">
        <div
          className="w-full overflow-hidden overflow-x-scroll sm:overflow-x-hidden h-52 sm:h-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex h-auto gap-4 p-4 w-max sm:flex-wrap sm:w-full">
            {info.galleryImages.map((item, index) => (
              <div onClick={() => handleImage(index)}>
                <img
                  className="object-cover object-center w-72 h-44"
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <>
          <FsLightbox toggler={toggler} sources={info.galleryImages} sourceIndex={num} />
        </>
      </div>
    </div>
  );
};

export const VideoTour = ({info}) => {
  return (
    <div className="flex flex-wrap justify-center py-8 xl:justify-between">
      <div className="">
        <Heading text="Video Tour" />
        <div className="flex justify-center p-6">
          <iframe
            src={info.videoLink}
            title="YouTube Video"
            frameborder="0"
            allowfullscreen
            className="lg:h-[500px] lg:w-[560px] "
          ></iframe>
        </div>
      </div>

      <div className="w-auto">
        <Heading text="Map " />
        <div className="p-6">
          <iframe
            src= {info.mapCoordinates}
            // width="600"
            // height="450"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
            className="lg:h-[500px] lg:w-[560px] "
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export const Transport = ({info}) => {
  const data = [
    {
      icon: icon1,
      heading: "Supermarket:",
      value: info.transport.supermarket
    },
    {
      icon: icon2,
      heading: "Railway St.:",
      value: info.transport.railwayStation
    },
    {
      icon: icon3,
      heading: "Petrol Pump:",
      value: info.transport.petrolPump,
    },
    {
      icon: icon4,
      heading: "Hospital:",
      value: info.transport.hospital,
    },
    {
      icon: icon5,
      heading: "Airport:",
      value: info.transport.airport,
    },
    {
      icon: icon6,
      heading: "School:",
      value: info.transport.school,
    },
    {
      icon: icon7,
      heading: "Bus Stop:",
      value: info.transport.busStop,
    },
    {
      icon: icon8,
      heading: "Bank:",
      value: info.transport.bank,
    },
  ];
  return (
    <div>
      <DoubleHeading text="Key Transport" />
      <div>
        <div className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-4">
          {data.map((item, index) => (
            <div className="p-2 md:p-4">
              <div className="flex items-center justify-center h-32 rounded-lg ">
                <div className="gap-3 space-y-3 ">
                  <div className="flex justify-center ">
                    <img className="h-10 md:h-auto" src={item.icon} alt="" />
                  </div>

                  <div className="flex gap-2 italic font-semibold font-base text-md md:text-xl">
                    <div>{item.heading}</div>
                    <div>{item.value}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AmenitiesCard = ({ item }) => {
  return (
    <div className="w-48 h-48 md:w-[329px] md:h-[329px] bg-gray-100 flex justify-center items-center">
      <div className="space-y-4">
        <div className="flex justify-center">
          <img
            className="w-[50%] h-[50%] text-gray-300"
            src={item.icon}
            alt=""
          />
        </div>
        <div className="text-xl italic font-semibold text-center text-gray-700 md:text-2xl lg:text-3xl font-base">
          {item.heading}
        </div>
      </div>
    </div>
  );
};
export const Amenities = ({info}) => {
  const sample = [
    {
      icon: amenKidsPlayArea,
      heading: "Kids Play Area",
    },
    {
      icon: amenSecurity,
      heading: "24 x 7 Security",
    },
    {
      icon: amenSwimmingPool,
      heading: "Swimming Pool",
    },
    {
      icon: amenKidsPlayArea,
      heading: "Kids Play Area",
    },
    {
      icon: amenSecurity,
      heading: "24 X 7 Security",
    },
  ];
  const data = info.amenities.map((item) => {
    if (item === "Swimming Pool") {
      return sample[0];
    }
    if (item === "Fitness Center") {
      return sample[1];
    }
    if (item === "Park") {
      return sample[2];
    }
    if (item === "Playground") {
      return sample[0];
    }
  });
  

  return (
    <div className="w-[98%]">
      <DoubleHeading text="Amenities" />
      <div
        className="w-full overflow-x-scroll"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        }}
      >
        <div className="flex gap-4 p-4 md:gap-8 lg:gap-12 w-max">
          {data.map((item, index) => (
            <AmenitiesCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LandingCard;
