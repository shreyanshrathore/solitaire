import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import image1 from "../../assets/Aboutus/image1.png";
import image2 from "../../assets/Aboutus/image2.png";
import image3 from "../../assets/Aboutus/image3.png";
import image4 from "../../assets/Aboutus/image4.png";
import bgline from "../../assets/Aboutus/bgline.svg";

const Example = () => {
  return (
    <div className="bg-[#FFF4F5]">
      <div>
        <HorizontalScrollCarousel />
      </div>
      {/* <div className="relative">
        <div className="absolute bottom-32">
          <div className="w-full bg-green-200">hello</div>
        </div>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update the screen width in state
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add an event listener to update the screen width when it changes
  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  //   console.log(screenWidth);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${screenWidth * 3}px`]
  );

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#FFF4F5]">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="relative flex w-full">
            <Card
              card={cards[0]}
              screenWidth={screenWidth}
              color={"green-200"}
            />
            <Card
              card={cards[1]}
              screenWidth={screenWidth}
              color={"yellow-200"}
            />
            <Card
              card={cards[2]}
              screenWidth={screenWidth}
              color={"yellow-200"}
            />
            <Card
              card={cards[3]}
              screenWidth={screenWidth}
              color={"yellow-200"}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      className={`mt-20 md:mt-4 lg:mt-12 w-screen py-20 lg:py-32 flex flex-col lg:flex-row px-[2%]  grid-cols-2 gap-4 lg:gap-20 `}
    >
      <div className="flex justify-center col-span-1 md:h-auto">
        <div className="relative w-auto">
          <img
            className="h-auto w-[35vw] lg:w-[50vw] min-w-[250px] max-w-[500px]"
            src={card.url}
            alt=""
          />
          <img
            className="absolute top-0 left-3 h-auto w-[35vw] lg:w-[50vw] min-w-[250px] max-w-[500px]"
            src={bgline}
            alt=""
          />
        </div>
      </div>

      <div className="col-span-1 space-y-4 lg:mt-24">
        <h1 className="text-3xl italic text-center font-base lg:text-left md:text-3xl lg:text-6xl text-generic">
          {card.heading}
        </h1>
        <div className="lg:w-[500px] font-base text-gray-700  md:text-xl lg:text-2xl px-8 md:px-8 lg:px-2 text-center lg:text-left w-full">
          {card.content}
        </div>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: image1,
    heading: "2001 - Saakar Established",
    content: `Mr. Sanjay Dasot after reaching his epitome in readymade garment business soon realized the potential of real estate market. Being a visionary he, In the year 2001, established Saakar group along with his partner in Indore and went on to carve various landmark residential projects of Indore such as Saakar `,
  },
  {
    url: image2,
    heading: "2010 - Leading Real Estate Player",
    content: "After developing huge township projects like Saakar NRI City - I and Saakar NRI City - II from 2006-2010, Saakar group launched three megaprojects - Saakar Corridor, Saakar hills, and Saakar Real Life projecting a total land area of 1,87,74,369 sq. ft. making it the leader of the urban township real estate market in Indore."
  },
  {
    url: image3,
    heading: "2015 - Solitaire disrupts the market",
    content: "After reaching epitome of success through Saakar, Solitaire Realty was introduced to disrupt the urban township real estate market by launching Solitaire Corridor at Super Corridor which bags the merit of the fastest developed project in the country. A total of 1,08,000 Sq. ft. was fully developed with beautiful landscapes in just a matter of 45 days."
  },
  {
    url: image4,
    heading: "2021 - Revolutionary projects underway",
    content: "Solitaire Realty is coming up with a revolutionary Urban Township in Indore that will be setting a benchmark in the real estate market. It is going to be a township that intends to leave a mark internationally with its Planning, Design, Craftsmanship, and Landscapes."
  },
];
