"use client";
import Landing from "../components/Landing";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
export default function Home() {
  // const { ref, inView, entry } = useInView();

  return (
    <div>
      <Hero />
      <Landing />
    </div>
  );
}
