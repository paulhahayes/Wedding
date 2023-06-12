"use client";
import { useCallback, useEffect, useRef, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { SidebarContext } from "@/context/SideBarContext";
import React, { useContext } from "react";
// import MenuItem from "./MenuItem";
// import Box from "../sidebar/Box";

import { BsChevronDown, BsChevronRight } from "react-icons/bs";

interface UserMenuProps {
  onClick: () => void;
}

const UserMenu: React.FC<UserMenuProps> = () => {
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
      <div className="flex flex-row items-center gap-3 ml-8">
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
          <div className=" ">
            {isOpen ? <BsChevronDown /> : <BsChevronRight />}
          </div>
        </div>
        {/* {isOpen && <Box className="top-0 h-[100vh]">hello world</Box>} */}
      </div>
    </div>
  );
};

export default UserMenu;

{
  /* <MenuItem label="Music" onClick={() => router.push("/music")} />
<MenuItem label="Gifts" onClick={() => router.push("/gifts  ")} /> */
}

{
  /* <div
className="
  absolute 
  rounded-xl 
  shadow-md
  px-16
  py-2
  md:w-3/4 
  bg-yellow
  overflow-hidden 
  right-0 
  top-12
  text-sm
"
> */
}
