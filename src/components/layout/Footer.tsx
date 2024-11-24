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
    <footer className="bg-black py-8 px-6 sm:px-8 lg:px-10">
      <Wrapper>
        <div className="container mx-auto max-w-screen-lg flex justify-between items-start">
          {/* first box */}
          <div className="flex-1">
            <h3 className="mb-4 text-xl font-extrabold leading-7 text-white">FASHION</h3>
            <p className="text-white">
              Complete your style with awesome clothes from us.
            </p>
            <SocialLinks />
          </div>

          {/* center space (empty) */}
          <div className="flex-1"></div>

          {/* second box */}
          <div className="flex gap-x-24 justify-start p-7 bg-red-300">
            <div>
              <h3 className="mb-4 text-xl font-extrabold leading-7 text-white uppercase">
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
            <div>
              <h3 className="mb-4 text-xl font-extrabold leading-7 text-white uppercase">
                quick link
              </h3>
              <ul className="space-y-2">
                {quick.map((quick, index) => (
                  <ListItem key={index} href={quick.href}>
                    {quick.title}
                  </ListItem>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-extrabold leading-7 text-white uppercase">
                legal
              </h3>
              <ul className="space-y-2">
                {legal.map((legal, index) => (
                  <ListItem key={index} href={legal.href}>
                    {legal.title}
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
