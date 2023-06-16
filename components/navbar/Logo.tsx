"use client";
import Image from "next/image";

interface LogoProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <Image
      onClick={onClick}
      alt="Logo"
      className=" cursor-pointer hover:opacity-60  hidden min-[320px]:flex"
      height="160"
      priority
      width="160"
      src="/p&x-white.png"
    />
  );
};

export default Logo;
