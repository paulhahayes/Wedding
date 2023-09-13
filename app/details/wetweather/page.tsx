"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import useTranslate from "@/hooks/useTranslate";
const Page = () => {
  const { lang } = useTranslate();
  return (
    <div
      className="w-full sm:h-[450px] lg:h-[550px] h-full flex flex-col gap-8 sm:flex-row   p-2
   border-white border rounded-2xl shadow-lg  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"
    >
      {/* Text and desc */}
      <div className="flex-1 flex-col bg-clip-padding sm:w-[50%] w-full">
        <div className=" px-4 pb-2 font-semibold sm:text-[36px] text-[32px] sm:text-start  text-lime border-b-2">
          {lang == "en" ? "Wet Weather Plan" : "Plan de lluvia"}
        </div>
        <div className="p-4 sm:text-[22px] text-[20px] tracking-wide text-start">
          {lang == "en"
            ? "In the event of poor weather on the day. The backup venue for the Ceremony will be held at The Barn Mosman at 3:30pm. The reception will still be at Ripples."
            : "En caso de mal tiempo durante el día. El lugar de respaldo para la Ceremonia se llevará a cabo en The Barn Mosman a las 3:30 p.m. La recepción seguirá siendo en Ripples."}
          <br />
          <br />
          {lang == "en"
            ? "We will send out an email and post an update the website if this occurs."
            : "Enviaremos un correo electrónico y publicaremos una actualización del sitio web si esto ocurre."}
          <br />
          <br />
          <span
            className="hover:cursor-pointer"
            onClick={() =>
              window.open("https://goo.gl/maps/kP39tXT3E5ke9mnt9", "_blank")
            }
          >
            <IoLocationSharp className="inline-block" /> 3C Avenue Rd, Mosman
            NSW 2088
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative sm:w-[50%] w-full sm:h-auto ">
        <CldImage
          src="barn_a4kokp"
          alt="The barn Mosman"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="rounded-2xl border-2 border-white shadow-lg h-full"
        />
      </div>
    </div>
  );
};

export default Page;
