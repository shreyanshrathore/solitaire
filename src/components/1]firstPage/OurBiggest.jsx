import React, { useRef } from "react";
import img1 from "../../assets/7-Our bigeest Award/image 21.png";
import comma from "../../assets/7-Our bigeest Award/“.png";
import play from "../../assets/7-Our bigeest Award/play.svg";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const OurBiggest = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fontSize: "15px", color: "black" }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fontSize: "15px", color: "black" }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const data = [
    {
      img: img1,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
  ];
  const ref = useRef();
  return (
    <div className="lg:px-[152px]">
      <div className="flex justify-center ">
        <h1 className="font-base text-generic text-5xl w-[470px] mt-20 text-center font-semibold italic">
          Our biggest award is our happy customers
        </h1>
      </div>

      <div className="bg-[#233C75] h-auto lg:h-[600px] mt-20 hidden md:block overflow-hidden">
        <Carousel autoplay effect="fade" ref={ref} arrows {...settings}>
          <Slide />
          <Slide />
        </Carousel>
      </div>

      <div className="bg-[#233C75] h-auto mt-20 md:hidden">
        <Carousel autoplay effect="fade" ref={ref}>
          <Slide />
          <Slide />
        </Carousel>
      </div>
    </div>
  );
};

const Slide = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between pb-32 pt-28">
        <div className="">
          <div className="relative flex items-center ml-4 border- h-96 w-96 lg:h-96 lg:w-96 md:ml-24">
            <iframe
              src="https://www.youtube.com/embed/AocSwEiz2PQ?autoplay=1&mute=1"
              title="YouTube Video"
              frameborder="0"
              allowfullscreen
              className="h-[300px] w-[460px] "
            ></iframe>
          </div>
        </div>
        <div className=" w-[500px] md:mr-32 p-4">
          <img className="h-20" src={comma} alt="" />
          <div className="py-8 text-xl text-white font-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </div>
          <div className="text-4xl italic text-white font-base">Aman Joshi</div>
        </div>
      </div>
    </div>
  );
};
export default OurBiggest;
