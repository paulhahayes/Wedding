"use client";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

enum options {
  "/details" = "Welcome",
  "/details/ceremony" = "Event",
  "/details/story" = "Our Story",
  "/details/reception" = "Venue",
  "/details/wetweather" = "Wet Weather",
}

const Layout: React.FC<Props> = ({ children }) => {
  const path = usePathname();

  return (
    <div className="md:px-36 py-0 text-white text-center">
      <h1 className="text-[70px] ">{options[path as keyof typeof options]}</h1>
      {children}
    </div>
  );
};

export default Layout;
