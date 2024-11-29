import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import MobileApp from "@/assets/image/Mobileapp.png";
import AppStore from "@/assets/image/app1.png";
import PlayStore from "@/assets/image/app2.png";
const AppContent = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex justify-evenly items-center mb-10 py-8">
          <div className="leading-tight">
            <h4 className="text-5xl font-black leading-[1.3] ">
              DOWNLOAD APP & <br /> GET THE VOUCHER!
            </h4>
            <p className="mb-7 mt-2 whitespace-pre-line ">
              Get 30% off for first transaction <br /> using Rondovision mobile
              app for now.
            </p>

            {/* icon div */}
            <div className="flex gap-3">
              <Image src={AppStore} alt="App Store" width={100} height={100} />
              <Image
                src={PlayStore}
                alt="Play Store"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div>
            <Image
              src={MobileApp}
              alt="PAYDAY SALE NOW"
              width={250}
              height={250}
              className="object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AppContent;
