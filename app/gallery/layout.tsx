"use client";
import useTranslate from "@/hooks/useTranslate";
import Thankyou from "./Thankyou";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { lang } = useTranslate();
  return (
    <>
      <Thankyou />

      <div className="md:px-36  py-0 text-center">
        <h1 className="text-[64px] sm:text-[70px] text-white">
          {lang === "en" ? "Gallery" : "Galería"}
        </h1>
        {children}
      </div>
    </>
  );
};

export default Layout;
