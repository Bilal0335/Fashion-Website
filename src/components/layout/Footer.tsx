import React from "react";
import Wrapper from "../shared/Wrapper";
import SocialLinks from "../shared/SocialLinks";
import ListItem from "../shared/ListItems";

const Footer = () => {
  const company = [
    {
      title: "About",
      href: "#"
    },
    {
      title: "Contact Us",
      href: "#"
    },
    {
      title: "Service",
      href: "#"
    },
    {
      title: "Supports",
      href: "#"
    },
    {
      title: "Careers",
      href: "#"
    }
  ];
  const quick = [
    {
      title: "Shared Location",
      href: "#"
    },
    {
      title: "Order Tracking",
      href: "#"
    },
    {
      title: "Size Guide",
      href: "#"
    },
    {
      title: "FAQs",
      href: "#"
    }
  ];
  const legal = [
    {
      title: "Terms & Conditions",
      href: "#"
    },
    {
      title: "Privacy Policy",
      href: "#"
    }
  ];
  return (
    <footer className="bg-black">
      <Wrapper>
        <div className="container mx-auto max-w-screen-lg grid grid-cols-4">
          {/* first box */}
          <div>
            <h3 className=" mb-4 text-xl font-extrabold leading-7 text-white">
              FASHION{" "}
            </h3>
            <p className="text-white">
              Complete your style with awesome clothes from us.
            </p>
            <SocialLinks />
          </div>

          {/* second box */}
          <div className="grid grid-cols-2 gap-x-20">
            <div className="">
              <h3 className=" mb-4 text-xl font-extrabold leading-7 text-white uppercase">
                company{" "}
              </h3>
              <ul>
                {company.map((comp, index) => (
                  <ListItem key={index} href={comp.href}>
                    {comp.title}
                  </ListItem>
                ))}
              </ul>
            </div>
            <div>
              <h3 className=" mb-4 text-xl font-extrabold leading-7 text-white uppercase">
                quick link{" "}
              </h3>
              <ul>
                {quick.map((quick, index) => (
                  <ListItem key={index} href={quick.href}>
                    {quick.title}
                  </ListItem>
                ))}
              </ul>
            </div>
            <div>
              <h3 className=" mb-4 text-xl font-extrabold leading-7 text-white uppercase">
                legal{" "}
              </h3>
              <ul>
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
