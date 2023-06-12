"use client";
import { twMerge } from "tailwind-merge";

import { SidebarContext } from "@/context/SideBarContext";
import { useContext } from "react";

const Sidebar = () => {
  const { collapsed } = useContext(SidebarContext);
  return (
    <div
      className={twMerge(
        "grid",
        "min-h-screen",
        "z-10",
        "transition-all ",
        "duration-300",
        "ease-in-out",
        !collapsed
          ? "md:w-[250px] h-screen min-[320px]:w-screen shadow-md shadow-yellow"
          : "w-[0px]"
      )}
    >
      <div className={twMerge("bg-neutral-900", "text-white")}>
        {!collapsed && (
          <div className="flex flex-col text-white mt-4">
            <ul className="border bg-yellow flex flex-col items-center">
              <li className="text-white">Home</li>
              <li className="text-white">Home</li>
              <li className="text-white">Home</li>
              <li className="text-white">Home</li>
            </ul>
          </div>
        )}
      </div>
      {/* content */}
    </div>
  );
};

export default Sidebar;
