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

const url =
  "https://s3-alpha-sig.figma.com/img/0aef/932c/7f4a25fcc64f70c5efdd8856948f2875?Expires=1697414400&Signature=Rll9c9RWOFIf~kfJ6MW5v2NXM3n9AWfiL0hX1LMQuVvmbkXV2KWWNgeamKJJ8SImTp2U7ozXGDD7vSsJL8kzC1JQPdkSwtUPI2r9czfqcJ~FFRBwMe~TmanDuJ5yvzD00OsTdR0gRJ8ylKFqpCJDGQsmGF~2KfC-8-h2mXuiza3I2QDQhA3LM9WQsYQuB2Y-KrTyEXyqAIR5cq5LaXq-wwgcd1qdJdRNekURy5CwZF9dS9HWikS1HIMMTRIuaz9ao4pMliIIFd2BuPWqoAQ1jESd2d3X2k1GXphd3puqhDTYueQAb2vYabSMNNvwnq9ysQ4qQiOvXRWxUo7GmpR6dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const url2 =
  "https://s3-alpha-sig.figma.com/img/fcfa/4809/28e0199d0c0de22341c5a8bb958d1327?Expires=1697414400&Signature=ookWxB4FY7YOX~L8O3PKOVHIaQcdyF59OswxLH4QHRqQ5Ti7PvhRiO~cW~lzoxrtGgD8GQNsaSW-VA3MnQlGVtQ0llFTTe1abeibtANd9e~OV6512OqcOHZ-V3LAlDEsoA-ISzPIJaPCuXZmfzaNxpsoC0KhaPT6m-r-LYDAdWcazuzd~M~EzMDBT8kM-jjuoBb8~C5qV9v~BJv2qHpXXtKFb1D-Grl9OhhV-mqiNuseQXkYrnMXhMTV5X5~hJflX4RR5tWObhqpMCAMiaGppUfna5-N1XukoQedgAHKToQRBP2bMRgE5ebJgHRiDgWUK5k6s6A618AAaPQac6m3Sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const gallery = [url, url2, url, url, url, url, url];
const LandingCard = () => {
  return (
    <div className="relative h-auto overflow-hidden flex justify-center">
      <img className="w-full" src={bg} alt="" />
      <div className="absolute bottom-20 text-4xl md:text-8xl font-base italic text-white">
        The Sapphire
      </div>
    </div>
  );
};

export const Heading = ({ text }) => {
  return (
    <h1 className="font-base text-5xl text-generic italic font-semibold flex justify-center md:block">
      {text}
    </h1>
  );
};

export const DoubleHeading = ({ text }) => {
  return (
    <div className="lg:flex w-full h-auto lg:items-center lg:justify-between">
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
        <div className="flex justify-center font-base font-semibold italic text-md md:text-xl p-2">
          <div>{item.heading}</div>
          <div>{item.value}</div>
        </div>
      </div>
    </div>
  );
};
export const Status = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex justify-between md:w-[85%] px-2 py-6">
        <State heading={"State"} content={"On-Going"} />
        <State heading={"Location"} content={"Bypass Nipania, Indore"} />
        <State heading={"RERA"} content={"P-IND-19-2389"} />
      </div>
    </div>
  );
};

const State = ({ heading, content }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row pl-3 font-base lg:gap-2 text-lg lg:text-xl w-32 md:w-full">
        <p className=" font-semibold"> {heading}: </p>
        <p className="text-gray-400"> {content} </p>
      </div>
    </div>
  );
};

export const Overview = () => {
  return (
    <div>
      <div>
        <Heading text="Overview" />
        <div className="flex md:gap-12 flex-wrap justify-between">
          <div className="py-8">
            <img className="w-[600px]" src={image} alt="" />
          </div>
          <div className="w-[600px]">
            <div className="font-base italic font-light text-gray-100 text-[160px] hidden xl:block ">
              Overview
            </div>
            <div className="p-6 text-lg md:text-xl lg:text-2xl text-gray-500 font-base italic text-center md:text-left">
              "The Sapphire brings warm charm residences with a relaxed soothing
              lifestyle. This is a landmark, a first-of-its-kind residence in
              Indore. Bypass, Indore is one of the fastest developing localities
              of Indore. Known for its recreational amenities, The Sapphire is
              based at a prime location with various amenities. The project
              offers plenty of benefits that includes prime location,
              comfortable and lavish lifestyle, great amenities, healthy
              surroundings, and high return."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const [num, setNum] = useState(0);
  const handleImage = (index) => {
    setToggler(!toggler ? true : false);
    setNum(index);
  };
  return (
    <div>
      <DoubleHeading text="Gallery" />

      <div className="justify-center flex">
        <div
          className="w-full overflow-hidden overflow-x-scroll sm:overflow-x-hidden h-52 sm:h-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="w-max h-auto gap-4 p-4 flex  sm:flex-wrap sm:w-full">
            {gallery.map((item, index) => (
              <div onClick={() => handleImage(index)}>
                <img
                  className="w-72 h-44 object-cover object-center"
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <>
          <FsLightbox toggler={toggler} sources={gallery} sourceIndex={num} />
        </>
      </div>
    </div>
  );
};

export const VideoTour = () => {
  return (
    <div className="flex py-8 flex-wrap justify-center xl:justify-between">
      <div className="">
        <Heading text="Video Tour" />
        <div className="p-6 flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/AocSwEiz2PQ?autoplay=1&mute=1"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.2176253555963!2d75.93316723924599!3d22.763939540233114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631db23b652eb9%3A0x4715190d91549503!2sThe%20Sapphire!5e0!3m2!1sen!2sin!4v1696409775862!5m2!1sen!2sin"
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

export const Transport = () => {
  const data = [
    {
      icon: icon1,
      heading: "Supermarket:",
      value: "1.7km",
    },
    {
      icon: icon2,
      heading: "Railway St.:",
      value: "7.7km",
    },
    {
      icon: icon3,
      heading: "Petrol Pump:",
      value: "1.4km",
    },
    {
      icon: icon4,
      heading: "Hospital:",
      value: "2.6km",
    },
    {
      icon: icon5,
      heading: "Airport:",
      value: "16km",
    },
    {
      icon: icon6,
      heading: "School:",
      value: "1km",
    },
    {
      icon: icon7,
      heading: "Bus Stop:",
      value: "2.2km",
    },
    {
      icon: icon8,
      heading: "Bank:",
      value: "1.4km",
    },
  ];
  return (
    <div>
      <DoubleHeading text="Key Transport" />
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-4">
          {data.map((item, index) => (
            <div className="p-2 md:p-4">
              <div className=" h-32 rounded-lg  flex items-center justify-center">
                <div className=" gap-3 space-y-3">
                  <div className="flex justify-center ">
                    <img src={item.icon} alt="" />
                  </div>

                  <div className="flex gap-2 font-base text-xl italic font-semibold">
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


export const Ameneties = () =>{
  return(
    <div>
      
    </div>
  )
}
export default LandingCard;
