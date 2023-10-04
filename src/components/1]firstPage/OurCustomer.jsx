import React, { useEffect, useRef } from "react";
import img1 from "../../assets/8-Our customers/image 22.png";
import img2 from "../../assets/8-Our customers/image 23.png";
import img3 from "../../assets/8-Our customers/image 24.png";
import img4 from "../../assets/8-Our customers/image 25.png";
import img5 from "../../assets/8-Our customers/image 26.png";
const data = [img1, img2, img3, img4, img5];
import './Customer.css'
import "../Button.css";
const OurCustomer = ({children}) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col w-auto overflow-hidden mt-12">
        <div className="flex w-[1200px] select-none overflow-hidden marquee">
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-[100%] marqueegroup">
            {children?children:data.map((item, index) => (
              <div className="grid place-items-center " style={{ width: "clamp(10rem, 1rem + 30vmin, 30rem)/10", padding: "calc(clamp(10rem, 1rem + 30vmin, 30rem)/10" }}>
                <img className="object-contain w-[100%] h-[100%] rounded-[0.5rem] aspect-[16/9] p-[5px] shadow-lg " src={item} alt="" />
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-[100%] marqueegroup">
            {children?children:data.map((item, index) => (
              <div className="grid place-items-center " style={{ width: "clamp(10rem, 1rem + 30vmin, 30rem)/10", padding: "calc(clamp(10rem, 1rem + 30vmin, 30rem)/10" }}>
                <img className="object-contain w-[100%] h-[100%] rounded-[0.5rem] aspect-[16/9] p-[5px] shadow-lg " src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;





















