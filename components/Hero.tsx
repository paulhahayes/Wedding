"use client";
import { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { TranslateContext } from "@/context/TranslateContext";
import { useRouter } from "next/navigation";
import { Button } from "@material-tailwind/react";
import GlassCardHero from "./GlassCardHero";
import useRSVP from "@/hooks/useRSVP";

const Hero = () => {
  const rsvpModal = useRSVP();
  const { lang } = useContext(TranslateContext);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className="w-68 md:w-[60%] flex flex-col justify-center items-center z-10 text-white absolute"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={childVariants}
        className="text-lime md:text-[32px] text-2xl font-bold text-center border-b w-full sm:pb-4 "
      >
        {lang === "en"
          ? "Celebrating the marriage of"
          : "Celebrando el matrimonio de"}
      </motion.p>

      <motion.h1
        className="text-[48px] md:text-[88px]"
        variants={childVariants}
      >
        Paul & Ximena
      </motion.h1>

      <motion.div
        variants={childVariants}
        className="backdrop-blur-3xl flex flex-col rounded bg-white/10 border-white border items-center shadow-md"
      >
        <div className="flex  flex-row items-center justify-center  sm:gap-8 gap-2 pt-4 md:text-[30px]">
          <div className="w-32 sm:w-36 text-end">18 . 11 . 23</div>
          <div className="border-r border-white sm:h-[20vh] h-[8vh]"></div>
          <div className="w-32 sm:w-36 text-lime">
            Mosman,
            <br />
            Sydney
          </div>
        </div>

        <motion.p
          variants={childVariants}
          className="text-center  md:text-[32px] w-64 mt-4 sm:mt-2 text-md pt-4 pb-3"
        >
          {lang === "en" ? "Attire: Formal" : "Vestimenta: Formal"}
        </motion.p>
      </motion.div>

      <motion.div className="border mt-12 w-full" variants={childVariants}>
        <GlassCardHero
          title={lang === "en" ? "Ceremony" : "Ceremonia"}
          time="3:30 pm"
          desc="Georges Head Lookout"
          address="https://goo.gl/maps/KnRn8v5KF2K6QsGS8"
        />
      </motion.div>

      <motion.div className="border mt-12 w-full" variants={childVariants}>
        <GlassCardHero
          title={lang === "en" ? "Reception" : "Recepción"}
          time="6:30 pm - 11:30 pm"
          desc="Ripples, Chowder Bay"
          address="https://goo.gl/maps/gtyFRDZ1DN4huU2w6"
        />
      </motion.div>

      <motion.p
        variants={childVariants}
        className="text-center mt-8  w-72 sm:text-[18px] text-md pb-2"
      >
        <span>{lang === "en" ? "Please " : "Por favor "}</span>

        <span
          onClick={rsvpModal.onOpen}
          className="underline hover:cursor-pointer"
        >
          {lang === "en" ? "RSVP" : "confirme su asistencia"}
        </span>

        <span>
          {lang === "en"
            ? " by the 10th of October"
            : " antes del 10 de Octubre"}
        </span>
      </motion.p>
      <motion.p
        variants={childVariants}
        className="text-center  w-64 sm:text-[18px] text-md pt-2 border-t"
      >
        {lang === "en"
          ? "More Information available here"
          : "Más información disponible aquí"}
      </motion.p>

      <motion.div
        className="flex flex-row w-screen sm:w-full justify-around gap-2 p-4 "
        variants={childVariants}
      >
        <Button
          className="backdrop-blur-3xl bg-slate-700/60 hover:bg-neutral-100/20 w-[45%] py-2 px-4 mt-2 text-white border border-white"
          onClick={() => router.push(`/details`)}
        >
          {lang === "en" ? "See more details" : "Ver más detalles"}{" "}
        </Button>
        <Button
          className="backdrop-blur-3xl bg-slate-700/60 hover:bg-neutral-100/20 py-2 px-4 w-[45%] text-white mt-2 border border-white"
          onClick={() => router.push(`/details/wetweather`)}
        >
          {lang === "en" ? "Wet weather plans" : "Plan de lluvia"}{" "}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
