"use client";
import styles from "./page.module.css";
import Link from "next/link";

import useTranslate from "@/hooks/useTranslate";

const details = () => {
  const { lang } = useTranslate();
  return (
    <div className="w-full flex justify-center pr-4 text-white 3xl:pt-36 2xl:py-8">
      <div className={styles.items}>
        <Link href="/details/story" className={styles.item}>
          <span className={styles.title}>
            {lang === "en" ? "Our Story" : "Historia"}
          </span>
        </Link>
        <Link href="/details/event" className={styles.item}>
          <span className={styles.title}>
            {lang === "en" ? "Ceremony" : "Ceremonia"}
          </span>
        </Link>
        <Link href="/details/venue" className={styles.item}>
          <span className={styles.title}>
            {lang === "en" ? "Reception" : "Recepción"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default details;
