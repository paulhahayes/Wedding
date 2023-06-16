"use client";

import { HiOutlineMail } from "react-icons/hi";

interface RsvpProps {
  onClick: () => void;
}

const Rsvp = ({ onClick }: RsvpProps) => {
  return (
    <div
      className="text-xl font-semibold items-center hidden md:block rounded-xl
      dark:text-neutral-100 cursor-pointer hover:opacity-60 border-4 border-white p-1
      transition-opacity"
      onClick={onClick}
    >
      <HiOutlineMail className="inline-block mr-1" size={32} />
      RSVP
    </div>
  );
};

export default Rsvp;
