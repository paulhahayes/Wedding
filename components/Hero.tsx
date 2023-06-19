"use client";
import { useEffect, useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { TranslateContext } from "@/context/TranslateContext";

const Hero = () => {
  const [fontSize, setFontSize] = useState("72px");
  const { lang } = useContext(TranslateContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth <= 640) {
        // For mobile devices
        setFontSize("36px");
      } else if (window.innerWidth <= 1024) {
        // For tablet devices
        setFontSize("48px");
      } else {
        setFontSize("72px"); // For desktop
      }
    };

    window.addEventListener("resize", updateFontSize);
    updateFontSize();
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col justify-center items-center top-[25%] z-10 text-white fixed"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>

      <motion.p
        className="font-semibold"
        style={{
          fontFamily: "'Dancing Script', cursive",
          letterSpacing: "2px",
        }}
      >
        18 . 11 . 23
      </motion.p>

      <p>
        {lang === "en"
          ? "CELEBRATING THE MARRIAGE OF"
          : "CELEBRANDO EL MATRIMONIO DE"}
      </p>

      <motion.h1
        style={{
          fontSize: fontSize,
          background: "linear-gradient(to bottom, white, white)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        PAUL & XIMENA
      </motion.h1>

      <p className="text-lg font-semibold w-[35%] text-r text-center">
        Ripples Chowder Bay / Mosman lookout
      </p>
      <p className="text-lg">3 PM - 10 PM</p>
      <button
        className="relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        bg-blue-300
        px-4
        text-md
        py-2"
      >
        Enter
      </button>
    </motion.div>
  );
};

export default Hero;
