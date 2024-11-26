import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import Image from "next/image";
import HeroImage from "@/assets/image/hero_img.png";
import LogoSlider from "../shared/LogoSlider";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        {/* Main container */}
        <div className="bg-[#E7E6E6] p-4 mb-5 rounded-xl flex justify-between items-center">
          {/* Left side */}
          <div>
            <h4 className="text-5xl font-black leading-[1.3]">
              <span className="inline-block relative bg-white px-2 py-1 custom-rotate">
                LET’S
              </span>
              <br />
              <span>EXPLORE</span>
              <br />
              <span className="inline-block relative bg-[#EBD96B] px-2 py-1 custom-rotate">
                UNIQUE
              </span>
              <br />
              <span>CLOTHES.</span>
            </h4>
            <p className="leading-5 mb-4 mt-2">
              Live for Influential and Innovative fashion!
            </p>
            <Button text={"Shop Now"} href={"#"} />
          </div>
          {/* Right side */}
          <div>
            <Image src={HeroImage} alt="Hero Section" />
          </div>
        </div>
      </Wrapper>
      <main className="bg-[#EBD96B] mb-1">
        <LogoSlider />
      </main>
    </section>
  );
};

export default Hero;
