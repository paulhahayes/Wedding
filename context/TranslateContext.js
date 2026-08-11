"use client";
import { createContext, useState } from "react";

export const TranslateContext = createContext();

export const TranslateProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <TranslateContext.Provider value={{ lang, setLang }}>
      {children}
    </TranslateContext.Provider>
  );
};
