"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="h-12 w-12 rounded-full" onClick={toggle}>
      Light
    </div>
  );
};

export default DarkModeToggle;
