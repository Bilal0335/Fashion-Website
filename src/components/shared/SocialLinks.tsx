import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import React from "react";

const socialLinks = [
  {
    href: "#",
    color: "bg-icons-color",
    icon: <FaFacebookF />
  },
  {
    href: "#",
    color: "bg-icons-color",
    icon: <FaInstagram />
  },
  {
    href: "#",
    color: "bg-icons-color",
    icon: <FaTwitter />
  },
  {
    href: "#",
    color: "bg-icons-color",
    icon: <FaLinkedinIn />
  }
];
const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mb-4 py-2 cursor-pointer">
      {socialLinks.map(({ href, icon, color }, index) => (
        <Link href={href} key={index} target="_blank">
          <div
            className={`w-6 h-6 text-black justify-center items-center rounded-md flex ${color}`}
          >
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
