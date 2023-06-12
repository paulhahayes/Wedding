"use client";
import Logo from "./Logo";
import Contact from "./Contact";
import Rsvp from "./Rsvp";
import Gallery from "./Gallery";
import Gifts from "./Gifts";
import Details from "./Details";
import UserMenu from "./UserMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full md:relative top-0 right-0 py-4 gap-4 min-[320px]:absolute z-10 min-[320px]:z-20">
      <div className="justify-between text-white px-4 mx-auto lg:max-w-7x1 items-center flex">
        <div className=" items-center md:justify-around flex w-full min-[320px]:justify-between">
          <UserMenu onClick={() => setIsOpen((prev) => !prev)} />
          <Details onClick={() => router.push(`/details`)} />
          <Rsvp onClick={() => {}} />
          <Logo onClick={() => router.push(`/`)} />
          <Contact onClick={() => router.push(`/contact`)} />
          <Gallery onClick={() => router.push(`/gallery`)} />
          <Gifts onClick={() => router.push(`/gallery`)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
{
  /* <div className="flex  text-white items-center justify-between md:gap-0 "> */
}
