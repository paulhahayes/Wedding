import React from "react";
import GlassCard from "@/components/GlassCard";

const data = [
  {
    id: 1,
    title: "Creative Portfolio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "ripples-day",
  },
  {
    id: 2,
    title: "Minimal Single Product",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "food",
  },
  {
    id: 3,
    title: "Strong Together Charity",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "ripples-night",
  },
];

const Reception = () => {
  return (
    <div className="pb-12">
      <div className="grid lg:grid-flow-col md:grid-cols-2 gap-12 min-[320px]:justify-center w-full"></div>
    </div>
  );
};

export default Reception;
