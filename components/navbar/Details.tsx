"use client";

import { AiOutlineSchedule } from "react-icons/ai";

interface detailsProps {
  onClick: () => void;
}

const Details = ({ onClick }: detailsProps) => {
  return (
    <div
      className="text-xl font-semibold  items-center hidden md:block
      dark:text-neutral-100 cursor-pointer hover:opacity-60 
      transition-opacity"
      onClick={onClick}
    >
      <AiOutlineSchedule className="inline-block mr-1" size={32} />
      Wedding
    </div>
  );
};

export default Details;
