import React from "react";
import Wrapper from "../shared/Wrapper";
import Fashion from "@/assets/image/FASHIONlogo.png";
import Vector from "@/assets/image/Vector.png";
import Image from "next/image";
import Menu from "../shared/Navbar";
import Button from "../shared/Button";
const Header = () => {
  return (
    <header className="">
      <Wrapper>
        {/* logo Image */}
        <div>
          <div className="flex items-center justify-start space-x-2">
            <Image src={Vector} alt="Vector Logo" width={20} height={10} />
            <Image src={Fashion} alt="Fashion Logo" width={100} height={56} />
          </div>
        </div>
        {/* Navigation Bar */}
        <Menu />
        <Button />
      </Wrapper>
    </header>
  );
};

export default Header;
