"use client";

import { MdOutlineContactPhone } from "react-icons/md";
import useTranslate from "@/hooks/useTranslate";

interface ContactProps {
  onClick: () => void;
}

const Contact = ({ onClick }: ContactProps) => {
  const { lang } = useTranslate();
  return (
    <div
      className="text-xl font-semibold items-center hidden sm:block
      dark:text-neutral-100 cursor-pointer hover:opacity-60  hover:scale-110
      transition-opacity"
      onClick={onClick}
    >
      <MdOutlineContactPhone className="inline-block mr-1" size={32} />
      {lang === "en" ? "Contact" : "Contacto"}
    </div>
  );
};

export default Contact;
