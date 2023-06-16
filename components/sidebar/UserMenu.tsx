"use client";
import { useCallback, useEffect, useRef, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { SidebarContext } from "@/context/SideBarContext";
import { useContext } from "react";
// import MenuItem from "./MenuItem";
// import Box from "../sidebar/Box";

import { BsChevronDown, BsChevronRight } from "react-icons/bs";

interface UserMenuProps {
  onClick: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onClick }) => {
  const { collapsed, toggleCollapsed } = useContext(SidebarContext);

  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
    toggleCollapsed();
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      toggleCollapsed();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[3px] 
          border-white
          flex-row 
          items-center 
          gap-3 
          rounded-full
          cursor-pointer 
          hover:opacity-70
          transition
          min-[320px]:flex
          "
        >
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;

{
  /* <MenuItem label="Music" onClick={() => router.push("/music")} />
<MenuItem label="Gifts" onClick={() => router.push("/gifts  ")} /> */
}
