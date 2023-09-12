"use client";
import useTranslate from "@/hooks/useTranslate";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { lang } = useTranslate();
  return (
    <div className="md:px-36 text-white text-center">
      <h1 className="sm:text-[70px] text-[64px]">
        {lang === "en" ? "Registry" : "Registro"}
      </h1>
      {children}
    </div>
  );
};

export default Layout;
