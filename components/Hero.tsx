"use client";
import Landing from "../components/Landing";
import Image from "next/image";
import styles from "./hero.module.css";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const { y } = useWindowScroll();
  return (
    <div className="flex items-center gap-8 padding-8  relative top-[900px] pl-4 z-5">
      {/* <motion.div
        variants={heroVariants}
        initial="hidden"
        animate={y > 550 ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className=""
      > */}
      <div className={styles.item}>
        <h1 className={styles.title}>We're getting married!</h1>
        <p className={styles.desc}>Come join us for the celebration.</p>
        <Button url="/details" text="See the details" />
      </div>
      <div className={styles.item}>
        {/* <Image src={Hero} alt="" className={styles.img} /> */}
      </div>
      {/* </motion.div> */}
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
