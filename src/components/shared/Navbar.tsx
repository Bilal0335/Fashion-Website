import Link from "next/link";
import Button from "@/components/shared/Button";

const menuItems = [
  { text: "CATALOGUE", href: "#" },
  { text: "FASHION", href: "#" },
  { text: "FAVORITE", href: "#" },
  { text: "LIFESTYLE", href: "#" }
];

const Menu = () => {
  return (
    <ul className="flex space-x-8 items-center">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.href}  className="text-shadow">
            {item.text}
          </Link>
        </li>
      ))}
      <li>
        <Button href="#" text="SIGN UP" />
      </li>
    </ul>
  );
};

export default Menu;
