"use client";

import { AiOutlineSchedule } from "react-icons/ai";
import useTranslate from "@/hooks/useTranslate";
interface detailsProps {
  onClick: () => void;
}

const Details = ({ onClick }: detailsProps) => {
  const { lang } = useTranslate();
  return (
    <div
      className="text-xl font-semibold  items-center hidden sm:block
      dark:text-neutral-100 cursor-pointer hover:opacity-60 
      transition-opacity"
      onClick={onClick}
    >
      <AiOutlineSchedule className="inline-block mr-1" size={32} />
      {lang === "en" ? "Details" : "Detalles"}
    </div>
  );
};

export default Details;
