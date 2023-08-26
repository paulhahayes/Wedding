"use client";
import Landing from "../components/Landing";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <Hero />
      </div>
      <Landing />
    </div>
  );
}
