"use client";
import React from "react";

import { items } from "./data.js";
import { notFound } from "next/navigation";
import GlassCard from "@/components/GlassCard";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

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

export default Category;
