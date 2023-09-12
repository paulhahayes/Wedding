"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import useTranslate from "@/hooks/useTranslate";
const Reception = () => {
  const { lang } = useTranslate();
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-none pb-12
   
    "
    >
      <div className="border rounded-2xl shadow-lg sm:w-[50%] w-full h-72 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 mb-4">
        <div className=" px-4 pb-2 font-semibold sm:text-[32px] text-[28px] sm:text-center  text-lime border-b-2">
          {lang === "en" ? "Reception details" : "Detalles de la recepción"}
        </div>

        <ul className="p-4 sm:text-[22px] text-[20px] tracking-wide text-start">
          <li>
            <AiFillClockCircle className="inline-block" /> 6:30pm - 11:30pm
          </li>
          <li
            className="py-4 hover:cursor-pointer "
            onClick={() =>
              window.open("https://goo.gl/maps/gtyFRDZ1DN4huU2w6", "_blank")
            }
          >
            <IoLocationSharp className="inline-block" /> Ripples Chowder Bay
          </li>
          <li className="">
            {lang === "en"
              ? "Paid parking available along the road to Ripples."
              : "Estacionamiento de pago disponible a lo largo de la carretera a Ripples."}
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center sm:flex-row w-full gap-3  ">
        <div className="sm:w-[33%] w-full relative">
          <CldImage
            alt="ripples bay"
            className="transform rounded-lg brightness-90 transition will-change-auto border shadow-md group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            width={640}
            crop="fill"
            height={480}
            src="c9e5443a-347f-43d6-b042-085fc101c2e5_tfxzwc"
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </div>
        <div className="sm:w-[33%] w-full relative">
          <CldImage
            alt="food"
            className="transform rounded-lg brightness-90 transition will-change-auto border group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            width={640}
            crop="fill"
            height={480}
            src="food"
            sizes="(max-width: 640px) 100vw,
                            (max-width: 1280px) 50vw,
                            (max-width: 1536px) 33vw,
                            25vw"
          />
        </div>
        <div className="sm:w-[33%] w-full relative">
          <CldImage
            alt="ripples-night"
            className="transform rounded-lg brightness-90 transition will-change-auto border group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            width={640}
            crop="fill"
            height={480}
            src="ripples-night"
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Reception;
