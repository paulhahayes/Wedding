"use client";
import { useState } from "react";

const useSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return {
    collapsed,
    toggleCollapsed,
  };
};

export default useSidebar;
