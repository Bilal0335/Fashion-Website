import React from "react";
import Wrapper from "../shared/Wrapper";
import Fashion from "@/assets/image/FASHIONlogo.png";
import Vector from "@/assets/image/Vector.png";
import Image from "next/image";
import Menu from "../shared/Navbar";
const Header = () => {
  return (
    <header>
      <Wrapper>
        {/* logo Image */}
        <div className="flex justify-between items-center py-4">
          <div>
            <div className="flex justify-start space-x-2 drop-shadow-custom">
              <Image src={Vector} alt="Vector Logo" width={20} height={10} />
              <Image src={Fashion} alt="Fashion Logo" width={100} height={56} />
            </div>
          </div>
          {/* Navigation Bar */}
          <Menu />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
