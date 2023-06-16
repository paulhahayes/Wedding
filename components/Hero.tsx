"use client";
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { TranslateContext } from "@/context/TranslateContext";

const Hero = () => {
  const [fontSize, setFontSize] = useState("72px");
  const { lang } = useContext(TranslateContext);

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
    <div className="w-full flex flex-col justify-center items-center top-[25%] z-10 text-white fixed">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
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
      <p
        className="text-space"
        style={{
          fontFamily: "'Dancing Script', cursive",
          letterSpacing: "2px",
        }}
      >
        18 . 11 . 23
      </p>
      <p></p>
    </div>
  );
};

export default Hero;

// .container {
//     display: flex;
//     align-items: center;
//     gap: 100px;
//     padding: 250px 0;
//     color: white;
//     position: relative;
//     z-index: 5;
//     padding-left: 175px;
//     top: 900px;
//   }
