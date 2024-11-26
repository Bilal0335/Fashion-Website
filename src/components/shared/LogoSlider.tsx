import Image from "next/image";
import FirstIcon from "../../assets/image/FirstIconS.png";
import SecondIcon from "../../assets/image/SecondIconS.png";
import ThirdIcon from "../../assets/image/ThirdIconS.png";
import FourIcon from "../../assets/image/FourIconS.png";
import FiveIcons from "../../assets/image/FiveIconsS.png";
import SixIcon from "../../assets/image/SixIconS.png";

const LogoSlider = () => {
  return (
    <div className="py-2">
      {/* Logo Slider */}
      <div className="flex items-center justify-evenly">
        {/* Icons */}
        <div className="icon-container">
          <Image src={FirstIcon} alt="First Icon" width={100} height={100} />
        </div>
        <div className="icon-container">
          <Image src={SecondIcon} alt="Second Icon" width={100} height={100} />
        </div>
        <div className="icon-container">
          <Image src={ThirdIcon} alt="Third Icon" width={100} height={100} />
        </div>
        <div className="icon-container">
          <Image src={FourIcon} alt="Fourth Icon" width={100} height={100} />
        </div>
        <div className="icon-container">
          <Image src={FiveIcons} alt="Fifth Icon" width={100} height={100} />
        </div>
        <div className="icon-container">
          <Image src={SixIcon} alt="Sixth Icon" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
