import Link from "next/link";

const menuItems = [
  { text: "CATALOGUE", href: "#" },
  { text: "FASHION", href: "#" },
  { text: "FAVORITE", href: "#" },
  { text: "LIFESTYLE", href: "#" },
  { text: "SIGN UP", href: "#", isButton: true }
];

const Menu = () => {
  return (
    <ul className="flex space-x-8 font-medium">
      {menuItems.map((item, index) => (
        <li key={index}>
          {item.isButton ? (
            <Link href={item.href}>
              <button>{item.text}</button>
            </Link>
          ) : (
            <Link href={item.href}>{item.text}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
