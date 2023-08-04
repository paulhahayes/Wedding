import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { TranslateProvider } from "@/context/TranslateContext";
import Sidebar from "@/components/sidebar/Sidebar";
import RSVPModal from "@/components/modal/RSVPModal";

const font = Raleway({ subsets: ["latin"] });
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
      <body className={`${font.className}`}>
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
