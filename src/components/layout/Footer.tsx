import React from "react";
import Wrapper from "../shared/Wrapper";
import SocialLinks from "../shared/SocialLinks";
import ListItem from "../shared/ListItems";

const Footer = () => {
  const company = [
    { title: "About", href: "#" },
    { title: "Contact Us", href: "#" },
    { title: "Service", href: "#" },
    { title: "Supports", href: "#" },
    { title: "Careers", href: "#" }
  ];
  const quick = [
    { title: "Shared Location", href: "#" },
    { title: "Order Tracking", href: "#" },
    { title: "Size Guide", href: "#" },
    { title: "FAQs", href: "#" }
  ];
  const legal = [
    { title: "Terms & Conditions", href: "#" },
    { title: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className="bg-black text-white h-auto p-5">
      <Wrapper>
        {/* Main div */}
        <div className="mb-10 mt-10 flex justify-between">
          {/* Box 1 */}
          <div>
            <h1 className="text-[#FFFFFF] text-[2.5rem] font-extrabold py-1">
              FASHION
            </h1>
            <p className="text-[#8E8E8E] max-w-[80%] tracking-wider py-3 ">
              Complete your style with awesome clothes from us.
            </p>
            <SocialLinks />
          </div>
          {/* Box 2 */}
          <div className="flex justify-between gap-10">
            {/* Company Links */}
            <div>
              <h3 className="mb-4 text-md font-semibold leading-7 text-[#D9D9D9] capitalize">
                company
              </h3>
              <ul className="space-y-2">
                {company.map((comp, index) => (
                  <ListItem key={index} href={comp.href}>
                    {comp.title}
                  </ListItem>
                ))}
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-md font-semibold leading-7 text-[#D9D9D9] capitalize">
                quick link
              </h3>
              <ul className="space-y-2">
                {quick.map((item, index) => (
                  <ListItem key={index} href={item.href}>
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </div>
            {/* Legal Links */}
            <div>
              <h3 className="mb-4 text-md font-semibold leading-7 text-[#D9D9D9] capitalize">
                legal
              </h3>
              <ul className="space-y-2">
                {legal.map((item, index) => (
                  <ListItem key={index} href={item.href}>
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
