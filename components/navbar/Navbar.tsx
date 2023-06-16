"use client";
import Logo from "./Logo";
import Contact from "./Contact";
import Rsvp from "./Rsvp";
import Gallery from "./Gallery";
import Gifts from "./Gifts";
import Details from "./Details";
import UserMenu from "../sidebar/UserMenu";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full fixed top-0 right-0 py-4 gap-4 z-10 min-[320px]:z-20 border-b border-white ">
      <div className="justify-between text-white px-4 mx-40 lg:max-w-7x1 items-center flex">
        <div className=" items-center md:justify-around flex w-full min-[320px]:justify-between">
          <Details onClick={() => router.push(`/details`)} />
          <Contact onClick={() => router.push(`/contact`)} />
          <Logo onClick={() => router.push(`/`)} />
          <Gallery onClick={() => router.push(`/gallery`)} />
          <Rsvp onClick={() => {}} />

          {/* <Gifts onClick={() => router.push(`/gallery`)} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
{
  /* <div className="flex  text-white items-center justify-between md:gap-0 "> */
}
