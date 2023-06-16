"use client";

import { MdOutlineContactPhone } from "react-icons/md";

interface ContactProps {
  onClick: () => void;
}

const Contact = ({ onClick }: ContactProps) => {
  return (
    <div
      className="text-xl font-semibold items-center hidden md:block
      dark:text-neutral-100 cursor-pointer hover:opacity-60 
      transition-opacity"
      onClick={onClick}
    >
      <MdOutlineContactPhone className="inline-block mr-1" size={32} />
      Contact
    </div>
  );
};

export default Contact;
