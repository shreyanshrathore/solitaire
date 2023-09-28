import React, { useEffect, useRef } from "react";
import img1 from "../../assets/8-Our customers/image 22.png";
import img2 from "../../assets/8-Our customers/image 23.png";
import img3 from "../../assets/8-Our customers/image 24.png";
import img4 from "../../assets/8-Our customers/image 25.png";
import img5 from "../../assets/8-Our customers/image 26.png";
const data = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// const OurCustomer = () => {
//   const splideRef = useRef();

//   useEffect(() => {
//     const splide = new Splide(splideRef.current, {
//       type: "loop",
//       perPage: 5,
//       drag: "free",
//       focus: "center",
//       autoScroll: {
//         speed: 50, // Adjust the speed as needed (in milliseconds)
//         pauseOnHover: true, // Optional: pause on hover
//       },
//     });

//     // AutoScroll(splide);

//     // splide.mount();
//     new Splide( '.splide' ).mount( { AutoScroll } );

//     // Clean up the Splide instance when the component unmounts
//     return () => {
//       splide.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       <div className="flex justify-center pt-20">
//         <h1 className="w-[800px] text-center font-base font-semibold text-5xl text-generic italic">
//           Our Customers are from renowned organizations
//         </h1>
//       </div>

//       <div ref={splideRef}>
//         {data.map((item, index) => (
//           <SplideSlide key={index}>
//             <Slide img={item} />
//           </SplideSlide>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Slide = ({ img }) => {
//   return (
//     <div>
//       <img src={img} alt="" />
//     </div>
//   );
// };

// export default OurCustomer;

// const OurCustomer = () => {
//   return (
//     <div className="flex w-[1200px]">
//       <div className="flex flex-shrink-0 items-center justify-around whitespace-nowrap w-[100%]">
//         {data.map((item, index) => (
//           <div key={index} className="grid place-">
//             <img src={item} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurCustomer;

// import React from 'react'
import '../Button.css'
const OurCustomer = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="border-2 border-green-300 mt-72 mb-72 h-20 w-20  custom-scale-bg">

        </div>
    </div>
  )
}

export default OurCustomer
