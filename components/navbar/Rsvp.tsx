"use client";

import { HiOutlineMail } from "react-icons/hi";
import useRSVP from "@/hooks/useRSVP";
import { useCallback } from "react";

const Rsvp = () => {
  const rsvpModal = useRSVP();

  const handleClick = useCallback(() => {
    rsvpModal.isOpen ? rsvpModal.onClose() : rsvpModal.onOpen();
  }, [rsvpModal]);
  return (
    <div
      className="text-xl font-semibold items-center hidden sm:block rounded-xl
      dark:text-neutral-100 cursor-pointer hover:opacity-60 border-2 border-white py-1 px-2
      transition-opacity"
      onClick={handleClick}
    >
      <HiOutlineMail className="inline-block mr-1" size={32} />
      RSVP
    </div>
  );
};

export default Rsvp;
