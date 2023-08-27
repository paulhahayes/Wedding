import React from "react";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
import banner from "@/public/resize-bannerpng.png";
const data = [
  {
    id: 1,
    title: "Love at first pint",
    desc: "Welcome to our love story! It all began on a delightful Saturday night at Sidebar in Central. Paul challenged Xime to a game of pool and we hit it off straight away! At the time, the netflix show Narcos was at the height of its popularity which was cause for a few bad jokes. Xime took it in her stride and agreed to go on a date the following day, at the romanic setting of a park cricket game.",
    image: "sidebar",
  },
  {
    id: 2,
    title: "",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "cricket",
  },
  {
    id: 3,
    title: "Strong Together Charity",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "fill1",
  },
];

const page = () => {
  return (
    <div className="pb-12 flex justify-center">
      {/* Banner */}
      <div className="w-[75%] h-[450px]  ">
        <Image
          className="object-contain border-2 shadow-xl"
          sizes="100vw"
          src={banner}
          alt="us"
        />
      </div>

      {/* Cards */}
      {data.map((item) => (
        <div
          className={`flex gap-[50px] mt-6 mb-6 min-[320px]:justify-center ${
            item.id % 2 === 0 ? "lflex-row-reverse" : "flex-row"
          }`}
          key={item.id}
        ></div>
      ))}
    </div>
  );
};

export default page;
