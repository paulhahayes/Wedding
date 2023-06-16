"use client";
import { TranslateContext } from "@/context/TranslateContext";
import { useContext } from "react";

const useTranslate = () => {
  const { lang, setLang } = useContext(TranslateContext);
  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  return {
    lang,
    toggleLang,
  };
};

export default useTranslate;
