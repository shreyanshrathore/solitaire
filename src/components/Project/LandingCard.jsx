import React, { useState } from "react";
import bg from "../../assets/AllProjects/allprojectsbg.png";
import image from "../../assets/6-Featued Projects/image 17.png";
import FsLightbox from "fslightbox-react";
import OurCustomer from "../1]firstPage/OurCustomer";

const url =
  "https://s3-alpha-sig.figma.com/img/0aef/932c/7f4a25fcc64f70c5efdd8856948f2875?Expires=1697414400&Signature=Rll9c9RWOFIf~kfJ6MW5v2NXM3n9AWfiL0hX1LMQuVvmbkXV2KWWNgeamKJJ8SImTp2U7ozXGDD7vSsJL8kzC1JQPdkSwtUPI2r9czfqcJ~FFRBwMe~TmanDuJ5yvzD00OsTdR0gRJ8ylKFqpCJDGQsmGF~2KfC-8-h2mXuiza3I2QDQhA3LM9WQsYQuB2Y-KrTyEXyqAIR5cq5LaXq-wwgcd1qdJdRNekURy5CwZF9dS9HWikS1HIMMTRIuaz9ao4pMliIIFd2BuPWqoAQ1jESd2d3X2k1GXphd3puqhDTYueQAb2vYabSMNNvwnq9ysQ4qQiOvXRWxUo7GmpR6dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const url2 =
  "https://s3-alpha-sig.figma.com/img/fcfa/4809/28e0199d0c0de22341c5a8bb958d1327?Expires=1697414400&Signature=ookWxB4FY7YOX~L8O3PKOVHIaQcdyF59OswxLH4QHRqQ5Ti7PvhRiO~cW~lzoxrtGgD8GQNsaSW-VA3MnQlGVtQ0llFTTe1abeibtANd9e~OV6512OqcOHZ-V3LAlDEsoA-ISzPIJaPCuXZmfzaNxpsoC0KhaPT6m-r-LYDAdWcazuzd~M~EzMDBT8kM-jjuoBb8~C5qV9v~BJv2qHpXXtKFb1D-Grl9OhhV-mqiNuseQXkYrnMXhMTV5X5~hJflX4RR5tWObhqpMCAMiaGppUfna5-N1XukoQedgAHKToQRBP2bMRgE5ebJgHRiDgWUK5k6s6A618AAaPQac6m3Sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const gallery = [url, url2, url, url, url, url, url, url];
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
    <div className="py-12 flex justify-center">
      <div className="w-[83%]">
        <h1 className="font-base text-5xl text-generic italic font-semibold flex justify-center md:block">
          Overview
        </h1>
        <div className="flex gap-12 flex-wrap justify-between">
          <div className="py-8">
            <img className="w-[600px]" src={image} alt="" />
          </div>
          <div className="w-[600px]">
            <div className="font-base italic font-light text-gray-100 text-[160px] hidden lg:block ">
              Overview
            </div>
            <div className="p-6 text-2xl text-gray-500 font-base italic text-center md:text-left">
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
    <div className="py-12 flex justify-center">
      <div className="md:w-[83%] w-[90%]">
        <div className="flex h-auto items-center justify-between">
          <h1 className="font-base text-5xl text-generic italic font-semibold flex justify-center md:block">
            Gallery
          </h1>
          <div className="font-base italic font-light text-gray-100 text-[160px] hidden lg:block px-12">
            Gallery
          </div>
        </div>

        <div
          className="w-full overflow-hidden overflow-x-scroll sm:overflow-x-hidden h-52 sm:h-auto"
          style={{WebkitOverflowScrolling: "touch" }}
        >
          <div className="w-max h-auto gap-6 p-4  justify-center flex sm:flex-wrap sm:w-full">
            {gallery.map((item, index) => (
              <div onClick={() => handleImage(index)}>
                <img className="w-72 h-44 object-cover object-center" src={item} alt="" />
              </div>
            ))}
          </div>
          <>
            <FsLightbox toggler={toggler} sources={gallery} sourceIndex={num} />
          </>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
