"use client";
import { createContext } from "react";

import useSideBar from "@/hooks/useSideBar";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const sidebar = useSideBar();

  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  );
};
