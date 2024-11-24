import Link from "next/link";

interface ListItemProps {
  href: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, children }) => {
  return (
    <div>
      <Link href={href}>
        {/* Use <a> inside <Link> */}
        <li className="py-1 text-white">{children}</li>
      </Link>
    </div>
  );
};

export default ListItem;
