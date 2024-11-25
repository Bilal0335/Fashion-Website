import Link from "next/link";

interface ListItemProps {
  href: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, children }) => {
  return (
    <li className="py-1">
      <Link href={href} className="text-[#8E8E8E] hover:text-white">
        {children}
      </Link>
    </li>
  );
};

export default ListItem;
