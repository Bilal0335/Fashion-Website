import React from "react";
import Wrapper from "../shared/Wrapper";
import girlImage from "@/assets/image/remove-image.png";
import Image from "next/image";
import Button from "../shared/Button";
const PayDay = () => {
  return (
    <div>
      {/* <Wrapper> */}
      <div className="flex justify-between items-center bg-bannerImg bg-cover bg-repeat w-full bg-bottom">
        <div>
          <Image
            src={girlImage}
            alt="PAYDAY SALE NOW"
            width={470}
            height={470}
            className="object-cover"
          />
        </div>
        <div className="">
          <div className="p-2 mr-1">
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
      </div>
      {/* </Wrapper> */}
    </div>
  );
};

export default PayDay;
