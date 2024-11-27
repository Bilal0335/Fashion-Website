import React from "react";
import Wrapper from "../shared/Wrapper";
import Arrival1 from "@/assets/image/a.png";
import Arrival2 from "@/assets/image/arrival2.png";
import Arrival3 from "@/assets/image/arrival3.png";
import Image, { StaticImageData } from "next/image";
import { GoArrowRight } from "react-icons/go";

// Component for individual items
const ArrivalItem = ({
  imageSrc,
  title,
  subtitle
}: {
  imageSrc: StaticImageData;
  title: string;
  subtitle: string;
}) => (
  <div className=" p-4 mb-5">
    {/* Image Section */}
    <Image
      src={imageSrc}
      alt={title}
      className="object-cover"
     
    />
    {/* Text and Icon Section */}
    <div className="flex justify-between items-center mt-2">
      {/* Text */}
      <div className="flex flex-col items-start">
        <h4 className="font-bold">{title}</h4>
        <h5 className="text-sm text-gray-400">{subtitle}</h5>
      </div>
      {/* Icon */}
      <GoArrowRight className="flex items-center justify-center" />
    </div>
  </div>
);

const NewArrivals = () => {
  // Data for the arrival items
  const arrivalData = [
    {
      image: Arrival1,
      title: "Hoodies & Sweatshirts",
      subtitle: "Explore Now!"
    },
    { image: Arrival2, title: "Coats & Parkas", subtitle: "Explore Now!" },
    { image: Arrival3, title: "Tees & T-Shirt", subtitle: "Explore Now!" }
  ];

  return (
    <div>
      <Wrapper>
        <h1 className="text-3xl font-black leading-[2] py-5 text-left ml-4 mb-4">
          New Arrivals
        </h1>
        {/* Container for Items */}
        <div className="flex justify-start items-center mb-[30px]">
          {arrivalData.map((item, index) => (
            <ArrivalItem
              key={index}
              imageSrc={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default NewArrivals;
