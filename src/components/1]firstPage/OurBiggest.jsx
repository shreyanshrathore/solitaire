import React, { useRef } from "react";
import img1 from "../../assets/7-Our bigeest Award/image 21.png";
import comma from "../../assets/7-Our bigeest Award/“.png";
import play from "../../assets/7-Our bigeest Award/play.svg";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'



const OurBiggest = () => {

  
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', fontSize: '15px', color: 'black' }}
      onClick={onClick}
    >
      <RightOutlined/>
    </div>
  )
}

const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style,display: 'block', fontSize: '15px', color: 'black' }}
      onClick={onClick}
    >
      <LeftOutlined/>
    </div>
  )
}

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}


  const data = [
    {
      img: img1,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
  ];
  const ref = useRef();
  return (
    <div className="px-[152px]">
      <div className="flex justify-center ">
        <h1 className="font-base text-generic text-5xl w-[470px] mt-20 text-center font-semibold italic">
          Our biggest award is our happy customers
        </h1>
      </div>

      <div className="bg-[#233C75] h-[600px] mt-20">
        <Carousel autoplay effect="fade" ref={ref} arrows {...settings}>
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
      <div className="flex pt-28 justify-between pb-32">
        <div className="relative h-96 w-96 border-2 ml-24 border-white">
          <img
            className="h-96 w-96 absolute bottom-2 right-2"
            src={img1}
            alt=""
          />
          <img
            className="h-16 top-[40%] right-[45%] absolute"
            src={play}
            alt=""
          />
        </div>
        <div className=" w-[500px] mr-32">
          <img className="h-20" src={comma} alt="" />
          <div className="py-8 text-white font-base text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </div>
          <div className="text-white font-base italic text-4xl">Aman Joshi</div>
        </div>
      </div>
    </div>
  );
};
export default OurBiggest;
