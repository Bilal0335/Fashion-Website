import Link from "next/link";

type ButtonProps = {
  href: string;
  text: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
  return (
    <Link href={href}>
      <button
        className={`px-4 py-2 bg-black text-white rounded hover:bg-black box-shadow ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
