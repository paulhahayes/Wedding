"use client";
import Link from "next/link";
import useTranslate from "@/hooks/useTranslate";

import UpdateCard from "@/components/UpdateCard";
import { updates } from "./updates.js";

const Details = () => {
  const { lang } = useTranslate();

  return (
    <div className=" flex flex-col items-center justify-start ">
      <div className="w-[75%] text-white 3xl:pt-36 2xl:py-8">
        <div className="grid lg:grid-flow-col md:grid-cols-2 gap-12 min-[320px]:justify-center">
          <Link
            href="/details/story"
            className="relative bg-cover shadow-lg hover:opacity-70 rounded p-4 w-72 h-96 border-4 border-white"
            style={{ backgroundImage: 'url("/us.jpg")' }}
          >
            <span className="absolute right-2 bottom-2 text-4xl font-bold">
              {lang === "en" ? "Our Story" : "Historia"}
            </span>
          </Link>
          <Link
            href="/details/ceremony"
            className="relative bg-cover shadow-lg hover:opacity-70 rounded p-4 w-72 h-96 border-4 border-white"
            style={{ backgroundImage: 'url("/wedding.png")' }}
          >
            <span className="absolute right-2 bottom-2 text-4xl font-bold">
              {lang === "en" ? "Ceremony" : "Ceremonia"}
            </span>
          </Link>
          <Link
            href="/details/reception"
            className="relative bg-cover shadow-lg hover:opacity-70 rounded p-4 w-72 h-96 border-4 border-white"
            style={{ backgroundImage: 'url("/ripples.png")' }}
          >
            <span className="absolute right-2 bottom-2 text-4xl font-bold">
              {lang === "en" ? "Reception" : "Recepción"}
            </span>
          </Link>
        </div>
      </div>

      <div className="w-[80%] p-4">
        <div className="sm:text-[50px] border-b-2">
          {lang === "en" ? "Updates" : "Actualizaciones"}
        </div>
        <div className="w-full mt-4 ">
          {updates.length === 0 ? (
            <UpdateCard
              id="0"
              key="0"
              title={lang === "en" ? "No Updates." : "Sin actualizaciones."}
              desc={
                lang === "en"
                  ? "Any major updates will be posted here."
                  : "Cualquier actualización importante se publicará aquí."
              }
              date="1:10pm - 04.08.23"
            />
          ) : (
            updates
              .map((update) => (
                <UpdateCard
                  id={update.id.toString()}
                  key={update.id}
                  title={lang === "en" ? update.title : "Título en español"}
                  desc={lang === "en" ? update.desc : "Descripción en español"}
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
