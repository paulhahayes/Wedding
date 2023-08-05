"use client";
import Link from "next/link";
import useTranslate from "@/hooks/useTranslate";
import { CldImage } from "next-cloudinary";

import UpdateCard from "@/components/UpdateCard";
import { updates } from "./data.js";

const Details = () => {
  const { lang } = useTranslate();

  return (
    <div className=" flex flex-col items-center justify-start ">
      <div className="w-[75%] text-white 3xl:pt-36 2xl:py-8">
        <div className="grid lg:grid-flow-col md:grid-cols-2 gap-12 min-[320px]:justify-center">
          <Link
            href="/details/story"
            className="relative  shadow-lg hover:opacity-70 rounded p-4 w-72 h-96 border-4 border-white"
          >
            <CldImage src="us" alt="Us" fill />
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

      <div className=" w-[80%] p-4">
        <div className="sm:text-[50px] border-b-2 ">Updates</div>
        <div className="w-full mt-4 ">
          {updates.length == 0 ? (
            <UpdateCard
              key="0"
              title="No Updates."
              desc="Any major updates will be posted here."
              date="1:10pm - 04.08.23"
            />
          ) : (
            updates
              .map((update) => (
                <UpdateCard
                  key={update.id}
                  title={update.title}
                  desc={update.desc}
                  date={update.date}
                />
              ))
              .reverse()
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
