"use client";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

enum options {
  "/details" = "Welcome",
  "/details/event" = "Event",
  "/details/story" = "Our Story",
  "/details/venue" = "Venue",
}

const Layout: React.FC<Props> = ({ children }) => {
  const path = usePathname();

  return (
    <section className="md:px-36 md:py-36 text-white text-center sm:py-28">
      <h1 className="text-[70px]">{options[path as keyof typeof options]}</h1>
      {children}
    </section>
  );
};

export default Layout;
