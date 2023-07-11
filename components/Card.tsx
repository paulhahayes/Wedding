import React from "react";
import Image from "next/image";
interface CardProps {
  children?: React.ReactNode;
  styles?: string;
  image?: string;
  title: string;
  subheader: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ children, styles }) => {
  return (
    <div
      className={`md:w-[80%]  md:h-[400px] rounded-lg border bg-white shadow-xl relative  overflow-hidden 
      min-[330px]:w-[90%] min-[330px]:h-[600px]
      `}
    >
      <div className="absolute top-0 left-0 w-full h-[100%] bg-gradient-to-l from-[#fcecfe] via-[#fbf6e7] to-[#e6fcf5] opacity-70"></div>
      <div className="relative z-10 p-4 w-full h-full">
        <div
          className="md:h-full md:w-[50%] border border-neutral-400 rounded
                         min-[330px]:w-full min-[330px]:h-[50%]
        "
        ></div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
