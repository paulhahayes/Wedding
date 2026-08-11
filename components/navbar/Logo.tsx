"use client";
import Image from "next/image";
import logo from "@/public/p&x-white.png";
interface LogoProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <Image
      onClick={onClick}
      alt="Logo"
      className=" cursor-pointer hover:opacity-60 items-center hidden min-[320px]:flex w-auto"
      height="120"
      priority
      width="120"
      src={logo}
    />
  );
};

export default Logo;
