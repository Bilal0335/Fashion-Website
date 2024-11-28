import React from "react";
import Wrapper from "../shared/Wrapper";
import PayImage from "@/assets/image/imag1.png";
import Image from "next/image";
import Button from "../shared/Button";
const PayDay = () => {
  return (
    <div>
      {/* <Wrapper> */}
      <div className="flex justify-between items-center  bg-gradient-to-r from-[#FDE758] to-[#c2a451a9] via-[#c0b27f]">
        <div>
          <Image
            src={PayImage}
            alt="PAYDAY SALE NOW"
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div className="mr-20">
          <h4 className="text-5xl font-black leading-[1.3]">
            <span className="inline-block relative bg-white px-2 py-1">
              PAYDAY
            </span>
            <br />
            <span> SALE NOW</span>
          </h4>
          <p className="leading-5 mb-4 mt-2 whitespace-pre-line">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <b className="font-bold tracking-wider">1 June - 10 June 2021</b>
          <p className="mb-5">*Terms & Conditions apply</p>
          <Button text={"Shop Now"} href={"#"} />
        </div>
      </div>
      {/* </Wrapper> */}
    </div>
  );
};

export default PayDay;
