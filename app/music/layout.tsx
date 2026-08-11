"use client";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="md:px-36  py-0 text-center">
      <h1 className="sm:text-[70px] text-[64px] text-white">In development</h1>
      {children}
    </div>
  );
};

export default Layout;
