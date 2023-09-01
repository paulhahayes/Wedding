"use client";
import Logo from "./Logo";
import Contact from "./Contact";
import Rsvp from "./Rsvp";
import Gallery from "./Gallery";
import Details from "./Details";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full relative top-0 right-0 py-4 z-10 min-[320px]:z-20">
      <div className=" text-white px-4 md:mx-40 sm:mx-20 [320px]:mx-none lg:max-w-7x1 items-center flex md:border-b pb-4 border-white sm:border-0 ">
        <div className=" items-center justify-center flex w-full md:gap-24">
          <Details onClick={() => router.push(`/details`)} />
          <Gallery onClick={() => router.push(`/gallery`)} />
          <Logo onClick={() => router.push(`/`)} />
          <Contact onClick={() => router.push(`/contact`)} />
          <Rsvp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
