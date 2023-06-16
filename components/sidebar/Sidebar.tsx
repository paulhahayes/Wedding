"use client";
import React, { useState, useRef, useEffect } from "react";
import useSidebar from "@/hooks/useSideBar";
import { FaHome, FaRegListAlt, FaMusic, FaGithub } from "react-icons/fa";
import { HiMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconType } from "react-icons";
import useTranslate from "@/hooks/useTranslate";

interface MenuItemProps {
  Icon: IconType;
  text: string;
}

const MENU_ITEMS: MenuItemProps[] = [
  { Icon: FaHome, text: "Home" },
  { Icon: FaRegListAlt, text: "Registry" },
  { Icon: FaMusic, text: "Music" },
  { Icon: FaGithub, text: "Source Code" },
];

const Sidebar = () => {
  const { collapsed, toggleCollapsed } = useSidebar();
  const { lang, toggleLang } = useTranslate();

  const [activeItem, setActiveItem] = useState(MENU_ITEMS[0].text);

  const refs: { [key: string]: React.RefObject<HTMLDivElement> } =
    MENU_ITEMS.reduce(
      (acc: { [key: string]: React.RefObject<HTMLDivElement> }, value) => {
        acc[value.text] = useRef<HTMLDivElement>(null);
        return acc;
      },
      {}
    );

  const handleItemClick = (item: any) => {
    setActiveItem(item.text);
  };

  useEffect(() => {
    const activeItemRef = refs[activeItem];
    if (activeItemRef.current !== null) {
      activeItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeItem]);

  return (
    <div className="h-screen w-12 flex flex-col items-center fixed z-40 ">
      <div
        className="fixed top-[21%] hover:cursor-pointer z-30 text-white hover:opacity-70"
        onClick={toggleCollapsed}
      >
        {collapsed ? <HiOutlineMenuAlt1 size={24} /> : <HiMenu size={24} />}
      </div>
      <div
        className={`inset-y-0 left-0 flex flex-col z-25 items-center justify-center min-[320px]:top-0
         min-[320px]:rounded-none sm:top-[18%] min-[320px]:h-screen sm:h-[60%] fixed transition-all 
         duration-300 ease-in-out sm:rounded-tr-30 sm:rounded-br-30 ${
           collapsed
             ? "w-12  bg-blue-300/60"
             : "sm:w-[200px] bg-blue-500 min-[320px]:w-screen "
         }`}
      >
        <div className=" text-white w-full pl-3 relative">
          {MENU_ITEMS.map((item, index) => (
            <MenuItem
              key={index}
              Icon={item.Icon}
              text={item.text}
              collapsed={collapsed}
              onClick={() => handleItemClick(item)}
              ref={refs[item.text]}
            />
          ))}
          <div
            className={`highlight-div absolute top-0 transition-all duration-200 ease-in-out border-r-4 z-30 border-white`}
            style={{
              top: `${refs[activeItem]?.current?.offsetTop || 0}px`,
              height: `${refs[activeItem]?.current?.offsetHeight || 0}px`,
              right: 0,
            }}
          ></div>
        </div>
      </div>
      <div
        className="fixed text-xl hover:cursor-pointer hover:opacity-70 top-[72%] z-40 "
        onClick={() => toggleLang()}
      >
        {lang === "en" ? "🇦🇺" : "🇨🇴"}
      </div>
    </div>
  );
};

interface MenuItemActionProps {
  Icon: IconType;
  text: string;
  collapsed: boolean;
  onClick: () => void;
}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemActionProps>(
  ({ Icon, text, collapsed, onClick }, ref) => (
    <div
      ref={ref}
      className={`flex flex-row mb-8 hover:cursor-pointer hover:opacity-70 w-full justify-start gap-4 transition-all duration-200 ease-in-out`}
      onClick={onClick}
      style={{ position: "relative" }}
    >
      <Icon style={{ fontSize: collapsed ? "24px" : "24px" }} />
      <div
        style={{
          position: "absolute",
          transition: " opacity 0.5s ease-in-out",
          opacity: collapsed ? 0 : 1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          left: "40px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {text}
      </div>
    </div>
  )
);

export default Sidebar;
