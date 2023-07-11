"use client";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="lg:px-24 md:px-12 sm:px-8 min-h- last:screen">
      {children}
    </div>
  );
};

export default Layout;
