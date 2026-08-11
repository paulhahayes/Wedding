"use client";
import Timeline from "@/components/Timeline";
import React from "react";
import Map from "@/hooks/useMap";

const Ceremony = () => {
  return (
    <div className="pb-24">
      <div className="md:mx-[-7rem]">
        <Timeline />
      </div>
      <Map />
    </div>
  );
};

export default Ceremony;
