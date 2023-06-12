"use client";

import { HiOutlineMail } from "react-icons/hi";

interface RsvpProps {
  onClick: () => void;
}

const Rsvp = ({ onClick }: RsvpProps) => {
  return (
    <div
      className="text-xl items-center hidden md:block layout
      dark:text-neutral-100 cursor-pointer hover:opacity-60 
      transition-opacity"
      onClick={onClick}
    >
      <HiOutlineMail className="inline-block mr-1" size={32} />
      RSVP
    </div>
  );
};

export default Rsvp;
