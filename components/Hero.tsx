"use client";
import { useEffect, useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { TranslateContext } from "@/context/TranslateContext";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { Kavivanar } from "next/font/google";
import { Molle } from "next/font/google";
import { HiClock } from "react-icons/hi";

const font = Molle({ weight: "400", subsets: ["latin"] });
const Hero = () => {
  const [fontSize, setFontSize] = useState("90px");
  const [secondaryFontSize, setSecondaryFontSize] = useState("24px");
  const { lang } = useContext(TranslateContext);
  const ref = useRef<HTMLDivElement>(null);

  const mainTextStyle = {
    fontSize: fontSize,
    background: "linear-gradient(to bottom, white, white)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: font.style.fontFamily,
    letterSpacing: fontSize === "72px" ? "5px" : "2px",
  };

  const secondaryTextStyle = {
    letterSpacing: "2px",
    fontSize: secondaryFontSize,
  };

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth <= 640) {
        // For mobile devices
        setFontSize("36px");
        setSecondaryFontSize("14px");
      } else if (window.innerWidth <= 1024) {
        // For tablet devices
        setFontSize("48px");
        setSecondaryFontSize("18px");
      } else {
        setFontSize("72px"); // For desktop
      }
    };

    window.addEventListener("resize", updateFontSize);
    updateFontSize();
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay child animations
        staggerChildren: 0.3, // Increase stagger time
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Increase duration for smoother animation
        ease: "easeInOut", // Use easeInOut for smoother start and end
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col justify-center items-center top-[25%] z-10 text-white fixed"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap"
          rel="stylesheet"
        />
      </Head>

      <motion.p
        style={secondaryTextStyle}
        variants={childVariants}
        className="font-semibold"
      >
        {/* calander icon */}
        18 . 11 . 23
      </motion.p>

      <motion.p variants={childVariants} style={secondaryTextStyle}>
        {lang === "en"
          ? "CELEBRATING THE MARRIAGE OF"
          : "CELEBRANDO EL MATRIMONIO DE"}
      </motion.p>

      <motion.h1 variants={childVariants} style={mainTextStyle}>
        Paul & Ximena
      </motion.h1>

      <motion.p
        variants={childVariants}
        style={secondaryTextStyle}
        className="w-[45%] text-center "
      >
        <FaMapMarkerAlt className="inline-block" /> Georges Height Lookout,
        Ripples Chowder Bay
      </motion.p>
      <motion.p
        variants={childVariants}
        style={secondaryTextStyle}
        className="text-lg flex flex-row items-center gap-2"
      >
        <HiClock className="pt-1" />3 PM - 10 PM
      </motion.p>
      <motion.button
        variants={childVariants}
        className="relative
        mt-3
        rounded-lg
        hover:opacity-10
        transition
        bg-blue-300
        px-4
        border-2
        text-lg
        font-semibold
        py-2"
      >
        Enter
      </motion.button>
    </motion.div>
  );
};

export default Hero;
