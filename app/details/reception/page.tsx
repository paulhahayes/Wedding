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
      {data.map((item) => (
        <div
          className="flex gap-[50px] mt-6 mb-6 min-[320px]:justify-center "
          key={item.id}
        >
          <GlassCard
            title={item.title}
            desc={item.desc}
            image={item.image}
            reverse={item.id % 2 === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Reception;
