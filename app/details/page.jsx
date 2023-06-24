"use client";
import Link from "next/link";
import Image from "next/image";
import useTranslate from "@/hooks/useTranslate";

const Details = () => {
  const { lang } = useTranslate();

  return (
    <div className="w-full flex justify-center pr-4 text-white 3xl:pt-36 2xl:py-8">
      <div className="grid lg:grid-flow-col md:grid-cols-2 gap-12">
        <Link
          href="/details/story"
          className="relative bg-cover shadow-lg hover:opacity-70 rounded p-4 w-72 h-96 border-4 border-white"
          style={{ backgroundImage: 'url("/us.png")' }}
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            {lang === "en" ? "Our Story" : "Historia"}
          </span>
        </Link>
        <Link
          href="/details/event"
          className="relative bg-cover shadow-lg hover:opacity-70 rounded p-4 w-72 h-96 border-4 border-white"
          style={{ backgroundImage: 'url("/wedding.png")' }}
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            {lang === "en" ? "Ceremony" : "Ceremonia"}
          </span>
        </Link>
        <Link
          href="/details/venue"
          className="relative bg-cover shadow-lg hover:opacity-70 rounded p-4 w-72 h-96 border-4 border-white"
          style={{ backgroundImage: 'url("/ripples.png")' }}
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            {lang === "en" ? "Reception" : "Recepción"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Details;
