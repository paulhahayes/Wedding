import "./globals.css";

import { TranslateProvider } from "@/context/TranslateContext";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import RSVPModal from "@/components/modal/RSVPModal";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/fonts/Bon Vivant Serif Bold.otf",
});

export const metadata = {
  title: "P & X",
  description: "P & X's wedding website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={myFont.style}>
        <TranslateProvider>
          <Sidebar />
          <Navbar />
          <RSVPModal />
          <div className="">{children}</div>
        </TranslateProvider>
      </body>
    </html>
  );
}
