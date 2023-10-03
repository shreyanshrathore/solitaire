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
  // {
  //   heading: "Happy Customers",
  //   img: img3,
  //   content:
  //     "With 21+ years of successful premium projects development, We have succeeded in carving out a niche for ourself which is parellel to none in the city. Every one of our project elivers the highhest level of design and craftmanship, upcompromising quality, and customer priority services - putting Solitaire group in the league of the finest...",
  // },
];
import "../Button.css";

const Credai = () => {
  const ref = useRef();

  return (
    <div>
      <div className="md:ml-28 flex-col justify-center">
        <div className="relative flex-col ">
          <img src={credai} alt="" />
          <h2 className="font-base font-semibold text-xl absolute bottom-2 left-5">
            Member of CREDAI
          </h2>
        </div>

        <h1 className="font-base italic text-generic text-5xl font-semibold ml-5">
          Building dreams since 2001
        </h1>
      </div>

      <div className="h-auto bg-[#233C75] mt-12 relative">
        <img className="z-10 h-[700px] absolute" src={bgline} alt="" />
        <div className=" h-auto z-50 relative">
          <Carousel autoplay effect="fade" ref={ref}>
            {data.map((item, index) => (
              <div
                className=" h-auto flex justify-center items-center"
                key={index}
              >
                <Slide prop={item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

// const Slide = ({prop}) => {
//   return (
//     <div className="max-h-[700px]">
//       <div className="w-[450px] z-30 relative space-y-4 text-white top-32 left-32 h-auto">
//         <h1 className="text-8xl font-semibold font-base">{prop.number}</h1>
//         <h2 className="italic text-5xl font-base">{prop.heading} </h2>
//         <p className="font-base text-xl z-50 leading-9">{prop.content}</p>
//       </div>
//       <div>
//         <img
//           className="h-[640px] absolute right-0 bottom-4"
//           src={prop.img}
//           alt=""
//         />
//         <img
//           className="h-[620px] absolute bottom-[25px] right-0 custom-scale-credai-bg"
//           src={cover}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

const Slide = ({ prop }) => {
  return (
    <div className="h-auto flex pb-16 md:pb-0 flex-col md:flex-row justify-normal md:justify-between">
      <div className="w-auto h-[460px] md:h-auto z-30 relative space-y-4 text-white py-8 md:ml-28 md:mt-32">
        <h1 className="text-8xl font-semibold font-base text-center">{prop.number}</h1>
        <h2 className="italic text-4xl md:text-6xl font-base text-center">{prop.heading} </h2>
        <p className="font-base text-lg leading-7 md:text-2xl text-center md:text-left  md:w-[500px] px-4">{prop.content}</p>
      </div>

      <div className="relative h-auto py-8">
        <div className="flex flex-row-reverse">
          <img className="md:h-[640px] h-[340px] " src={prop.img} alt="" />
        </div>
        <img
          className="md:h-[620px] h-[320px] absolute top-[43px] right-0 custom-scale-credai-bg"
          src={cover}
          alt=""
        />
      </div>
    </div>
  );
};
export default Credai;
