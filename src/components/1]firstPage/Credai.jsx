import React, { useRef } from "react";
import credai from "../../assets/4-credai/image 25.png";
import bgline from "../../assets/4-credai/Rectangle 40.png";
import img1 from "../../assets/4-credai/img1.svg";
import img2 from "../../assets/4-credai/img2.svg";
import img3 from "../../assets/4-credai/img3.svg";
import cover from "../../assets/4-credai/Vector 9.png";
import { Carousel } from "antd";

const data = [
  {
    number: "21+",
    heading: "Years of Experience",
    img: img1,
    content:
      "With 21+ years of successful premium projects development, We have succeeded in carving out a niche for ourself which is parellel to none in the city. Every one of our project elivers the highhest level of design and craftmanship, upcompromising quality, and customer priority services - putting Solitaire group in the league of the finest... ",
  },
  {
    number: "22+",
    heading: "Project Completed",
    img: img2,
    content:
      "With 21+ years of successful premium projects development, We have succeeded in carving out a niche for ourself which is parellel to none in the city. Every one of our project elivers the highhest level of design and craftmanship, upcompromising quality, and customer priority services - putting Solitaire group in the league of the finest... ",
  },
  {
    heading: "Happy Customers",
    img: img3,
    content:
      "With 21+ years of successful premium projects development, We have succeeded in carving out a niche for ourself which is parellel to none in the city. Every one of our project elivers the highhest level of design and craftmanship, upcompromising quality, and customer priority services - putting Solitaire group in the league of the finest...",
  },
];

const Credai = () => {
  const ref = useRef();

  return (
    <div>
      <div className="ml-28">
        <div className="relative">
          <img src={credai} alt="" />
          <h2 className="font-base font-semibold text-xl absolute bottom-2 left-5">
            Member of CREDAI
          </h2>
        </div>

        <h1 className="font-base italic text-generic text-5xl font-semibold ml-5">
          Building dreams since 2001
        </h1>
      </div>

      <div className="h-[700px] bg-[#233C75] mt-12 relative">
        <img className="z-10 h-[700px] absolute" src={bgline} alt="" />
        <div className=" h-full z-50 relative">
          <Carousel autoplay effect="fade" ref={ref}>
            {data.map((item, index) => (
              <div className=" h-[700px] flex justify-center items-center" key={index}>
                <Slide prop = {item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const Slide = ({prop}) => {
  return (
    <div className="h-[700px]">
      <div className="w-[450px] z-30 relative space-y-4 text-white top-32 left-32 h-auto">
        <h1 className="text-8xl font-semibold font-base">{prop.number}</h1>
        <h2 className="italic text-5xl font-base">{prop.heading} </h2>
        <p className="font-base text-xl z-50 leading-9">{prop.content}</p>
      </div>
      <div>
        <img
          className="h-[640px] absolute right-0 bottom-4"
          src={prop.img}
          alt=""
        />
        <img
          className="h-[620px] absolute bottom-[25px] right-0"
          src={cover}
          alt=""
        />
      </div>
    </div>
  );
};

export default Credai;
