"use client";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { TranslateContext } from "@/context/TranslateContext";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const path = usePathname();
  const { lang } = useContext(TranslateContext);

  const translateTitle = (path: any) => {
    switch (path) {
      case "/details":
        return lang === "en" ? "Welcome" : "Bienvenido";
      case "/details/ceremony":
        return lang === "en" ? "Ceremony" : "Ceremonia";
      case "/details/story":
        return lang === "en" ? "Our Story" : "Nuestra Historia";
      case "/details/reception":
        return lang === "en" ? "Reception" : "Recepción";
      case "/details/wetweather":
        return lang === "en" ? "Wet Weather" : "Clima Lluvioso";
      default:
        return "";
    }
  };

  return (
    <div className="md:px-36 py-0 text-white text-center">
      <h1 className="text-[64px] sm:text-[70px]">{translateTitle(path)}</h1>
      {children}
    </div>
  );
};

export default Layout;
