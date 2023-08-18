"use client";
import React, { useState, useEffect } from "react";

import useSidebar from "@/hooks/useSideBar";
import useTranslate from "@/hooks/useTranslate";
import useRSVP from "@/hooks/useRSVP";
import useMenuRefs from "@/hooks/useMenuRefs";
import { useRouter } from "next/navigation";

import { FaHome, FaMusic, FaGithub } from "react-icons/fa";
import { HiMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlineContactPhone } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { LuGift } from "react-icons/lu";
import { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";

interface MenuItemProps {
  Icon: IconType;
  text: string;
  spanish: string;
  hidden?: boolean;
  href?: string;
}

const MENU_ITEMS: MenuItemProps[] = [
  { Icon: FaHome, text: "Home", spanish: "Inicio", href: "/" },
  {
    Icon: AiOutlineSchedule,
    text: "Details",
    hidden: true,
    spanish: "Detalles",
    href: "/details",
  },
  { Icon: HiOutlineMail, text: "RSVP", hidden: true, spanish: "RSVP" },
  {
    Icon: MdOutlineContactPhone,
    text: "Contact",
    hidden: true,
    spanish: "Contacto",
    href: "/contact",
  },
  {
    Icon: TfiGallery,
    text: "Gallery",
    hidden: true,
    spanish: "Galería",
    href: "/gallery",
  },
  { Icon: LuGift, text: "Registry", spanish: "Registro", href: "/registry" },
  { Icon: FaMusic, text: "Music", spanish: "Música", href: "/music" },
  {
    Icon: FaGithub,
    text: "Source Code",
    spanish: "Código fuente",
    href: "https://github.com/paulhahayes/Wedding",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { collapsed, toggleCollapsed } = useSidebar();
  const { lang, toggleLang } = useTranslate();
  const rsvpModal = useRSVP();
  const [activeItem, setActiveItem] = useState(MENU_ITEMS[0].text);

  const refs = useMenuRefs(MENU_ITEMS);

  const handleItemClick = (item: any) => {
    toggleCollapsed();
    setActiveItem(item.text);
    if (item.text === "RSVP") {
      rsvpModal.isOpen ? rsvpModal.onClose() : rsvpModal.onOpen();
      return;
    }
    router.push(item.href);
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
    <div className="h-screen w-12 flex flex-col items-center fixed z-40  ">
      <div
        className="fixed sm:top-[21%] min-[320px]:top-[6%] hover:cursor-pointer z-30 text-white hover:opacity-70"
        onClick={toggleCollapsed}
      >
        {collapsed ? <HiOutlineMenuAlt1 size={24} /> : <HiMenu size={24} />}
      </div>
      <div
        className={`inset-y-0 left-0 flex flex-col z-25 items-center justify-center min-[320px]:top-0 shadow-xl
         min-[320px]:rounded-none sm:top-[18%] min-[320px]:h-screen sm:h-[60%] fixed transition-all border border-white
         duration-300 ease-in-out sm:rounded-tr-30 sm:rounded-br-30 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 ${
           collapsed
             ? "w-12 min-[320px]:opacity-0  sm:opacity-100  "
             : "sm:w-[180px] min-[320px]:w-screen "
         }`}
      >
        <div className=" text-white w-full pl-3 relative">
          {MENU_ITEMS.map((item, index) => (
            <MenuItem
              key={index}
              hidden={item.hidden}
              Icon={item.Icon}
              spanish={item.spanish}
              lang={lang}
              text={item.text}
              collapsed={collapsed}
              onClick={() => handleItemClick(item)}
              ref={refs[item.text]}
              href={item.href}
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
        className={`fixed text-xl hover:cursor-pointer hover:opacity-70 sm:top-[72%] min-[320px]:top-[90%] z-40 
                ${collapsed ? "min-[320px]:hidden sm:block" : ""}`}
        onClick={() => toggleLang()}
      >
        {lang === "en" ? "🇦🇺" : "🇨🇴"}

        <div
          className="text-white text-[17px]"
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
          {lang === "en" ? "English" : "Español"}
        </div>
      </div>
    </div>
  );
};

interface MenuItemActionProps {
  Icon: IconType;
  text: string;
  collapsed: boolean;
  spanish: string;
  hidden?: boolean;
  lang?: string;
  href?: string;
  onClick: () => void;
}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemActionProps>(
  ({ Icon, text, collapsed, onClick, hidden, spanish, lang }, ref) => (
    <div
      ref={ref}
      className={`flex-row mb-8 hover:cursor-pointer
       hover:opacity-70 w-full justify-start gap-4
        transition-all duration-200 ease-in-out 
        
        ${hidden ? "sm:hidden min-[320px]:flex" : "flex"}
        
        `}
      onClick={onClick}
      style={{ position: "relative" }}
    >
      <Icon className="text-[24px]" />

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
        {lang === "en" ? text : spanish}
      </div>
    </div>
  )
);
MenuItem.displayName = "MenuItem";

export default Sidebar;
