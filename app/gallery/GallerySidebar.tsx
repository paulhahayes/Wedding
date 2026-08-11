"use client";
import React from "react";

type GallerySidebarProps = {
  activeTab: string;
  handleSelectTab: (tab: string) => void;
  tabs: string[];
};

const GallerySidebar: React.FC<GallerySidebarProps> = ({
  activeTab,
  handleSelectTab,
  tabs,
}) => {
  return (
    <nav className="sm:w-full w-[100vw] absolute sm:relative left-0 border-x-0 sm:border-x backdrop-blur-3xl mb-2 rounded bg-white/10 border-white border items-center">
      <ul className="w-full flex justify-between text-white md:text-2xl sm:text-lg text-xs py-3">
        {tabs.map((tab) => (
          <li
            onClick={() => handleSelectTab(tab)}
            className={`hover:cursor-pointer transition-all duration-300 hover:scale-105 transform mx-0.5 sm:mx-2
              ease-in-out  ${
                activeTab === tab ? "border-white border-b-2" : ""
              }`}
            key={tab}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GallerySidebar;
