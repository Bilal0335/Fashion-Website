import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Image2 from "@/assets/image/imag2.png";
import Image3 from "@/assets/image/imag3.png";
const YoungLife = () => {
  const younLife = [
    {
      image: Image2,
      title: "Trending on Instagram",
      subtitle: "Explore Now!"
    },
    {
      image: Image3,
      title: "All Under $40",
      subtitle: "Explore Now!"
    }
  ];

  return (
    <div>
      <Wrapper>
        <div>
          <h1 className="text-3xl font-black leading-[2] py-5 text-left ml-4 mb-4">
            Young’s Favourite
          </h1>
          <div className="flex justify-center items-center space-x-6 m-auto mb-7">
            {younLife.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                />
                <div className="flex justify-between items-center mt-2">
                  {/* Text */}
                  <div className="flex flex-col items-start">
                    <h4 className="font-bold">{item.title}</h4>
                    <h5 className="text-sm text-gray-400">{item.subtitle}</h5>
                  </div>
                  {/* Icon */}
                  <GoArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default YoungLife;
