"use client";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="md:px-36 md:py-36 text-white text-center">
      <h1 className="text-[70px]">Registry</h1>
      <p className="text-lg font-semibold">Here are some gift ideas</p>
      {children}
    </div>
  );
};

export default Layout;
