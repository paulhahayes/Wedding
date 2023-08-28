"use client";
import Landing from "../components/Landing";
import Hero from "@/components/Hero";
import { BsChevronDoubleDown } from "react-icons/bs";
export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <Hero />
        <div className="w-12 h-12 rounded-full bg-black top-[92%] z-40 fixed flex justify-center item">
          <BsChevronDoubleDown className="text-white" />
        </div>
      </div>
      <Landing />
    </div>
  );
}
